---
name: design-system-brainwave-ai
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

# Brainwave AI Design System

## Mission
Deliver a ChatGPT-class conversational UI kit where chat, media generation, and settings flows share one light/dark visual language — legible at long reading lengths, dense in workspace views, and calm enough to fade behind the user's prompts.

## Brand
- Product/brand: Brainwave — AI UI Kit
- Audience: designers and front-end engineers building conversational AI and generative-media products (chat, audio, video, photo, code, social posts)
- Product surface: responsive Next.js 14 web app with class-based dark mode (marketing, auth, chat, generation flows, settings, pricing)

## Style Foundations
- Visual style: flat, high-contrast, content-first; neutral n-scale with saturated blue / green / warm-red accents; crisp 2px borders on primary interactive surfaces
- Typography scale: Karla (body, `--font-karla`, loaded via `font-sans`) + Inter (headings/UI, `--font-inter`); semantic classes `.h1`–`.h6`, `.body1`, `.body1S`, `.body2`, `.base1`, `.base2`, `.caption1`, `.caption2`
- Color palette: neutral `n-1 … n-7` scale + `primary-1/2` + `accent-1…5`, all defined in `tailwind.config.ts`
- Spacing scale: Tailwind default (0.25rem step) plus extensions `0.25`, `0.75`, `4.5`, `5.5`, `6.5`, `13`, `15`, `18`, `22`, `30`, `34`, `38`, `58`
- Radius: `rounded-md` (0.375rem), `rounded-lg` (0.5rem), `rounded-xl` (0.75rem); full pill for avatars
- Shadow tokens: literal shadow strings used for cards, date-picker popover, and multi-select menus (see Design Tokens — Shadow below); these should be promoted to named Tailwind tokens when a third call site is added
- Motion: default duration 200ms, default easing `linear` (Tailwind config override); no default `transition-all`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required for every control and composite (chat composer, menus, sidebars, modals, multi-select, slider, date picker)
- Focus-visible rules required — focus indicator must remain visible in both light and dark themes
- Contrast constraints required — body text must meet 4.5:1, large text 3:1, non-text indicators 3:1, and tokens must be validated against both `bg-n-1` (light) and `bg-n-7` (dark)

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
Brainwave AI is a Next.js 14 / React 18 / Tailwind 3 UI kit themed around conversational AI plus multi-modal generation (audio, video, photo, code, socials). The design system must:
- Support class-based dark mode (`[data-theme="dark"]`) as a first-class target, not an afterthought.
- Keep long chat transcripts and marketing hero sections readable on the same stack by pairing Karla (reading) with Inter (headings/UI).
- Scale from mobile chat (`sm ≤ 480`) to workstation generation surfaces (`2xl > 1419`) using the Tailwind `max-width` screens defined in `tailwind.config.ts`.

## Design Tokens and Foundations

### Color — raw values (defined in `tailwind.config.ts`)
Neutrals (`n-*`):
- `n-1: #FEFEFE` — page background (light)
- `n-2: #F3F5F7` — subtle surface (light)
- `n-3: #E8ECEF` — borders, hover fills (light)
- `n-4: #6C7275` — muted text
- `n-5: #343839` — borders, hover fills (dark)
- `n-6: #232627` — surface (dark)
- `n-7: #141718` — page background (dark), body text on light

Primary:
- `primary-1: #0084FF` — default action (blue)
- `primary-2: #3FDD78` — success / confirmation

Accent:
- `accent-1: #D84C10` — destructive / strong warning
- `accent-2: #3E90F0` — info
- `accent-3: #8E55EA` — AI / premium tagging
- `accent-4: #8C6584` — tertiary categorical
- `accent-5: #DDA73F` — caution / highlight

### Color — semantic usage (use these phrases in component rules)
- Page background: `n-1` light / `n-7` dark
- Elevated surface: `n-2` light / `n-6` dark
- Border / divider: `n-3` light / `n-5` dark
- Body text: `n-7` light / `n-1` dark
- Muted text: `n-4` (works on both themes)
- Primary action: `primary-1`
- Success: `primary-2`
- Destructive: `accent-1`
- Informational: `accent-2`
- AI / premium: `accent-3`

