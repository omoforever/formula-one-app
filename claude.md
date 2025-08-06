# F1 Trading Cards - Project Plan

## Project Overview
Building a Formula 1 web app with holographic 3D trading cards that display driver information, stats, and team theming. Cards will have Pokemon-style shine effects and 3D hover animations.

**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, ShadCN UI, Jolpica F1 API, OpenF1 API

## API Strategy ✅
- **Primary**: Jolpica/Ergast API - Rich driver data, standings, results, historical data
- **Secondary**: OpenF1 API - Team colors, real-time data, additional details
- **Approach**: Use Jolpica for main card data, OpenF1 for styling/theming

## Phase 1: Foundation & API Setup 🚧

### Task 1: Jolpica API Integration
**File**: `api/getJolpicaDrivers.ts`

Create function that:
- Takes `season` parameter (string | number)
- Fetches from `https://api.jolpi.ca/ergast/f1/{season}/drivers/`
- Returns `MRData.DriverTable.Drivers[]` array
- Handles errors with try/catch
- Uses proper TypeScript types

**JolpicaDriver Type** (based on API docs):
```typescript
type JolpicaDriver = {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  url?: string;
  givenName: string;
  familyName: string;
  dateOfBirth?: string;
  nationality?: string;
}
```

### Task 2: Season Dropdown Component
**File**: `components/SeasonDropdown.tsx`

Create dropdown that:
- Shows seasons 2020-2025
- Default value: "2024"
- Callback prop: `onSeasonChange(season: string)`
- Styled with Tailwind CSS
- Uses HTML `<select>` element

### Task 3: Main Page Integration
**File**: `app/page.tsx`

Update main page to:
- Add `selectedSeason` state (default: "2024")
- Use `getJolpicaDrivers(selectedSeason)` 
- Render `SeasonDropdown` component
- Display first driver's name for testing
- Include loading and error states
- Handle season change events

## Phase 2: 3D Trading Cards 🎯

### Task 4: Basic Driver Card Component
**File**: `components/DriverCard.tsx`

Create trading card with:
- Driver photo/avatar placeholder
- Name, nationality, team
- Driver number prominently displayed
- Basic card layout and styling

### Task 5: 3D Hover Effects
Add holographic effects:
- CSS transforms for 3D rotation
- Gradient overlays for shine effect
- Smooth animations on hover
- Pokemon card-style holographic shimmer

### Task 6: Team Color Theming
- Integrate OpenF1 API for team colors
- Dynamic background gradients based on team
- Team logo/branding elements

## Phase 3: Rich Data & Interactivity

### Task 7: Championship Data
Add driver stats using Jolpica endpoints:
- Current season standings position
- Total points and wins
- Recent race results

### Task 8: Card Grid Layout
- Responsive grid of trading cards
- Smooth loading animations
- Card flipping/reveal effects

### Task 9: Individual Driver Pages
- Dynamic routing `/driver/[driverId]`
- Detailed driver profiles
- Career statistics and history

## Phase 4: Polish & Features

### Task 10: Advanced Filtering
- Filter by team/constructor
- Search by driver name
- Sort by championship position

### Task 11: Enhanced Animations
- Card collection animations
- Page transitions
- Loading skeletons

### Task 12: Performance & Deploy
- Image optimization
- API caching strategies
- Deployment setup

## Current Status: Phase 1 - Foundation
**Next Steps**: Complete Tasks 1-3 to establish the data foundation

## API Endpoints Reference

### Jolpica API:
- **Drivers**: `/ergast/f1/{season}/drivers/`
- **Standings**: `/ergast/f1/{season}/driverstandings/`
- **Results**: `/ergast/f1/{season}/results/`
- **Constructors**: `/ergast/f1/{season}/constructors/`

### OpenF1 API:
- **Drivers**: `/v1/drivers` (for team colors)
- **Sessions**: `/v1/sessions` (for current data)

## Success Criteria
- ✅ Season dropdown working with API
- ✅ Driver data displaying correctly
- ✅ 3D card hover effects
- ✅ Team-based color theming
- ✅ Individual driver pages
- ✅ Responsive design
- ✅ Smooth animations throughout

---

*Let's build some amazing F1 trading cards! 🏎️✨*