function loadComponent(selector, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#header", "components/header.html");
  loadComponent("#footer", "components/footer.html");
});
