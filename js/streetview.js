/* Present-day location panel: embeds Google's key-less Maps "output=embed"
   iframe (hybrid satellite/street view) centered on the place's real-world
   coordinates, with a draggable Street View pegman inside the frame, plus a
   standalone link that opens the same spot directly in Street View. The
   older undocumented "svembed" trick is intentionally avoided — Google
   frequently blocks it from being framed, while "output=embed" is the
   documented, reliably embeddable form. */
window.BVV = window.BVV || {};
BVV.streetview = (function () {
  function embedSrc(lat, lon) {
    return `https://maps.google.com/maps?q=${lat},${lon}&z=17&t=k&output=embed`;
  }
  function standaloneLink(lat, lon) {
    // Opens directly in Street View mode (pegman dropped at the coordinates).
    return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lon}`;
  }

  function render(container, place) {
    if (!place) { container.innerHTML = ""; return; }
    const src = embedSrc(place.lat, place.lon);
    const link = standaloneLink(place.lat, place.lon);
    container.innerHTML = `
      <iframe class="streetview-frame" src="${src}" loading="lazy"
        allowfullscreen referrerpolicy="no-referrer-when-downgrade"
        title="Present-day map of ${place.name}"></iframe>
      <p class="streetview-fallback">Drag the orange pegman (bottom-right of the map) onto a road for Street View,
        or <a href="${link}" target="_blank" rel="noopener">open ${place.name} in Street View on a standalone page ↗</a>.
        Coverage is thin at some remote biblical sites.</p>`;
  }

  return { render, embedSrc, standaloneLink };
})();
