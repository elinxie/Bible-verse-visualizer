# Continuation Playbook

How to keep building this site session by session, staying inside a usage/data
limit. The design goal: **every session ships something visible on the live
site, and no session requires re-explaining the project.**

## Current state (update this section every session)

- ✅ Core app: parser, ESV fetch + fallbacks, map/routes, procedural period
  panoramas, people/objects detection, study tabs, deploy pipeline.
- ✅ Deep-curated: **1 Samuel 28** (journey, night scenes, hotspots, culture,
  cross-refs, analyses comparison).
- ✅ Medium-curated: Luke 2, Acts 27, John 4, Exodus 14.
- ✅ Offline ESV snapshots: 1 & 2 Samuel (all chapters, made at deploy time).
- 🔜 Next up: curate the 1–2 Samuel arc (list below).

## Architecture invariants — don't break these

1. **Static site, no build step.** Plain HTML/CSS/JS. Deploy = push.
2. **All expansion is data, not code.** Adding coverage means appending
   entries to `js/data/*.js`. Code changes only for new features.
3. **Every chapter of the whole Bible already "works"** via the automatic
   pipeline. Curation only upgrades depth. Never gate basic function on
   curation.
4. **ESV text is fetched, never committed by hand.** Deploy-time snapshots
   only (workflow `snapshot` lines). Keep quotation within ESV's permission
   limits (site displays, never redistributes whole books as files for
   download).
5. Scene renderer is deterministic (seeded by place id) — visual diffs mean a
   code change, not flakiness.

## Unit-of-work menu (pick per session by remaining budget)

| Size | Work | Files touched |
|------|------|---------------|
| S (~minutes) | Add 5–10 gazetteer places, or 5 people, or 5 objects | one `js/data/*.js` |
| S | Add a book's offline snapshot | `.github/workflows/deploy.yml` (2 lines) |
| M | Medium-curate one chapter: era, focusPlace, places+roles, 1–2 journey legs, 2 hotspots, 1–2 culture cards, cross-refs | `js/data/curated.js` (+ places if new) |
| L | Deep-curate one chapter (1 Sam 28 quality: + environment, analyses comparison with sources) | `js/data/curated.js` |
| L | New feature (see backlog) | `js/*.js`, `css/` |

A single M unit is the sweet spot for a short session: one curated chapter,
test, push, done.

## Roadmap — 1 & 2 Samuel first, then outward

Curate in this order (narrative + study value):

1. **1 Samuel**: 3 (call of Samuel, Shiloh) · 4–6 (ark narrative, Aphek/Ashdod) ·
   8–10 (kingship, Ramah/Mizpah/Gibeah) · 15 (Amalek, rejection) · 16 (David
   anointed, Bethlehem) · **17 (Goliath, Elah — showcase chapter)** · 24
   (En-gedi) · 25 (Abigail, Maon/Carmel) · 31 (Gilboa, Beth-shan — pairs with 28).
2. **2 Samuel**: 1 (the Amalekite's report, David's lament) · 5 (Jerusalem taken) ·
   6 (ark to Zion) · 7 (covenant) · 11–12 (Bathsheba, Rabbah) · 15–18 (Absalom:
   Kidron→Olivet→Mahanaim, forest of Ephraim) · 24 (threshing floor).
3. Then: Genesis 12/22/28, Exodus 3, Joshua 2–6, Judges 4/7/16, 1 Kings 17–19,
   2 Kings 18–19, Ruth, Jonah, Daniel 1–6, Ezra/Nehemiah;
   NT: Matthew 2, Mark 4–5, Luke 10/15/24, John 9/11, Acts 2/8–9/16–17/28,
   Revelation 1–3 (seven cities — places already in gazetteer).
4. As each book gets ≥2 curated chapters, add its snapshot to the workflow.

## Per-session workflow (paste-ready)

Start a session with a prompt of this shape — it avoids the assistant
re-reading the whole repo (saves your data budget):

> Continue the Bible-verse-visualizer per PLAYBOOK.md. This session: curate
> **[1 Samuel 17]** at M/L depth. Read only `PLAYBOOK.md`,
> `js/data/curated.js` (the 1 Sam 28 entry as the template), and
> `js/data/places.js` if you need new places. Follow the curated-entry schema
> exactly, verify locally, then commit and push to the deploy branch, confirm
> the Actions run went green, and update PLAYBOOK.md's "Current state" +
> check the chapter off the roadmap.

Session checklist:

1. `python3 -m http.server 8080` → load the new chapter → check: era banner,
   map markers + route, scene per place, all five tabs render, no console
   errors. (Offline sandbox: 1–2 Samuel work via snapshots; other books need
   the browser online.)
2. Commit with message `curate: <ref>`; push to the deploy branch.
3. Watch the "Deploy to GitHub Pages" action; verify the live URL loads the
   new chapter.
4. Update **Current state** above. Stop — that's a complete increment.

## Data-budget tactics

- **One M unit per session.** Curated entries are self-contained; a session
  interrupted mid-entry loses only that entry.
- Point the assistant at **specific files**; never ask it to "review the
  project."
- Curation is knowledge-heavy, not tool-heavy — most of the budget goes to
  writing the entry, which is exactly what you want.
- If a session is cut off before push: the next session starts with
  `git status` + `git diff` (cheap) and finishes the commit.
- Batch tiny asks (new places + new people for the same chapter) into the
  same session as that chapter.

## Feature backlog (only when data budget is comfortable)

- Verse-level cross-reference popovers (hover a verse → its xrefs).
- Timeline strip: chapter position on a whole-Bible timeline.
- Compare-two-passages split view.
- Scene weather/season variants; more settlement recipes (harbor, siege camp).
- Search-as-you-type book/chapter picker.
- Optional AI-generated scene art behind a user-supplied API key (keep the
  procedural renderer as the zero-key default).

## Deploy facts

- Live URL: **https://elinxie.github.io/Bible-verse-visualizer/**
- Deploy branch: `claude/bible-passage-map-viz-r17fur` (also `main` after merge).
- Pipeline: `.github/workflows/deploy.yml` — snapshots ESV for listed books,
  then publishes the repo root to GitHub Pages. Rollback = revert commit + push.
