/* Coverage panel: shows how much of the Bible is built out, per book and
   per chapter. Everything is computed at runtime from BVV.BOOKS,
   BVV.CURATED and the datasets, so newly curated chapters appear here
   automatically — no separate bookkeeping.
   Statuses per chapter:
     deep    — hand-curated with compared commentary analyses (L depth)
     curated — hand-curated study data (M depth)
     auto    — served by the automatic pipeline (every chapter works)
   Targets mirror PLAYBOOK.md Tiers 1–2. */
window.BVV = window.BVV || {};

(function () {
  const $ = id => document.getElementById(id);
  const TARGETS = { chapters: 150, places: 200, people: 120, objects: 60 };
  let built = false;

  function stats() {
    const byBook = {};
    let deep = 0, medium = 0;
    for (const key in BVV.CURATED) {
      const [bn, ch] = key.split(":").map(Number);
      const isDeep = !!BVV.CURATED[key].analyses;
      (byBook[bn] = byBook[bn] || {})[ch] = isDeep ? "deep" : "curated";
      if (isDeep) deep++; else medium++;
    }
    return {
      byBook, deep, medium, curated: deep + medium,
      totalChapters: BVV.BOOKS.reduce((s, b) => s + b.ch, 0),
      places: BVV.PLACES.length, people: BVV.PEOPLE.length, objects: BVV.OBJECTS.length
    };
  }

  function statCard(label, value, target, extra) {
    const pct = Math.min(100, Math.round(value / target * 100));
    return `<div class="cov-stat">
      <div class="cov-stat-label">${label}</div>
      <div class="cov-stat-value">${value}<span class="cov-stat-target"> / ${target}</span></div>
      <div class="cov-bar"><div class="cov-bar-fill" style="width:${pct}%"></div></div>
      <div class="cov-stat-extra">${extra || pct + "% of target"}</div>
    </div>`;
  }

  function bookRow(b, chapters) {
    const cells = [];
    let n = 0;
    for (let c = 1; c <= b.ch; c++) {
      const st = chapters && chapters[c];
      if (st) n++;
      const label = `${b.name} ${c}` + (st === "deep" ? " — deeply curated (with compared analyses)"
        : st === "curated" ? " — hand-curated study data" : " — automatic pipeline");
      cells.push(`<button class="cov-ch${st ? " cov-" + st : ""}" data-ref="${b.name} ${c}" title="${label}" aria-label="${label}"></button>`);
    }
    return `<div class="cov-book${n ? " has-curated" : ""}">
      <span class="cov-book-name">${b.name}${n ? `<b class="cov-book-count">${n}/${b.ch}</b>` : ""}</span>
      <span class="cov-cells">${cells.join("")}</span>
    </div>`;
  }

  function build() {
    const s = stats();
    const ot = BVV.BOOKS.filter(b => b.t === "ot"), nt = BVV.BOOKS.filter(b => b.t === "nt");
    const countIn = books => books.reduce((n, b) => n + Object.keys(s.byBook[b.n] || {}).length, 0);
    $("coverage").innerHTML = `
      <div class="cov-head">
        <h2>📊 Coverage — how much of the Bible is built out</h2>
        <button class="cov-close" id="coverage-close" aria-label="Close coverage panel">✕</button>
      </div>
      <p class="cov-intro">Every one of the <b>${s.totalChapters.toLocaleString()} chapters</b> in all 66 books
        already works through the automatic pipeline — scripture text, map, period street-view, people &amp; objects.
        On top of that, <b>${s.curated} chapters</b> so far have <b>hand-curated depth</b>: precise era, journey routes,
        clickable scene figures, cultural &amp; archaeological cards and grouped cross-references
        (${s.deep} of them at full depth, with published commentary compared). Click any square to open that chapter.</p>
      <div class="cov-stats">
        ${statCard("Key chapters curated (Tier 1)", s.curated, TARGETS.chapters, `${s.deep} deep · ${s.medium} medium depth`)}
        ${statCard("Places in gazetteer", s.places, TARGETS.places)}
        ${statCard("People profiles", s.people, TARGETS.people)}
        ${statCard("Objects & material culture", s.objects, TARGETS.objects)}
      </div>
      <div class="cov-legend">
        <span><i class="cov-ch cov-deep"></i> Deeply curated</span>
        <span><i class="cov-ch cov-curated"></i> Hand-curated</span>
        <span><i class="cov-ch"></i> Automatic pipeline (viewable, not yet curated)</span>
      </div>
      <h3 class="cov-group">Old Testament <span class="cov-group-note">${countIn(ot)} curated of ${ot.reduce((n, b) => n + b.ch, 0)} chapters</span></h3>
      ${ot.map(b => bookRow(b, s.byBook[b.n])).join("")}
      <h3 class="cov-group">New Testament <span class="cov-group-note">${countIn(nt)} curated of ${nt.reduce((n, b) => n + b.ch, 0)} chapters</span></h3>
      ${nt.map(b => bookRow(b, s.byBook[b.n])).join("")}`;
    $("coverage-close").addEventListener("click", toggle);
    $("coverage").addEventListener("click", e => {
      const cell = e.target.closest(".cov-ch[data-ref]");
      if (!cell) return;
      const ref = cell.getAttribute("data-ref");
      $("passage-input").value = ref;
      $("passage-form").requestSubmit();
      toggle(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    built = true;
  }

  function toggle(force) {
    const panel = $("coverage");
    const show = typeof force === "boolean" ? force : panel.classList.contains("hidden");
    if (show && !built) build();
    panel.classList.toggle("hidden", !show);
    if (show) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  BVV.coverage = { toggle, stats };

  document.querySelectorAll("[data-coverage-toggle]").forEach(el =>
    el.addEventListener("click", () => toggle()));
})();
