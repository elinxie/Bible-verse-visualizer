/* Passage-aware study chat.
   Sends the currently loaded passage context to a server-side AI proxy so API
   keys stay off the public page. */
window.BVV = window.BVV || {};
BVV.chat = (function () {
  const ENDPOINT = window.BVV_CHAT_ENDPOINT || "/api/chat";

  function $(id) { return document.getElementById(id); }

  function addMessage(role, text, meta) {
    const log = $("chat-log");
    if (!log) return;
    const msg = document.createElement("div");
    msg.className = `chat-message ${role}`;
    msg.innerHTML = `<div class="chat-role">${role === "user" ? "You" : "Study Chat"}</div><div class="chat-bubble"></div>`;
    msg.querySelector(".chat-bubble").textContent = text;
    if (meta) {
      const small = document.createElement("div");
      small.className = "chat-meta";
      small.textContent = meta;
      msg.appendChild(small);
    }
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }

  function setBusy(busy) {
    const btn = $("chat-send");
    const input = $("chat-question");
    if (btn) btn.disabled = busy;
    if (input) input.disabled = busy;
    if (btn) btn.textContent = busy ? "Checking…" : "Ask";
  }

  function resetForPassage(ctx) {
    const log = $("chat-log");
    if (!log || !ctx) return;
    log.innerHTML = "";
    addMessage("assistant", `Ask me about ${ctx.reference}. I will answer from the passage shown and check the answer before sending it.`, ctx.source ? `Text source: ${ctx.source}` : "");
  }

  async function ask(question) {
    const context = window.BVV.getChatContext && window.BVV.getChatContext();
    if (!context) {
      addMessage("assistant", "Load a passage first, then ask a question about it.");
      return;
    }
    addMessage("user", question);
    setBusy(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, context })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Chat service error (${res.status})`);
      addMessage("assistant", data.answer || "I could not produce an answer from this passage.", data.checked ? "Checked against the supplied passage context." : "");
    } catch (e) {
      addMessage("assistant", `The study chat is not available yet: ${e.message}. The site owner needs to deploy the serverless chat proxy and set its API key.`);
    } finally {
      setBusy(false);
      const input = $("chat-question");
      if (input) input.focus();
    }
  }

  function init() {
    const form = $("chat-form");
    if (!form) return;
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = $("chat-question");
      const q = input.value.trim();
      if (!q) return;
      input.value = "";
      ask(q);
    });
  }

  return { init, resetForPassage };
})();
