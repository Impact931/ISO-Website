/**
 * ISO Photo XP - Color Design Tokens
 *
 * Brand Identity: "High Contrast, Clean, and Gallery-Like"
 * The UI should recede; the photos should pop.
 *
 * @see docs/Design Docs/ISO Webpage Redesign - Implementation Guide.md
 */

// ============================================
// BRAND COLORS (Primary Palette)
// ============================================

export const brandColors = {
  // Primary Black - High contrast backgrounds
  black: {
    DEFAULT: '#000000',
    pure: '#000000',
    off: '#0A0A0A',      // Soft black for cards/modals
    soft: '#111111',      // Slightly lighter for subtle contrast
  },

  // ISO Gold - Premium accent, CTAs, success states
  gold: {
    DEFAULT: '#bfa863',
    50: '#fdf9ed',
    100: '#f9f0d1',
    200: '#f2dea0',
    300: '#eac96a',
    400: '#e3b43d',
    500: '#bfa863',      // Primary brand gold
    600: '#a08a4a',
    700: '#7d6b3a',
    800: '#685734',
    900: '#59492e',
    950: '#332717',
  },

  // ISO Red - Urgency, errors, notifications
  red: {
    DEFAULT: '#c40a0a',
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#c40a0a',      // Primary brand red
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Neutral Grays
  gray: {
    DEFAULT: '#262626',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',      // Primary secondary background
    900: '#171717',
    950: '#0a0a0a',
  },

  // Pure White
  white: {
    DEFAULT: '#FFFFFF',
    pure: '#FFFFFF',
    off: '#FAFAFA',
    muted: '#F5F5F5',
  },
} as const

// ============================================
// SEMANTIC COLORS (Functional Palette)
// ============================================

export const semanticColors = {
  // Status colors
  status: {
    success: brandColors.gold.DEFAULT,    // Premium gold for success
    error: brandColors.red.DEFAULT,       // Brand red for errors
    warning: '#f59e0b',                   // Amber for warnings
    info: '#3b82f6',                      // Blue for info
  },

  // Background colors
  background: {
    primary: brandColors.black.pure,
    secondary: brandColors.black.off,
    tertiary: brandColors.gray[800],
    elevated: brandColors.gray[700],
    overlay: 'rgba(0, 0, 0, 0.8)',
  },

  // Text colors
  text: {
    primary: brandColors.white.DEFAULT,
    secondary: brandColors.gray[400],
    muted: brandColors.gray[500],
    accent: brandColors.gold.DEFAULT,
    inverse: brandColors.black.pure,
  },

  // Border colors
  border: {
    default: brandColors.gray[800],
    subtle: 'rgba(255, 255, 255, 0.1)',
    accent: brandColors.gold.DEFAULT,
    error: brandColors.red.DEFAULT,
  },

  // Interactive states
  interactive: {
    default: brandColors.gold.DEFAULT,
    hover: brandColors.white.DEFAULT,
    active: brandColors.gold[600],
    disabled: brandColors.gray[600],
  },
} as const

// ============================================
// GRADIENT DEFINITIONS
// ============================================

export const gradients = {
  // Hero overlay gradient (top to bottom fade)
  heroOverlay: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',

  // Cinematic vignette effect
  cinematic: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',

  // Gold shimmer effect for premium elements
  goldShimmer: `linear-gradient(90deg, ${brandColors.gold[400]} 0%, ${brandColors.gold.DEFAULT} 50%, ${brandColors.gold[400]} 100%)`,

  // Dark fade for text readability
  darkFade: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',

  // Subtle card highlight
  cardHighlight: 'linear-gradient(135deg, rgba(191,168,99,0.1) 0%, transparent 50%)',
} as const

// ============================================
// OPACITY SCALES
// ============================================

export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  80: '0.8',
  90: '0.9',
  100: '1',
} as const

// ============================================
// CSS VARIABLE MAPPING
// ============================================

export const cssVariables = {
  '--color-brand-black': brandColors.black.pure,
  '--color-brand-off-black': brandColors.black.off,
  '--color-brand-white': brandColors.white.pure,
  '--color-brand-gold': brandColors.gold.DEFAULT,
  '--color-brand-red': brandColors.red.DEFAULT,
  '--color-brand-gray': brandColors.gray.DEFAULT,
  '--color-status-success': semanticColors.status.success,
  '--color-status-error': semanticColors.status.error,
  '--color-status-warning': semanticColors.status.warning,
  '--color-status-info': semanticColors.status.info,
} as const

// Type exports for TypeScript
export type BrandColor = keyof typeof brandColors
export type SemanticColor = keyof typeof semanticColors
export type GradientName = keyof typeof gradients
