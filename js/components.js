function loadComponent(selector, url, callback) {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error(err));
}

function initMobileNav() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const header = document.querySelector(".site-header");

  if (!btn || !nav || !header) return;

  const openMenu = () => {
    nav.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  };

  // Toggle on button click
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // 🔗 Close after clicking a nav link
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    closeMenu();
  });

  // ❌ Close on outside click
  document.addEventListener("click", (e) => {
    const clickedInsideHeader = header.contains(e.target);
    if (!clickedInsideHeader) closeMenu();
  });

  // ❌ Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Optional: close when resizing up to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#header", "components/header.html", initMobileNav);
  loadComponent("#footer", "components/footer.html");
});
