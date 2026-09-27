/* Procedural "ancient street view": a wide, draggable SVG panorama of a
   place as it plausibly looked in the passage's period — terrain,
   architecture style, vegetation, time of day, and clickable hotspots for
   people and objects. Deterministic per place (seeded RNG) so views are
   stable. These are illustrative reconstructions, not photographs. */
window.BVV = window.BVV || {};
BVV.scene = (function () {

  const W = 2600, H = 640, HORIZON = 400;

  function rng(seed) {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
      return ((h >>> 0) % 10000) / 10000;
    };
  }

  const SKY = {
    day:   { top:"#8ec1e8", mid:"#bcd9ee", bot:"#eef2da", sun:true },
    dusk:  { top:"#414273", mid:"#9c6482", bot:"#f0a05c", sun:"low" },
    night: { top:"#070d22", mid:"#101c3d", bot:"#25355c", moon:true, stars:true },
    storm: { top:"#39434f", mid:"#55626e", bot:"#8b96a0", rain:true }
  };

  function pick(time, m) { return m[time] !== undefined ? m[time] : m.day; }

  function groundColors(terrain, time) {
    const t = {
      hills:   { day:["#b5a06b","#9c8a58"], dusk:["#7d6a4e","#63543e"], night:["#232a3c","#1a2030"], storm:["#7a7460","#645f4e"] },
      mountain:{ day:["#a9946a","#8d7a55"], dusk:["#6d5c46","#574936"], night:["#1f2637","#171c2b"], storm:["#6f695a","#5a5548"] },
      valley:  { day:["#a8b06a","#8c9857"], dusk:["#6f724c","#585c3c"], night:["#1e2736","#161d2a"], storm:["#6f7a58","#5a6448"] },
      plain:   { day:["#c2ab72","#a8935e"], dusk:["#82704f","#68593f"], night:["#242b3d","#1a2130"], storm:["#7e7863","#676250"] },
      desert:  { day:["#d9bc7f","#c2a468"], dusk:["#96774f","#7a5f3e"], night:["#2a2d40","#1f2233"], storm:["#8a8068","#726a55"] },
      coast:   { day:["#d3c188","#b7a670"], dusk:["#8d7a55","#726244"], night:["#262c3f","#1c2131"], storm:["#807a64","#6a6552"] },
      lake:    { day:["#b3a873","#98905f"], dusk:["#75694a","#5e543b"], night:["#222940","#192031"], storm:["#757259","#605e49"] },
      river:   { day:["#aab06f","#8f985b"], dusk:["#6f6e4b","#59583c"], night:["#1f2739","#171e2c"], storm:["#707a5a","#5b644a"] },
      oasis:   { day:["#c8b479","#a5975f"], dusk:["#8a7550","#6f5e40"], night:["#262c41","#1c2233"], storm:["#7f7962","#696450"] }
    }[terrain] || null;
    return t ? pick(time, t) : pick(time, { day:["#b5a06b","#9c8a58"], night:["#232a3c","#1a2030"] });
  }

  function silCol(time) { return pick(time, { day:"#6b5a3d", dusk:"#3a3050", night:"#0d1322", storm:"#4a4a44" }); }

  // wall/house colours: [face, shade] — lighter dressed stone for
  // Roman/Hellenistic, mudbrick-and-fieldstone tones for earlier periods
  function buildingCols(time, period) {
    if (period === "roman" || period === "hellenistic")
      return pick(time, { day:["#eadfc6","#cfc0a0"], dusk:["#b09079","#8f725e"], night:["#333a58","#262c45"], storm:["#a29a86","#87806e"] });
    return pick(time, { day:["#c9ad7c","#a98f60"], dusk:["#96754f","#79603f"], night:["#2c3149","#20253a"], storm:["#93876c","#786f58"] });
  }

  function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }

  /* ---------- sky & celestial ---------- */
  function sky(time, R) {
    const s = SKY[time] || SKY.day;
    let out = `<defs>
      <linearGradient id="skyg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${s.top}"/><stop offset="0.62" stop-color="${s.mid}"/><stop offset="1" stop-color="${s.bot}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#ffdf9e" stop-opacity="0.95"/><stop offset="1" stop-color="#ffdf9e" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="fireglow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#ffb347" stop-opacity="0.75"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#skyg)"/>`;
    if (s.stars) {
      for (let i = 0; i < 180; i++) {
        const x = R() * W, y = R() * (HORIZON - 60), r = R() * 1.4 + 0.3;
        out += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="#e8ecff" opacity="${(0.3 + R() * 0.7).toFixed(2)}"/>`;
      }
    }
    if (s.moon) {
      out += `<circle cx="2100" cy="110" r="95" fill="url(#glow)"/><circle cx="2100" cy="110" r="34" fill="#f2ecd8"/><circle cx="2088" cy="102" r="7" fill="#d9d2bc"/><circle cx="2112" cy="120" r="5" fill="#ddd6c0"/>`;
    }
    if (s.sun === true) out += `<circle cx="2050" cy="130" r="130" fill="url(#glow)"/><circle cx="2050" cy="130" r="46" fill="#fff3c4"/>`;
    if (s.sun === "low") out += `<circle cx="1900" cy="${HORIZON-40}" r="150" fill="url(#glow)"/><circle cx="1900" cy="${HORIZON-40}" r="52" fill="#ffce7a"/>`;
    if (time === "day" || time === "storm") {
      const cc = time === "storm" ? "#454f5a" : "#ffffff", op = time === "storm" ? 0.9 : 0.75;
      for (let i = 0; i < 7; i++) {
        const x = R() * W, y = 40 + R() * 160, sc = 0.7 + R() * 1.5;
        out += `<g transform="translate(${x.toFixed(0)},${y.toFixed(0)}) scale(${sc.toFixed(2)})" opacity="${op}">
          <ellipse cx="0" cy="0" rx="70" ry="20" fill="${cc}"/><ellipse cx="45" cy="8" rx="55" ry="16" fill="${cc}"/><ellipse cx="-45" cy="10" rx="50" ry="14" fill="${cc}"/></g>`;
      }
    }
    if (s.rain) {
      out += `<g stroke="#cfd8de" stroke-width="1.4" opacity="0.5">`;
      for (let i = 0; i < 140; i++) {
        const x = R() * W, y = R() * H;
        out += `<line x1="${x.toFixed(0)}" y1="${y.toFixed(0)}" x2="${(x-14).toFixed(0)}" y2="${(y+34).toFixed(0)}"/>`;
      }
      out += `</g>`;
    }
    return out;
  }

  /* ---------- terrain ---------- */
  function ridge(yBase, amp, col, R, jag) {
    let d = `M0 ${H} L0 ${yBase}`;
    for (let x = 0; x <= W; x += 65) {
      const y = yBase - Math.abs(Math.sin(x / (jag ? 140 : 320) + R() * 2)) * amp - R() * amp * 0.35;
      d += ` L${x} ${y.toFixed(0)}`;
    }
    d += ` L${W} ${H} Z`;
    return `<path d="${d}" fill="${col}"/>`;
  }

  function terrainLayers(cfg, R) {
    const time = cfg.time, t = cfg.terrain;
    const far = pick(time, { day:"#8fa3ad", dusk:"#4b4468", night:"#0f1730", storm:"#5c6672" });
    const mid = pick(time, { day:"#9aa387", dusk:"#5c5266", night:"#141d33", storm:"#68705f" });
    const [g1, g2] = groundColors(t, time);
    let out = "";
    if (t === "mountain") {
      out += ridge(HORIZON - 130, 150, far, R, true) + ridge(HORIZON - 40, 120, mid, R, true);
    } else if (t === "hills" || t === "oasis") {
      out += ridge(HORIZON - 90, 90, far, R) + ridge(HORIZON - 20, 70, mid, R);
    } else if (t === "desert") {
      out += ridge(HORIZON - 60, 45, far, R);
    } else if (t === "valley" || t === "plain" || t === "river" || t === "lake") {
      out += ridge(HORIZON - 110, 110, far, R, t === "valley") + ridge(HORIZON - 30, 40, mid, R);
    } else if (t === "coast") {
      out += ridge(HORIZON - 70, 60, far, R);
    }
    // water band for sea/lake/river before foreground
    const wcol = pick(time, { day:"#5f93b8", dusk:"#584f7d", night:"#0e1a38", storm:"#4a5b68" });
    const whi  = pick(time, { day:"#9cc4dd", dusk:"#8d7ba0", night:"#28406e", storm:"#6d8391" });
    if (cfg.water === "sea" || t === "coast") {
      out += `<rect x="0" y="${HORIZON - 14}" width="${W}" height="120" fill="${wcol}"/>`;
      for (let i = 0; i < 26; i++) out += `<path d="M${(R()*W).toFixed(0)} ${(HORIZON + R()*90).toFixed(0)} q 22 -7 46 0" stroke="${whi}" stroke-width="2.5" fill="none" opacity="0.7"/>`;
      out += boats(cfg, R, HORIZON + 8, wcol);
      out += `<path d="M0 ${HORIZON+104} L0 ${H} L${W} ${H} L${W} ${HORIZON+104} Q ${W*0.7} ${HORIZON+84} ${W*0.4} ${HORIZON+104} T 0 ${HORIZON+104} Z" fill="${g1}"/>`;
    } else if (cfg.water === "lake" || t === "lake") {
      out += `<path d="M300 ${HORIZON-6} Q ${W/2} ${HORIZON-30} ${W-300} ${HORIZON-6} L${W-140} ${HORIZON+70} Q ${W/2} ${HORIZON+108} 140 ${HORIZON+70} Z" fill="${wcol}"/>`;
      for (let i = 0; i < 16; i++) out += `<path d="M${(400+R()*(W-800)).toFixed(0)} ${(HORIZON+10+R()*50).toFixed(0)} q 18 -6 40 0" stroke="${whi}" stroke-width="2" fill="none" opacity="0.7"/>`;
      out += boats(cfg, R, HORIZON + 16, wcol);
      out += `<path d="M0 ${H} L0 ${HORIZON+60} Q ${W*0.25} ${HORIZON+96} ${W/2} ${HORIZON+100} Q ${W*0.78} ${HORIZON+96} ${W} ${HORIZON+64} L${W} ${H} Z" fill="${g1}"/>`;
    } else if (cfg.water === "river" || t === "river") {
      out += `<rect x="0" y="${HORIZON}" width="${W}" height="${H-HORIZON}" fill="${g1}"/>`;
      out += `<path d="M${W*0.32} ${HORIZON} Q ${W*0.42} ${HORIZON+80} ${W*0.3} ${H} L${W*0.52} ${H} Q ${W*0.52} ${HORIZON+70} ${W*0.44} ${HORIZON} Z" fill="${wcol}"/>`;
      for (let i = 0; i < 10; i++) out += `<path d="M${(W*0.34+R()*W*0.12).toFixed(0)} ${(HORIZON+20+R()*(H-HORIZON-40)).toFixed(0)} q 14 -5 30 0" stroke="${whi}" stroke-width="2" fill="none" opacity="0.6"/>`;
    } else {
      out += `<rect x="0" y="${HORIZON}" width="${W}" height="${H-HORIZON}" fill="${g1}"/>`;
    }
    // ground texture
    out += `<path d="M0 ${H} L0 ${HORIZON+90} Q ${W/2} ${HORIZON+50} ${W} ${HORIZON+96} L${W} ${H} Z" fill="${g2}" opacity="0.55"/>`;
    if (t === "desert") {
      for (let i = 0; i < 8; i++) {
        const x = R()*W, y = HORIZON + 40 + R()*(H-HORIZON-80);
        out += `<path d="M${(x-90).toFixed(0)} ${y.toFixed(0)} Q ${x.toFixed(0)} ${(y-24).toFixed(0)} ${(x+90).toFixed(0)} ${y.toFixed(0)}" stroke="${g2}" stroke-width="3" fill="none" opacity="0.8"/>`;
      }
    }
    return out;
  }

  function boats(cfg, R, y, wcol) {
    if (cfg.time === "night") return "";
    const s = silCol(cfg.time);
    let out = "";
    const n = 2 + Math.floor(R() * 2);
    for (let i = 0; i < n; i++) {
      const x = 300 + R() * (W - 600), sc = 0.6 + R() * 0.7;
      out += `<g transform="translate(${x.toFixed(0)},${y+R()*40}) scale(${sc.toFixed(2)})">
        <path d="M-40 0 Q0 18 40 0 L30 -6 L-32 -6 Z" fill="${s}"/>
        <line x1="0" y1="-6" x2="0" y2="-46" stroke="${s}" stroke-width="3"/>
        <path d="M0 -46 L30 -12 L0 -12 Z" fill="${s}" opacity="0.9"/></g>`;
    }
    return out;
  }

  /* ---------- vegetation ---------- */
  function tree(kind, x, y, sc, time) {
    const s = silCol(time);
    const leaf = pick(time, { day:"#5c7a45", dusk:"#3c4740", night:"#111a2b", storm:"#485743" });
    if (kind === "palm")
      return `<g transform="translate(${x},${y}) scale(${sc})"><path d="M0 0 C 4 -30 2 -60 8 -84" stroke="${s}" stroke-width="6" fill="none"/>
        ${[-80,-45,-10,25,60,95].map(a => `<path d="M8 -84 q ${Math.cos(a*Math.PI/180)*46} ${Math.sin(a*Math.PI/180)*26 - 14} ${Math.cos(a*Math.PI/180)*66} ${Math.sin(a*Math.PI/180)*40}" stroke="${leaf}" stroke-width="5" fill="none"/>`).join("")}</g>`;
    if (kind === "cypress")
      return `<g transform="translate(${x},${y}) scale(${sc})"><path d="M0 0 L-9 -20 Q-11 -80 0 -104 Q11 -80 9 -20 Z" fill="${leaf}"/><rect x="-2" y="-6" width="4" height="8" fill="${s}"/></g>`;
    // olive / generic
    return `<g transform="translate(${x},${y}) scale(${sc})"><path d="M0 0 C -3 -14 3 -26 -2 -38" stroke="${s}" stroke-width="7" fill="none"/>
      <ellipse cx="-14" cy="-46" rx="20" ry="13" fill="${leaf}"/><ellipse cx="10" cy="-52" rx="24" ry="15" fill="${leaf}"/><ellipse cx="-2" cy="-60" rx="18" ry="12" fill="${leaf}"/></g>`;
  }

  function vegetation(cfg, R) {
    const kind = cfg.veg === "palm" ? "palm" : cfg.veg === "cypress" ? "cypress" : "olive";
    if (cfg.veg === "sparse") {
      let out = "";
      for (let i = 0; i < 5; i++) out += tree(R() > 0.5 ? "olive" : "cypress", R()*W, HORIZON + 60 + R()*140, 0.5 + R()*0.5, cfg.time);
      return out;
    }
    let out = "";
    const n = cfg.veg === "mixed" ? 12 : 10;
    for (let i = 0; i < n; i++) {
      const k = cfg.veg === "mixed" ? ["olive","palm","cypress"][Math.floor(R()*3)] : kind;
      out += tree(k, R()*W, HORIZON + 50 + R()*170, 0.6 + R()*0.9, cfg.time);
    }
    return out;
  }

  /* ---------- settlements ---------- */
  function houseCluster(x, y, sc, time, period, R, n) {
    const [face, shade] = buildingCols(time, period);
    const win = time === "night" ? "#ffb347" : pick(time, { day:"#4a3b26", dusk:"#2e2438", storm:"#3a382e" });
    let out = `<g transform="translate(${x},${y}) scale(${sc})">`;
    let cx = 0;
    for (let i = 0; i < n; i++) {
      const w = 54 + R()*40, h = 44 + R()*30, off = R()*16;
      out += `<rect x="${cx}" y="${-h-off}" width="${w}" height="${h+off}" fill="${i%2 ? shade : face}"/>`;
      // flat roofline + roof-edge parapet
      out += `<rect x="${cx-2}" y="${-h-off-4}" width="${w+4}" height="5" fill="${shade}"/>`;
      // door + window(s)
      out += `<rect x="${cx + w*0.38}" y="${-22}" width="12" height="22" fill="${win}" opacity="0.95"/>`;
      if (R() > 0.35) out += `<rect x="${cx + w*0.15}" y="${-h-off+12}" width="9" height="10" fill="${win}" opacity="${time==="night" ? (R()>0.5?0.95:0.25) : 0.9}"/>`;
      if (R() > 0.6)  out += `<rect x="${cx + w*0.7}" y="${-h-off+14}" width="9" height="10" fill="${win}" opacity="${time==="night" ? (R()>0.6?0.95:0.2) : 0.9}"/>`;
      // exterior stair on some
      if (R() > 0.6) out += `<path d="M${cx} ${0} l-16 0 l16 ${-h*0.8} l8 0 Z" fill="${shade}" opacity="0.9"/>`;
      cx += w + 6 + R()*14;
    }
    out += `</g>`;
    return out;
  }

  function cityWall(cfg, R) {
    const time = cfg.time, period = cfg.period;
    const [face, shade] = buildingCols(time, period);
    const y = HORIZON + 78;
    let out = `<g>`;
    // wall
    out += `<rect x="620" y="${y-120}" width="1360" height="120" fill="${face}"/>`;
    // crenellation
    for (let x = 620; x < 1980; x += 44) out += `<rect x="${x}" y="${y-134}" width="24" height="14" fill="${face}"/>`;
    // towers
    for (const tx of [620, 1240, 1956]) {
      out += `<rect x="${tx-24}" y="${y-176}" width="72" height="176" fill="${shade}"/>`;
      for (let x = tx-24; x < tx+48; x += 26) out += `<rect x="${x}" y="${y-190}" width="15" height="14" fill="${shade}"/>`;
    }
    // gate
    out += `<path d="M1272 ${y} l0 -76 q 34 -30 68 0 l0 76 Z" fill="${pick(time,{day:"#3d2f1d",dusk:"#241c30",night:"#060a15",storm:"#2e2c24"})}"/>`;
    // rooftops behind wall
    out += houseCluster(700, y-120, 0.9, time, period, R, 6);
    out += houseCluster(1420, y-124, 0.8, time, period, R, 5);
    if (period === "roman" || period === "hellenistic") {
      // colonnaded facade + red roofs
      out += `<g transform="translate(1600,${y-124})">${columns(8, 90, time)}</g>`;
    }
    // torches at gate for night
    if (time === "night") out += fire(1258, y-84, 0.5) + fire(1354, y-84, 0.5);
    return out + `</g>`;
  }

  function columns(n, h, time) {
    const c = pick(time, { day:"#efe6cf", dusk:"#b39a83", night:"#3a4160", storm:"#a89f8b" });
    const s = pick(time, { day:"#cabb9d", dusk:"#8d7663", night:"#2b3049", storm:"#8b8371" });
    let out = `<rect x="-14" y="${-h-18}" width="${n*34+14}" height="16" fill="${s}"/><path d="M-22 ${-h-18} L${n*34+22} ${-h-18} L${n*34-20} ${-h-52} L18 ${-h-52} Z" fill="${c}"/>`;
    for (let i = 0; i < n; i++) out += `<rect x="${i*34}" y="${-h}" width="14" height="${h}" fill="${c}"/><rect x="${i*34-3}" y="${-h-6}" width="20" height="7" fill="${s}"/>`;
    return out;
  }

  function temple(cfg, R) {
    const time = cfg.time, period = cfg.period, y = HORIZON + 70;
    const [face, shade] = buildingCols(time, period);
    let out = houseCluster(560, y+10, 0.85, time, period, R, 5);
    if (period === "bronze" || (period === "iron" && /babylon|ur|nineveh|susa/.test(cfg.seed))) {
      // ziggurat
      out += `<g transform="translate(1150,${y})">
        <rect x="0" y="-70" width="420" height="70" fill="${face}"/>
        <rect x="60" y="-130" width="300" height="60" fill="${shade}"/>
        <rect x="130" y="-180" width="160" height="50" fill="${face}"/>
        <rect x="180" y="-212" width="60" height="32" fill="${shade}"/>
        <path d="M195 0 L225 0 L225 -212 L195 -212 Z" fill="${shade}" opacity="0.55"/></g>`;
    } else if (period === "roman" || period === "hellenistic") {
      out += `<g transform="translate(1150,${y})">${columns(10, 130, time)}</g>`;
      out += houseCluster(1620, y+6, 0.9, time, period, R, 4);
    } else {
      // Israelite temple/shrine: porch with two pillars on a platform
      out += `<g transform="translate(1150,${y})">
        <rect x="-40" y="-24" width="500" height="24" fill="${shade}"/>
        <rect x="40" y="-160" width="340" height="136" fill="${face}"/>
        <rect x="150" y="-186" width="120" height="26" fill="${shade}"/>
        <rect x="96" y="-140" width="22" height="116" fill="${shade}"/>
        <rect x="304" y="-140" width="22" height="116" fill="${shade}"/>
        <rect x="196" y="-96" width="30" height="72" fill="${pick(time,{day:"#3d2f1d",night:"#0a1020",dusk:"#241c30",storm:"#2e2c24"})}"/></g>`;
    }
    if (time === "night") out += fire(1190, y-30, 0.7) + fire(1520, y-30, 0.6);
    return out;
  }

  function tents(cfg, R) {
    const time = cfg.time, y0 = HORIZON + 40;
    const tcol = pick(time, { day:"#7a6547", dusk:"#4b3f52", night:"#141a2c", storm:"#5a5648" });
    const tcol2 = pick(time, { day:"#8d7856", dusk:"#5a4c60", night:"#1b2236", storm:"#686250" });
    let out = "";
    for (let i = 0; i < 16; i++) {
      const x = 120 + R() * (W - 240), y = y0 + R() * 150, sc = 0.55 + (y - y0) / 150 * 0.75;
      out += `<g transform="translate(${x.toFixed(0)},${y.toFixed(0)}) scale(${sc.toFixed(2)})">
        <path d="M-52 0 L0 -46 L52 0 Z" fill="${i%2?tcol:tcol2}"/>
        <path d="M0 -46 L18 0 L-4 0 Z" fill="${pick(time,{day:"#4f4130",dusk:"#332b42",night:"#0a0f1e",storm:"#3c392f"})}"/>
        <line x1="0" y1="-46" x2="0" y2="-60" stroke="${tcol}" stroke-width="3"/></g>`;
    }
    // banners + fires
    out += `<g><line x1="1300" y1="${y0+40}" x2="1300" y2="${y0-80}" stroke="${tcol2}" stroke-width="4"/><path d="M1300 ${y0-80} l 54 12 l-54 12 Z" fill="${pick(time,{day:"#8f1d1d",night:"#57221f",dusk:"#6e2331",storm:"#6e2a26"})}"/></g>`;
    const nf = time === "night" ? 7 : 3;
    for (let i = 0; i < nf; i++) out += fire(200 + R() * (W - 400), y0 + 40 + R() * 130, 0.6 + R() * 0.6);
    return out;
  }

  function fire(x, y, sc) {
    return `<g transform="translate(${x.toFixed(0)},${y.toFixed(0)}) scale(${sc})">
      <ellipse cx="0" cy="6" rx="60" ry="26" fill="url(#fireglow)"/>
      <path d="M-9 4 Q-11 -12 0 -22 Q4 -12 3 -8 Q10 -14 8 -2 Q14 2 6 8 Q-6 12 -9 4 Z" fill="#ff9d3b"/>
      <path d="M-4 3 Q-4 -6 0 -12 Q5 -5 3 6 Z" fill="#ffd56b"/>
      <line x1="-12" y1="8" x2="12" y2="5" stroke="#3a2c1a" stroke-width="3"/></g>`;
  }

  function wellSpring(cfg) {
    const time = cfg.time;
    const stone = pick(time, { day:"#9a8a68", dusk:"#6a5c52", night:"#232941", storm:"#7a7260" });
    const wcol = pick(time, { day:"#6fa3c0", dusk:"#5d5484", night:"#16244a", storm:"#537080" });
    if (cfg.water === "spring")
      return `<g transform="translate(2160,${HORIZON+180})">
        <ellipse cx="0" cy="0" rx="120" ry="30" fill="${wcol}"/>
        <ellipse cx="0" cy="-3" rx="120" ry="28" fill="none" stroke="${stone}" stroke-width="5"/>
        <path d="M-140 -30 q 20 -30 44 -10" stroke="${wcol}" stroke-width="8" fill="none"/>
        ${tree("palm", -170, 10, 0.8, time)}${tree("olive", 150, 16, 0.8, time)}</g>`;
    if (cfg.water === "well")
      return `<g transform="translate(2140,${HORIZON+170})">
        <ellipse cx="0" cy="8" rx="46" ry="14" fill="${stone}"/>
        <rect x="-46" y="-22" width="92" height="30" fill="${stone}"/>
        <ellipse cx="0" cy="-22" rx="46" ry="13" fill="${pick(time,{day:"#3d3421",night:"#0a1020",dusk:"#292136",storm:"#33302a"})}"/>
        <line x1="-38" y1="-30" x2="-38" y2="-74" stroke="${stone}" stroke-width="5"/>
        <line x1="38" y1="-30" x2="38" y2="-74" stroke="${stone}" stroke-width="5"/>
        <line x1="-42" y1="-74" x2="42" y2="-74" stroke="${stone}" stroke-width="5"/>
        <line x1="0" y1="-74" x2="0" y2="-48" stroke="${stone}" stroke-width="3"/>
        <path d="M-9 -48 h18 v14 h-18 Z" fill="${stone}"/></g>`;
    return "";
  }

  /* ---------- figures ---------- */
  function figure(variant, col, accent) {
    // drawn in a 0,0-origin box: feet at (0,0), ~46 tall
    const robe = `<path d="M-9 0 L-11 -30 Q0 -38 11 -30 L9 0 Z" fill="${col}"/><circle cx="0" cy="-37" r="6.5" fill="${col}"/>`;
    const acc = accent || "#c9a227";
    switch (variant) {
      case "king": return robe + `<path d="M-6 -43 L-6 -47 L-3 -44 L0 -49 L3 -44 L6 -47 L6 -43 Z" fill="${acc}"/><path d="M-11 -30 L-13 -2 L-7 -2 L-8 -28 Z" fill="${acc}" opacity="0.7"/>`;
      case "prophet": return robe + `<line x1="10" y1="2" x2="16" y2="-52" stroke="${col}" stroke-width="2.5"/><path d="M-11 -30 q-8 10 -6 26" stroke="${col}" stroke-width="4" fill="none"/>`;
      case "priest": return robe + `<rect x="-4" y="-50" width="8" height="8" fill="${acc}"/><rect x="-5" y="-26" width="10" height="10" fill="${acc}" opacity="0.8"/>`;
      case "warrior": return robe + `<line x1="12" y1="4" x2="12" y2="-58" stroke="${col}" stroke-width="2.5"/><path d="M12 -58 l4 10 l-8 0 Z" fill="${col}"/><circle cx="-13" cy="-18" r="8" fill="${col}" opacity="0.85"/>`;
      case "woman": return robe + `<ellipse cx="0" cy="-49" rx="5" ry="7" fill="${col}"/><path d="M-6.5 -37 q6.5 8 13 0 l0 14 q-6.5 5 -13 0 Z" fill="${col}" opacity="0.65"/>`;
      case "shepherd": return robe + `<path d="M13 2 L13 -50 q0 -8 -8 -6" stroke="${col}" stroke-width="2.5" fill="none"/><ellipse cx="-20" cy="-4" rx="9" ry="6" fill="${col}" opacity="0.8"/><circle cx="-27" cy="-8" r="3" fill="${col}"/>`;
      case "traveler": return robe + `<line x1="11" y1="2" x2="15" y2="-46" stroke="${col}" stroke-width="2.5"/><ellipse cx="-10" cy="-32" rx="6" ry="8" fill="${col}" opacity="0.8"/>`;
      case "fisherman": return robe + `<path d="M10 -20 q14 6 12 20" stroke="${col}" stroke-width="2" fill="none"/><path d="M10 -20 q18 0 12 20 q-8 4 -12 -20" fill="${col}" opacity="0.35"/>`;
      case "official": return robe + `<rect x="8" y="-28" width="12" height="4" fill="${acc}" transform="rotate(-20 8 -28)"/>`;
      case "elder": return robe + `<path d="M-4 -31 q4 6 8 0 l0 8 q-4 3 -8 0 Z" fill="#ddd" opacity="0.9"/><path d="M12 2 q2 -24 0 -44" stroke="${col}" stroke-width="2.5" fill="none"/>`;
      case "youth": return `<path d="M-7 0 L-8 -24 Q0 -30 8 -24 L7 0 Z" fill="${col}"/><circle cx="0" cy="-30" r="5.5" fill="${col}"/>`;
      default: return robe;
    }
  }

  function backgroundFigures(cfg, R) {
    if (cfg.settlement === "none") return "";
    const s = silCol(cfg.time);
    const variants = cfg.settlement === "camp" ? ["warrior","warrior","traveler","shepherd"] : ["traveler","woman","shepherd","elder","youth"];
    let out = "";
    const n = 5 + Math.floor(R() * 4);
    for (let i = 0; i < n; i++) {
      const x = 100 + R() * (W - 200), y = HORIZON + 120 + R() * 150, sc = 0.8 + (y - HORIZON - 120) / 150 * 0.9;
      out += `<g transform="translate(${x.toFixed(0)},${y.toFixed(0)}) scale(${sc.toFixed(2)})">${figure(variants[Math.floor(R()*variants.length)], s)}</g>`;
    }
    // an animal or two
    if (R() > 0.4) {
      const x = 100 + R() * (W - 200), y = HORIZON + 180 + R() * 80;
      out += `<g transform="translate(${x.toFixed(0)},${y.toFixed(0)}) scale(1.1)">
        <path d="M-18 0 L-16 -14 Q0 -20 16 -14 L18 0 M-16 -14 q-8 -2 -10 -12 q6 -4 10 2" stroke="${s}" stroke-width="4" fill="none"/><path d="M-26 -26 l3 -6 l3 6" stroke="${s}" stroke-width="2" fill="none"/></g>`;
    }
    return out;
  }

  function path(cfg) {
    const c = pick(cfg.time, { day:"#c7b183", dusk:"#8a7454", night:"#2c3350", storm:"#918a72" });
    return `<path d="M0 ${H} Q ${W*0.3} ${HORIZON+150} ${W*0.5} ${HORIZON+170} T ${W} ${HORIZON+140} L ${W} ${H} L ${W*0.7} ${H} Q ${W*0.5} ${HORIZON+230} ${W*0.25} ${H} Z" fill="${c}" opacity="0.55"/>`;
  }

  function hotspotSVG(h, i, time) {
    const x = Math.round(h.x * W), y = HORIZON + 100;
    const lift = (i % 2) * 30; // stagger labels so neighbors don't collide
    const labelCol = "#f3d97a";
    const s = pick(time, { day:"#41321c", dusk:"#241d33", night:"#05080f", storm:"#33312a" });
    const inner = h.type === "person"
      ? `<g transform="scale(2)">${figure(h.av || "traveler", s)}</g>`
      : `<g><circle cx="0" cy="-26" r="17" fill="${s}" opacity="0.85"/><text x="0" y="-19" text-anchor="middle" font-size="20">🏺</text></g>`;
    return `<g class="svg-hotspot" data-hs="${i}" transform="translate(${x},${y})">
      <rect x="-90" y="-158" width="180" height="170" fill="transparent"/>
      ${inner}
      <circle class="pulse" cx="0" cy="${-108 - lift}" r="7" fill="none" stroke="${labelCol}" stroke-width="2"/>
      <circle cx="0" cy="${-108 - lift}" r="4.5" fill="${labelCol}"/>
      <line x1="0" y1="${-103 - lift}" x2="0" y2="-80" stroke="${labelCol}" stroke-width="1.5" opacity="0.8"/>
      <text x="0" y="${-118 - lift}" text-anchor="middle" font-size="18" font-weight="bold" fill="${labelCol}" stroke="#000" stroke-width="3.5" paint-order="stroke" font-family="Georgia, serif">${esc(h.label)}</text>
    </g>`;
  }

  /* ---------- main ---------- */
  function build(cfg) {
    const R = rng(cfg.seed || "x");
    let out = sky(cfg.time, R);
    out += terrainLayers(cfg, R);
    out += path(cfg);
    if (cfg.settlement === "city") out += cityWall(cfg, R);
    else if (cfg.settlement === "village") {
      out += houseCluster(720, HORIZON + 118, 1.15, cfg.time, cfg.period, R, 5);
      out += houseCluster(1380, HORIZON + 100, 0.95, cfg.time, cfg.period, R, 4);
      out += houseCluster(300, HORIZON + 92, 0.7, cfg.time, cfg.period, R, 3);
      if (cfg.time === "night") out += fire(1080, HORIZON + 170, 0.8);
    }
    else if (cfg.settlement === "camp") out += tents(cfg, R);
    else if (cfg.settlement === "temple") out += temple(cfg, R);
    out += vegetation(cfg, R);
    out += wellSpring(cfg);
    out += backgroundFigures(cfg, R);
    // rocks foreground
    const rc = pick(cfg.time, { day:"#8f815f", dusk:"#5d5348", night:"#1c2236", storm:"#6d6757" });
    for (let i = 0; i < 7; i++) {
      const x = R()*W, y = HORIZON + 200 + R()*(H-HORIZON-220), sc2 = 0.5 + R();
      out += `<g transform="translate(${x.toFixed(0)},${y.toFixed(0)}) scale(${sc2.toFixed(2)})"><path d="M-20 0 Q-16 -18 0 -16 Q16 -20 20 0 Z" fill="${rc}"/></g>`;
    }
    (cfg.hotspots || []).forEach((h, i) => { out += hotspotSVG(h, i, cfg.time); });
    // subtle vignette
    out += `<rect width="${W}" height="${H}" fill="black" opacity="${cfg.time === "night" ? 0.12 : 0.04}" pointer-events="none"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice">${out}</svg>`;
  }

  /* Render into viewport + wire dragging & hotspot clicks. */
  function render(viewport, cfg, onHotspot) {
    viewport.innerHTML = build(cfg);
    const svg = viewport.querySelector("svg");
    // size: svg displayed at viewport height; width proportional (wider than viewport)
    const vh = viewport.clientHeight || 330;
    const dispW = W * (vh / H);
    svg.style.width = dispW + "px";
    svg.style.height = vh + "px";
    let offset = -(dispW - viewport.clientWidth) / 2;
    const clamp = v => Math.min(0, Math.max(viewport.clientWidth - dispW, v));
    offset = clamp(offset);
    svg.style.transform = `translateX(${offset}px)`;
    svg.style.willChange = "transform";

    let dragging = false, startX = 0, startOff = 0, moved = 0;
    const down = e => { dragging = true; moved = 0; startX = (e.touches ? e.touches[0].clientX : e.clientX); startOff = offset; viewport.classList.add("dragging"); };
    const move = e => {
      if (!dragging) return;
      const x = (e.touches ? e.touches[0].clientX : e.clientX);
      moved += Math.abs(x - startX);
      offset = clamp(startOff + (x - startX));
      svg.style.transform = `translateX(${offset}px)`;
      if (e.cancelable && e.touches) e.preventDefault();
    };
    const up = () => { dragging = false; viewport.classList.remove("dragging"); };
    viewport.onmousedown = down; viewport.onmousemove = move;
    window.addEventListener("mouseup", up);
    viewport.ontouchstart = down; viewport.ontouchmove = move; viewport.ontouchend = up;

    svg.querySelectorAll(".svg-hotspot").forEach(g => {
      g.addEventListener("click", e => {
        if (moved > 8) return; // was a drag
        const i = parseInt(g.getAttribute("data-hs"), 10);
        if (onHotspot) onHotspot(i, e);
      });
    });
  }

  /* Small standalone avatar SVG for people cards. */
  function avatar(variant) {
    const col = "#6b4c22";
    return `<svg viewBox="-24 -70 48 78" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="-32" r="33" fill="#efe4c8"/>${figure(variant || "traveler", col)}</svg>`;
  }

  return { render, avatar };
})();
