How to enable the black background + green contributions style

This repository contains `github-contributions-black-green.user.css` — a ready-to-import userstyle that forces GitHub to use a pure-black background and green-filled contribution squares.

Two quick ways to enable it:

1) Stylus extension (recommended)

- Install Stylus:
  - Chrome / Edge: search "Stylus" in the Chrome Web Store (author: `openstyles`).
  - Firefox: install from addons.mozilla.org.

- After installing Stylus:
  - Click the Stylus icon → Manage → Write new style.
  - Give the style a name (e.g., "GitHub — Black + Green Contributions").
  - Set "Applies to" → URLs on the domain -> `github.com` (or `https://github.com/*`).
  - Open `github-contributions-black-green.user.css` from this repository (or copy its contents) and paste into the Stylus editor.
  - Save and enable the style.
  - Reload your GitHub profile page. Your contribution graph should now have black background and green squares.

2) Import into Stylus from file (if supported)

- In Stylus Manage page, use "Import" or "Import from file" and select `github-contributions-black-green.user.css` from this repo.

Notes and tips

- The userstyle uses `!important` to override GitHub's CSS and inline SVG fills. It is robust but GitHub may change markup or attribute names occasionally; if the squares don't change, reply and I'll adjust the selectors.

- If you only want the contribution chart changed (not the whole site), edit the style and remove the global background rules near the top — keep only the `.js-yearly-contributions` / `svg... rect[data-level]` blocks.

- To revert: disable or delete the style in Stylus, or choose GitHub's built-in Appearance → Dark theme.

If you want, I can:
- Create a downloadable `.user.css` file packaged for easy import, or
- Walk you through the Stylus install and import step-by-step in your browser.

Tell me which you'd like and I'll proceed.