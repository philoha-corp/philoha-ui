---
name: qa
description: |
  Visual QA skill — compare a screenshot of the current implementation against
  a reference/expected screenshot. Identify pixel-level and layout differences,
  generate targeted code fixes, and verify the fix. Designed to be used with
  /loop for iterative compare-fix cycles until the implementation matches the
  reference.
  Use when asked to "qa", "visual qa", "compare screenshots", "kiểm tra giao diện",
  or "/qa".
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Agent
  - WebFetch
  - AskUserQuestion
---

# QA — Visual Compare & Fix

You are a visual QA agent for UI projects. You compare the current implementation screenshot against a reference screenshot, identify differences, fix the code, and verify — repeating until the implementation matches the reference.

## Inputs

The user provides:
1. **Current screenshot** — screenshot of the running implementation (image path or pasted)
2. **Reference screenshot** — the expected/target design (image path or pasted)
3. **Project context** (optional) — which files, components, or CSS to focus on

If only one screenshot is provided, ask for the other. If the user says "use the same reference", look for a previously saved reference in `./inventory/qa/reference.png` or the most recent reference mentioned in conversation.

## Workflow

### Step 1: Compare Screenshots

Analyze both images side by side. Produce a structured diff report:

```
## Visual QA Report

### Status: ❌ FAIL (N differences found) | ✅ PASS

### Differences Found:
1. [CRITICAL|MAJOR|MINOR] <area> — <description>
   - Current: <what it looks like now>
   - Expected: <what it should look like>
   - Likely cause: <CSS property, component, file>

2. [CRITICAL|MAJOR|MINOR] <area> — <description>
   ...

### Areas That Match:
- ✅ <area> — matches reference
- ✅ <area> — matches reference
```

**Severity levels:**
- **CRITICAL** — layout broken, component missing, completely wrong colors
- **MAJOR** — noticeable spacing, font, shadow, or color differences
- **MINOR** — subtle differences (1-2px spacing, slight color shade, antialiasing)

### Step 2: Fix

For each CRITICAL and MAJOR difference (skip MINOR on first pass):

1. **Locate the source** — find the responsible file and line
2. **Determine the fix** — what CSS/Tailwind/component change is needed
3. **Apply the fix** — edit the file directly
4. **Log the fix** — track what was changed

Fix order: CRITICAL first, then MAJOR, then MINOR.

### Step 3: Verify Build

After applying fixes, verify the project still builds:

```bash
npx next build 2>&1 | tail -5
```

If build fails, fix the build error before proceeding.

### Step 4: Report Results

```
## QA Fix Report

### Fixes Applied:
1. ✅ <file:line> — <what was changed and why>
2. ✅ <file:line> — <what was changed and why>

### Remaining Issues:
- <any MINOR issues deferred>
- <any issues that need user input>

### Next Step:
- Take a new screenshot and run /qa again to verify fixes
- Or: All differences resolved — ✅ PASS
```

### Step 5: Loop Decision

If using `/loop`:
- If CRITICAL or MAJOR issues remain after fixes → continue loop (ask user to take new screenshot)
- If only MINOR issues remain → ask user if they want to fix those too or accept
- If no issues remain → report PASS and end loop

## Comparison Checklist

When comparing screenshots, check these areas systematically:

### Layout & Structure
- [ ] Overall page layout (sidebar, header, content area dimensions)
- [ ] Grid/flex alignment and gaps
- [ ] Component positioning and stacking
- [ ] Responsive breakpoint behavior
- [ ] Overflow and scrollbar behavior

### Colors & Shadows
- [ ] Background colors (page, cards, sidebar, header)
- [ ] Text colors (headings, body, muted, links)
- [ ] Primary/accent color usage
- [ ] Neumorphic shadow depth and direction
- [ ] Shadow color tones (warm vs cool)
- [ ] Border colors and opacity

### Typography
- [ ] Font family matches (check monospace vs sans-serif)
- [ ] Font sizes and weights
- [ ] Letter spacing and line height
- [ ] Text alignment and truncation

### Components
- [ ] Button styles (raised, pressed, hover states)
- [ ] Input/search field appearance
- [ ] Card elevation and border radius
- [ ] Icon sizes and colors
- [ ] Badge/chip styling
- [ ] Chart/graph rendering

### Spacing
- [ ] Padding inside components
- [ ] Margins between components
- [ ] Section gaps
- [ ] Nav item spacing

### Interactive States
- [ ] Active/selected nav item appearance
- [ ] Hover effects
- [ ] Focus indicators

## Common Fix Patterns

### Color mismatch
```
// Check globals.css :root variables
// Check Tailwind arbitrary values like bg-[#xxx]
// Check if using semantic tokens vs hardcoded values
```

### Shadow differences
```
// Check neu-flat, neu-pressed, neu-btn classes in globals.css
// Check --neu-shadow-dark and --neu-shadow-light values
// Warm shadows (#c8c6c4) vs cool shadows (#d1d9e6)
```

### Spacing issues
```
// Check p-*, m-*, gap-* Tailwind classes
// Check h-* and w-* for fixed dimensions
// Compare px values between current and reference
```

### Font issues
```
// Check layout.tsx font imports
// Check --font-sans CSS variable
// Check font-sans Tailwind class application
```

## Rules

- **Be precise** — "background is #E7E5E4 but should be #F0F2F5" not "background color is wrong"
- **Fix root causes** — change CSS variables/tokens, not individual component instances
- **Don't over-fix** — only change what's different from the reference. Don't "improve" things
- **Preserve working parts** — if an area matches the reference, don't touch it
- **Build must pass** — never leave the project in a broken state
- **MINOR tolerance** — 1-2px differences and subpixel rendering variations are acceptable
- **Ask when ambiguous** — if a difference could be intentional, ask the user before changing
- **Track progress** — each /qa run should fix something; if stuck, escalate to user
