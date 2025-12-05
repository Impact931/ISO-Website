import type { Config } from 'tailwindcss'

/**
 * ISO Photo XP - Tailwind Configuration
 *
 * Design tokens imported from @/lib/design-tokens
 * Brand colors: Black, Gold, Red (High contrast, cinematic)
 *
 * @see docs/Design Docs/ISO Webpage Redesign - Implementation Guide.md
 */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ========================================
      // COLORS - ISO Brand Palette
      // ========================================
      colors: {
        brand: {
          // Primary colors
          black: '#000000',
          offBlack: '#0A0A0A',
          white: '#FFFFFF',
          gold: '#bfa863',
          red: '#c40a0a',
          gray: '#262626',

          // Gold scale
          'gold-50': '#fdf9ed',
          'gold-100': '#f9f0d1',
          'gold-200': '#f2dea0',
          'gold-300': '#eac96a',
          'gold-400': '#e3b43d',
          'gold-500': '#bfa863',
          'gold-600': '#a08a4a',
          'gold-700': '#7d6b3a',

          // Red scale
          'red-50': '#fef2f2',
          'red-100': '#fee2e2',
          'red-500': '#ef4444',
          'red-600': '#c40a0a',
          'red-700': '#b91c1c',
        },
        status: {
          success: '#bfa863',
          error: '#c40a0a',
          warning: '#f59e0b',
          info: '#3b82f6',
        },
      },

      // ========================================
      // TYPOGRAPHY
      // ========================================
      fontFamily: {
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        heading: '-0.02em',
        caps: '0.15em',
      },

      // ========================================
      // SPACING & SIZING
      // ========================================
      maxWidth: {
        narrow: '48rem',
        wide: '80rem',
      },
      aspectRatio: {
        'hero-vertical': '9 / 16',
        'hero-landscape': '21 / 9',
        'profile-card': '4 / 5',
        'blog-thumb': '16 / 9',
      },

      // ========================================
      // SHADOWS
      // ========================================
      boxShadow: {
        gold: '0 4px 14px 0 rgba(191, 168, 99, 0.3)',
        'gold-lg': '0 10px 40px 0 rgba(191, 168, 99, 0.4)',
        'gold-glow': '0 0 20px rgba(191, 168, 99, 0.5)',
        cinematic: '0 20px 60px -15px rgba(0, 0, 0, 0.5)',
        'cinematic-lg': '0 40px 80px -20px rgba(0, 0, 0, 0.6)',
        card: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
      },

      // ========================================
      // ANIMATIONS
      // ========================================
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        bounce: 'bounce 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // ========================================
      // TRANSITIONS
      // ========================================
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        relaxed: '300ms',
        slow: '500ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        snappy: 'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // ========================================
      // BACKGROUNDS & GRADIENTS
      // ========================================
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
        'fade-to-bottom': 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
        'fade-to-top': 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
        vignette: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #e3b43d 0%, #bfa863 50%, #e3b43d 100%)',
      },

      // ========================================
      // BACKDROP BLUR
      // ========================================
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