### Typography
- Body stack: Karla via `font-sans` (weights 400, 700) — default on `<body>`.
- UI / heading stack: Inter via `font-inter` (weights 500, 600, 700) — used by `.h1`–`.h6`, `.base*`, `.caption*`, and `.btn`.
- Semantic classes (defined in the Tailwind plugin):
  - `.h1` 4rem/4.5rem bold, `.h2` 3rem/3.5rem bold, `.h3` 2.5rem/3rem bold, `.h4` 1.75rem/2.5rem bold, `.h5` 1.5rem/2.5rem semibold, `.h6` 1.125rem/2rem semibold
  - `.body1` 1.5rem/2.25rem, `.body1S` 1.375rem/1.75rem, `.body2` 1.0625rem/1.5rem
  - `.base1` 1rem/1.5rem medium Inter, `.base2` 0.875rem/1.5rem medium Inter
  - `.caption1` 0.75rem/1.25rem medium Inter, `.caption2` 0.6875rem/1rem medium Inter
- All letter-spacing is encoded per class; components must not override `tracking-*`.

### Spacing and Radius
- Base scale: Tailwind 0.25rem step.
- Project-specific steps: `0.25`, `0.75`, `4.5`, `5.5`, `6.5`, `13`, `15`, `18`, `22`, `30`, `34`, `38`, `58` — components must use these before introducing arbitrary `px` values.
- Radius: `rounded-md` (small inline controls like `.btn-small`), `rounded-lg` (popovers, date picker), `rounded-xl` (primary controls, cards, multiselect items), `rounded-full` (avatars, pills).
- Border widths: extensions add `border-3` (0.1875rem) and `border-6` (0.375rem) for emphasized states.

### Shadow
Literal shadow strings currently live inside `globals.css`. Components must use one of these named recipes rather than reinventing:
- Popover / date picker: `shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0_2rem_2rem_-1rem_rgba(0,0,0,0.1)]` over `bg-n-1` (light) / `bg-n-7` (dark).
- Multi-select menu: same popover recipe plus `inset 0 0 0 0.0625rem` border in `n-3` / `n-5`.
- White button lift (`.btn-white`): `shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15)]`.
- Any third usage must promote the literal into a Tailwind `theme.extend.boxShadow` token before landing.

### Motion
- Default duration: 200ms (`transitionDuration.DEFAULT`).
- Default easing: `linear` (`transitionTimingFunction.DEFAULT`).
- Components must use `transition-colors`, `transition-opacity`, or `transition-transform`; `transition-all` must not be used.
- `prefers-reduced-motion: reduce` must disable non-essential transitions (loader dots, slider thumb bounce, chat auto-scroll smoothing).

### Breakpoints
Screens are max-width (desktop-first):
- `2xl` ≤ 1419
- `xl` ≤ 1179
- `lg` ≤ 1023
- `md` ≤ 767
- `sm` ≤ 480
Layouts must design for ≥ 1420 first, then adapt via these max-width modifiers.

### Dark Mode
- Dark mode is class-based via `[data-theme="dark"]` on `<html>`.
- Every component must ship both theme values; reviewers must verify both before merge.
- Tokens map: `bg-n-1 → dark:bg-n-7`, `bg-n-2 → dark:bg-n-6`, `text-n-7 → dark:text-n-1`, `border-n-3 → dark:border-n-5`.

## Component-Level Rules

### Button (`.btn`, `.btn-blue`, `.btn-red`, `.btn-dark`, `.btn-white`, `.btn-stroke-dark`, `.btn-stroke-light`)
- **Anatomy:** root `<button>` / `<a>`, optional leading SVG icon, label, optional trailing SVG icon.
- **Variants:**
  - `.btn-blue` — primary, `primary-1` fill, white text
  - `.btn-red` — destructive, `accent-1` fill
  - `.btn-dark` — high-contrast default (inverts in dark theme)
  - `.btn-white` — elevated neutral with soft drop shadow
  - `.btn-stroke-dark` / `.btn-stroke-light` — outline variants for secondary actions
  - Sizes: `.btn` (default h-12), `.btn-large` (h-13), `.btn-medium` (h-10), `.btn-small` (h-9, `rounded-md`)
