'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Sun, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const styles = [
  {
    id: 'smoke',
    name: 'Smoke',
    icon: Sparkles,
    description: 'Dramatic smoke effects with bold lighting',
    gradient: 'from-purple-900 via-gray-900 to-black',
    accent: 'purple',
  },
  {
    id: 'studio',
    name: 'Studio',
    icon: Sun,
    description: 'Clean studio lighting, professional backdrop',
    gradient: 'from-gray-800 via-gray-900 to-black',
    accent: 'white',
  },
  {
    id: 'action',
    name: 'Action',
    icon: Zap,
    description: 'Dynamic action shots with motion blur',
    gradient: 'from-orange-900 via-red-900 to-black',
    accent: 'orange',
  },
]

export function StyleSelector() {
  const [selectedStyle, setSelectedStyle] = useState(styles[0])

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-white mb-3">
          Choose Your <span className="text-brand-gold">Look</span>
        </h3>
        <p className="text-gray-400">
          Select a style and see your photos transform
        </p>
      </div>

      {/* Style Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {styles.map((style) => {
          const Icon = style.icon
          const isActive = selectedStyle.id === style.id

          return (
            <motion.button
              key={style.id}
              onClick={() => setSelectedStyle(style)}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold uppercase tracking-wider text-sm transition-all',
                isActive
                  ? 'bg-brand-gold text-brand-black'
                  : 'bg-brand-gray text-brand-white hover:bg-brand-gold/20'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              {style.name}
            </motion.button>
          )
        })}
      </div>

      {/* Preview Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStyle.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br',
            selectedStyle.gradient
          )}
        >
          {/* Placeholder content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-brand-gold/20 flex items-center justify-center"
              >
                <selectedStyle.icon size={48} className="text-brand-gold" />
              </motion.div>
              <h4 className="text-2xl font-heading font-bold text-brand-white mb-2">
                {selectedStyle.name} Style
              </h4>
              <p className="text-gray-400">{selectedStyle.description}</p>
            </div>
          </div>

          {/* Corner label */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-brand-black text-xs font-heading uppercase tracking-wider rounded">
            Preview
          </div>

          {/* Decorative elements based on style */}
          {selectedStyle.id === 'smoke' && (
            <>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/30 to-transparent" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
            </>
          )}
          {selectedStyle.id === 'studio' && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </>
          )}
          {selectedStyle.id === 'action' && (
            <>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Social proof ticker placeholder */}
      <div className="mt-8 py-4 bg-brand-offBlack rounded-lg overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-gray-500 text-sm">
              @athlete_{i + 1} &quot;Best photos I&apos;ve ever had!&quot; 🔥
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
