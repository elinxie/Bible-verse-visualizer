/* Present-day location panel: prefers Google's key-less Street View / 360
   panorama URL at the selected place's coordinates, then keeps an explicit
   Maps explorer fallback so users can drag Pegman or browse nearby roads and
   360 photo dots. No API key or build step is required for this static site. */
window.BVV = window.BVV || {};
BVV.streetview = (function () {
  function enc(s) { return encodeURIComponent(String(s)); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function coords(place) { return `${place.lat},${place.lon}`; }

  function panoEmbedSrc(lat, lon) {
    // Key-less Google Maps Street View embed. Google selects the nearest
    // available panorama/360 photo to cbll when coverage exists.
    return `https://maps.google.com/maps?layer=c&cbll=${lat},${lon}&cbp=11,0,0,0,0&output=svembed`;
  }

  function explorerEmbedSrc(lat, lon) {
    // Standard embeddable map UI with Pegman and nearby roads/360-photo dots.
    return `https://maps.google.com/maps?q=${lat},${lon}&z=17&t=k&output=embed`;
  }

  function standalonePanoLink(lat, lon) {
    // Opens Google Maps directly in nearest Street View / 360 panorama mode.
    return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lon}`;
  }

  function mapsLink(lat, lon, name) {
    return `https://www.google.com/maps/search/?api=1&query=${enc(`${name} ${lat},${lon}`)}`;
  }

  function setMode(container, place, mode) {
    const frame = container.querySelector(".streetview-frame");
    const buttons = container.querySelectorAll("[data-streetview-mode]");
    if (!frame) return;
    const isExplore = mode === "explore";
    frame.src = isExplore ? explorerEmbedSrc(place.lat, place.lon) : panoEmbedSrc(place.lat, place.lon);
    frame.title = isExplore ? `Map explorer for ${place.name}` : `Nearest Street View panorama for ${place.name}`;
    buttons.forEach(btn => btn.classList.toggle("active", btn.getAttribute("data-streetview-mode") === mode));
    const note = container.querySelector(".streetview-mode-note");
    if (note) note.textContent = isExplore
      ? "Explorer mode: use the Google Maps UI, drag Pegman, or select nearby 360 photo dots."
      : "Nearest 360 mode: Google attempts to open the closest available Street View / 360 panorama.";
  }

  function render(container, place) {
    if (!place) { container.innerHTML = ""; return; }
    const pano = standalonePanoLink(place.lat, place.lon);
    const maps = mapsLink(place.lat, place.lon, place.name);
    container.innerHTML = `
      <div class="streetview-toolbar" aria-label="Present-day Street View controls">
        <button type="button" class="active" data-streetview-mode="pano">Nearest 360</button>
        <button type="button" data-streetview-mode="explore">Map + drag Pegman</button>
        <a href="${pano}" target="_blank" rel="noopener">Open 360 in Google Maps ↗</a>
        <a href="${maps}" target="_blank" rel="noopener">Google Maps ↗</a>
      </div>
      <iframe class="streetview-frame" src="${panoEmbedSrc(place.lat, place.lon)}" loading="lazy"
        allowfullscreen referrerpolicy="no-referrer-when-downgrade"
        title="Nearest Street View panorama for ${esc(place.name)}"></iframe>
      <p class="streetview-fallback"><b>${esc(place.name)}</b> (${coords(place)}):
        <span class="streetview-mode-note">Nearest 360 mode: Google attempts to open the closest available Street View / 360 panorama.</span>
        Coverage is thin at some remote biblical sites; use explorer mode to browse nearby roads or 360 photo dots.</p>`;
    container.querySelectorAll("[data-streetview-mode]").forEach(btn => {
      btn.addEventListener("click", () => setMode(container, place, btn.getAttribute("data-streetview-mode")));
    });
  }

  return { render, panoEmbedSrc, explorerEmbedSrc, standalonePanoLink, mapsLink };
})();
