# QA checklist — Lentra Moments static prototype

## Required smoke tests
- [ ] Open `index.html` in a current desktop browser from the extracted folder.
- [ ] Confirm the page title, all sections, CSS artwork, and favicon load.
- [ ] Confirm 8 cards maximum on the homepage while 12 sample records exist in `js/data.js`.
- [ ] Search a term such as `learning`; confirm only matching records remain and the result count updates.
- [ ] Select each category and each sample year; confirm unrelated records do not appear.
- [ ] Enter an unmatched search; confirm the empty state appears and **Clear filters** resets it.
- [ ] Click a card's arrow; confirm the preview dialog opens with the selected record.
- [ ] Press Escape and test the close button; confirm the dialog closes and focus returns to the trigger.
- [ ] Click **View all memories** with search/filter state active; confirm the archive route shows those parameters.
- [ ] Toggle light/dark mode; confirm colors switch. Reopen the page and confirm preference persistence if the browser permits `localStorage` for local files.
- [ ] At a narrow viewport, open the menu and use a navigation link; confirm the menu closes.
- [ ] Activate **Suggest a moment**; confirm it transparently explains that submission is not connected.
- [ ] Click the Diwali concept; confirm it explains that the internal event details are unconfirmed.
- [ ] Check browser console for errors on both pages.
- [ ] Use keyboard only to reach navigation, controls, cards, dialogs and footer links.
- [ ] Enable OS reduced-motion preference and confirm the site does not rely on animation for comprehension.

## Before HR or IT review
- Replace the text-wordmark and generic favicon only with authorized brand assets.
- Replace sample records only with HR-approved information.
- Add local, optimized, permitted photos and meaningful alt text.
- Agree access rules, hosting, backup, content ownership and retention before using real employee/event data.
