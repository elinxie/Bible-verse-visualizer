#!/usr/bin/env node
/* Deterministic offline smoke test for the Bible Passage Visualizer.
 *
 * Usage:
 *   npm i playwright        # once, anywhere; or use a preinstalled browser via
 *                           # PLAYWRIGHT_BROWSERS_PATH / CHROMIUM_PATH
 *   node tests/smoke.js
 *
 * What it does: serves the repo root on a local port, copies the offline
 * fixtures from tests/fixtures/ into data/embedded/ (the app's snapshot
 * fallback path) so no network is needed, then drives the app and asserts
 * the curated pipeline (1 Sam 28), the automatic pipeline (1 Sam 17),
 * verse-range handling and absence of console errors.
 * Fixtures are paraphrase stand-ins for testing only — not scripture text.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8123;

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml" };

function serve() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split("?")[0]);
      if (p.endsWith("/")) p += "index.html";
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404); res.end("not found"); return;
      }
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(PORT, () => resolve(srv));
  });
}

function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const roots = [process.env.PLAYWRIGHT_BROWSERS_PATH, "/opt/pw-browsers"].filter(Boolean);
  for (const r of roots) {
    try {
      for (const d of fs.readdirSync(r)) {
        if (/^chromium-\d+$/.test(d)) {
          const p = path.join(r, d, "chrome-linux", "chrome");
          if (fs.existsSync(p)) return p;
        }
      }
    } catch (e) { /* ignore */ }
  }
  return undefined; // let playwright resolve its own download
}

let failures = 0;
function check(name, cond, extra) {
  if (cond) { console.log("  ✓ " + name); }
  else { failures++; console.error("  ✗ " + name + (extra !== undefined ? "  [" + JSON.stringify(extra) + "]" : "")); }
}