- **States:**
  - Default: `rounded-xl` (or `rounded-md` on small), `base2` typography, `font-semibold`, 2px border.
  - Hover: must change background only via the preset `hover:` rules; must not shift geometry.
  - Focus-visible: must render a 2px `primary-1` outline with 2px offset over any variant; outline must remain visible on both themes.
  - Active: must reduce background opacity to 90% (matches existing `hover:bg-primary-1/90` pattern) and must not translate content on touch devices.
  - Disabled: `opacity: 0.2`, `pointer-events-none`, `aria-disabled="true"` (already baked into `.btn`).
  - Loading: must replace the label with the `loaderDots` keyframe animation, keep button width via `min-w`, and set `aria-busy="true"`.
  - Error (destructive confirm): must use `.btn-red` and pair with a live-region status message.
- **Keyboard:** must activate on `Enter` and `Space`; anchor variants must preserve native open-in-new-tab.
- **Pointer:** cursor must be `pointer`; icon-only buttons must have `.tap-highlight-color` applied on touch.
- **Touch:** hit target must be ≥ 40×40 px — `.btn-medium` and `.btn-small` on touch surfaces must stretch padding to satisfy this.
- **Typography / spacing:** labels use `base2`; icon offsets use the plugin rule `first:mr-2 last:ml-2`.
- **Long content:** labels must truncate with `truncate`; icons must remain visible.
- **Empty state:** icon-only button must carry `aria-label`.
- **Responsive:** below `md`, primary actions must stretch via `w-full` in stacked forms.

### Chat Composer (`components/Chat`, `components/Question`, `components/Answer`, `components/Message`)
- **Anatomy:** scroll transcript region, message row (avatar, author, body, timestamp, actions), composer (textarea, attachments, submit, mode toggles).
- **Variants:** user message, assistant message, system notice, streaming/in-progress assistant.
- **States:**
  - Default composer: `border-2 border-n-3 rounded-xl`, `base1` body text, `dark:border-n-5`.
  - Hover: border must shift to `n-4/50` (matches multi-select pattern).
  - Focus-visible: border must become `primary-1`; submit button must remain reachable via `Tab`.
  - Active (typing): same as focus-visible; streaming responses must show a cursor indicator using the `loaderDots` keyframe.
  - Disabled: composer must grey to `opacity-20`, block input, and set `aria-disabled="true"`.
  - Loading (awaiting response): submit must show spinner; transcript must append a placeholder bubble with `aria-live="polite"`.
  - Error (send failed): must render an inline `accent-1` banner with retry; message row must set `role="alert"`.
- **Keyboard:** `Enter` must submit, `Shift+Enter` must insert a newline, `Esc` must clear focus from composer without submitting, `↑` when composer is empty must edit the previous user message.
- **Pointer / touch:** auto-grow via `react-textarea-autosize`; tap-highlight must be suppressed on mobile.
- **Typography / spacing:** user/assistant bodies use `body2`; timestamps use `caption2 text-n-4`.
- **Long content:** messages longer than 12 lines must collapse with a "Show more" toggle; code blocks must scroll horizontally within the message bubble.
- **Empty state:** fresh chat must render the logo, a one-line prompt, and three suggested prompts as `btn-stroke-light` chips.
- **Responsive:** below `md`, sidebars must collapse to drawers and composer must stick to the bottom using `iOSHeight` plugin support.

### Field (`components/Field`)
- **Anatomy:** optional label, input or textarea, optional trailing icon, optional helper/error row.
- **States:**
  - Default: `border-2 border-n-3 rounded-xl`, `base1` text, `h-[3.25rem]` to match multiselect control.
  - Hover: `border-n-4/50`.
  - Focus-visible: `border-primary-1`; native outline must not be removed unless the border shift is paired with a 2px offset outline.
  - Disabled: `bg-n-2 text-n-4 cursor-not-allowed`, `aria-disabled="true"`, `dark:bg-n-6`.
  - Loading: must show a spinner in the trailing slot and set `aria-busy="true"`.
  - Error: must set `border-accent-1`, `aria-invalid="true"`, and render helper text with `caption1 text-accent-1` bound via `aria-describedby`.
- **Keyboard:** must be tabbable; textareas must accept `Enter` as newline and must not submit forms on `Enter`.
- **Pointer / touch:** full control area must be clickable; labels must pair via `htmlFor` / `id`.
- **Long content:** textareas must grow via `react-textarea-autosize`; single-line inputs must scroll horizontally.
- **Empty state:** placeholder must use `text-n-4/50` and state the expected format, not repeat the label.

