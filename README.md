# Lorem Ipsum Website Build

This folder contains a **layout-only** version of the site where visible copy is replaced with **Lorem Ipsum**.

## Component-level lorem
Home and core pages include:
- Card grids
- Review strip (★★★★★)
- Testimonials cards with quote styling

## Auto-fill script

`js/lorem-fill.js` lets you drop placeholders anywhere:

```html
<h2 data-lorem="h"></h2>
<p data-lorem="p" data-lorem-count="4"></p>
<p data-lorem="s"></p>
```

- `data-lorem="h"` heading
- `data-lorem="p"` paragraph
- `data-lorem="s"` sentence
- `data-lorem-force` overwrite existing text

## Run locally

```bash
python -m http.server 8080
```

Open: http://localhost:8080
