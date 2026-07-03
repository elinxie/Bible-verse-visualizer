# Continuation Playbook — autonomous loop + agent team

The site is **live**: https://elinxie.github.io/Bible-verse-visualizer/
This doc is the working memory for the autonomous build loop. The
orchestrator session and every worker agent must read it before working and
update the **Ledger** after shipping.

## Mission & definition of done

"The whole Bible detailed and viewable from anywhere" means, concretely:

- **Tier 0 — universal function (DONE):** all 1,189 chapters render via the
  automatic pipeline (ESV text, place/people/object detection, map, period
  scene, tabs) on the public site.
- **Tier 1 — key-chapter curation:** every book has its narrative/study key
  chapters curated at M depth or better (target list in the Ledger, ~150
  chapters; 1 Samuel 28 is the L-depth reference implementation).
- **Tier 2 — dataset completeness:** gazetteer ≥ 200 places (all mappable
  names that occur in narrative books), people ≥ 120, objects ≥ 60; detection
  false-positive free on the test corpus.
- **Tier 3 — quality gates:** deterministic Playwright suite green in CI on
  every PR; Pages deploy verified 200 after every merge.

Done = Tiers 1–3 complete. Work proceeds loop-iteration by loop-iteration
until then (or until the user says stop — obey immediately).

## Budget model (rate limits = payroll)

The orchestrator + agents share the user's Claude usage limits (5-hour
rolling window + weekly cap). Treat every agent spawn as paid labor:

1. **Per iteration spend cap:** at most **2 worker-agent runs** plus the
   orchestrator's own integration/test/ship work. Prefer **1 agent doing a
   well-scoped batch** (e.g. "curate these 3 chapters") over many small runs.
2. **Model = pay grade:** `sonnet` for data curation, tests, routine fixes
   (the default). `fable`/opus-class only for architecture or a bug two
   sonnet attempts failed to fix. Never spawn an agent for work the
   orchestrator can do in fewer tokens itself.
3. **Scoped prompts save budget:** every agent prompt must name the exact
   files to read (this file + the specific `js/data/*.js` sections) and
   forbid repo-wide exploration.
4. **Back-off rule:** on any rate-limit error, or if agents start failing/
   timing out, STOP spawning, commit whatever is complete and green, push,
   and schedule the next wake-up at the maximum interval (1 hour) repeatedly
   until capacity returns. Ship partial batches rather than losing them.
5. **Ledger discipline:** every iteration appends one Ledger row (date,
   scope, agents used, outcome). That row is how the next iteration knows
   where to resume without re-reading the repo.

## Iteration recipe (what one loop turn does)

1. `git fetch origin main && git checkout -B claude/bible-passage-map-viz-r17fur origin/main`
   (the working branch always restarts from main; PRs merge back to main).
2. Pick the next unchecked batch from the Ledger roadmap (2–4 chapters, or
   one feature+tests). Small enough to finish in one iteration.
3. Spawn ≤2 agents (see Budget). Typical split:
   - **ENG (sonnet):** write the curated entries / dataset additions,
     following the `9:28` entry in `js/data/curated.js` as schema reference.
   - **QA (sonnet, only when logic changed):** extend `tests/` and hunt
     regressions with a different approach than ENG (fresh fixtures, edge
     references, mobile viewport).
4. Orchestrator integrates, runs `node tests/smoke.js` locally (deterministic,
   offline — uses fixtures), fixes or reverts anything red.
