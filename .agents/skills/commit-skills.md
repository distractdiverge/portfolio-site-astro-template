---
name: commit discipline
description: Ensure small, meaningful commit chunks
triggers: commit, commit-msg, git
---

When working on commits, follow these rules:

1. **Small chunks** — Group changes by *logical unit*, not by file or time.
   - A single feature, fix, or refactor per commit.
   - If a file has mixed changes (e.g. refactoring + a bug fix), stage selectively
     or split the commit.

2. **Meaningful messages** — Write commits that tell the *story* of the change.
   - Use imperative mood: "add X", "fix Y", "refactor Z".
   - Include a body when the *why* isn't obvious from the diff.

3. **Before committing**, briefly consider:
   - Would this commit make sense in isolation?
   - Could a reviewer understand it without context?
   - Is there noise (formatting-only changes, dead code) that should be removed?

4. **If you're unsure whether to commit now**, ask the user before proceeding.
