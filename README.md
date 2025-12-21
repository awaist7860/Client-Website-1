# Minimal Hybrid Physio Website (Vanilla HTML/CSS/JS)

A **minimal, clean starter** for a hybrid business website (clinic services + classes/courses) using **vanilla HTML, CSS, and JavaScript**.

## Folder structure

```
website/
├── index.html
├── services.html
├── classes.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

## Quick start

### Option A — Open locally
Open `index.html` in your browser.

### Option B — Run a tiny local server (recommended)
Some browsers restrict certain features when opening files directly. Use a local server:

**Python**
```bash
cd website
python -m http.server 8080
```

Then visit: `http://localhost:8080`

## What to edit first (client handover checklist)

### 1) Branding
- Replace `YourBrand` text in the header/footer in each HTML file.
- Add the client logo (optional) and update navigation links.

### 2) Content
- Update headings and service/class descriptions.
- Replace placeholder pricing in `services.html`.
- Replace clinic details in `contact.html`.

### 3) Images
Put images in the `images/` folder. Reference them like:
```html
<img src="images/hero.jpg" alt="Descriptive alt text">
```

## Contact form (important)
The contact form is **front-end only**. It validates input and shows a success message, but **does not send emails**.

To make it work, pick one approach:
- **Netlify Forms** (easy if hosting on Netlify)
- **Formspree / Getform** (hosted form endpoints)
- **Backend** (Node/PHP) if the client has a server

If you tell me where you’re hosting (Netlify, GitHub Pages, cPanel, VPS), I can wire the form properly.

## Deployment options

### GitHub Pages
1. Push the folder to a GitHub repo
2. Repo settings → **Pages** → choose `main` branch → `/ (root)`
3. Your site publishes to a `github.io` URL

### Netlify
- Drag & drop the folder, or connect your Git repo.

### Shared hosting (cPanel)
- Upload contents to `public_html/`

---

Made 2025.
