---
name: design-system-oplacrm
description: Design system for OplaCRM / OplaStudio — agent-driven CRM dashboard. Defines tokens, component behavior, light/dark theming, and accessibility standards.
---

# OplaCRM Design System

## Mission
OplaCRM is an agent-orchestrated CRM workspace. The visual language is calm, airy, and competent: pale-aqua surfaces, soft neumorphic cards, a confident blue primary, and clear typographic hierarchy. The system must read equally well in **light** and **dark** modes, never sacrificing legibility or focus visibility.

## Brand
- Product: OplaCRM / OplaStudio
- Audience: Sales, CS, and engineering operators driving AI agents
- Surface: Web app (dashboard, issues, agents, opportunities)
- Voice: Concise, confident, operator-friendly

## Themes
The system ships **light** as default and **dark** as a first-class variant. Every semantic token has both values. Components must reference semantic tokens only — never raw hex.

### Color Tokens (semantic)

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `#F2F8FE` | `#0B1220` | App canvas |
| `--surface` | `#FFFFFF` | `#111A2E` | Card / panel |
| `--surface-muted` | `#EAF3FB` | `#162038` | Subtle fills, hover |
| `--surface-elevated` | linear gradient `#F4FAFF → #FFFFFF` | linear gradient `#162038 → #111A2E` | Hero/KPI cards |
| `--sidebar` | `#0F1A2B` | `#0A1322` | Sidebar background (dark in both themes) |
| `--sidebar-foreground` | `#C7D2E1` | `#C7D2E1` | Sidebar text |
| `--sidebar-active` | `#1B2942` | `#1B2942` | Active nav item bg |
| `--border` | `#E2ECF5` | `#1F2A44` | Card borders, dividers |
| `--border-strong` | `#CBD9E8` | `#2A3858` | Inputs, focus outlines |
| `--foreground` | `#0E1A2B` | `#E6EDF7` | Primary text |
| `--foreground-muted` | `#5A6B82` | `#8C9AB3` | Secondary text |
| `--foreground-subtle` | `#8597AE` | `#677893` | Tertiary, captions |
| `--primary` | `#1A8FFF` | `#3FA3FF` | Primary actions, links |
| `--primary-foreground` | `#FFFFFF` | `#06121F` | Text on primary |
| `--primary-soft` | `#D7ECFF` | `#13314F` | Pill bg, hover surfaces |
| `--success` | `#22C55E` | `#34D27A` | Succeeded, positive |
| `--success-soft` | `#DCFCE7` | `#0E2A1B` | Success pill bg |
| `--warning` | `#F59E0B` | `#FBBF24` | Medium priority |
| `--danger` | `#EF4444` | `#F87171` | Critical, errors |
| `--info` | `#38BDF8` | `#60CDFA` | Info, low priority |
| `--chart-1` | `#1A8FFF` | `#3FA3FF` | Primary series |
| `--chart-2` | `#22C55E` | `#34D27A` | Success series |
| `--chart-3` | `#F59E0B` | `#FBBF24` | Warn series |
| `--chart-4` | `#EF4444` | `#F87171` | Danger series |
| `--chart-5` | `#94A3B8` | `#64748B` | Neutral / cancelled |
| `--ring` | `#1A8FFF` | `#3FA3FF` | Focus ring |

### Typography
- Family: `Inter, ui-sans-serif, system-ui, sans-serif`
- Numerics: tabular for KPIs (`font-variant-numeric: tabular-nums`)
- Scale (rem):
  - `text-xs` 0.75 / line 1rem — captions, timestamps
  - `text-sm` 0.875 / 1.25rem — body, table cells
  - `text-base` 1 / 1.5rem — default body
  - `text-lg` 1.125 / 1.75rem — card titles
  - `text-xl` 1.25 / 1.75rem — section headers
  - `text-2xl` 1.5 / 2rem — page subtitles
  - `text-3xl` 1.875 / 2.25rem — KPI numbers
  - `text-4xl` 2.25 / 2.5rem — hero KPI
- Weights: 400 body, 500 ui, 600 headings, 700 KPI numerals

### Spacing
4-px base scale: `1=4, 2=8, 3=12, 4=16, 5=20, 6=24, 8=32, 10=40, 12=48`. Card padding default `6` (24px). Page gutters `6` mobile, `8` desktop.

### Radius
- `--radius-sm` `8px` — pills, inputs
- `--radius-md` `12px` — buttons, small cards
- `--radius-lg` `16px` — cards, panels (default)
- `--radius-xl` `24px` — hero modules

### Shadow (neumorphic-soft)
- `--shadow-sm` `0 1px 2px rgba(15,26,43,0.04)`
- `--shadow-md` `0 4px 14px rgba(15,26,43,0.06)`
- `--shadow-lg` `0 12px 32px rgba(15,26,43,0.08)`
- Dark mode: replace alpha base with `rgba(0,0,0,0.45)` and add inner highlight `inset 0 1px 0 rgba(255,255,255,0.04)` on elevated surfaces.

