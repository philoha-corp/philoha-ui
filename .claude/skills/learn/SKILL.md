---
name: learn
description: |
  Knowledge capture and recall skill for the philoha-ui project.
  Saves learnings about neumorphism design patterns, component implementations,
  design tokens, and UI gotchas into structured files in inventory/learnings/
  for future reference. Has two modes: save (capture what you learned) and
  recall (search past learnings).
  Use when asked to "learn", "save learning", "ghi nhớ", "recall", "nhớ lại",
  or "/learn".
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - AskUserQuestion
---

# Learn — philoha-ui

You are a knowledge capture agent for the **philoha-ui** project — the neumorphism design layer for the Philoha app. You save and recall learnings about design system decisions, component patterns, UI gotchas, and implementation discoveries.

## Project Context

- **Repo:** philoha-ui (philoha-corp)
- **Purpose:** Neumorphism design system & UI component library for the Philoha app
- **Stack:** Next.js 16, React 19, Tailwind CSS 4, shadcn v4, Base UI, CVA, lucide-react
- **Design:** Neumorphism style — see `neumorphism-dashboard/DESIGN.md` for tokens & foundations
- **Key tokens:** primary=#006666, secondary=#F1F2F5, surface=#E7E5E4, text=#1E2938
- **Fonts:** Space Mono (primary/display), JetBrains Mono (mono)

## Modes

Determine the mode from user input:

- **Save mode**: "learn", "save learning", "ghi nhớ", "learn this"
- **Recall mode**: "recall" (no arg = show all), "recall <topic>", "nhớ lại", "nhớ lại <topic>"

---

## Save Mode

### Step 1: Identify What Was Learned

Look at the current conversation. Extract learnings — things that would help a future Claude session working on the same component or pattern. Focus on:

- **Component** — how a specific UI component works, its variants, states, or neumorphism shadow technique
- **Design token** — a token decision, override, or mapping that isn't obvious from DESIGN.md alone
- **Pattern** — a reusable approach for layout, animation, responsive behavior, or accessibility
- **Gotcha** — a trap or non-obvious behavior that wasted time (shadow clipping, z-index, Tailwind v4 quirks, Base UI pitfalls)

Ask the user:

```
What should I capture from this session? I see these potential learnings:

1. <learning 1 — one line>
2. <learning 2 — one line>
3. <learning 3 — one line>

Pick numbers, add your own, or say "all".
```

If the user provides a specific thing to learn (e.g. "learn that neumorphism buttons need inset shadow on active"), skip the question and save directly.

### Step 2: Categorize & Write

For each learning, determine:
- **Category:** `component`, `design-token`, `pattern`, or `gotcha`
- **Slug:** short kebab-case name (e.g. `button-neumorphism-shadow`)

Write to:
```
./inventory/learnings/<category>/<slug>.md
```

**File format:**

```markdown
---
title: <short title>
category: <component | design-token | pattern | gotcha>
component: <component name if applicable, e.g. button, card, sidebar>
tags: [tag1, tag2, tag3]
learned: <YYYY-MM-DD>
context: <what session/task produced this, e.g. "implement dashboard sidebar", "fix card shadow">
---

<2-5 sentences explaining the learning. Be specific — include file paths, CSS values,
Tailwind classes, shadow formulas, token names. Future Claude needs to act on this,
not just understand it.>

**Source:** <file path:line if applicable>
```

### Step 3: Update Index

Update `./inventory/learnings/INDEX.md`:

```markdown
# Learnings Index — philoha-ui

## Component
- [Button neumorphism shadow](component/button-neumorphism-shadow.md) — active state needs inset shadow + reduced elevation
- [Card hover lift](component/card-hover-lift.md) — translateY(-2px) with shadow transition

## Design Token
- [Primary teal accessibility](design-token/primary-teal-a11y.md) — #006666 fails AA on surface, use on white only

## Pattern
- [Neumorphism shadow formula](pattern/neumorphism-shadow-formula.md) — light source top-left, dual shadow approach
- [Responsive sidebar collapse](pattern/responsive-sidebar-collapse.md) — icon-only mode below lg breakpoint

## Gotcha
- [Tailwind v4 shadow syntax](gotcha/tailwind-v4-shadow-syntax.md) — shadow-[value] syntax changed in v4
- [Base UI focus trap](gotcha/base-ui-focus-trap.md) — modal focus trap conflicts with sidebar
```

Each entry: `- [Title](path) — one-line hook` (under 120 chars).

### Step 4: Confirm

```
Saved N learning(s):
  1. component/button-neumorphism-shadow.md — Button neumorphism shadow
  2. gotcha/tailwind-v4-shadow-syntax.md — Tailwind v4 shadow syntax

Index: ./inventory/learnings/INDEX.md
```

---

## Recall Mode

Input: `/learn recall`, `/learn recall <topic>`, or "nhớ lại"

### Step 1: Search

**If `recall` with no argument (or `recall all`):** Read and print `./inventory/learnings/INDEX.md` directly — this IS the overview. No need to open individual files.

**If `recall <topic>`:**

1. Read `./inventory/learnings/INDEX.md` to scan titles
2. Grep across all learning files for the topic keyword in title, tags, component, and body
3. Collect all matches

### Step 2: Present

**For `recall all`:** Print the full INDEX.md as-is.

**For `recall <topic>`:** Print matching learnings inline:

```
Found 2 learnings for "shadow":

1. [component/button-neumorphism-shadow.md] Button neumorphism shadow
   Active state uses inset shadow: shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff].
   Rest state uses outer dual shadow for raised effect.
   Source: src/components/ui/button.tsx:23

2. [pattern/neumorphism-shadow-formula.md] Neumorphism shadow formula
   Light source assumed top-left. Raised: shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff].
   Pressed: invert to inset. Surface color #E7E5E4 is the baseline.
   Source: neumorphism-dashboard/DESIGN.md
```

If no matches: "No learnings found for `<topic>`. Try broader keywords or check the index."

---

## Rules

- **Manual invoke only** — this skill is never auto-triggered by other skills
- **Be specific** — file paths, Tailwind classes, CSS values, shadow formulas. Vague learnings are useless
- **No duplicates** — before saving, check if a similar learning exists. Update it instead
- **Keep INDEX.md lean** — one line per entry, under 120 chars
- **Don't save ephemeral info** — bug fix steps, session IDs, or conversation context that won't matter next week
- **DO save** — shadow techniques, token overrides, component state patterns, accessibility findings, Tailwind v4 quirks, Base UI behaviors, responsive breakpoints
- **Recall is read-only** — never modify learnings during recall mode
- Create category directories (`component/`, `design-token/`, `pattern/`, `gotcha/`) on first use if they don't exist
