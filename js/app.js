/* Main controller: parse reference → fetch text → detect places/people/
   objects → render verses, map, ancient scene, and study tabs. */
(function () {
  const $ = id => document.getElementById(id);
  let ctx = null;          // current passage context
  let sceneEscape = null;  // current hotspots for card display

  /* ---------- term detection ---------- */
  function detect(text, entries, testament) {
    const found = [];
    for (const e of entries) {
      if (e.t && e.t !== "both" && testament && e.t !== testament) continue;
      for (const alias of (e.al || [e.name])) {
        const re = new RegExp("(^|[^A-Za-z])(" + alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?=[^A-Za-z]|$)",
          alias[0] === alias[0].toLowerCase() ? "i" : "");
        if (re.test(text)) { found.push({ entry: e, alias }); break; }
      }
    }
    return found;
  }

  function highlight(verseText, terms) {
    let html = verseText.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    // longest aliases first so "Mount Gilboa" wins over "Gilboa"
    const items = [];
    terms.places.forEach(t => (t.entry.al || []).forEach(a => items.push({ a, cls: "term-place", id: t.entry.id })));
    terms.people.forEach(t => (t.entry.al || []).forEach(a => items.push({ a, cls: "term-person", id: t.entry.id })));
    terms.objects.forEach(t => (t.entry.al || []).forEach(a => items.push({ a, cls: "term-object", id: t.entry.id })));
    items.sort((x, y) => y.a.length - x.a.length);
    for (const it of items) {
      const esc = it.a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const flags = it.a[0] === it.a[0].toLowerCase() ? "gi" : "g";
      const re = new RegExp("(^|[^A-Za-z>])(" + esc + ")(?=[^A-Za-z<]|$)", flags);
      html = html.replace(re, (m, pre, word) => `${pre}<span class="${it.cls}" data-term="${it.id}">${word}</span>`);
    }
    return html;
  }

  /* ---------- pipeline ---------- */
  async function load(refStr, push) {
    const ref = BVV.parseRef(refStr);
    const status = $("status-bar");
    if (!ref) {
      status.textContent = `Couldn't understand "${refStr}". Try formats like "1 Samuel 28", "John 3:16" or "Acts 27:1-12".`;
      status.className = "status-bar error"; return;
    }
    status.className = "status-bar";
    status.textContent = `Loading ${ref.display}…`;

    let data;
    try { data = await BVV.fetchChapter(ref.book, ref.chapter); }
    catch (e) { status.textContent = e.message; status.className = "status-bar error"; return; }

    if (push !== false) { try { history.replaceState(null, "", "#/" + encodeURIComponent(ref.display)); } catch (e) {} }

    const curated = BVV.CURATED[ref.book.n + ":" + ref.chapter] || null;
    const rangeVerses = data.verses.filter(v => !ref.v1 || (v.verse >= ref.v1 && v.verse <= ref.v2));
    const scanText = rangeVerses.map(v => v.text).join(" ");

    // detection
    const placesFound = detect(scanText, BVV.PLACES);
    const peopleFound = detect(scanText, BVV.PEOPLE, ref.book.t);
    const objectsFound = detect(scanText, BVV.OBJECTS);

    // merge curated place list (ordered, with roles) with detected
    let placesInfo;
    if (curated?.places) {
      placesInfo = curated.places.map(cp => ({ place: BVV.placeById(cp.id), role: cp.role })).filter(pi => pi.place);
      for (const f of placesFound) if (!placesInfo.some(pi => pi.place.id === f.entry.id)) placesInfo.push({ place: f.entry, role: "" });
    } else {
      // order by first appearance in text
      placesInfo = placesFound
        .map(f => ({ place: f.entry, role: "", at: scanText.indexOf(f.alias) }))
        .sort((a, b) => a.at - b.at)
        .map(({ place, role }) => ({ place, role }));
    }

    const peopleList = peopleFound.map(f => f.entry);
    (curated?.peopleExtra || []).forEach(id => {
      const p = BVV.PEOPLE.find(x => x.id === id);
      if (p && !peopleList.includes(p)) peopleList.push(p);
    });
    const objectList = objectsFound.map(f => f.entry);
    (curated?.objectsExtra || []).forEach(id => {
      const o = BVV.OBJECTS.find(x => x.id === id);
      if (o && !objectList.includes(o)) objectList.push(o);
    });

    const midYear = Math.round((ref.book.era.y1 + ref.book.era.y2) / 2);
    ctx = {
      ref, book: ref.book, chapter: ref.chapter, curated,
      verses: data.verses, source: data.source, note: data.note,
      places: placesInfo, people: peopleList, objects: objectList,
      period: BVV.periodOf(midYear),
      time: curated?.timeOfDay || "day"
    };

    status.className = "status-bar hidden";
    render();
  }

  function render() {
    $("welcome").classList.add("hidden");
    $("main").classList.remove("hidden");

    // era banner
    const cur = ctx.curated;
    $("era-banner").classList.remove("hidden");
    $("era-title").textContent = cur?.era?.title ||
      `${BVV.formatYear(ctx.book.era.y1)}–${BVV.formatYear(ctx.book.era.y2)} — ${ctx.book.era.label}`;
    $("era-sub").textContent = cur?.era?.sub || ctx.book.era.sub;
    $("era-badges").innerHTML = (cur?.era?.badges || [ctx.period.label, ctx.book.t === "ot" ? "Old Testament" : "New Testament"])
      .map(b => `<span>${b}</span>`).join("");

    // status note (e.g. WEB fallback)
    if (ctx.note) {
      const s = $("status-bar"); s.className = "status-bar"; s.textContent = "Note: " + ctx.note;
    }

    // verses
    $("text-title").textContent = ctx.ref.display;
    $("text-source").textContent = ctx.source;
    const terms = {
      places: ctx.places.map(pi => ({ entry: pi.place })),
      people: ctx.people.map(p => ({ entry: p })),
      objects: ctx.objects.map(o => ({ entry: o }))
    };
    $("verses").innerHTML = ctx.verses.map(v => {
      const inRange = !ctx.ref.v1 || (v.verse >= ctx.ref.v1 && v.verse <= ctx.ref.v2);
      return `<p class="verse${inRange ? "" : " dim"}" id="v${v.verse}"><span class="vnum">${v.verse}</span>${
        inRange ? highlight(v.text, terms) : v.text.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</p>`;
    }).join("");
    if (ctx.ref.v1) { const el = $("v" + ctx.ref.v1); if (el) el.scrollIntoView({ block: "start" }); $("verses").scrollTop -= 8; }
    else $("verses").scrollTop = 0;

    $("verses").querySelectorAll(".term-place").forEach(el =>
      el.addEventListener("click", () => showScene(el.getAttribute("data-term"), true)));
    $("verses").querySelectorAll(".term-person, .term-object").forEach(el =>
      el.addEventListener("click", () => { activateTab("people"); }));

    // map
    const legs = BVV.map.show(ctx.places, ctx.curated?.journey, id => showScene(id, true));
    const jl = $("journey-list");
    if (legs && legs.length) {
      jl.innerHTML = `<h3>Route & directions in this passage</h3>` + legs.map(l =>
        `<div class="journey-leg"><span class="leg-no">${l.no}</span>
          <span><b>${l.label}:</b> ${l.a.name} → ${l.b.name} <span class="leg-dist">(~${l.km} km${l.km < 40 ? ", " + Math.round(l.km / 4.5 * 10) / 10 + " h on foot" : ""})</span><br>${l.note || ""}</span></div>`).join("");
    } else if (ctx.places.length > 1) {
      // auto route in order of mention
      let html = `<h3>Places in order of mention</h3>`, total = 0;
      for (let i = 0; i < ctx.places.length - 1; i++) {
        const a = ctx.places[i].place, b = ctx.places[i + 1].place;
        const km = Math.round(BVV.map.haversine(a, b));
        total += km;
        html += `<div class="journey-leg"><span class="leg-no">${i + 1}</span><span>${a.name} → ${b.name} <span class="leg-dist">(~${km} km apart)</span></span></div>`;
      }
      jl.innerHTML = html;
    } else jl.innerHTML = "";
    $("map-note").textContent = ctx.places.length ? `${ctx.places.length} place${ctx.places.length > 1 ? "s" : ""} · markers numbered by narrative order` : "No mappable places detected";

    // scene selector
    const sel = $("scene-place-select");
    sel.innerHTML = ctx.places.map(pi => `<option value="${pi.place.id}">${pi.place.name}</option>`).join("") ||
      `<option value="">—</option>`;
    sel.onchange = () => showScene(sel.value, false);
    showScene(ctx.curated?.focusPlace || (ctx.places[0] && ctx.places[0].place.id), false);

    // present-day street view selector
    const svSel = $("streetview-place-select");
    svSel.innerHTML = ctx.places.map(pi => `<option value="${pi.place.id}">${pi.place.name}</option>`).join("") ||
      `<option value="">—</option>`;
    svSel.onchange = () => showStreetView(svSel.value);
    showStreetView(ctx.curated?.focusPlace || (ctx.places[0] && ctx.places[0].place.id));

    // tabs
    BVV.panels.renderAll(ctx, r => { $("passage-input").value = r; load(r); });
    if (BVV.chat) BVV.chat.resetForPassage(BVV.getChatContext());
  }

  function showScene(placeId, focusMap) {
    const pi = ctx.places.find(x => x.place.id === placeId);
    if (!pi) return;
    const p = pi.place;
    $("scene-place-select").value = p.id;
    const isFocus = ctx.curated && (ctx.curated.focusPlace === p.id);
    const hotspots = isFocus ? (ctx.curated.hotspots || []) : [];
    sceneEscape = hotspots;
    const cfg = {
      seed: p.id + ":" + ctx.period.id + ":" + ctx.time,
      time: ctx.time === "storm" && p.scene.terrain !== "coast" ? "day" : ctx.time,
      period: ctx.period.id,
      terrain: p.scene.terrain, settlement: p.scene.settlement,
      water: p.scene.water, veg: p.scene.veg,
      hotspots
    };
    BVV.scene.render($("scene-viewport"), cfg, showHotspotCard);
    const yearLabel = ctx.curated?.era?.title || `${BVV.formatYear(ctx.book.era.y1)}–${BVV.formatYear(ctx.book.era.y2)}`;
    $("scene-title").textContent = `Ancient Street View — ${p.name}`;
    $("scene-caption").innerHTML = `<b>${p.name}</b> · ${yearLabel} · ${ctx.period.label} — ${p.ancient}
      <span style="opacity:.6"> · illustrative reconstruction${hotspots.length ? " · click the labeled figures" : ""}</span>`;
    hideHotspotCard();
    if (focusMap) document.querySelector(".scene-panel").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function showStreetView(placeId) {
    const pi = ctx.places.find(x => x.place.id === placeId);
    $("streetview-place-select").value = pi ? pi.place.id : "";
    BVV.streetview.render($("streetview-wrap"), pi && pi.place);
  }

  function showHotspotCard(i, e) {
    const h = sceneEscape && sceneEscape[i];
    if (!h) return;
    const card = $("scene-hotspot-card");
    card.innerHTML = `<span class="close-x">✕</span><h4>${h.label}</h4><p>${h.desc}</p>`;
    card.classList.remove("hidden");
    const panel = document.querySelector(".scene-panel").getBoundingClientRect();
    const x = Math.max(8, Math.min(e.clientX - panel.left - 140, panel.width - 310));
    card.style.left = x + "px";
    card.style.top = Math.max(40, e.clientY - panel.top - 30) + "px";
    card.querySelector(".close-x").addEventListener("click", hideHotspotCard);
  }
  function hideHotspotCard() { $("scene-hotspot-card").classList.add("hidden"); }

  BVV.getChatContext = function () {
    if (!ctx) return null;
    const selectedVerses = ctx.verses
      .filter(v => !ctx.ref.v1 || (v.verse >= ctx.ref.v1 && v.verse <= ctx.ref.v2))
      .map(v => ({ verse: v.verse, text: v.text }));
    return {
      reference: ctx.ref.display,
      source: ctx.source,
      note: ctx.note || "",
      verses: selectedVerses,
      chapterVerses: ctx.verses.map(v => ({ verse: v.verse, text: v.text })),
      book: { name: ctx.book.name, testament: ctx.book.t, era: ctx.book.era },
      period: ctx.period,
      places: ctx.places.map(pi => ({ name: pi.place.name, role: pi.role || pi.place.type, ancient: pi.place.ancient, modern: pi.place.modern })),
      people: ctx.people.map(p => ({ name: p.name, desc: p.desc })),
      objects: ctx.objects.map(o => ({ name: o.name, desc: o.desc })),
      curated: ctx.curated ? {
        summary: ctx.curated.summary || "",
        culture: ctx.curated.culture || [],
        crossRefs: ctx.curated.crossRefs || [],
        analyses: ctx.curated.analyses || null
      } : null
    };
  };

  function activateTab(name) {
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.getAttribute("data-tab") === name));
    document.querySelectorAll(".tab-body").forEach(b => b.classList.toggle("active", b.id === "tab-" + name));
    if (name === "people") document.getElementById("tab-people").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------- wiring ---------- */
  if (BVV.chat) BVV.chat.init();
  $("passage-form").addEventListener("submit", e => { e.preventDefault(); load($("passage-input").value); });
  $("quick-links").addEventListener("click", e => {
    const b = e.target.closest("button[data-ref]");
    if (b) { $("passage-input").value = b.getAttribute("data-ref"); load(b.getAttribute("data-ref")); }
  });
  document.getElementById("tabs").addEventListener("click", e => {
    const t = e.target.closest(".tab");
    if (t) activateTab(t.getAttribute("data-tab"));
  });

  // initial load: hash → default demo passage
  const fromHash = decodeURIComponent((location.hash || "").replace(/^#\//, ""));
  const initial = fromHash || "1 Samuel 28";
  $("passage-input").value = initial;
  load(initial, false);
})();
