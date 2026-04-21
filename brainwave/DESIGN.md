---
name: design-system-brainwave
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

# Brainwave 2.0 Design System

## Mission
Ship an AI-inspired, 3D-tactile web UI kit where every surface feels quietly expensive — high-density workspaces for generating, editing, and publishing AI content without the interface getting in the creator's way.

## Brand
- Product/brand: Brainwave 2.0 — AI-Powered 3D UI Kit
- Audience: product designers, front-end engineers, and indie builders shipping AI tools
- Product surface: responsive Next.js web app (marketing pages, auth, dashboard, create/edit, explore, pricing, profile)

## Style Foundations
- Visual style: monochrome-first, layered shadows, soft gradients, tactile 3D controls, neutral warm light
- Typography scale: Inter variable (`--font-inter`); headings `h1–h6` (3rem → 1.25rem), body `body-sm/md/lg`, `heading`, `title`, `p-sm/md` — all defined in `app/globals.css`
- Color palette: 9-step shade scale `--shade-01` (#fcfcfc) → `--shade-09` (#121212); surfaces `--color-surface-01/02/03`; text `--color-primary` / `--color-secondary` / `--color-tertiary`; strokes `--color-s-01` / `--color-s-02`; status `--color-green` / `--color-orange` / `--color-red` / `--color-blue` / `--color-yellow` / `--color-purple`
- Spacing scale: Tailwind 4 default (0.25rem step); `.center` uses `max-w-280 px-10 max-xl:px-5`
- Radius: `rounded-md` (0.375rem), `rounded-xl` (0.75rem), `rounded-[1.25rem]` (sidebar), `rounded-full` (avatars, pills)
- Shadow tokens: `shadow-toolbar`, `shadow-prompt-input`, `shadow-depth-01`, `shadow-popover`
- Motion: `--default-transition-duration: 0.2s`; prefer `transition-colors` / `transition-opacity` for stateful surfaces

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required for every control and composite (sidebar, toolbar, modal, select, tabs, emoji picker)
- Focus-visible rules required — focus must never be removed without a replacement indicator
- Contrast constraints required — body text must meet 4.5:1, large text 3:1, non-text UI indicators 3:1

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Define all required states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior and edge-case handling.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule uses "must".
- Every recommendation uses "should".
- Every accessibility rule is testable in implementation.
- Prefer system consistency over local visual exceptions.

---

## Context and Goals
Brainwave 2.0 is a production-ready Next.js 15 / React 19 / Tailwind 4 UI kit themed around AI content creation (audio, video, photo, code, socials). The design system must:
- Let builders compose authentic AI-tool surfaces (prompt inputs, toolbars, generation panels, media galleries) without retheming.
- Keep the monochrome-warm palette readable at dense workspace sizes without sacrificing marketing-page polish.
- Scale from a 480px mobile surface to a 1899px+ creator workstation using the six-step custom breakpoint scale.

## Design Tokens and Foundations

### Color — raw values (defined in `app/globals.css`)
- `--shade-01: #fcfcfc`
- `--shade-02: #f8f7f7`
- `--shade-03: #f1f1f1`
- `--shade-04: #ececec`
- `--shade-05: #e2e2e2`
- `--shade-06: #7b7b7b`
- `--shade-07: #323232`
- `--shade-08: #222222`
- `--shade-09: #121212`
- `--color-tertiary: #a8a8a8`
- Status: `--color-green: #55b93e`, `--color-orange: #e36323`, `--color-red: #fe5938`, `--color-blue: #3582ff`, `--color-yellow: #ffb73a`, `--color-purple: #8755e9`

### Color — semantic tokens (use these in component rules)
- Surfaces: `surface-01` (page), `surface-02` (elevated card), `surface-03` (hover / pressed fill)
- Text: `primary` (body, headings), `secondary` (muted), `tertiary` (helper)
- Strokes: `s-01` (default border), `s-02` (active/focus border, selected thumb)
- Status: `green` (success), `orange` (brand warm accent), `red` (destructive / error), `blue` (info), `yellow` (warning), `purple` (AI / premium)

### Typography
- Font family: Inter via `next/font/google`, exposed as `--font-inter` and applied through `font-inter`.
- Headings must use `text-h1`–`text-h6` tokens; body copy must use `text-body-*`, `text-heading`, `text-title`, or `text-p-*` tokens.
- Custom negative letter-spacing (`-0.01em` to `-0.03em`) is already encoded per token — components must not override `letter-spacing` locally.
- Root scale is `1rem = 16px` (set on `<html>`).

### Spacing and Radius
- Layout container: `.center { max-width: 17.5rem * 16 → 70rem; padding: 2.5rem; max-xl: 1.25rem }`.
- Sidebar rail: fixed 15rem width, inset 0.75rem from viewport edges, `rounded-[1.25rem]`.
- Default control radius: `rounded-xl` (0.75rem); icon buttons use `rounded-md`.

### Shadow tokens
- `shadow-toolbar` — floating top toolbar.
- `shadow-prompt-input` — primary prompt/textarea with inset highlight.
- `shadow-depth-01` — subtle card lift.
- `shadow-popover` — deep popover / menu.
- Components must pick one token; they must not stack ad-hoc `shadow-[...]` values except where token coverage is genuinely missing (then add a token here first).

### Motion
- Default duration: 0.2s; must use `transition-colors`, `transition-opacity`, or `transition-transform` rather than `transition-all`.
- `prefers-reduced-motion: reduce` must disable decorative transforms (swiper slide fades, range-slider thumb icons).

### Breakpoints
- `sm` 480 / `md` 767 / `lg` 1023 / `xl` 1259 / `2xl` 1419 / `3xl` 1719 / `4xl` 1899.
- Desktop-first layouts should collapse the left sidebar below `xl` and hide decorative columns below `md`.

## Component-Level Rules

### Button (`components/Button`)
- **Anatomy:** root `<button>` / `<a>` / `<Link>`, optional leading `Icon`, label container.
- **Variants:** `isPrimary` (light gradient on surface), `isSecondary` (dark gradient on inverse surface), `isRed` (destructive / accent), default ghost.
- **States:**
  - Default: height `h-10`, padding `px-6`, radius `rounded-xl`, text `text-heading-str`.
  - Hover: must animate the `::after` overlay opacity only; must not shift geometry.
  - Focus-visible: must render a 2px `s-02` outline offset by 2px; the token outline must remain visible against both light and dark variants.
  - Active: must reduce overlay opacity to 0 and translate content by `translate-y-px` or skip translation on touch.
  - Disabled: opacity 0.4, `pointer-events-none`, `aria-disabled="true"`.
  - Loading: replace label with spinner sized `size-4`; `aria-busy="true"` and retain width via `min-w` set before load.
  - Error (destructive confirm): must use `isRed` variant and announce via `aria-live="polite"` region.
- **Keyboard:** must activate on `Enter` and `Space`. Link-variant must preserve native anchor behavior (cmd-click open new tab).
- **Pointer:** cursor must be `pointer` (inherited from `@layer base button`).
- **Touch:** hit target must be ≥ 40×40px (current `h-10` + `px-6` satisfies this); must not rely on hover overlays for affordance on touch.
- **Typography / spacing tokens:** `text-heading-str`, `gap-2` between icon and label.
- **Long content:** label must truncate with `truncate`; icons must remain visible.
- **Empty state:** button with no label must set `aria-label`.
- **Responsive:** widths should stretch via `w-full` only in stacked mobile forms.

### Field / Input / Textarea (`components/Field`)
- **Anatomy:** optional label row (label + optional "Forgot password?" link), input/textarea, optional trailing validation icon.
- **Variants:** `textarea` multi-line, `validated` with trailing check icon, `forgotPassword` decorator.
- **States:**
  - Default: border `border-s-01`, radius `rounded-xl`, text `text-body-lg text-primary`, padding `px-5.5` (input `h-12`, textarea `h-20`).
  - Hover: must darken border one step toward `s-02`.
  - Focus-visible: must set `border-s-02` and keep the native focus ring removed only if replaced by the border shift plus a 2px offset outline.
  - Active (typing): same as focus-visible.
  - Disabled: must apply `bg-surface-02 text-secondary cursor-not-allowed`; `aria-disabled="true"`.
  - Loading: should render a spinner at the validation-icon slot and set `aria-busy="true"`.
  - Error: must show `text-body-sm text-red` helper below the control and set `aria-invalid="true"` with `aria-describedby` referencing the helper.
- **Keyboard:** must be tabbable; textarea must accept `Enter` for newline and must not submit forms on `Enter`.
- **Pointer / touch:** full control area must be clickable; labels must associate via `htmlFor` / `id`.
- **Typography tokens:** label uses default body copy; helper uses `text-body-sm`.
- **Long content:** textarea must grow via `react-textarea-autosize` when autosize is needed; plain inputs must rely on horizontal scroll (no wrap).
- **Empty state:** placeholder must use `text-secondary` and convey expected format, not just the label.
- **Responsive:** field widths should be controlled by parent layout (`w-full` default).

### Tabs (`components/Tabs`)
- **Anatomy:** tablist container, tab buttons, optional counter badge, active indicator.
- **Variants:** horizontal scroll on mobile; pill tabs for filters; underline tabs for section switching.
- **States:** default `text-secondary`; hover `text-primary`; focus-visible outline `s-02`; active/selected `text-primary` with `bg-surface-03` fill or underline; disabled `opacity-50 pointer-events-none`; loading placeholder must use skeleton blocks sized to the tab label.
- **Keyboard:** `←/→` must cycle tabs, `Home/End` must jump to first/last, `Enter/Space` must activate when `manual` mode is set; `aria-selected` and `role="tab"`/`role="tablist"` required.
- **Pointer / touch:** tabs must scroll horizontally on overflow with `scrollbar-none`; the active tab must scroll into view on change.
- **Long content:** tab labels must not wrap; overflow must scroll, not truncate with ellipsis.
- **Empty state:** a tablist with zero tabs must not render.

### Select / Dropdown (`components/Select`)
- **Anatomy:** trigger button, popover panel, option rows, optional search input.
- **States:** default trigger uses `border-s-01 bg-surface-01`; hover `bg-surface-03`; focus-visible outline `s-02`; open trigger keeps focus ring; disabled grays label and prevents opening; loading shows spinner in trigger; error border must be `border-red` with `aria-invalid`.
- **Keyboard:** `Enter/Space/↓` must open, `Esc` must close, `↑/↓` must move highlight, `Enter` must select, typeahead should jump to matching options.
- **Pointer / touch:** clicking outside must close; clicking trigger again must toggle.
- **Popover shadow:** must use `shadow-popover`; radius `rounded-xl`.
- **Long content:** option labels must truncate; panel max-height must be 20rem with inner scroll.
- **Empty state:** "No results" row must render `text-secondary` copy; must remain focusable for screen readers.

### Switch (`components/Switch`)
- **Anatomy:** track + thumb.
- **States:** off `bg-s-02`; on `bg-primary`; focus-visible `outline s-02 offset-2`; disabled `opacity-40`; loading should freeze thumb position and set `aria-busy="true"`.
- **Keyboard:** `Space` must toggle; role `switch` with `aria-checked`.
- **Touch:** hit target ≥ 44×44 px — track visual may be smaller if an invisible hit pad is provided.
- **Motion:** thumb transition 0.2s; reduced-motion must snap without animation.

### Modal (`components/Modal`)
- **Anatomy:** backdrop, dialog surface (`bg-surface-01`, `rounded-[1.25rem]`, `shadow-popover`), header, body, footer actions.
- **States:** entering (fade + scale from 0.98), open, closing; focus must move to the dialog on open and return to the invoking control on close.
- **Keyboard:** `Esc` must close (unless `preventClose`); `Tab` must cycle within the dialog; initial focus must land on the first interactive element or a labeled region.
- **Pointer / touch:** backdrop click must close only when `dismissible`; on narrow viewports (< `md`) modal must become bottom sheet with drag handle.
- **A11y:** must set `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (title), `aria-describedby` (body).
- **Long content:** body must scroll internally; header and footer must remain sticky.
- **Empty state:** a modal must never open without at least a title and a primary action.

### Sidebars (`components/LeftSidebar`, `components/RightSidebar`)
- **Anatomy:** rail (`fixed top-3 bottom-3 w-60 bg-surface-01 border border-s-01 rounded-[1.25rem]`), brand/header, nav group, footer user block.
- **States:** nav item default `text-secondary`; hover `bg-surface-03 text-primary`; selected `bg-surface-03 text-primary` with 2px leading accent in `primary`; focus-visible outline `s-02`; disabled `opacity-50`.
- **Keyboard:** `↑/↓` must move between nav items, `Enter` must activate, `Home/End` must jump; landmark role `navigation` required.
- **Responsive:** below `xl` the rail must collapse to an icon rail; below `md` it must become a drawer triggered from the toolbar.
- **Long content:** nav list must scroll with `scrollbar-thin`; sticky footer user block must remain visible.
- **Empty state:** sections with zero items must hide their heading.

### Toolbar (`components/Toolbar`)
- **Anatomy:** floating bar with `shadow-toolbar`, grouped icon buttons separated by `s-01` dividers.
- **States:** icon-button default `fill-secondary`; hover `bg-surface-03 fill-primary`; active `bg-surface-03` with pressed inset shadow; focus-visible outline `s-02`; disabled `opacity-40 pointer-events-none`.
- **Keyboard:** `←/→` must move between icon buttons (composite toolbar pattern); `Enter/Space` must activate; `Tab` must move to the next toolbar group.
- **Touch:** hit target ≥ 40×40px.
- **Long content:** toolbar must scroll horizontally on overflow and must not wrap.

### Search (`components/Search`)
- **Anatomy:** wrapper with leading search icon, input, optional trailing clear button, optional keyboard hint (`.key` class).
- **States:** follow Field rules plus: clear button must appear only when input is non-empty; `Esc` must clear the field.
- **Keyboard:** `/` must focus search from anywhere on page when no other input is focused (document-level shortcut).
- **A11y:** input must have `type="search"`, `role="searchbox"`, `aria-label="Search"`.

### Cards / Catalog / Gallery
- **Anatomy:** surface `bg-surface-01` with `shadow-depth-01`, media region, content block, action row.
- **States:** hover must lift via `shadow-popover`; focus-visible outline `s-02` on the link wrapping the card; selected must set `border-s-02`; loading must use skeleton blocks matching media and text heights; error tile must show `text-red` copy and a retry button.
- **Keyboard / pointer:** the entire card must be a single interactive target — nested links must use `stopPropagation` and expose a distinct `aria-label`.
- **Long content:** titles must clamp to 2 lines, descriptions to 3 lines.
- **Empty state:** collection empty states must render illustration + `text-title-str` heading + `text-p-md` body + primary action.

### Video / Media Player (`components/VideoPlayer`)
- **Anatomy:** video surface, control bar, scrubber, time, volume, fullscreen.
- **States:** controls must fade in 0.2s on hover/focus-within; focus-visible on each control must remain visible; disabled controls must not receive focus; loading must show `shadow-toolbar` buffer spinner.
- **Keyboard:** `Space` play/pause, `←/→` seek ±5s, `↑/↓` volume, `M` mute, `F` fullscreen.
- **A11y:** captions track must be selectable; controls must expose `aria-label` and `aria-pressed` where applicable.
- **Reduced motion:** control fade must reduce to opacity snap.

### Emoji picker (`components/Emoji`)
- **Anatomy:** suppressed header (`epr-header`), category content (`epr-emoji-category-content`), body with hidden scrollbar (`epr-body`).
- **States:** default, hovered cell with `bg-surface-03`, focused cell with `s-02` outline.
- **Keyboard:** arrow keys must navigate grid; `Enter` must select; `Esc` must close.
- **Empty state:** no-result search must show `text-secondary` message.

## Accessibility Requirements

### Contrast
- Body text on `surface-01` (primary `#121212` on `#fcfcfc`) must meet ≥ 4.5:1.
- Secondary text (`#7b7b7b`) must only appear at `text-body-md` size or larger and must meet ≥ 4.5:1 on `surface-01`; it must not be used on `surface-03` (`#f1f1f1`) for body copy.
- Status colors must meet ≥ 3:1 for iconography, ≥ 4.5:1 for text pairings; pair status hues with an icon, never color alone.

### Focus
- Every interactive element must render a visible focus-visible indicator — default is a 2px `s-02` outline with `outline-offset: 2px`.
- `:focus` (non-keyboard) may suppress the outline; `:focus-visible` must not.
- Focus must never be trapped outside dialogs; dialogs must trap focus until closed.

### Keyboard
- All features must be operable with keyboard alone.
- Skip-to-content link must appear as the first focusable element on every page and must jump to `<main>`.
- Composite widgets (tabs, toolbar, listbox, menu) must implement the ARIA Authoring Practices keyboard model.

### Screen readers
- Every icon-only button must carry `aria-label`.
- Live regions must be used for toasts (`react-hot-toast`) with `role="status"` / `aria-live="polite"`.
- Form errors must reference fields via `aria-describedby`; invalid fields must set `aria-invalid`.

### Motion
- Components must respect `prefers-reduced-motion: reduce` by disabling parallax, swiper auto-transitions, and decorative pulses.
- Essential feedback (e.g. focus movement, progress) must remain visible without animation.

## Content and Tone Standards
- Voice: direct, creator-facing, zero marketing filler.
- Terminology: "project" (user-authored asset), "generation" (AI output), "workspace" (left sidebar context), "explore" (public gallery).
- Buttons must use verb-first labels: "Generate", "Export", "Invite collaborator" — not "OK", "Submit", "Click here".
- Empty states must follow the pattern: one-line heading + one-sentence guidance + primary action. Example: "No generations yet — start a prompt to see it appear here. [Start a generation]".
- Errors must name the failure, the consequence, and the next step. Example: "Upload failed — the image is larger than 20 MB. Resize and try again."
- Toasts must be ≤ 80 characters and must not stack more than three at a time.

## Anti-Patterns
- Raw hex values in component markup — use semantic tokens so light/dark and future themes remain pluggable.
- Hidden focus indicators (`outline-none` without a replacement) — breaks keyboard navigation and WCAG 2.4.7.
- One-off spacing (`mt-[13px]`, `gap-[7px]`) — forces future designers to match pixel accidents.
- Shadow literals (`shadow-[0_6px_3px_...]`) inside components — tokens exist; missing coverage must be fixed in `globals.css`, not patched locally.
- Ambiguous labels ("OK", "Click here", "Submit") — screen-reader users and scanning users both lose context.
- Hover-only affordances — touch and keyboard users can't discover them.
- `transition-all` — produces layout thrash and fights reduced-motion.
- Modals without a primary action — indicates missing information architecture.
- Color-only status signaling (green-only success, red-only error) — fails color-blind users.
- Fixed-pixel heights on content containers — breaks dynamic type and translation growth.

## QA Checklist
- [ ] No raw hex values in modified components; all colors resolve to tokens in `globals.css`.
- [ ] Every new interactive element has default, hover, focus-visible, active, disabled, loading, and error states implemented.
- [ ] Focus-visible outline is present and uses `s-02` at 2px with 2px offset.
- [ ] Every icon-only control has an `aria-label` that matches its visible tooltip.
- [ ] Every form field pairs label → input via `htmlFor` / `id`; errors set `aria-invalid` and `aria-describedby`.
- [ ] Dialogs set `role="dialog"`, `aria-modal="true"`, labeled by title, trap focus, and restore focus on close.
- [ ] Composite widgets (tabs, toolbar, select) follow the ARIA keyboard model end to end.
- [ ] `prefers-reduced-motion: reduce` disables non-essential transitions in touched components.
- [ ] Typography uses `text-*` tokens from the scale; no ad-hoc `text-[13px]` values.
- [ ] Spacing uses Tailwind scale or defined composite classes (`.center`, `.sidebar`, `.btn-icon`, `.key`, `.social`, `.content`).
- [ ] Shadows use the four named tokens; any new shadow has been added to `globals.css` before use.
- [ ] Layouts adapt cleanly across `sm` (480) / `md` (767) / `lg` (1023) / `xl` (1259) / `2xl` (1419) breakpoints.
- [ ] Long-content and empty-state behavior verified for every new list, grid, and container.
- [ ] Contrast checked: body ≥ 4.5:1, non-text UI ≥ 3:1, secondary text only at body-md+ on `surface-01`.
- [ ] Status signaling pairs color with an icon or text label.
- [ ] Copy follows tone standards; buttons use verb-first labels; empty states provide the next action.
