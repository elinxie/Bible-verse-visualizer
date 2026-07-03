# Bible Passage Visualizer

A visual study Bible: type any passage and explore —

- 🗺️ **Map & route** — every place in the passage plotted (Leaflet + OpenTopoMap/OSM/satellite), numbered in narrative order, with journey legs, distances and walking times.
- 🏛️ **Ancient Street View** — a draggable, street-level panorama of each place drawn procedurally for the **passage's own time period** (Bronze Age → Iron Age → Persian → Hellenistic → Roman): period architecture, terrain, vegetation, time of day, and clickable figures/objects for curated chapters.
- 🧍 **People & Objects** — figures and material culture detected in the text, each with an archaeology-flavored profile.
- 🏞️ **Setting & Environment** — the land, season, and "as it was then" notes per place.
- 🏺 **Cultural & Archaeological Context** — curated cards (ancient Near Eastern background, customs, digs).
- 🔗 **Related Verses** — grouped, clickable cross-references.
- ⚖️ **Analyses Compared** — for curated chapters, how this visualization lines up with published commentary (fully built out for **1 Samuel 28**).

**Live site:** https://elinxie.github.io/Bible-verse-visualizer/

## How it works

Pure static site (no build step, no server) — deployed by GitHub Actions to GitHub Pages. "Dynamic" behavior is client-side:

- Scripture text: **ESV** fetched live from the [bolls.life](https://bolls.life) API; deploy-time snapshots of priority books (currently 1 & 2 Samuel) are bundled as offline fallback; final fallback is the public-domain WEB via bible-api.com.
- Any passage works via the automatic pipeline (place/people/object detection against bundled datasets). Selected chapters have hand-curated deep data in `js/data/curated.js`.

## Repo layout

```
index.html            app shell
css/style.css         styles
js/app.js             controller (parse → fetch → detect → render)
js/refparse.js        "1 Sam 28:3-25"-style reference parser
js/bibletext.js       ESV fetch + fallbacks
js/map.js             Leaflet map & routes
js/scene.js           procedural period panorama renderer + avatars
js/panels.js          study tabs
js/data/books.js      66 books + event-era metadata
js/data/places.js     gazetteer (coords, "as it was then", scene recipe)
js/data/people.js     major figures
js/data/objects.js    material culture
js/data/curated.js    deep per-chapter study data
.github/workflows/deploy.yml   Pages deploy + ESV snapshotting
PLAYBOOK.md           how to keep expanding coverage session by session
```

Ancient views are **illustrative reconstructions** generated from historical and archaeological data — artistic impressions, not photographs.

## Local development

Any static server works:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

See **PLAYBOOK.md** for the expansion roadmap and per-session workflow.
