'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ICPHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaHref?: string
  accentColor?: 'gold' | 'red'
  backgroundClass?: string
  children?: React.ReactNode
}

export function ICPHero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaHref = '#',
  accentColor = 'gold',
  backgroundClass = 'bg-brand-black',
  children,
}: ICPHeroProps) {
  return (
    <section className={cn('relative min-h-[70vh] flex items-center', backgroundClass)}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black" />

      <div className="container-wide relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              'inline-block px-4 py-1.5 rounded-full text-xs font-heading uppercase tracking-wider mb-6',
              accentColor === 'gold'
                ? 'bg-brand-gold/20 text-brand-gold'
                : 'bg-brand-red/20 text-brand-red'
            )}
          >
            {subtitle}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            {description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={ctaHref}
              className={cn(
                'btn-primary',
                accentColor === 'gold'
                  ? 'bg-brand-gold text-brand-black hover:bg-brand-white'
                  : 'bg-brand-red text-brand-white hover:bg-brand-red/90'
              )}
            >
              {ctaText}
            </a>
          </motion.div>
        </div>

        {/* Optional children (for floating elements) */}
        {children}
      </div>
    </section>
  )
}
