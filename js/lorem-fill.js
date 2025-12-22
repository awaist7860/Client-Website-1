/* =========================================
   lorem-fill.js — Auto-fill helper
   =========================================
   Add data-lorem="h" | "p" | "s" to any element:
     - h: heading
     - p: paragraph
     - s: sentence
   Optional:
     - data-lorem-count="N" (paragraph sentence count)
     - data-lorem-force (overwrite existing text)
*/
(function () {
  const WORDS = ("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua " +
    "ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure " +
    "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non " +
    "proident sunt in culpa qui officia deserunt mollit anim id est laborum").split(" ");

  function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  function title(minWords = 3, maxWords = 7) {
    const n = rand(minWords, maxWords);
    const out = [];
    for (let i = 0; i < n; i++) {
      const w = WORDS[rand(0, WORDS.length - 1)];
      out.push(w.charAt(0).toUpperCase() + w.slice(1));
    }
    return out.join(" ");
  }

  function sentence(minWords = 8, maxWords = 14) {
    const n = rand(minWords, maxWords);
    const out = [];
    for (let i = 0; i < n; i++) out.push(WORDS[rand(0, WORDS.length - 1)]);
    const s = out.join(" ");
    return s.charAt(0).toUpperCase() + s.slice(1) + ".";
  }

  function paragraph(sentenceCount = 3) {
    const out = [];
    for (let i = 0; i < sentenceCount; i++) out.push(sentence());
    return out.join(" ");
  }

  function fill(el) {
    const type = el.getAttribute("data-lorem");
    const countAttr = el.getAttribute("data-lorem-count");
    const count = countAttr ? parseInt(countAttr, 10) : undefined;

    if (type === "p") el.textContent = paragraph(Number.isFinite(count) ? count : 3);
    else if (type === "h") el.textContent = title();
    else if (type === "s") el.textContent = sentence(8, 12);
    else el.textContent = sentence(8, 12);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lorem]").forEach((el) => {
      const force = el.hasAttribute("data-lorem-force");
      const empty = !el.textContent || el.textContent.trim().length === 0;
      if (force || empty) fill(el);
    });
  });

  window.__loremFill = { title, sentence, paragraph, fill };
})();
