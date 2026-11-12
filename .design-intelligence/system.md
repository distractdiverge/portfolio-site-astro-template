# Design System: Rainbow Fern Consulting

Source of truth for rainbowfern.com. Read this first in every session.

## Status

| Phase | Status | Notes |
|-------|--------|-------|
| 1. Context | Done (revised) | Confirmed 2026-11-12: clients are the primary readers, and recruiters move to `/cv`. See [[002-clients-first]]. The recruiter-first version was considered and discarded (`archive/2026-11-08/`). |
| 2. Domain | Done, with additions proposed | Vocabulary, colors, signature and rejected defaults are confirmed. Anti-capitalist core value confirmed 2026-11-12. Other new trust, contact and voice rules are proposed in [[principles]] and [[voice]]. |
| 3. Direction & tokens | Done | Utility 70% + Warmth 30%, confirmed. Content direction added in [[direction]]. Tokens unchanged. |
| 4. Design & create | Partly done | Tokens applied (see `decisions/001`). Next: build the pages in [[content-strategy]]. |
| 5. Document & handoff | Not started | |
| 6. Audit | Not started | Use the measurement table in [[example-sites-observations]] as the benchmark. |

## Summary

- **Purpose:** Get people in touch with Astrid for paid work: consulting, small-business systems, mentoring and paid sessions. The site still works as a digital CV for the job-search track, through `/cv`.
- **Primary readers:** Small-business, co-op and nonprofit leaders, and founders or eng managers with messy codebases, usually arriving by referral. Secondary: referring peers and prospective mentees. Then recruiters and AI agents. See [[audience]].
- **Core task:** Evaluate, then act. Answer, in order: what Astrid fixes and for whom, why to trust Astrid, what the next step costs, and how to start.
- **Offers:** Codebase Map (flagship), Small-business systems, Mentoring, and Unstuck sessions as the on-ramp. These are working names. See [[content-strategy]].
- **Core value:** Run as anti-capitalist and pro-socialist as possible: no ads, no trackers beyond basic privacy-respecting analytics, sliding scale, co-ops first. On the site it's subtle, hidden in plain sight for people who know. See [[voice]].
- **Name and contact:** Astrid Lapinski ("Alex" is being phased out and appears only on legal paperwork). Published email: contact@rainbowfern.com.
- **Feel:** A crisp, clean sheet of paper, split into small, digestible sections: "clean, no-nonsense, focused on perfection without clutter."
- **Light theme:** Ink black on warm off-white paper.
- **Dark theme:** A terminal-style screen with purple accents.
- **Signature element:** The rainbow fern icon, with six solid rainbow leaves. Also small icons and quirks across the site, and purple accents.
- **Imagery:** Self-portrait, Shadow the dog, and nature photos the owner took.
- **Voice:** An engineering design doc with warmth. Values shown as policies. See [[voice]].
- **Rejected:** Overly complex animation, overly complex visuals, dense text, gradients of any kind, ads, and third-party trackers. Proposed additions: pop-ups, autoplay motion, abstract heroes.
- **Strictness:** `strict` (see [[principles]]).

## Files

- `foundations/`
  - [[audience]]: who it's for, in priority order, and what each reader needs
  - [[principles]]: rules, rejected defaults, signature elements
  - [[direction]]: the visual blend (confirmed) and the content direction (proposed)
  - [[content-strategy]]: positioning, offers, sitemap, page inventory, contact flow, pricing
  - [[voice]]: copy rules, vocabulary, words to avoid, values as policies
  - [[legibility]]: AI agents and crawlers checklist
- `references/`
  - [[case-study-2026-11]]: condensed findings from the 18-site case study
- `explorations/`
  - [[live-site-observations]]: rainbowfern.com as of 2026-11-08, with screenshots
  - [[example-sites-observations]]: 17 example sites measured and screenshotted 2026-11-12, in `explorations/examples/`
- [[OUTSTANDING-CONSIDERATIONS]]: open items and things to re-review (meant for the repo root; see that file)
- `decisions/`
  - `001-apply-tokens-to-site.md`: applied
  - [[002-clients-first]]: accepted
  - [[003-owner-decisions-2026-11-12]]: name, email, offers, prices, PPP, anti-capitalism, AI crawlers
- `tokens/`: unchanged
- `archive/2026-11-08/`: previous versions of system, audience, direction and principles, kept as a record of what was considered and discarded

## Owner decisions (2026-11-12)

All seven open decisions are answered or parked. See [[003-owner-decisions-2026-11-12]]. The open items live in [[OUTSTANDING-CONSIDERATIONS]].

## Known conflicts with the current codebase

- `src/pages/index.astro` is placeholder About copy. It needs the offer-first home from [[content-strategy]].
- The live projects page has a leftover "Button" label, a brick-wall stock hero and `picsum.photos` images. It becomes `/cases`.
- "Current Projects" on the live home page is a dense three-column block on mobile. Replace it with the "Ways to work with me" blocks.
- The live site at rainbowfern.com still shows the old white-and-slate design. The local repo is ahead of it.
- "Alex" may still appear in `src/` (page copy, metadata, footer). Replace it with "Astrid Lapinski". Tracked in [[OUTSTANDING-CONSIDERATIONS]].

Related: [[audience]], [[principles]], [[content-strategy]]
