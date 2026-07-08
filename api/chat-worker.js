// Cloudflare Worker example for the passage study chat.
// Required secret: GEMINI_API_KEY
// Optional variable: GEMINI_MODEL (defaults to gemini-2.5-flash-lite)
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

    const model = env.GEMINI_MODEL || "gemini-2.5-flash-lite";
    const prompt = buildPrompt(question, context);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, responseMimeType: "application/json" }
      })
    });

    const data = await upstream.json();
    if (!upstream.ok) return cors(json({ error: "Model provider rejected the request." }, upstream.status));

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      parsed = { answer: text, checked: false };
    }
    return cors(json({ answer: String(parsed.answer || "I could not answer from this passage."), checked: parsed.checked !== false }));
  }
};

function buildPrompt(question, context) {
  const passage = context.verses.map(v => `${v.verse}. ${v.text}`).join("\n");
  const metadata = {
    reference: context.reference,
    source: context.source,
    places: context.places || [],
    people: context.people || [],
    objects: context.objects || [],
    curated: context.curated || null
  };
  return `You are a careful Bible study assistant for a public passage visualizer.
Answer the user's question using the supplied passage first. Cite verse numbers when possible.
If broader Bible or historical context is needed, clearly label it as broader context and only use it cautiously.
Before finalizing, check every factual claim against the passage and supplied metadata. Remove unsupported claims or say the passage does not say.
Return strict JSON only: {"answer":"...","checked":true}.

PASSAGE METADATA:
${JSON.stringify(metadata, null, 2)}

PASSAGE TEXT:
${passage}

USER QUESTION:
${question}`;
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
