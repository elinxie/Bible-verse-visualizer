/* Leaflet map: numbered period-labeled markers, journey routes with
   distances, and click-through to the ancient scene view. */
window.BVV = window.BVV || {};
BVV.map = (function () {
  let map = null, layerGroup = null;

  function ensure() {
    if (map) return map;
    map = L.map("map", { scrollWheelZoom: true, worldCopyJump: true });
    const topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      maxZoom: 16, attribution: "© OpenStreetMap, SRTM | © OpenTopoMap (CC-BY-SA)"
    });
    const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "© OpenStreetMap contributors"
    });
    const sat = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 18, attribution: "Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics"
    });
    topo.addTo(map);
    L.control.layers({ "Terrain": topo, "Streets": osm, "Satellite": sat }).addTo(map);
    layerGroup = L.layerGroup().addTo(map);
    return map;
  }

  function haversine(a, b) {
    const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLon = (b.lon - a.lon) * Math.PI / 180;
    const q = Math.sin(dLat/2)**2 + Math.cos(a.lat*Math.PI/180) * Math.cos(b.lat*Math.PI/180) * Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(q), Math.sqrt(1-q));
  }

  /* placesInfo: [{place, role, order}]  journeys: curated legs or null */
  function show(placesInfo, journeys, onViewScene) {
    if (typeof L === "undefined") {
      document.getElementById("map").innerHTML =
        '<p style="padding:1rem;font-size:.85rem">Map library failed to load — check your connection and reload.</p>';
      return (journeys || []).map((leg, i) => {
        const a = BVV.placeById(leg.from), b = BVV.placeById(leg.to);
        return a && b ? { ...leg, km: leg.km || Math.round(haversine(a, b)), a, b, no: i + 1 } : null;
      }).filter(Boolean);
    }
    const m = ensure();
    layerGroup.clearLayers();
    const bounds = [];

    placesInfo.forEach((pi, idx) => {
      const p = pi.place;
      bounds.push([p.lat, p.lon]);
      const cls = p.type === "camp" || (pi.role || "").toLowerCase().includes("camp") ? "map-marker camp" : "map-marker";
      const icon = L.divIcon({ className: "", html: `<div class="${cls}">${idx + 1}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] });
      const mk = L.marker([p.lat, p.lon], { icon }).addTo(layerGroup);
      const el = document.createElement("div");
      el.className = "map-popup";
      el.innerHTML = `<h3>${p.name}</h3>
        ${pi.role ? `<p><b>${pi.role}</b></p>` : ""}
        <p class="ancient-note">${p.ancient}</p>
        <p>${p.blurb}</p>
        ${p.meaning ? `<p class="place-meaning">${p.meaning}</p>` : ""}
        <p style="opacity:.7">Today: ${p.modern}</p>
        <button data-view="${p.id}">👁 Open ancient view</button>`;
      el.querySelector("button").addEventListener("click", () => onViewScene(p.id));
      mk.bindPopup(el, { maxWidth: 300 });
      mk.bindTooltip(p.name, { permanent: true, direction: "bottom", offset: [0, 12], className: "map-label", opacity: 0.85 });
    });

    // journey polylines
    const legsOut = [];
    (journeys || []).forEach((leg, i) => {
      const a = BVV.placeById(leg.from), b = BVV.placeById(leg.to), via = leg.via ? BVV.placeById(leg.via) : null;
      if (!a || !b) return;
      const pts = via ? [[a.lat, a.lon], [via.lat, via.lon], [b.lat, b.lon]] : [[a.lat, a.lon], [b.lat, b.lon]];
      const km = leg.km || Math.round((via ? haversine(a, via) + haversine(via, b) : haversine(a, b)));
      L.polyline(pts, {
        color: leg.dashed ? "#7a3b8f" : "#8f1d1d", weight: 3.5, opacity: 0.85,
        dashArray: leg.dashed ? "2 8" : "8 6"
      }).addTo(layerGroup).bindTooltip(`${leg.label} — ~${km} km`, { sticky: true });
      legsOut.push({ ...leg, km, a, b, no: i + 1 });
    });

    if (bounds.length) m.fitBounds(bounds, { padding: [46, 46], maxZoom: 11 });
    setTimeout(() => m.invalidateSize(), 60);
    return legsOut;
  }

  return { show, haversine };
})();
