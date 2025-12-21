/* ============================
   Minimal Site Starter JS
   ============================ */

/**
 * Mobile nav toggle
 */
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
})();

/**
 * Contact form: lightweight client-side validation + demo submission
 * NOTE: This does not send emails. Hook into a service (Netlify Forms, Formspree, etc.)
 */
(function () {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const statusEl = document.querySelector("#form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const errors = [];
    if (!name) errors.push("Please enter your name.");
    if (!email || !email.includes("@")) errors.push("Please enter a valid email.");
    if (!message) errors.push("Please enter a message.");

    if (errors.length) {
      if (statusEl) statusEl.textContent = errors.join(" ");
      return;
    }

    // Demo success (replace with real submission)
    if (statusEl) statusEl.textContent = "Thanks! Your message is ready to send (hook up a form service to deliver it).";
    form.reset();
  });
})();
