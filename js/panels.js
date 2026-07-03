/* Render the study tabs: Setting & Environment, People & Objects,
   Cultural context, Cross-references, Analyses. */
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
    analyses(ctx);
  }

  return { renderAll };
})();
