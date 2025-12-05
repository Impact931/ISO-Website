/**
 * ISO Photo XP - Design Tokens
 *
 * Centralized design system tokens for consistent styling
 * across the entire application.
 *
 * Usage:
 * ```ts
 * import { colors, typography, spacing } from '@/lib/design-tokens'
 * ```
 *
 * @see docs/Design Docs/ISO Webpage Redesign - Implementation Guide.md
 */

// Core token exports
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './animations'
export * from './effects'

// Re-export commonly used tokens with aliases
export {
  brandColors as colors,
  semanticColors,
  gradients,
} from './colors'

export {
  fontFamilies as fonts,
  fontSizes,
  fontWeights,
  textStyles,
} from './typography'

export {
  spacing,
  semanticSpacing,
  sizing,
  containerWidths,
  aspectRatios,
  borderRadius,
  zIndex,
} from './spacing'

export {
  durations,
  easings,
  springs,
  transitions,
  variants,
  scrollAnimations,
  interactionStates,
  keyframes,
} from './animations'

export {
  shadows,
  textShadows,
  blurs,
  glassMorphism,
  overlays,
  gradientOverlays,
  filters,
} from './effects'

// ============================================
// THEME CONFIGURATION (for CSS-in-JS or Tailwind)
// ============================================

import { brandColors, semanticColors, gradients, cssVariables } from './colors'
import { fontFamilies, fontSizes, fontWeights, letterSpacing, lineHeights } from './typography'
import { spacing, containerWidths, borderRadius, zIndex, aspectRatios } from './spacing'
import { durations, easings, keyframes } from './animations'
import { shadows, blurs } from './effects'

/**
 * Complete theme object for Tailwind or styled-components
 */
export const theme = {
  colors: {
    brand: brandColors,
    ...semanticColors,
  },
  fontFamily: fontFamilies,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  letterSpacing,
  lineHeight: lineHeights,
  spacing,
  maxWidth: containerWidths,
  borderRadius,
  zIndex,
  aspectRatio: aspectRatios,
  boxShadow: shadows,
  blur: blurs,
  transitionDuration: durations,
  transitionTimingFunction: easings,
  keyframes,
  backgroundImage: gradients,
} as const

/**
 * CSS variables for global stylesheet
 */
export const getCssVariables = (): string => {
  return Object.entries(cssVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')
}

/**
 * Tailwind theme extend configuration
 * Use this in tailwind.config.ts
 */
export const tailwindThemeExtend = {
  colors: {
    brand: {
      black: brandColors.black.pure,
      offBlack: brandColors.black.off,
      white: brandColors.white.pure,
      gold: brandColors.gold.DEFAULT,
      red: brandColors.red.DEFAULT,
      gray: brandColors.gray.DEFAULT,
    },
    status: semanticColors.status,
  },
  fontFamily: {
    heading: fontFamilies.heading,
    body: fontFamilies.body,
    mono: fontFamilies.mono,
  },
  boxShadow: {
    gold: shadows.gold,
    goldLg: shadows.goldLg,
    goldGlow: shadows.goldGlow,
    cinematic: shadows.cinematic,
    cinematicLg: shadows.cinematicLg,
    card: shadows.card,
    cardHover: shadows.cardHover,
  },
  aspectRatio: aspectRatios,
  keyframes,
  animation: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-out',
    'slide-down': 'slideDown 0.3s ease-out',
    'scale-in': 'scaleIn 0.3s ease-out',
    'draw-line': 'drawLine 1.5s ease-out forwards',
    shimmer: 'shimmer 2s linear infinite',
    pulse: 'pulse 2s ease-in-out infinite',
    bounce: 'bounce 1s ease-in-out infinite',
  },
} as const

// Default export for convenience
export default theme
