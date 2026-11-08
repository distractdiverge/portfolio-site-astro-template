# 001: Apply tokens to the site

**Date:** 2026-11-08
**Status:** Applied (uncommitted in the working tree)

## What changed

- `src/styles/theme.css`: rewritten from `tokens/colors.json` and `tokens/radii.json`, `tokens/shadows.json`. Light is warm paper with ink black. Dark is a near-black terminal screen with purple accents. Adds `--font-sans`, `--font-mono`, `--color-on-accent`, `--color-line-strong`, `--color-success`, `--color-error`, `--color-fallback`, `--shadow-paper`, `--shadow-paper-md`.
- `src/styles/global.css`: body base at 17px with a 1.6 line height. Visible focus ring in both themes.
- `src/components/Header.astro`: border rule replaces the drop shadow. Popover uses the paper shadow and a 1px border. Adds the rainbow fern next to the wordmark (decorative, `alt=""`).
- `src/components/Footer.astro`: top rule. Toggle track uses `line-strong` instead of `bg-black/30`.
- `src/components/ProjectCard.astro`: gradient placeholder replaced with the solid `fallback` color. Hover lift removed (shadow change only).
- `src/pages/projects/[id].astro`: gradient placeholder replaced with solid `fallback`. Gradient title overlay replaced with a solid 60% black scrim.
- `public/brand/rainbow-fern.svg`: copy of `src/assets/projects/fern-colors-web.svg`, used in the header.

## Why

- No gradients anywhere, per the owner's rule.
- Paper feel: border rules instead of heavy shadows. Dark theme uses borders, since shadows barely show on dark.
- Accessibility: 17px body, visible focus rings, contrast verified (see `tokens/colors.json`).

## Verified

- `astro build` passes (10 pages).
- Light and dark screenshots in `explorations/applied-*.png`.

## Not changed yet

- `src/pages/index.astro` is still placeholder "About" copy. It needs the owner's text, plus the self-portrait, Shadow the dog, and nature photos. These images are not in the repo yet.
- Mobile layout was not reviewed after these changes.
- Phase 5 (documentation) and Phase 6 (full audit) are not done.

Related: [[system]], [[principles]]
