/* Collapsible, rearrangeable dashboard panels. Layout preferences stay in this browser. */
window.BVV = window.BVV || {};
BVV.layout = (function () {
  const STORAGE_KEY = "bvv-panel-layout-v1";
  let grid;

  function panels() { return Array.from(grid.querySelectorAll(":scope > .panel")); }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        order: panels().map(panel => panel.dataset.panelId),
        minimized: panels().filter(panel => panel.classList.contains("panel-minimized"))
          .map(panel => panel.dataset.panelId)
      }));
    } catch (_) { /* The dashboard still works when storage is unavailable. */ }
  }

  function notifyResize() {
    window.dispatchEvent(new Event("resize"));
    if (BVV.map && typeof BVV.map.invalidateSize === "function") BVV.map.invalidateSize();
  }

  function setMinimized(panel, minimized) {
    panel.classList.toggle("panel-minimized", minimized);
    const button = panel.querySelector(".panel-minimize");
    button.textContent = minimized ? "+" : "−";
    button.title = minimized ? "Expand card" : "Minimize card";
    button.setAttribute("aria-label", button.title);
    button.setAttribute("aria-expanded", String(!minimized));
    save();
    notifyResize();
  }

  function move(panel, direction) {
    const items = panels();
    const index = items.indexOf(panel);
    const other = items[index + direction];
    if (!other) return;
    if (direction < 0) grid.insertBefore(panel, other);
    else grid.insertBefore(other, panel);
    panel.querySelector(".panel-drag-handle").focus();
    save();
    notifyResize();
  }

  function enhance(panel, index) {
    panel.dataset.panelId = panel.classList.contains("text-panel") ? "passage" :
      Array.from(panel.classList).find(name => name.endsWith("-panel") && name !== "panel") || `panel-${index}`;
    const heading = panel.querySelector(".panel-head");
    const title = heading.querySelector("h2")?.textContent.trim() || "card";
    const controls = document.createElement("div");
    controls.className = "panel-layout-controls";
    controls.innerHTML = `
      <button type="button" class="panel-move panel-move-up" aria-label="Move ${title} earlier" title="Move card earlier">←</button>
      <span class="panel-drag-handle" draggable="true" tabindex="0" role="button" aria-label="Drag to rearrange ${title}" title="Drag to rearrange">⠿</span>
      <button type="button" class="panel-move panel-move-down" aria-label="Move ${title} later" title="Move card later">→</button>
      <button type="button" class="panel-minimize" aria-label="Minimize card" aria-expanded="true" title="Minimize card">−</button>`;
    heading.appendChild(controls);

    controls.querySelector(".panel-move-up").addEventListener("click", () => move(panel, -1));
    controls.querySelector(".panel-move-down").addEventListener("click", () => move(panel, 1));
    controls.querySelector(".panel-minimize").addEventListener("click", () =>
      setMinimized(panel, !panel.classList.contains("panel-minimized")));
    controls.querySelector(".panel-drag-handle").addEventListener("dragstart", event => {
      panel.classList.add("panel-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", panel.dataset.panelId);
    });
    controls.querySelector(".panel-drag-handle").addEventListener("dragend", () => {
      panel.classList.remove("panel-dragging");
      panels().forEach(item => item.classList.remove("panel-drag-over"));
      save();
      notifyResize();
    });
    panel.addEventListener("dragover", event => {
      if (!grid.querySelector(".panel-dragging") || panel.classList.contains("panel-dragging")) return;
      event.preventDefault();
      panel.classList.add("panel-drag-over");
    });
    panel.addEventListener("dragleave", () => panel.classList.remove("panel-drag-over"));
    panel.addEventListener("drop", event => {
      event.preventDefault();
      panel.classList.remove("panel-drag-over");
      const dragged = grid.querySelector(".panel-dragging");
      if (!dragged || dragged === panel) return;
      const box = panel.getBoundingClientRect();
      const after = event.clientY > box.top + box.height / 2;
      grid.insertBefore(dragged, after ? panel.nextSibling : panel);
    });
  }

  function init() {
    grid = document.getElementById("main");
    if (!grid) return;
    grid.classList.add("customizable-layout");
    panels().forEach(enhance);
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved?.order) saved.order.forEach(id => {
        const panel = panels().find(item => item.dataset.panelId === id);
        if (panel) grid.appendChild(panel);
      });
      if (saved?.minimized) panels().forEach(panel =>
        setMinimized(panel, saved.minimized.includes(panel.dataset.panelId)));
    } catch (_) { /* Ignore malformed or inaccessible saved preferences. */ }
  }

  document.addEventListener("DOMContentLoaded", init);
  return { init };
})();
