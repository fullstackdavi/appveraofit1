# Design Guidelines: Desafio Verão 30D

## Design Approach
**Reference-Based Approach**: Drawing inspiration from fitness/wellness apps like MyFitnessPal, Headspace, and Duolingo for gamified progress tracking combined with modern SaaS landing aesthetics.

## Core Design Principles
- Mobile-first progressive enhancement
- Gamified progress visualization
- Summer-themed vibrant aesthetic
- Smooth micro-interactions for engagement
- Clear visual hierarchy between locked/unlocked states

## Typography
**Font Family**: Poppins (Google Fonts)
- Headlines (H1): 600 weight, 2.5rem (mobile) / 3.5rem (desktop)
- Subheadings (H2): 600 weight, 1.5rem (mobile) / 2rem (desktop)
- Body Text: 400 weight, 1rem
- Card Numbers: 700 weight, 1.25rem
- Button Text: 500 weight, 1rem

## Color Palette
**Summer Theme**:
- Primary Blue: #3B82F6 (sky blue for active elements)
- Accent Orange: #F97316 (energy, CTAs, completed states)
- Background White: #FFFFFF
- Subtle Gray: #F1F5F9 (card backgrounds)
- Success Green: #10B981 (checkmarks, completion)
- Lock Gray: #94A3B8 (disabled/locked states)
- Text Dark: #1E293B

## Layout System
**Spacing**: Use Tailwind units: 2, 4, 6, 8, 12, 16 for consistent rhythm

**Container**: max-w-6xl centered, px-4 (mobile) / px-8 (desktop)

**Grid System**:
- Desktop: 5 columns for day cards (grid-cols-5)
- Tablet: 3 columns (md:grid-cols-3)
- Mobile: 2 columns (grid-cols-2)

## Component Library

### Hero Section
- Full viewport height background with gradient overlay (blue to orange)
- Centered content with large headline and subtitle
- Single prominent CTA button
- Subtle animated background pattern or wave graphic

### Progress Bar (Fixed Top)
- Sticky positioning below header
- Gradient fill animation (blue to orange)
- Display: "X / 30 dias completos" + percentage
- Height: h-16 with smooth transition on fill

### Day Cards (30 total)
**Active State**:
- Glassmorphism effect: backdrop-blur, subtle white background with opacity
- Box shadow: soft elevation
- Hover: scale(1.05) transform + shadow increase
- Rounded corners: rounded-xl
- Number badge in top-right corner

**Completed State**:
- Orange accent border (border-2)
- Green checkmark overlay (top-right)
- Slight opacity reduction to show completion

**Locked State**:
- Gray background overlay
- Padlock icon centered
- Blur effect on content
- No hover interaction

### Modal/Panel
- Slide-in from right (desktop) / bottom (mobile)
- Backdrop overlay: bg-black/50
- White background with rounded-lg corners
- Sections clearly separated with border-b dividers
- Close button: top-right X icon
- Content padding: p-8 (desktop) / p-6 (mobile)

**Modal Sections**:
1. Day title header (large, bold)
2. Daily tip (icon + text block)
3. Recipe card (ingredients list + preparation steps)
4. Mini-workout (exercise list with duration)
5. Notes textarea (border, rounded)
6. "Marcar como feito" button (full-width, prominent)

### Payment/Unlock Section
- Card-style container with gradient border
- "Unlock all 30 days" headline
- Price display: large, bold R$29,90
- CTA button with shimmer effect
- Benefits list with checkmarks

### Buttons
**Primary CTA**:
- Full rounded (rounded-full)
- Gradient background (blue to orange)
- White text, bold
- Padding: px-8 py-4
- Shadow: elevation-2
- Hover: brightness increase, scale(1.02)

**Secondary**:
- Outline style with blue border
- Hover: background fill transition

### Toast Notifications
- Fixed bottom-right (desktop) / bottom-center (mobile)
- Slide-up animation
- Auto-dismiss after 3s
- Icon + message layout
- Success/info color variants

### Congratulations Modal
- Confetti animation overlay
- Large success icon/illustration
- Congratulatory message
- Share progress button
- Celebration colors (orange/gold accents)

## Animations
- Card hover: transform scale(1.05), 200ms ease
- Progress bar fill: 600ms ease-out
- Modal enter: slide-in 300ms ease-out
- Toast: slide-up 250ms ease
- Button press: scale(0.98) on active
- Checkmark appear: scale bounce animation
- Lock icon: subtle shake on click

## Responsive Breakpoints
- Mobile: < 640px (2-column grid)
- Tablet: 640px - 1024px (3-column grid)
- Desktop: > 1024px (5-column grid)

## Accessibility
- Focus visible states on all interactive elements (ring-2 ring-blue-400)
- ARIA labels on modal dialogs
- Keyboard navigation support (Tab, Enter, Escape)
- Color contrast ratios meet WCAG AA
- Screen reader friendly progress updates

## Images
**Hero Background**: Summer/beach themed gradient or abstract wave pattern (not a photo - keep it vibrant and energetic with programmatic gradient or subtle pattern)

**Icons**: Use Heroicons for consistency
- Lock/unlock icons for cards
- Checkmark for completed states
- Calendar icon for day numbers
- Share icon for progress sharing
- Recipe/workout category icons

## Special States
**Empty State**: First-time user sees clean grid with day 1 highlighted and pulsing animation

**Completion State**: All cards show checkmarks, confetti animation, special modal appears

**Reset**: Hidden settings cog icon in corner that reveals reset confirmation dialog