### Multi-Select (`components/MultiSelect`, `.multiselect.*`)
- **Anatomy:** control (trigger + value chips + input), menu popover, option row.
- **States:**
  - Default control: `min-h-[3.25rem] border-2 border-n-3 rounded-xl`, `base1`.
  - Hover: `border-n-4/50` (matches existing rule).
  - Menu-open: `border-primary-1`.
  - Focus-visible on input: outline must remain visible; menu options must highlight with `bg-n-3/50` / `dark:bg-n-6`.
  - Disabled: `opacity-20 pointer-events-none`.
  - Loading: menu must render 3 skeleton rows sized to `py-2.5`.
  - Error: control border must become `accent-1`; menu must remain closed.
- **Keyboard:** `↓/↑` must move the highlighted option, `Enter` must toggle, `Backspace` on empty input must remove the last chip, `Esc` must close the menu.
- **Pointer / touch:** chip remove must expose a 24×24 hit target even if the icon appears smaller.
- **Long content:** menu must scroll at `max-h-[12rem]` with smooth scroll; chips must wrap to a second row rather than truncate.
- **Empty state:** "No options" must render `caption1 text-n-4` and remain readable to screen readers.

### Select (`components/Select`) — single-value variant
- **Anatomy:** trigger button, popover panel, option rows.
- **States:** same token mapping as multi-select; selected option must show a leading check icon in `primary-1`.
- **Keyboard:** `Enter/Space/↓` must open; typeahead should jump to matching option within 500ms inactivity window.
- **Empty state:** must mirror multi-select "No options" behavior.

### Switch / Checkbox / Radio (`components/Switch`, `components/Checkbox`, `components/Radio`)
- **Anatomy:** control + optional label + optional helper.
- **States:** off uses `border-n-3` / `dark:border-n-5`; on uses `primary-1` fill; focus-visible adds 2px `primary-1` outline with 2px offset; disabled drops to `opacity-20`; loading (async save) must freeze visual and set `aria-busy="true"`; error must border-accent-1 with helper copy.
- **Keyboard:** `Space` must toggle; `role="switch"` for Switch, native role for Checkbox and Radio; radio groups must cycle with `←/→`.
- **Touch:** visible control may be ≥ 20×20, but the clickable hit area must be ≥ 44×44 px.

### Slider (`components/SliderRange`)
- **Anatomy:** track, filled range, thumb(s), optional value label.
- **States:** default track `bg-n-3` / `dark:bg-n-5`; filled range `bg-primary-1`; thumb `bg-n-1` with shadow; hover thumb scales to 110%; focus-visible thumb must render 2px `primary-1` outline; disabled `opacity-20`; loading should freeze thumb; error is not applicable.
- **Keyboard:** `←/→` step, `Shift+←/→` large step, `Home/End` endpoints; `aria-valuemin/max/now` required.
- **Touch:** drag target must be ≥ 44×44 px.

