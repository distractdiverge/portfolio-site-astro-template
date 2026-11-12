# Design System: Rainbow Fern Consulting

Source of truth for the personal consulting CV site. Read this first on every session.

## Status

| Phase | Status | Notes |
|-------|--------|-------|
| 1. Context | Done | Audience and task confirmed by the owner. |
| 2. Domain | Done | Vocabulary, colors, signature, rejected defaults confirmed. |
| 3. Direction & tokens | Done | Utility 70% + Warmth 30%, confirmed. Tokens in `tokens/`, contrast verified. |
| 4. Design & create | Partly done | Tokens applied to theme and components, gradients removed, fern in header. See `decisions/001-apply-tokens-to-site.md`. Home page copy and photos still pending. |
| 5. Document & handoff | Not started | |
| 6. Audit | Not started | |

## Summary

- **Purpose:** An independent software consultant's digital CV. Visitors should learn who Alex is, what they can do, and what they have worked on.
- **Primary audience:** Recruiters and hiring managers on a first visit. Secondary: potential clients and industry peers. See [[audience]].
- **Feel:** A crisp, clean sheet of paper, split into small, digestible sections. The reader should think: "clean, no-nonsense, focused on perfection without clutter."
- **Light theme:** Ink black on off-white paper.
- **Dark theme:** A terminal-style screen with purple accents.
- **Signature element:** The rainbow fern icon. Its six leaves use solid rainbow colors. Also: small icons and quirks across the site, and purple accents.
- **Imagery:** Self-portrait, a photo of the dog Shadow, and nature photos the owner took.
- **Rejected:** Overly complex animation, overly complex visuals, dense text, and gradients of any kind.
- **Strictness:** `strict` (see [[principles]]).

## Files

- [[audience]]: who it's for and what they need to do
- [[principles]]: rules, rejected defaults, signature elements
- [[direction]]: aesthetic direction (proposed, not yet confirmed)
- `explorations/`: screenshots and observations of the live site

## Known conflicts with the current codebase

See [[live-site-observations]] for details. Summary:
- The local repo already uses a grayscale + purple palette with a dark toggle. The live site at rainbowfern.com is white with slate buttons, so the two differ.
- `ProjectCard.astro` and `projects/[id].astro` use gradients. These conflict with the no-gradients rule.
- The live projects page has a leftover "Button" label in its hero, and uses random placeholder photos.
