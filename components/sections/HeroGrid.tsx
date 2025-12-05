'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HERO_CHARACTERS } from '@/lib/constants'

export function HeroGrid() {
  const [activePanel, setActivePanel] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      {HERO_CHARACTERS.map((character) => (
        <motion.div
          key={character.id}
          className={cn(
            'hero-panel relative overflow-hidden',
            'flex-1 min-h-[25vh] md:min-h-screen',
            'transition-all duration-500 ease-out cursor-pointer',
            activePanel === character.id ? 'md:flex-[3]' : 'md:flex-1'
          )}
          onMouseEnter={() => setActivePanel(character.id)}
          onMouseLeave={() => setActivePanel(null)}
        >
          {/* Background Placeholder (will be video/image) */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gray to-brand-black">
            {/* Video or Image will go here */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-brand-black/60" />
          </div>

          {/* Content */}
          <Link
            href={character.href}
            className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10"
          >
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: activePanel === character.id ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Character Label */}
              <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-heading uppercase tracking-wider rounded mb-3">
                {character.id === 'parents' && 'For Parents'}
                {character.id === 'organizations' && 'For Organizations'}
                {character.id === 'athletes' && 'For Athletes'}
                {character.id === 'photographers' && 'For Photographers'}
              </span>

              {/* Title */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white mb-2">
                {character.title}
              </h2>

              {/* Subtitle */}
              <p className="text-brand-gold text-lg md:text-xl font-medium mb-3">
                {character.subtitle}
              </p>

              {/* Description - Only shows on hover */}
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activePanel === character.id ? 1 : 0,
                  height: activePanel === character.id ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 mb-4 max-w-md overflow-hidden"
              >
                {character.description}
              </motion.p>

              {/* CTA Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: activePanel === character.id ? 1 : 0,
                  x: activePanel === character.id ? 0 : -10,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-2 text-brand-gold font-heading uppercase tracking-wider text-sm"
              >
                Start Your Journey <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          </Link>

          {/* Panel Divider */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-brand-gold/20 hidden md:block" />
        </motion.div>
      ))}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-brand-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