### Modal (`components/Modal`, `components/ModalShareChat`)
- **Anatomy:** backdrop, dialog surface (`bg-n-1 dark:bg-n-7`, `rounded-xl`), header, body, footer actions.
- **States:** entering (fade + 200ms scale from 0.98), open, closing; focus must move to the dialog on open and return to the invoking control on close.
- **Keyboard:** `Esc` must close unless `preventClose`; `Tab` must cycle within the dialog; initial focus must land on the first interactive control or a labeled region.
- **Pointer / touch:** backdrop click must close only when `dismissible`; below `md` the modal must become a bottom sheet with a drag handle.
- **A11y:** must set `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (title), `aria-describedby` (body summary).
- **Long content:** body must scroll internally; header and footer must stay sticky.
- **Empty state:** a modal must never open without a title and a primary action.

### Sidebars (`components/LeftSidebar`, `components/RightSidebar`)
- **Anatomy:** fixed rail, brand/header, nav list (chat list, workspace sections), footer user block.
- **States:** nav row default `text-n-4`; hover `bg-n-3/50` / `dark:bg-n-6`; selected must use `bg-n-3` / `dark:bg-n-5` with `text-n-7` / `dark:text-n-1` and a leading 2px `primary-1` rule; focus-visible outline 2px `primary-1`; disabled `opacity-20`.
- **Keyboard:** `↑/↓` must move focus within the nav, `Enter` must activate, `Home/End` must jump; landmark role `navigation` required.
- **Responsive:** below `xl` the left rail must collapse to icon-only; below `md` both rails must become drawers accessed from the top menu.
- **Long content:** chat list must scroll with `scrollbar-thin`; sticky footer user block must remain visible.
- **Empty state:** the chat list must render the illustration + `base1` heading + `caption1` helper when zero chats exist.

### Message / AudioPlayer / Video
- **Anatomy (Message):** avatar, author, timestamp, content, action bar (copy, regenerate, share).
- **Anatomy (AudioPlayer / Video):** media surface, scrubber, play/pause, time, volume, fullscreen (video only).
- **States:** controls must fade in on hover/focus-within with 200ms opacity; focus-visible must remain on each control; disabled controls must not receive focus; loading must render a buffer indicator; error must swap the media for an `accent-1` retry tile.
- **Keyboard:** `Space` toggle play/pause, `←/→` seek ±5s, `↑/↓` volume, `M` mute, `F` fullscreen (video only); captions must be selectable and default on if available.
- **Touch:** scrub hit area must be ≥ 44 px vertically even if the track appears thinner.
- **Reduced motion:** control fade must reduce to opacity snap.

### FAQ / Accordion (`components/FaqItem`)
- **Anatomy:** row trigger (question + chevron) + expandable body.
- **States:** default `border-n-3 dark:border-n-5`; hover `bg-n-2 dark:bg-n-6`; focus-visible outline 2px `primary-1`; expanded must rotate chevron 180° and must use `aria-expanded="true"`; disabled rows must not be rendered; loading placeholders must be skeleton blocks; error rows must show `text-accent-1` copy.
- **Keyboard:** `Enter/Space` must toggle; `aria-controls` must reference the body id.
- **Long content:** body must wrap freely; must not truncate.
- **Empty state:** a collapsed section with no items must not render.

### Notifications / Toast (`components/Notify`)
- **Anatomy:** icon, title, message, optional action, close.
- **States:** info `bg-n-6 text-n-1`; success uses `primary-2` icon; warning uses `accent-5`; error uses `accent-1`.
- **Keyboard:** `Esc` must dismiss the top-most toast; action buttons must be tabbable.
- **A11y:** must use `role="status"` for non-critical, `role="alert"` for error; must not stack more than 3 at a time.
- **Motion:** entrance 200ms slide+fade; reduced-motion must use instant fade only.

## Accessibility Requirements

### Contrast
- Body text on `n-1` (`#FEFEFE`) using `n-7` (`#141718`) must meet ≥ 4.5:1; body text on `n-7` using `n-1` must meet the same bar.
- `n-4` (`#6C7275`) must only be used for ≥ `base2` size on `n-1` / `n-7` backgrounds; it must not be used on `n-2` / `n-6` for body text without verification.
- `primary-1` (`#0084FF`) must meet ≥ 4.5:1 when used for link text on `n-1`; on `n-7` it must pair with an underline since contrast drops to the 3:1 band.
- Status hues must pair with an icon or label; color alone must not convey state.

### Focus
- Every interactive element must render a visible focus-visible indicator — default is a 2px `primary-1` outline with 2px offset.
- `:focus` (non-keyboard) may suppress the outline; `:focus-visible` must not.
- Focus must never be trapped outside dialogs; dialogs must trap focus until closed and restore focus to the invoking control.

### Keyboard
- All features must be operable with keyboard alone.
- A skip-to-content link must render as the first focusable element on every page and must jump to `<main>`.
- Composite widgets (multi-select, slider, menu, modal, chat composer) must follow the ARIA Authoring Practices keyboard model.

### Screen readers
- Every icon-only button must carry `aria-label`.
- Chat streaming must announce assistant progress via an `aria-live="polite"` region; final content must not re-announce.
- Form errors must reference fields via `aria-describedby`; invalid fields must set `aria-invalid`.
- Modal titles must be associated via `aria-labelledby`.

### Motion
- Components must respect `prefers-reduced-motion: reduce` by disabling the `loaderDots` keyframe, auto-scroll smoothing, and decorative fades.
- Essential feedback (focus movement, active progress) must remain visible without animation.

