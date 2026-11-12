# Audience

**Status:** Confirmed by the owner 2026-11-12. This is the standard. It is based on the consultant-site case study ([[case-study-2026-11]]). The earlier recruiter-first version was considered and discarded; it's kept in `archive/2026-11-08/audience.md` for the record. See [[002-clients-first]].

## What changed and why

- The site's main job is now **to get people to contact Astrid for paid work**. Recruiters move from primary reader to a dedicated `/cv` path.
- Most visitors arrive **already referred**. They come to check Astrid out, not to discover Astrid. In Hinge's buyer research, 80.8% of referred buyers look at the provider's website. 51.9% have ruled out a firm without ever talking to it, and the top reason (43.6%) was that they couldn't tell what the provider does.
- So every page has one job: within a minute, turn a referral into a conversation.

## Readers, in priority order

| Priority | Reader | What they're deciding | What answers it |
|---|---|---|---|
| 1 | Small-business owner, nonprofit or co-op leader (often referred) | "Can Astrid help with my specific mess? Will I understand them? Can I afford it?" | Plain-language service page, a before/after example, a posted price range and sliding-scale policy, a free intro call |
| 1 | Founder, eng manager or CTO with a messy or vibe-coded codebase | "Is Astrid senior enough? Do they know my stack? How fast will I see value?" | Codebase Map offer with listed deliverables, the PPP case study, stack list (JS/TS/Python/.NET), a sample artifact (redacted diagram or doc) |
| 2 | Peers who refer work | "Can I describe Astrid in one sentence and send a link without risk?" | One-line positioning, a "who this is not for" line, a shareable `/work` URL |
| 2 | Prospective mentees (queer, women, POC, non-traditional paths) | "Is this safe? Will I be judged? What does it cost? Is my privacy protected?" | `/mentoring` page with stated privacy practices, sliding scale, free and low-cost options, pseudonymous booking |
| 3 | Recruiters and hiring managers (TPO, architect roles) | "Does Astrid's experience match the role? Are they available?" | `/cv`: role history, downloadable résumé PDF, an "open to" line. Footer link plus one link from About. Not in the main nav. |
| 3 | AI agents, crawlers and assistants | "What does this entity do, for whom, where, and how do I contact it?" | Semantic HTML, a literal first paragraph, JSON-LD, `llms.txt`. See [[legibility]]. |
| 4 | Procurement or ops at a larger org | "Is this a real entity we can contract with?" | Legal name (Rainbowfern LLC, Pennsylvania), payment methods, a short contract summary |

Both of Astrid's tracks meet on the About page. NN/g lists both job seekers and people vetting vendors as About-page readers, so About carries more weight than usual.

## Reading conditions (kept from v1)

They skim, often on a phone, and have under a minute. The first screen has to answer "who is this, and can they help with what I need?"

## Core task

**Evaluate, then act.** In order, the site answers:

1. What do you fix, and for whom?
2. Why should I trust you?
3. What does the next step cost, in money, time and effort?
4. How do I start?

The v1 questions (Who is Astrid? What can Astrid do? What has Astrid worked on?) still get answered, but in service of these four.

## Desired perception

- Kept: "Clean, no-nonsense, focused on perfection without clutter."
- Added: "I understand what Astrid would do for me, roughly what it costs, and starting is easy."

## Personality words

Unchanged: fair/balanced, inquisitive, passionate, collaborative, inclusive.

## Who this site is not for (proposed, for copy)

- Buyers who need an agency with a team behind it.
- Anyone looking for hype, growth hacks, or "AI will replace your staff."
- Large enterprise RFP processes. Astrid can still be reached, but the site isn't built around them.

## Accessibility requirement

Unchanged: accessible and easy to read for people with any type of disability. Expanded for neurodivergent readers in [[principles]].

Related: [[system]], [[content-strategy]], [[voice]]
