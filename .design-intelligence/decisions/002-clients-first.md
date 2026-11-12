# 002: Clients first, recruiters through /cv

**Date:** 2026-11-12
**Status:** Accepted by the owner 2026-11-12. This replaces the recruiter-first audience from Phase 1, which was considered and discarded (kept in `archive/2026-11-08/`).

## Decision

- Make potential clients the primary readers: small businesses, co-ops, nonprofits, and founders or eng managers with messy codebases. Recruiters and hiring managers move to priority 3, served by a footer `/cv` page and one link from About.
- Restructure the site around offers: Codebase Map, Small-business systems, Mentoring, and Unstuck sessions as the on-ramp.
- Add `/pricing`, `/now`, `/cv`, `/press`, `/accessibility`, `/privacy` and `/llms.txt`. Rename Projects to Case studies.

## Why

- The owner's goal for the site is now to drive contact for paid work. The practice pivoted toward consulting in Oct 2026.
- Positioning research (Philip Morgan, Jonathan Stark) suggests a prominent job-search signal weakens a consulting offer. Recruiters still need a fast path, so the footer-plus-About placement serves both. This is a judgment call, not a research finding.
- Buyers rule out providers whose services are unclear (Hinge: 43.6% cite this as the top reason). A CV-shaped homepage answers "who is this?" but not "what will they do for me, and what does it cost?"

## What stays the same

- The visual direction, tokens, signature elements, and the no-gradients and no-dense-text rules.
- The reading conditions: skimmed on a phone, in under a minute.

## Effects on the codebase (not done yet)

- `src/pages/index.astro`: the placeholder About copy becomes the offer-first home. See [[content-strategy]].
- `src/pages/projects/*` becomes `/cases`. The hero with the leftover "Button" label and the `picsum.photos` images go away.
- New pages: `/work`, `/work/codebase-map`, `/work/small-business`, `/sessions`, `/mentoring`, `/contact`, `/pricing`, footer pages.
- Header nav: 7 items at most. Footer: the secondary links.
- Add JSON-LD and `llms.txt`. See [[legibility]].

Related: [[audience]], [[system]], [[case-study-2026-11]]
