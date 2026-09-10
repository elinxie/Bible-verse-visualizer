/* Scripture text loading.
   Primary:  bolls.life ESV API  → GET https://bolls.life/get-text/ESV/{book}/{chapter}/
             returns [{ verse:Number, text:String }, ...]
   Fallback 1: locally bundled snapshot in data/embedded/{book}-{chapter}.json
             (created at deploy time for demo chapters; same shape as bolls)
   Fallback 2: bible-api.com (public-domain WEB translation), so the site
             still works if the ESV source is ever unreachable. */
window.BVV = window.BVV || {};

BVV._timedFetch = function (url, ms) {
  const ctl = new AbortController();
  setTimeout(() => ctl.abort(), ms || 8000);
  return fetch(url, { mode: "cors", signal: ctl.signal });
};

BVV.fetchChapter = async function (book, chapter) {
  // 1) live ESV
  try {
    const res = await BVV._timedFetch(`https://bolls.life/get-text/ESV/${book.n}/${chapter}/`, 8000);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length) {
        return { verses: BVV._normVerses(data), source: "ESV", note: "" };
      }
    }
  } catch (e) { /* fall through */ }

  // 2) bundled snapshot (ESV, captured at deploy time)
  try {
    const res = await fetch(`data/embedded/${book.n}-${chapter}.json`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length) {
        return { verses: BVV._normVerses(data), source: "ESV", note: "offline copy" };
      }
    }
  } catch (e) { /* fall through */ }

  // 3) WEB fallback
  try {
    const ref = encodeURIComponent(`${book.name} ${chapter}`);
    const res = await BVV._timedFetch(`https://bible-api.com/${ref}?translation=web`, 8000);
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.verses) && data.verses.length) {
        return {
          verses: data.verses.map(v => ({ verse: v.verse, text: String(v.text).trim() })),
          source: "WEB",
          note: "ESV source unreachable — showing World English Bible"
        };
      }
    }
  } catch (e) { /* fall through */ }

  throw new Error("Could not load the passage text from any source. Check your internet connection and try again.");
};

BVV._normVerses = function (arr) {
  return arr.map(v => ({
    verse: v.verse,
    // bolls text can contain light HTML (<br>, <i>, footnote sups) — strip tags.
    text: String(v.text).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
  })).filter(v => v.text);
};
