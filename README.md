# PETEZE redesign

Static redesign pitch for [peteze.si](https://www.peteze.si/). Plain HTML, CSS and JS with GSAP, ScrollTrigger and Lenis (bundled in `assets/js`).

## Run

```bash
PORT=4850 node serve.mjs
```

Then open http://localhost:4850/.

## Fonts

The design uses **Maison Neue** (Book, Medium, Demi, Bold) and **Maison Neue Mono** (Regular). They're commercial fonts, so they aren't in this repo. Put licensed `.woff2` files in `assets/fonts/`:

- `MaisonNeue-Book.woff2`, `MaisonNeue-Medium.woff2`, `MaisonNeue-Demi.woff2`, `MaisonNeue-Bold.woff2`
- `MaisonNeueMono-Regular.woff2`

Without them the site falls back to Helvetica Neue.

## Pages

`index.html`, `ponudba.html`, `kategorija.html?k=<id>`, `partnerji.html`, `o-nas.html`, `novice.html`, `novica.html?n=<id>`, `kontakt.html`. Content lives in `assets/js/data.js`.
