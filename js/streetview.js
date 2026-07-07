/* Present-day Street View panel: embeds Google's Street View for a
   place's real-world coordinates so you can see what it looks like today.
   Uses the key-less "svembed" Maps embed (cbll = lat,lon) with a manual
   Maps link as a fallback for places where imagery isn't available. */
window.BVV = window.BVV || {};
BVV.streetview = (function () {
  function embedSrc(lat, lon) {
    return `https://www.google.com/maps?layer=c&cbll=${lat},${lon}&cbp=12,0,,0,0&output=svembed`;
  }
  function mapsLink(lat, lon, name) {
    return `https://www.google.com/maps?q=${encodeURIComponent(name)}&ll=${lat},${lon}&z=15`;
  }

  function render(container, place) {
    if (!place) { container.innerHTML = ""; return; }
    const src = embedSrc(place.lat, place.lon);
    const link = mapsLink(place.lat, place.lon, place.name);
    container.innerHTML = `
      <iframe class="streetview-frame" src="${src}" loading="lazy"
        allowfullscreen referrerpolicy="no-referrer-when-downgrade"
        title="Present-day street view of ${place.name}"></iframe>
      <p class="streetview-fallback">Not seeing imagery? Street View coverage is thin in some regions.
        <a href="${link}" target="_blank" rel="noopener">Open ${place.name} in Google Maps ↗</a></p>`;
  }

  return { render, embedSrc, mapsLink };
})();
