---
title: Fern Finder
description: A field guide app that identifies woodland ferns from a photo, leaf shape and spore pattern. It works offline, keeps a personal sightings log, and was built to help local walking groups learn the difference between look-alike species without needing an expert on hand.
codeUrl: https://github.com/example/fern-finder
assets:
  - label: Design notes (PDF)
    url: https://example.com/fern-finder/design-notes.pdf
  - label: Species dataset
    url: https://example.com/fern-finder/species.csv
headerImage: ../../assets/projects/fern-finder-header.svg
thumbnail: ../../assets/projects/fern-finder-thumb.svg
pinned: true
startedDate: 2024-03-01
lastUpdated: 2026-10-15
---

## Why it exists

Walking groups kept asking the same question at the trailhead: *is this the harmless one or the one to avoid?* Fern Finder answers it with a short series of questions about frond shape, pinna arrangement and spore placement.

## What it does

- Identifies around 120 common species from a photo or a manual checklist
- Works fully offline once the dataset is cached
- Keeps a sightings log with GPS, date and notes

## Technical notes

The matcher scores each candidate species against the answers and shows the top three with the features that separated them:

```ts
const score = (answers: Answer[], species: Species) =>
  answers.reduce((total, a) => total + (species.traits[a.trait] === a.value ? 1 : 0), 0);
```

Next up: an export format for the sightings log so groups can share records.