(async () => {
  // fixtures → data/embedded (gitignored; the app's offline fallback path)
  const embedDir = path.join(ROOT, "data", "embedded");
  fs.mkdirSync(embedDir, { recursive: true });
  for (const f of fs.readdirSync(path.join(__dirname, "fixtures")))
    fs.copyFileSync(path.join(__dirname, "fixtures", f), path.join(embedDir, f));

  const server = await serve();
  const { chromium } = require("playwright");
  const browser = await chromium.launch({ executablePath: findChromium() });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1600 } });
  const errors = [];
  page.on("pageerror", e => errors.push("PAGEERROR: " + e.message));
  page.on("console", m => {
    // network failures are expected offline (bolls.life, tiles); JS errors are not
    if (m.type() === "error" && !/net::|Failed to load resource|ERR_/.test(m.text())) errors.push(m.text());
  });

  console.log("== curated pipeline: 1 Samuel 28 ==");
  await page.goto(`http://localhost:${PORT}/#/1%20Samuel%2028`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.querySelectorAll(".verse").length > 0, null, { timeout: 30000 });
  await page.waitForTimeout(800);
  let s = await page.evaluate(() => ({
    era: document.getElementById("era-title").textContent,
    verses: document.querySelectorAll(".verse").length,
    markers: document.querySelectorAll(".map-marker").length,
    legs: document.querySelectorAll(".journey-leg").length,
    hotspots: document.querySelectorAll(".svg-hotspot").length,
    sceneSvg: !!document.querySelector("#scene-viewport svg"),
    sceneOptions: document.querySelectorAll("#scene-place-select option").length,
    placeCards: document.querySelectorAll("#tab-setting .info-card").length,
    peopleCards: document.querySelectorAll("#tab-people .person-card").length,
    cultureCards: document.querySelectorAll("#tab-culture .info-card").length,
    xrefs: document.querySelectorAll("#tab-crossrefs .xref").length,
    analyses: document.querySelectorAll("#tab-analyses li").length
  }));
  check("era banner is Saul-era", /1010 BC/.test(s.era), s.era);
  check("25 verses render", s.verses === 25, s.verses);
  check("map markers ≥ 8", s.markers >= 8, s.markers);
  check("journey legs = 3", s.legs === 3, s.legs);
  check("scene hotspots ≥ 5", s.hotspots >= 5, s.hotspots);
  check("panorama SVG rendered", s.sceneSvg);
  check("scene place selector populated", s.sceneOptions >= 8, s.sceneOptions);
  check("setting place cards ≥ 8", s.placeCards >= 8, s.placeCards);
  check("people cards ≥ 6", s.peopleCards >= 6, s.peopleCards);
  check("culture cards ≥ 6", s.cultureCards >= 6, s.cultureCards);
  check("cross-references ≥ 15", s.xrefs >= 15, s.xrefs);
  check("analyses items ≥ 8", s.analyses >= 8, s.analyses);

  // hotspot click opens card
  await page.evaluate(() => {
    document.querySelector(".svg-hotspot")
      .dispatchEvent(new MouseEvent("click", { bubbles: true, clientX: 700, clientY: 500 }));
  });
  await page.waitForTimeout(200);
  check("hotspot card opens", await page.evaluate(() =>
    !document.getElementById("scene-hotspot-card").classList.contains("hidden")));

  console.log("== curated pipeline: 1 Samuel 17 ==");
  await page.fill("#passage-input", "1 Sam 17");
  await page.click("#go-btn");
  await page.waitForFunction(() => document.getElementById("text-title").textContent.includes("17"), null, { timeout: 30000 });
  await page.waitForTimeout(600);
  s = await page.evaluate(() => ({
    curated: !!(window.BVV.CURATED && window.BVV.CURATED["9:17"]),
    people: Array.from(document.querySelectorAll("#tab-people .person-card h4")).map(e => e.textContent),
    options: Array.from(document.querySelectorAll("#scene-place-select option")).map(o => o.textContent),
    sceneSvg: !!document.querySelector("#scene-viewport svg"),
    legs: document.querySelectorAll(".journey-leg").length,
    analyses: document.querySelectorAll("#tab-analyses li").length
  }));
  check("1 Sam 17 is curated", s.curated);
  check("detects David & Goliath", s.people.some(p => /David/.test(p)) && s.people.some(p => /Goliath/.test(p)), s.people);
  check("detects Valley of Elah", s.options.some(o => /Elah/.test(o)), s.options);
  check("scene renders", s.sceneSvg);
  check("1 Sam 17: journey legs ≥ 2", s.legs >= 2, s.legs);
  check("1 Sam 17: analyses present (L depth)", s.analyses >= 5, s.analyses);

  console.log("== automatic pipeline: 1 Samuel 14 (no curated entry) ==");
  await page.fill("#passage-input", "1 Samuel 14");
  await page.click("#go-btn");
  await page.waitForFunction(() => document.getElementById("text-title").textContent.trim() === "1 Samuel 14", null, { timeout: 30000 });
  await page.waitForTimeout(600);
  s = await page.evaluate(() => ({
    curated: !!(window.BVV.CURATED && window.BVV.CURATED["9:14"]),
    people: Array.from(document.querySelectorAll("#tab-people .person-card h4")).map(e => e.textContent),
    options: Array.from(document.querySelectorAll("#scene-place-select option")).map(o => o.textContent),
    sceneSvg: !!document.querySelector("#scene-viewport svg")
  }));
  check("1 Sam 14 is NOT curated (auto pipeline)", !s.curated);
  check("auto-detects Jonathan & Saul", s.people.some(p => /Jonathan/.test(p)) && s.people.some(p => /Saul/.test(p)), s.people);
  check("auto-detects Michmash", s.options.some(o => /Michmash/.test(o)), s.options);
  check("auto scene renders", s.sceneSvg);

  // Generic sweep of curated chapters that have offline fixtures.
  // Add "<ref>|<curatedKey>" here as coverage grows.
  const CURATED_SWEEP = ["1 Samuel 31|9:31", "1 Samuel 3|9:3", "1 Samuel 15|9:15", "1 Samuel 16|9:16",
    "1 Samuel 4|9:4", "1 Samuel 5|9:5", "1 Samuel 6|9:6"];
  for (const entry of CURATED_SWEEP) {
    const [ref, key] = entry.split("|");
    console.log(`== curated pipeline: ${ref} ==`);
    await page.fill("#passage-input", ref);
    await page.click("#go-btn");
    await page.waitForFunction(t => document.getElementById("text-title").textContent.trim() === t, ref, { timeout: 30000 });
    await page.waitForTimeout(500);
    s = await page.evaluate(k => ({
      curated: !!(window.BVV.CURATED && window.BVV.CURATED[k]),
      markers: document.querySelectorAll(".map-marker").length,
      legs: document.querySelectorAll(".journey-leg").length,
      sceneSvg: !!document.querySelector("#scene-viewport svg"),
      culture: document.querySelectorAll("#tab-culture .info-card").length,
      xrefs: document.querySelectorAll("#tab-crossrefs .xref").length
    }), key);
    check(`${ref}: curated entry present`, s.curated);
    check(`${ref}: map markers ≥ 2`, s.markers >= 2, s.markers);
    check(`${ref}: journey legs ≥ 1`, s.legs >= 1, s.legs);
    check(`${ref}: scene renders`, s.sceneSvg);
    check(`${ref}: culture cards ≥ 3`, s.culture >= 3, s.culture);
    check(`${ref}: cross-refs ≥ 6`, s.xrefs >= 6, s.xrefs);
  }

  console.log("== verse ranges ==");
  await page.fill("#passage-input", "1 Samuel 28:11-19");
  await page.click("#go-btn");
  await page.waitForFunction(() => document.getElementById("text-title").textContent.includes(":11-19"), null, { timeout: 30000 });
  s = await page.evaluate(() => ({
    dim: document.querySelectorAll(".verse.dim").length,
    bright: document.querySelectorAll(".verse:not(.dim)").length
  }));
  check("9 in-range verses", s.bright === 9, s.bright);
  check("16 dimmed context verses", s.dim === 16, s.dim);

  console.log("== bad input ==");
  await page.fill("#passage-input", "Nonexistent 99");
  await page.click("#go-btn");
  await page.waitForTimeout(400);
  check("friendly error for unknown book", await page.evaluate(() =>
    document.getElementById("status-bar").textContent.includes("Couldn't understand")));

  check("no unexpected console/page errors", errors.length === 0, errors.slice(0, 4));

  await browser.close();
  server.close();
  console.log(failures ? `\nFAIL — ${failures} assertion(s) failed` : "\nPASS — all assertions green");
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error("Test harness crashed:", e); process.exit(2); });
