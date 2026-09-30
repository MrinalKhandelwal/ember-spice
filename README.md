# EMBER & SPICE

**Modern Indian Cuisine** — a beginner-friendly, responsive multi-page business website project for a fictional restaurant.

## Pages and folders

- `index.html` — home page with restaurant story, featured dishes, category filters, values, chef, guest review and booking call to action.
- `about.html` — restaurant story, philosophy and chef introduction.
- `services.html` — dine-in, catering, private events and sample menu.
- `contact.html` — location and hours plus a browser-validated reservation / inquiry form.
- `css/style.css` — shared color palette, typography, page styling and responsive layouts.
- `js/script.js` — mobile navigation, featured dish filters, current footer year and client-side form validation.
- `images/` — reserved for selected, optimized image assets.

## Run locally

Open `index.html` in a browser. No build tools or package installation are required. All four pages share the same stylesheet and JavaScript file.

## Images

No external or copyrighted images are bundled. The visible image areas are CSS placeholders, and their labels show suggested filenames such as `images/hero.jpg` and `images/dish-paneer.jpg`. Before publishing, choose images you own, have permission to use, or have selected from a suitable license. Optimize them for the web, save them in `images/`, and replace each placeholder with an `<img>` element and descriptive `alt` text. Use appropriately sized WebP or AVIF images where practical.

## Features and accessibility

- Semantic landmarks, page titles, descriptions, a skip link and labeled navigation.
- Responsive layouts with a mobile navigation button and visible focus styles.
- Featured dish category buttons with `aria-pressed` state.
- Contact form required fields, email checks, inline error text and a live status message.
- Reduced-motion preference support and a dynamic copyright year.

The contact form is a front-end demonstration only. It validates input in the browser but does not send or store submissions. Connect a form backend or hosted form service before using it for real reservations. The address, hours, menu, prices, phone, email and people shown are fictional starter content and should be replaced with verified details for a real business.

## Design notes

The visual direction uses a charcoal background, warm cream surfaces and ember-colored accents. Editorial headings use a serif font stack and body copy uses a sans-serif stack, with system fonts so the site works offline. The layout is mobile-first and uses shared CSS variables to make the palette and container width easy to adjust.

## Deployment outline

1. Create a new GitHub repository and add this project’s files while preserving the folder structure.
2. In the repository settings, open **Pages** and choose deployment from the main branch and project root.
3. Save the settings and wait for the published site link to appear.
4. Open the deployed home page and check all four navigation links, mobile layout, images, and form behavior.

This project is ready for iteration; deployment has not been performed from this local starter.
