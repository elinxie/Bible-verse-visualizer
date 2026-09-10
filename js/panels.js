/* Render the study tabs: Setting & Environment, People & Objects,
   Cultural context, Cross-references, Poetic Structure, Analyses. */
window.BVV = window.BVV || {};
BVV.panels = (function () {

  function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

  function setting(ctx) {
    const el = document.getElementById("tab-setting");
    const cur = ctx.curated;
    let html = "";
    html += `<h3 class="section-title">When</h3>
      <p><b>${esc(cur?.era?.title || ctx.book.era.label)}</b> — ${esc(cur?.era?.sub || ctx.book.era.sub)}.
      Material culture on screen: <b>${esc(ctx.period.label)}</b>.</p>`;
    if (cur?.summary) html += `<h3 class="section-title">The scene in one paragraph</h3><p>${esc(cur.summary)}</p>`;
    if (cur?.environment) {
      html += `<h3 class="section-title">Environment</h3>
        <div class="env-strip">${cur.environment.chips.map(c => `<span class="env-chip">${esc(c)}</span>`).join("")}</div>
        <p>${esc(cur.environment.text)}</p>`;
    }
    html += `<h3 class="section-title">Places in this passage — as they were then</h3><div class="card-grid">`;
    ctx.places.forEach(pi => {
      html += `<div class="info-card"><h4>${esc(pi.place.name)}</h4>
        <div class="sub">${esc(pi.role || pi.place.type)}</div>
        <p>${esc(pi.place.ancient)}</p>
        ${pi.place.meaning ? `<p class="place-meaning">${esc(pi.place.meaning)}</p>` : ""}
        <p style="opacity:.65;font-size:.78rem">Today: ${esc(pi.place.modern)}</p></div>`;
    });
    html += `</div>`;
    if (!ctx.places.length) html += `<p>No mappable place names were detected in this passage — it may be teaching, poetry, or a letter. The book-level setting above still applies.</p>`;
    el.innerHTML = html;
  }

  function people(ctx) {
    const el = document.getElementById("tab-people");
    let html = `<h3 class="section-title">People</h3>`;
    if (ctx.people.length) {
      html += `<div class="card-grid">`;
      ctx.people.forEach(p => {
        html += `<div class="info-card person-card">
          <div class="avatar">${BVV.scene.avatar(p.av)}</div>
          <div><h4>${esc(p.name)}</h4><p>${esc(p.desc)}</p></div></div>`;
      });
      html += `</div>`;
    } else {
      html += `<p>No major named figures from the reference set were detected in this passage.</p>`;
    }
    html += `<h3 class="section-title">Objects & material culture</h3>`;
    if (ctx.objects.length) {
      html += `<div class="card-grid">`;
      ctx.objects.forEach(o => {
        html += `<div class="info-card"><h4>${o.icon || "🏺"} ${esc(o.name)}</h4><p>${esc(o.desc)}</p></div>`;
      });
      html += `</div>`;
    } else {
      html += `<p>No catalogued objects detected in this passage.</p>`;
    }
    el.innerHTML = html;
  }

  function culture(ctx) {
    const el = document.getElementById("tab-culture");
    const cards = ctx.curated?.culture || [];
    let html = "";
    if (cards.length) {
      html += `<div class="card-grid">`;
      cards.forEach(c => { html += `<div class="info-card"><h4>${c.icon || "🏺"} ${esc(c.title)}</h4><p>${esc(c.text)}</p></div>`; });
      html += `</div>`;
    } else {
      html += `<p>Curated cultural notes haven't been written for this chapter yet. Meanwhile:</p>`;
      html += `<div class="card-grid">`;
      html += `<div class="info-card"><h4>🕰️ Period</h4><p>${esc(ctx.book.era.label)} — ${esc(ctx.book.era.sub)}. Architecture, dress and objects in the ancient views reflect the ${esc(ctx.period.label)}.</p></div>`;
      ctx.objects.slice(0, 4).forEach(o => {
        html += `<div class="info-card"><h4>${o.icon || "🏺"} ${esc(o.name)}</h4><p>${esc(o.desc)}</p></div>`;
      });
      html += `</div>`;
    }
    el.innerHTML = html;
  }

  function crossrefs(ctx, onOpenRef) {
    const el = document.getElementById("tab-crossrefs");
    const groups = ctx.curated?.crossRefs || [];
    let html = "";
    if (groups.length) {
      groups.forEach(g => {
        html += `<div class="xref-group"><h4>${esc(g.group)}</h4>`;
        g.refs.forEach(r => {
          html += `<span class="xref" data-ref="${esc(r.r)}">${esc(r.r)}</span><span class="xref-note">${esc(r.note)}</span>`;
        });
        html += `</div>`;
      });
      html += `<p style="font-size:.78rem;opacity:.7">Click any reference to load it in the visualizer.</p>`;
    } else {
      html += `<p>Curated cross-references haven't been written for this chapter yet. Related context:</p><div class="xref-group">`;
      // book-neighborhood suggestions
      const b = ctx.book;
      if (ctx.chapter > 1) html += `<span class="xref" data-ref="${b.name} ${ctx.chapter - 1}">${b.name} ${ctx.chapter - 1}</span><span class="xref-note">the chapter before</span>`;
      if (ctx.chapter < b.ch) html += `<span class="xref" data-ref="${b.name} ${ctx.chapter + 1}">${b.name} ${ctx.chapter + 1}</span><span class="xref-note">the chapter after</span>`;
      html += `</div>`;
    }
    el.innerHTML = html;
    el.querySelectorAll(".xref").forEach(x => x.addEventListener("click", () => onOpenRef(x.getAttribute("data-ref"))));
  }

  // Books that are poetry (or heavily poetic) start to finish.
  const POETIC_BOOKS = new Set([18, 19, 20, 21, 22, 25]); // Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon, Lamentations
  // Narrative books known to embed a set-piece poem/song in specific chapters.
  const EMBEDDED_POEMS = {
    "2:15": "The Song of the Sea (Exod 15) — victory hymn after the Reed Sea crossing.",
    "7:5": "Deborah's Song (Judg 5) — victory ode paired with the prose battle account in ch. 4.",
    "9:2": "Hannah's Song (1 Sam 2) — a prayer of reversal that anticipates David's song and the Magnificat.",
    "10:1": "David's lament 'How the mighty have fallen' over Saul and Jonathan (2 Sam 1).",
    "10:22": "David's Song of Deliverance (2 Sam 22) — the near-twin of Psalm 18.",
    "10:23": "'The last words of David' (2 Sam 23:1-7) — a short royal oracle opening the honor-roll of mighty men."
  };

  // Split a verse into rough cola (line-halves) on the punctuation that
  // typically marks a caesura in translation — a lightweight, unscored
  // heuristic used only when no curated structural analysis exists yet.
  function splitCola(text) {
    return text.split(/(?<=[,;:—])\s+/).map(s => s.trim()).filter(Boolean);
  }

  function structure(ctx, onOpenRef) {
    const el = document.getElementById("tab-structure");
    const s = ctx.curated?.structure;
    let html = "";

    if (s) {
      if (s.genre) html += `<h3 class="section-title">Genre &amp; form</h3><p>${esc(s.genre)}</p>`;

      if (s.outline?.length) {
        html += `<h3 class="section-title">Sectional outline</h3><ol class="structure-outline">`;
        s.outline.forEach(o => { html += `<li><b>v. ${esc(o.range)}</b> — ${esc(o.label)}</li>`; });
        html += `</ol>`;
      }

      if (s.chiasm?.parts?.length) {
        html += `<h3 class="section-title">Chiastic / concentric shape</h3>`;
        if (s.chiasm.note) html += `<p>${esc(s.chiasm.note)}</p>`;
        html += `<div class="chiasm-diagram">`;
        s.chiasm.parts.forEach(p => {
          html += `<div class="chiasm-row${p.center ? " center" : ""}" style="padding-left:${Math.min(p.label.replace(/'/g,"").length - 1, 3) * 14}px">
            <span class="chiasm-label">${esc(p.label)}</span>
            <span class="chiasm-range">v.${esc(p.range)}</span>
            <span>${esc(p.title)}</span></div>`;
        });
        html += `</div>`;
      }

      if (s.inclusio) html += `<h3 class="section-title">Inclusio / framing device</h3><p>${esc(s.inclusio)}</p>`;

      if (s.parallelism?.length) {
        html += `<h3 class="section-title">Parallelism at work</h3>`;
        s.parallelism.forEach(p => {
          html += `<div class="parallel-pair"><span class="ptype">${esc(p.type)} · v.${esc(p.verse)}</span>
            ${p.quote ? `<p class="pquote">"${esc(p.quote)}"</p>` : ""}
            <p>${esc(p.note)}</p></div>`;
        });
      }

      if (s.parallels?.length) {
        html += `<h3 class="section-title">How this passage relates to other chapters</h3><div class="xref-group">`;
        s.parallels.forEach(p => {
          html += `<span class="xref" data-ref="${esc(p.ref)}">${esc(p.ref)}</span><span class="xref-note">${esc(p.note)}</span>`;
        });
        html += `</div><p style="font-size:.78rem;opacity:.7">Click any reference to load it in the visualizer.</p>`;
      }
    } else {
      const isPoeticBook = POETIC_BOOKS.has(ctx.book.n);
      const embedKey = ctx.book.n + ":" + ctx.chapter;
      const embedded = EMBEDDED_POEMS[embedKey];

      html += `<p>A curated structural analysis hasn't been written for this chapter yet`
        + (isPoeticBook ? "" : embedded ? " — but it's flagged below as an embedded poem worth a closer look" : "")
        + `. `;
      if (isPoeticBook) {
        html += `This book is poetry throughout, so the main thing to watch for is <b>parallelism</b> — each line answering, restating, sharpening, or contrasting with the one before it — rather than a prose plot.</p>`;
      } else if (embedded) {
        html += `${esc(embedded)}</p>`;
      } else {
        html += `This looks like narrative prose; sustained poetic structure (parallelism, strophes, chiasm) mainly shows up in Psalms, Job's speeches, Proverbs, Song of Solomon, Lamentations, the prophetic oracles, and a handful of embedded songs inside the historical books (e.g. Exodus 15, Judges 5, 1 Samuel 2, 2 Samuel 22-23).</p>`;
      }

      if (isPoeticBook || embedded) {
        const inRange = ctx.verses.filter(v => !ctx.ref.v1 || (v.verse >= ctx.ref.v1 && v.verse <= ctx.ref.v2));
        const withCola = inRange.map(v => ({ verse: v.verse, cola: splitCola(v.text) })).filter(v => v.cola.length > 1).slice(0, 8);
        if (withCola.length) {
          html += `<h3 class="section-title">Candidate line-pairs (auto-detected, unscored)</h3>
            <p style="font-size:.8rem;opacity:.75">Split on punctuation only — read each verse's parallel members against each other to see whether the relationship is synonymous, antithetic, or building (climactic).</p>`;
          withCola.forEach(v => {
            html += `<div class="parallel-pair"><span class="ptype">v. ${v.verse}</span>`;
            v.cola.forEach(c => { html += `<p class="pquote">${esc(c)}</p>`; });
            html += `</div>`;
          });
        }
      }

      html += `<div class="xref-group"><h4>Nearby chapters</h4>`;
      if (ctx.chapter > 1) html += `<span class="xref" data-ref="${esc(ctx.book.name)} ${ctx.chapter - 1}">${esc(ctx.book.name)} ${ctx.chapter - 1}</span><span class="xref-note">the chapter before</span>`;
      if (ctx.chapter < ctx.book.ch) html += `<span class="xref" data-ref="${esc(ctx.book.name)} ${ctx.chapter + 1}">${esc(ctx.book.name)} ${ctx.chapter + 1}</span><span class="xref-note">the chapter after</span>`;
      html += `</div>`;
    }

    el.innerHTML = html;
    el.querySelectorAll(".xref").forEach(x => x.addEventListener("click", () => onOpenRef(x.getAttribute("data-ref"))));
  }

  function analyses(ctx) {
    const el = document.getElementById("tab-analyses");
    const a = ctx.curated?.analyses;
    if (!a) {
      el.innerHTML = `<p>A comparison with published analyses has been prepared for selected chapters (e.g. <b>1 Samuel 28</b>). For this chapter, use the Related Verses tab and the cultural notes; more curated chapters are being added.</p>`;
      return;
    }
    let html = `<p>${esc(a.intro)}</p>`;
    html += `<div class="analysis-col"><h3 class="section-title">Where the analyses agree — and how this site shows it</h3><ul>`;
    a.consensus.forEach(c => { html += `<li>${esc(c)}</li>`; });
    html += `</ul></div>`;
    html += `<div class="analysis-col"><h3 class="section-title">Debated points</h3><ul>`;
    a.debated.forEach(d => { html += `<li><span class="view-tag ${d.tag}">${esc(d.title)}</span>${esc(d.text)}</li>`; });
    html += `</ul></div>`;
    html += `<div class="src-links"><h3 class="section-title">Sources compared</h3><ul>`;
    a.sources.forEach(s => { html += `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`; });
    html += `</ul></div>`;
    el.innerHTML = html;
  }

  function renderAll(ctx, onOpenRef) {
    setting(ctx);
    people(ctx);
    culture(ctx);
    crossrefs(ctx, onOpenRef);
    structure(ctx, onOpenRef);
    analyses(ctx);
  }

  return { renderAll };
})();
