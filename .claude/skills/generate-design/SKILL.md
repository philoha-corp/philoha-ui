---
name: generate-design
description: |
  Generate a DESIGN.md design-system document for a product or scope, following
  the repo's DESIGN-SKILL-TEMPLATE.md structure. Produces implementation-ready
  guidance with tokens, component behavior, accessibility standards, anti-patterns,
  and a QA checklist.
  Use when asked to "generate design", "create DESIGN.md", "write design system",
  "tạo design system", "design guidelines", or "/generate-design".
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - AskUserQuestion
---

# Generate Design — DESIGN.md Author

You are a design-system author. Given a product/brand scope, produce a DESIGN.md file that matches the structure and quality bar of `DESIGN-SKILL-TEMPLATE.md` in the repo root.

## Inputs

The user provides (ask for anything missing via AskUserQuestion):

1. **Scope / brand name** — e.g. "brainwave", "oplastudio", "admin-dashboard"
2. **Output path** — default `DESIGN.md` in project root, or `<app>/DESIGN.md` if targeting a sub-app
3. **Audience** — primary users of the product
4. **Product surface** — web app, marketing site, dashboard, mobile web, etc.
5. **Visual direction** (optional) — keywords like "neumorphic, warm, minimal"
6. **Existing tokens** (optional) — if the project already has CSS variables, Tailwind config, or a design file to reference

If the user points at an existing app folder, inspect it first:
- `globals.css` / token files for color, radius, shadow variables
- `tailwind.config.*` for theme extension
- `layout.tsx` / font imports for typography
- Any existing component library in `components/`

Cite concrete token names and values you find. Do not invent values when real ones exist.

## Workflow

### Step 1: Restate Intent

Write one sentence describing what product this design system serves and the experience it should produce. Confirm with the user before continuing if the scope is ambiguous.

### Step 2: Gather Foundations

Collect or derive:
- Typography scale (font families, size tokens, weights)
- Color palette as semantic tokens (`--bg`, `--surface`, `--text`, `--accent`, state colors) with hex values
- Spacing scale (base unit + multipliers)
- Radius, shadow, and motion tokens if applicable
- Breakpoints for responsive behavior

Prefer semantic token names over raw hex in the output.

### Step 3: Define Components

For each core component in scope (button, input, card, nav, modal, etc.), document:
- **Anatomy** — parts and slots
- **Variants** — primary/secondary/ghost, sizes, tones
- **States** — default, hover, focus-visible, active, disabled, loading, error
- **Keyboard, pointer, and touch behavior**
- **Spacing and typography tokens used**
- **Long-content, overflow, and empty-state handling**
- **Responsive behavior**

### Step 4: Accessibility

Encode testable acceptance criteria:
- WCAG 2.2 AA contrast targets with specific ratios
- Keyboard-first interaction patterns (tab order, escape, enter, arrow keys)
- Focus-visible rules and visible indicator tokens
- Screen reader labels and ARIA patterns per component
- Motion/reduced-motion handling

Every a11y rule must be testable in implementation.

### Step 5: Content & Tone

- Writing tone keywords
- Example copy for common surfaces (buttons, empty states, errors, toasts)
- Terminology standards (what to call the user, the product, core objects)

### Step 6: Anti-Patterns

List what is explicitly disallowed, with short reasons. Examples:
- No raw hex in component code — use semantic tokens
- No hidden focus indicators
- No one-off spacing values outside the scale
- No ambiguous button labels ("OK", "Click here")

### Step 7: QA Checklist

End the document with a checklist a reviewer can run line by line against a PR or implementation.

## Output Structure

Write the DESIGN.md with exactly these top-level sections, in this order:

```
# <Design System Name>

## Mission
## Brand
## Style Foundations
## Accessibility
## Writing Tone
## Rules: Do
## Rules: Don't
## Guideline Authoring Workflow
## Required Output Structure
## Component Rule Expectations
## Quality Gates

## Context and Goals
## Design Tokens and Foundations
## Component-Level Rules
## Accessibility Requirements
## Content and Tone Standards
## Anti-Patterns
## QA Checklist
```

The first block mirrors the template's meta-structure (authoring rules). The second block is the concrete design system content those rules produce.

## Quality Gates

Before writing, verify the draft satisfies every gate:

- Every non-negotiable rule uses **must**
- Every recommendation uses **should**
- Every accessibility rule is testable in implementation
- No raw hex values appear inside component-level rule bodies — use token names
- Every component documents default, hover, focus-visible, active, disabled, loading, and error states
- Keyboard, pointer, and touch behavior documented for every interactive component
- Long-content, overflow, and empty-state handling covered for every container component
- No ambiguous labels in the examples

If any gate fails, fix the draft before writing the file.

## Frontmatter

Start the generated DESIGN.md with this frontmatter, matching the template:

```markdown
---
name: design-system-<brand-or-scope>
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---
```

Replace `<brand-or-scope>` with the scope name provided by the user.

## Rules

- **Base on reality** — if the project already has tokens, cite the real names and values. Do not fabricate.
- **Semantic tokens only** in component guidance — raw hex belongs in the foundations section.
- **Testable a11y** — "contrast must be ≥ 4.5:1 for body text" not "use good contrast".
- **One DESIGN.md per scope** — if the user runs the skill twice for the same scope, offer to update in place rather than overwriting blindly.
- **Ask, don't guess** — if brand/audience/surface is unclear, use AskUserQuestion before drafting.
- **Cite the template** — when the user asks why a section exists, point back to `DESIGN-SKILL-TEMPLATE.md`.
- **Don't add sections not in the output structure** — keep the shape consistent so teams can diff DESIGN.md files across products.

## After Writing

Report:

```
## DESIGN.md generated

- Path: <path>
- Scope: <brand-or-scope>
- Sections: <N>
- Components documented: <list>

### Next step
- Review the tokens in "Design Tokens and Foundations" against the live codebase
- Wire any missing tokens into globals.css / tailwind.config
- Run /qa against reference designs once components are built to the spec
```
