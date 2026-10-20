# Lentra Moments — final static prototype

This is a self-contained, no-build-step concept prototype. It is **not an approved official Lentra service**. The sample memory/event content is fictional placeholder content and no real event photos are included.

## Run it

1. Extract the ZIP to a folder.
2. Keep `index.html`, `memories.html`, `css/`, `js/` and `assets/` together in that folder.
3. Double-click `index.html` (or right-click it and choose your browser). CSS and JavaScript load automatically through relative paths. No npm install, server, network connection, or external library is needed for the main interactions.
4. Click **View all memories** to open the included archive placeholder page.

Optional local server if you prefer one:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` from this folder.

## What works

- Responsive navigation and anchor links.
- Light/dark toggle with best-effort `localStorage` persistence and OS preference on first visit.
- Twelve clearly identified sample memory records.
- Search plus category/year filters over the full set; homepage renders a maximum of eight matching cards.
- Accurate match count, empty state and clear-filters actions.
- “View all memories” carries active search/filter state into `memories.html`.
- Accessible memory preview dialog, Escape handling, focus return and backdrop close.
- Diwali concept notice, “Suggest a moment” explanation dialog and original editorial quote controls.
- Reduced-motion support and no external image/font/script dependencies.

## Placeholder/approval notes

- The text “lentra.” is a **text placeholder**, not the official Lentra wordmark. Replace it only with an approved official brand asset after permission and brand review.
- `assets/favicon.svg` is a generic prototype icon, not an official Lentra logo.
- The hero and card illustrations are CSS-generated artwork placeholders. They are not event photos.
- The 12 memory entries and the learning/wellbeing event listings are samples marked pending approval. The Diwali section is illustrative; the Lentra celebration date and details are not confirmed.
- This prototype has no backend, user accounts, file uploads, calendar booking, or HR submissions. Buttons that depend on future processes say so rather than simulating a successful submission.
- `noindex, nofollow` metadata is included to discourage indexing of this prototype; do not treat this as a substitute for appropriate deployment controls.
- Ask HR/IT to approve content, privacy/access requirements, official branding, hosting and ongoing ownership before deployment.

## Folder structure

```text
Lentra_Moments_Final/
├── index.html
├── memories.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── shared.js
│   ├── data.js
│   ├── app.js
│   └── archive.js
└── assets/
    └── favicon.svg
```

## Quick QA checklist

- Open `index.html` directly from the extracted folder.
- Search for “learning”; the result count should update and only matches should display.
- Select “Celebrations”; unrelated categories should disappear.
- Select a sample year; matches should show only that sample year.
- Set a query that will not match; the empty state and clear button should appear.
- Confirm no more than eight cards render at once.
- Click an arrow on a card; the preview dialog should open. Press Escape to close it.
- Select **View all memories** with active filters and confirm the archive page displays the selected state.
- Toggle light/dark themes, navigate to the archive, and confirm the preference is retained where browser file storage allows it.
- Narrow the browser to mobile width and confirm the navigation can open/close.

This package was created as a static HTML/CSS/JavaScript project. Check it in your own browser before presenting or deploying it; visual and browser coverage can differ by device.
