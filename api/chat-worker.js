// Cloudflare Worker example for the passage study chat.
// Required secret: GEMINI_API_KEY
// Optional variable: GEMINI_MODEL (defaults to gemini-2.5-flash-lite)
// Optional variable: ENABLE_WEB_GROUNDING (set to "false" to disable Gemini Google Search grounding)
export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return cors(new Response(null, { status: 204 }));
    if (request.method !== "POST") return cors(json({ error: "Use POST." }, 405));
    if (!env.GEMINI_API_KEY) return cors(json({ error: "Chat API key is not configured." }, 500));

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return cors(json({ error: "Invalid JSON body." }, 400));
    }

    const question = String(body.question || "").trim();
    const context = body.context || {};
    if (!question) return cors(json({ error: "Question is required." }, 400));
    if (question.length > 800) return cors(json({ error: "Please ask a shorter question." }, 400));
    if (!Array.isArray(context.verses) || !context.verses.length) {
      return cors(json({ error: "Passage context is required." }, 400));
    }

    const scriptureContext = await gatherScriptureContext(context);
    const model = env.GEMINI_MODEL || "gemini-2.5-flash-lite";
    const prompt = buildPrompt(question, context, scriptureContext);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
    const requestBody = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, responseMimeType: "application/json" }
    };
    if (env.ENABLE_WEB_GROUNDING !== "false") {
      requestBody.tools = [{ google_search: {} }];
    }

    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    let data;
    try {
      data = await upstream.json();
    } catch (e) {
      return cors(json({ error: "Model provider returned an unreadable response." }, 502));
    }
    if (!upstream.ok) return cors(json({ error: "Model provider rejected the request." }, upstream.status));

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return cors(json({ error: "Model provider returned no answer." }, 502));
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      parsed = { answer: text, checked: false, sources: [] };
    }
    return cors(json({
      answer: String(parsed.answer || "I could not answer from this passage.").slice(0, 4000),
      checked: parsed.checked !== false,
      sources: normalizeSources(parsed.sources, data)
    }));
  }
};

async function gatherScriptureContext(context) {
  const crossRefs = Array.isArray(context.curated?.crossRefs) ? context.curated.crossRefs.slice(0, 8) : [];
  const relatedPassages = [];
  await Promise.all(crossRefs.map(async ref => {
    const text = await fetchBibleApiText(ref.ref || ref.reference || "");
    if (text) relatedPassages.push({ reference: ref.ref || ref.reference, note: ref.note || "", text });
  }));
  return {
    chapterVerses: Array.isArray(context.chapterVerses) ? context.chapterVerses : context.verses,
    relatedPassages
  };
}

async function fetchBibleApiText(reference) {
  if (!reference) return "";
  try {
    const res = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}?translation=web`, {
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) return "";
    const data = await res.json();
    return String(data.text || "").replace(/\s+/g, " ").trim().slice(0, 900);
  } catch (e) {
    return "";
  }
}

function buildPrompt(question, context, scriptureContext) {
  const selectedPassage = context.verses.map(v => `${v.verse}. ${v.text}`).join("\n");
  const chapterPassage = scriptureContext.chapterVerses.map(v => `${v.verse}. ${v.text}`).join("\n");
  const metadata = {
    reference: context.reference,
    source: context.source,
    places: context.places || [],
    people: context.people || [],
    objects: context.objects || [],
    curated: context.curated || null
  };
  return `You are a careful Bible study assistant for a public passage visualizer.
Answer the user's question from the best available context in this priority order:
1. The selected verses.
2. The rest of the current chapter/passage supplied below.
3. Supplied metadata and related Bible passages.
4. Trusted web context, if needed, from reputable sources such as BibleProject, Encyclopaedia Britannica, official museum/university pages, academic publishers, or major Bible translation/reference sites. Avoid forums, personal blogs, and unsourced claims.

Use the web only to clarify historical, geographical, linguistic, or cultural context that the biblical text and supplied data do not already answer. Clearly distinguish what the selected passage says from broader biblical context and from external historical context. Cite verse numbers when possible. Name trusted web sources briefly when external context affects the answer.
Before finalizing, check every factual claim against the context or trusted sources. Say when the available context does not answer something.
Return strict JSON only: {"answer":"...","checked":true,"sources":[{"title":"...","url":"..."}]}.

PASSAGE METADATA:
${JSON.stringify(metadata, null, 2)}

SELECTED VERSES:
${selectedPassage}

REST OF CURRENT CHAPTER/PASSAGE:
${chapterPassage}

RELATED BIBLE PASSAGES (WEB, gathered from existing cross-reference data):
${JSON.stringify(scriptureContext.relatedPassages, null, 2)}

USER QUESTION:
${question}`;
}

function normalizeSources(parsedSources, providerData) {
  const sources = Array.isArray(parsedSources) ? parsedSources : [];
  const chunks = providerData.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  for (const chunk of chunks) {
    const web = chunk.web;
    if (web?.uri && !sources.some(s => s.url === web.uri)) sources.push({ title: web.title || "Web source", url: web.uri });
  }
  return sources.filter(s => s && s.url).slice(0, 6).map(s => ({ title: String(s.title || s.url).slice(0, 120), url: String(s.url).slice(0, 500) }));
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
}

function cors(response) {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