5. Commit (`curate: <refs>` / `feat: …` / `test: …`), push, open PR, verify
   the `deploy`+`verify` checks, **merge into main** (pre-authorized by the
   user), confirm the "pages build and deployment" run succeeds — if it fails
   with "Deployment failed, try again later", re-run it (known flake:
   actions/deploy-pages#406/#418; up to 3 retries, spaced).
6. Update the Ledger + tick the roadmap, include it in the commit (or a
   follow-up commit in the same PR when discovered later).
7. Schedule the next wake-up (20–30 min normal; 60 min repeatedly when
   budget-constrained per Back-off rule).

## Architecture invariants — don't break these

1. Static site, no build step; plain HTML/CSS/JS. Deploy = merge to main.
2. Expansion is **data, not code**: append to `js/data/*.js`. Code changes
   only for features, with tests.
3. Every chapter must keep working via the auto pipeline; curation only adds
   depth. Never gate function on curation.
4. ESV text is fetched at runtime (bolls.life, 8s timeout) with WEB fallback;
   deploy-time snapshots live only on the `gh-pages` branch artifact. Never
   hand-commit scripture text to main. Test fixtures (`tests/fixtures/`) are
   paraphrase stand-ins, clearly not scripture, used offline only.
5. Scene renderer stays deterministic (seeded per place id).
6. Curated-entry schema = the `"9:28"` object in `js/data/curated.js`.
   New places need: coords at the accepted site, `ancient` ("as it was
   then") note, and a `scene` recipe.

## Testing (deterministic, offline)

- `tests/smoke.js` — Playwright (Chromium at `/opt/pw-browsers/...` in the
  sandbox, or `npx playwright install chromium` elsewhere): starts a local
  static server, copies `tests/fixtures/*.json` to `data/embedded/`, and
  asserts: app boot, curated chapter (1 Sam 28: markers/journey/hotspots/all
  tabs), auto chapter (1 Sam 17 fixture), verse-range dimming, no console
  errors. Run: `node tests/smoke.js` (needs `npm i playwright` once,
  anywhere on disk — see file header).
- Add one fixture + assertions per newly curated chapter batch (QA agent).
- Live-site validation stays in CI (`verify` job polls the URL post-deploy).

## Deploy facts

- **Live URL:** https://elinxie.github.io/Bible-verse-visualizer/
- Pages source: **main branch** (user-configured). Every merge to main
  triggers GitHub's "pages build and deployment" — watch it; retry on the
  known flake. The repo's own workflow also maintains `gh-pages` (with ESV
  snapshots) as a ready alternative source; never develop on `gh-pages`.
- Dev branch: `claude/bible-passage-map-viz-r17fur` → PR → merge to main.

## Ledger

### Iteration log
| # | When (UTC) | Scope | Agents | Outcome |
|---|------------|-------|--------|---------|
| 0 | 2026-07-02/03 | Core app, 1 Sam 28 (L), Luke 2/Acts 27/John 4/Exod 14 (M), deploy pipeline, site LIVE | none (orchestrator only) | ✅ merged PR #1, site serving |
| 1 | 2026-07-03 | Loop bootstrap: this doc rewritten for agent team; tests/smoke.js (32 offline assertions, PASS); curated 1 Sam 17 (L) + 31 (M); places +socoh +azekah | 1× sonnet ENG (curation) | ✅ shipped |

### Curation roadmap (tick as shipped; M = medium depth, L = deep)
**1 Samuel:** [x] 28(L) · [ ] 3 · [ ] 4–6 · [ ] 8–10 · [ ] 15 · [ ] 16 · [x] 17(L) · [ ] 24 · [ ] 25 · [x] 31(M)
**2 Samuel:** [ ] 1 · [ ] 5 · [ ] 6 · [ ] 7 · [ ] 11–12 · [ ] 15 · [ ] 18 · [ ] 24
**Then (order):** Genesis 1–3, 6–9, 12, 22, 28, 37, 41, 45 · Exodus 3, 12, [x] 14(M), 19–20, 32 · Joshua 2, 6 · Judges 4, 7, 16 · Ruth 1–4 · 1 Kgs 3, 8, 17–19 · 2 Kgs 5, 18–19, 25 · Ezra 3 · Neh 2, 8 · Esther 4 · Job 1–2, 38 · Pss 22, 23, 51, 137 · Isa 6, 40, 53 · Jer 1, 29, 31 · Ezek 1, 37 · Dan 1–6 · Jonah 1–4 · Mic 5 · Hag 1 ·
**NT:** Matt 2, 5–7, 26–28 · Mark 4–5 · Luke [x] 2(M), 10, 15, 24 · John 1, 3, [x] 4(M), 9, 11, 19–21 · Acts 1–2, 8–9, 16–17, [x] 27(M), 28 · Rom 8 · 1 Cor 15 · Rev 1–3, 21–22
**Datasets:** places 116/200 · people 75/120 · objects 45/60
