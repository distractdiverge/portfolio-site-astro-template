---
title: Statement Summarizer
description: A set of python scripts to extract data from bank statements and summarize.
codeUrl: https://github.com/example/kiln-timer
assets:
  - label: Cone chart reference
    url: https://example.com/kiln-timer/cone-chart.pdf
startedDate: 2025-08-20
lastUpdated: 2026-11-01
pinned: true
---

## Overview

Glaze tests are only useful when you can reproduce the firing. Kiln Timer stores each schedule as data, so a result can always be traced back to its inputs.

## Features

- Editable ramp, hold and cool segments
- Alerts before a target cone is reached
- Firing history with notes per run

```yaml
program: cone-6-glaze
segments:
  - { rate: 150, target: 1080, hold: 0 }
  - { rate: 300, target: 1222, hold: 10 }
```
