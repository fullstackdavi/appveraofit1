# Desafio Verão 30D - Summer Weight Loss Challenge Tracker

## Overview
A mobile-first, PWA-ready single-page application for a 30-day summer weight loss challenge. Features a progressive unlock system (first 10 days free, remaining 20 days locked behind simulated payment), daily recipes, mini-workouts, tips, progress tracking with localStorage persistence, toast notifications, congratulations modal upon completion, and share functionality.

## Purpose
Help users track their 30-day summer fitness journey with daily guidance, recipes, and workouts while maintaining engagement through a gamified unlock system.

## Current State
✅ Production-ready - All features implemented and architect-approved
- Complete 30-day challenge content (tips, recipes, workouts)
- Progressive unlock system (days 1-10 free, days 11-30 locked)
- Day detail modal with recipes, workouts, and notes
- Progress tracking with visual progress bar
- localStorage persistence for completed days, notes, and unlock status
- Toast notifications for user actions
- Congratulations modal when all 30 days are completed
- Share functionality for social media
- Reset functionality to clear progress
- Fully responsive mobile-first design
- Dark mode support
- PWA manifest configured

## Recent Changes (November 14, 2025)
- Fixed all design guideline violations:
  - Removed all emojis from UI strings (replaced with icons or plain text)
  - Removed manual button sizing overrides (h-8, w-8, px-8, py-6)
  - Removed all manual hover states (hover:bg-*, hover:scale-*)
  - Fixed button contrast in completed/uncompleted states
  - Using proper Shadcn component variants throughout
- Received final architect approval for production readiness

## Project Architecture

### Frontend Stack
- React 18 with TypeScript
- Vite for build tooling
- Shadcn UI components with Radix UI primitives
- Tailwind CSS for styling
- Wouter for routing
- TanStack Query for state management
- Lucide React for icons
- localStorage for persistence (no backend required)

### Key Files
- `client/src/pages/home.tsx` - Main application component with all features
- `client/src/data/challengeData.ts` - 30 days of challenge content
- `client/src/index.css` - Custom theme colors and design tokens
- `tailwind.config.ts` - Tailwind configuration with summer theme
- `client/index.html` - HTML entry point with PWA meta tags
- `client/public/manifest.json` - PWA manifest
- `design_guidelines.md` - Design system guidelines

### Data Model
LocalStorage keys:
- `summer-challenge-completed` - Array of completed day numbers
- `summer-challenge-notes` - Object mapping day numbers to user notes
- `summer-challenge-unlocked` - Boolean indicating if all days are unlocked

### Features
1. **Hero Section** - Gradient background with feature highlights
2. **Progress Bar** - Visual progress tracking with percentage
3. **30-Day Grid** - Calendar view with lock/unlock states
4. **Day Detail Modal** - Shows tip, recipe (ingredients + preparation), workout, and notes
5. **Payment Section** - Unlock all days for R$ 29,90 (simulated)
6. **Toast Notifications** - User feedback for all actions
7. **Congratulations Modal** - Celebration when all 30 days completed
8. **Share Functionality** - Share progress on social media
9. **Reset Dialog** - Clear all progress with confirmation
10. **Responsive Design** - Mobile-first, works on all screen sizes
11. **Dark Mode** - Full dark mode support
12. **PWA Support** - Installable, offline-capable

### Design System
**Colors:**
- Primary Blue: #3B82F6 (hsl(221, 83%, 53%))
- Accent Orange: #F97316 (hsl(25, 95%, 53%))
- Success Green: #10B981 (hsl(160, 84%, 39%))
- Lock Gray: #94A3B8 (hsl(214, 14%, 71%))

**Typography:**
- Font Family: Poppins (Google Fonts)
- Headings: Bold, large sizes
- Body: Regular, readable sizes

**Effects:**
- Glassmorphism on cards
- Subtle hover elevations
- Smooth transitions
- No emojis (design guideline requirement)

## User Preferences
- Language: Portuguese (Brazil)
- Mobile-first approach
- Summer theme with bright, energetic colors
- Glassmorphism aesthetic
- No backend required - pure frontend with localStorage

## Running the Project
```bash
npm run dev
```
The app runs on port 5000 and is accessible at the Replit preview URL.

## Technical Decisions
- **No Backend**: Uses localStorage for all data persistence to keep the app simple and fast
- **No Database**: Frontend-only implementation as requested
- **PWA Ready**: Configured for installation and offline use
- **Simulated Payment**: Unlock functionality is client-side only (demo purposes)
- **Content Generation**: All 30 days of tips, recipes, and workouts are pre-generated
- **Shadcn Components**: Using the design system's built-in components without custom overrides
- **Design Guidelines Strict Compliance**: Following all universal design guidelines including no emojis, proper button variants, and contrast requirements

## Notes
- Originally user wanted pure HTML/CSS/JS but environment is set up for React
- All content is in Portuguese (Brazilian)
- Challenge data is hardcoded for demo purposes
- Payment is simulated (no real transaction processing)
- App is fully functional offline after first load (PWA)