### Dark mode parity
- Every component must render in both themes without text clipping, shadow loss, or contrast drops.
- Automated visual testing should snapshot both `[data-theme="light"]` and `[data-theme="dark"]`.

## Content and Tone Standards
- Voice: direct, user-respecting, AI-assistant-aware — never oversell or apologize.
- Terminology: "chat" (conversation thread), "prompt" (user input), "generation" (AI output), "workspace" (left sidebar grouping), "share" (public link for a chat).
- Buttons must use verb-first labels: "Send", "Regenerate", "Export chat", "Invite collaborator" — not "OK", "Submit", "Click here".
- Empty states must follow the pattern: one-line heading + one-sentence guidance + primary action. Example: "No chats yet — start a prompt to create your first conversation. [New chat]".
- Errors must name the failure, the consequence, and the next step. Example: "Generation failed — the prompt exceeded the model's context window. Shorten it and try again."
- Toasts must be ≤ 80 characters; critical errors must persist until dismissed, non-critical must auto-dismiss after 5s.
- Placeholder copy in the composer must rotate through a small set of example prompts relevant to the surface (chat, audio, video, code).

## Anti-Patterns
- Raw hex values in components — the neutral and accent tokens exist for every documented use.
- Hidden focus indicators (`outline-none` without a replacement) — breaks keyboard navigation and WCAG 2.4.7.
- One-off spacing such as `mt-[13px]` or `gap-[7px]` — the spacing extensions in `tailwind.config.ts` already cover these.
- Literal shadow strings beyond the three approved recipes — promote to `theme.extend.boxShadow` first.
- Light-only or dark-only components — every component must render correctly in both themes before merge.
- Ambiguous labels ("OK", "Click here", "Submit") — screen-reader users lose context.
- Hover-only affordance for core actions — touch and keyboard users cannot discover them.
- `transition-all` — fights the 200ms linear default and bypasses reduced-motion handling.
- Color-only status signaling — fails users with color-vision differences.
- Stacked modals (modal-on-modal) — indicates missing information architecture; use side panels or inline confirmation instead.
- Direct use of `.h1`–`.h6` for non-heading text — breaks document outline.

## QA Checklist
- [ ] No raw hex values in modified components; all colors resolve to `n-*` / `primary-*` / `accent-*` tokens from `tailwind.config.ts`.
- [ ] Every new interactive element has default, hover, focus-visible, active, disabled, loading, and error states implemented.
- [ ] Focus-visible outline is present in both light and dark themes (2px `primary-1`, 2px offset).
- [ ] Every icon-only control has an `aria-label` that matches its visible tooltip.
- [ ] Every form field pairs label → input via `htmlFor` / `id`; errors set `aria-invalid` and `aria-describedby`.
- [ ] Dialogs set `role="dialog"`, `aria-modal="true"`, labeled by title, trap focus, and restore focus on close.
- [ ] Composite widgets (multi-select, slider, menu, modal, chat composer) follow the ARIA keyboard model end to end.
- [ ] `prefers-reduced-motion: reduce` disables the `loaderDots` keyframe, auto-scroll smoothing, and decorative fades in touched components.
- [ ] Typography uses `.h1`–`.h6` / `.body*` / `.base*` / `.caption*` classes; no ad-hoc `text-[13px]` values.
- [ ] Spacing uses Tailwind scale or the project's extended steps (`0.25`, `0.75`, `4.5`, `5.5`, `6.5`, `13`, `15`, `18`, `22`, `30`, `34`, `38`, `58`).
- [ ] Shadows use one of the three approved recipes or a newly-added token in `theme.extend.boxShadow`.
- [ ] Layouts adapt cleanly across `sm` (480) / `md` (767) / `lg` (1023) / `xl` (1179) / `2xl` (1419) max-width breakpoints.
- [ ] Long-content and empty-state behavior verified for every new list, grid, and container.
- [ ] Contrast checked against both `n-1` and `n-7` backgrounds: body ≥ 4.5:1, non-text UI ≥ 3:1.
- [ ] Dark mode parity: component renders correctly under `[data-theme="dark"]`.
- [ ] Status signaling pairs color with an icon or text label.
- [ ] Copy follows tone standards; buttons use verb-first labels; empty states provide the next action.