### Motion
- `--motion-fast` `120ms cubic-bezier(0.2,0,0,1)` — hover, focus
- `--motion-base` `200ms cubic-bezier(0.2,0,0,1)` — open/close
- `--motion-slow` `320ms cubic-bezier(0.2,0,0,1)` — page transitions
- Respect `prefers-reduced-motion: reduce` — disable non-essential transitions.

## Accessibility
- Target: **WCAG 2.2 AA**
- All text vs. background must meet 4.5:1 (3:1 for ≥18px/600).
- `:focus-visible` must render a 2px `--ring` outline with 2px offset on every interactive element.
- Keyboard navigation must reach every action; tab order must follow visual order.
- Color must never be the sole carrier of meaning (status pills include text label).
- Charts must expose data via `aria-label` summary and a screen-reader-only data table.
- Theme toggle must persist and respect `prefers-color-scheme` on first load.

## Components

### Sidebar (dark in both themes)
- Bg `--sidebar`, text `--sidebar-foreground`, active item `--sidebar-active` with 4px left accent in `--primary`.
- Sections: brand → search → primary nav → "WORK" group → "PROJECTS" group → "AGENTS" group → "COMPANY" group.
- Collapsible to icon-only at <1024px; uses `aria-expanded`.
- Active item: `aria-current="page"`.

### Card / Panel
- Bg `--surface`, border `1px --border`, radius `--radius-lg`, shadow `--shadow-sm`.
- Hero/KPI variant: `--surface-elevated` gradient + `--shadow-md`.
- Header row: title `text-lg/600`, optional action (icon button) right-aligned.
- States: hover (shadow → md), focus-within (ring), loading (skeleton lines), empty (illustration + caption).

### KPI Card
- Number `text-3xl/700 tabular-nums --foreground`.
- Caption `text-sm --foreground-muted` below number.
- Optional trailing icon top-right in `--foreground-subtle`.

### Status Pill
- Radius `--radius-sm`, padding `2 / 8`, `text-xs/500`.
- Variants:
  - `succeeded` → `--success-soft` bg, `--success` text
  - `running` → `--primary-soft` bg, `--primary` text
  - `failed` → soft red bg, `--danger` text
  - `cancelled` → muted gray
- Always include text; never color-only.

### Button
- Primary: bg `--primary`, text `--primary-foreground`, hover -8% lightness, focus ring `--ring`.
- Secondary: bg `--surface-muted`, text `--foreground`, border `--border`.
- Ghost: transparent, text `--foreground-muted`, hover bg `--surface-muted`.
- Sizes: `sm 32px`, `md 36px`, `lg 40px`. Icon-only buttons must include `aria-label`.

### Avatar
- Sizes: `xs 20`, `sm 24`, `md 32`, `lg 40`. Rounded-full. Fallback shows initials on `--primary-soft`.

### Chart
- Use `--chart-1..5` semantic series. Grid lines `--border` at 50% opacity. Axis labels `--foreground-subtle` `text-xs`.
- Bars: radius 4px top corners; stacked bars share radius only on the topmost segment.
- Tooltips use `--surface` bg with `--shadow-md` and `--border`.
- Empty state: dashed grid + "No data" caption.

### Table
- Row height 44. Header `text-xs/600 --foreground-subtle uppercase tracking-wide`.
- Zebra disabled by default; hover `--surface-muted`.
- Long text truncates with title attribute; numeric columns right-aligned tabular.

### Inputs
- Height 36, radius `--radius-md`, border `--border-strong`, bg `--surface`.
- Focus: border `--ring`, 2px outer ring 25% opacity.
- Error: border `--danger`, helper text `--danger`.

## Responsive
- Breakpoints: `sm 640, md 768, lg 1024, xl 1280, 2xl 1536`.
- Dashboard grid: 4 cols ≥xl, 2 cols md–lg, 1 col <md.
- Sidebar collapses to drawer below `lg`.

## Rules: Do
- Use semantic tokens for every color, radius, shadow, and motion value.
- Define every state: default, hover, focus-visible, active, disabled, loading, empty, error.
- Pair every status color with a text label.
- Provide reduced-motion fallbacks.

## Rules: Don't
- No raw hex outside the token table.
- No focus state hidden by `outline: none` without a visible replacement.
- No one-off spacing, radius, or shadow values.
- No charts that rely on color alone — always include legend + label.
- No light-on-light or dark-on-dark text below 4.5:1 contrast.

## QA Checklist
- [ ] Light and dark snapshots match tokens — no raw hex leaks.
- [ ] Every interactive element shows a visible focus ring.
- [ ] Keyboard reaches sidebar, search, every card action, every chart legend.
- [ ] Status pills carry both color and text.
- [ ] KPI numerals are tabular and right-aligned where stacked.
- [ ] Sidebar collapses below `lg` and exposes `aria-expanded`.
- [ ] `prefers-reduced-motion` disables non-essential transitions.
- [ ] Theme toggle persists across reload and respects system preference on first visit.
