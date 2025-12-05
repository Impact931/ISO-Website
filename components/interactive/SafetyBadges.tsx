'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, CheckCircle, Award, FileCheck, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const badges = [
  {
    id: 'background-check',
    icon: Shield,
    title: 'Background Checked',
    description: 'Every photographer undergoes comprehensive background screening before joining our network.',
  },
  {
    id: 'safesport',
    icon: CheckCircle,
    title: 'SafeSport Certified',
    description: 'All team members complete SafeSport training to ensure child safety at every event.',
  },
  {
    id: 'insured',
    icon: FileCheck,
    title: 'Fully Insured',
    description: '$2M liability coverage protects you, your organization, and your athletes.',
  },
  {
    id: 'certified',
    icon: Award,
    title: 'ISO Certified Pro',
    description: 'Photographers meet our rigorous quality standards for equipment and expertise.',
  },
  {
    id: 'vetted',
    icon: Users,
    title: 'Community Vetted',
    description: 'References and reviews from real parents and organizations in your area.',
  },
]

export function SafetyBadges() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null)

  return (
    <div className="py-12">
      <h3 className="text-2xl font-heading font-bold text-brand-white text-center mb-8">
        Your Child&apos;s Safety is <span className="text-brand-gold">Our Priority</span>
      </h3>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {badges.map((badge) => {
          const Icon = badge.icon
          const isActive = activeBadge === badge.id

          return (
            <div
              key={badge.id}
              className="relative"
              onMouseEnter={() => setActiveBadge(badge.id)}
              onMouseLeave={() => setActiveBadge(null)}
            >
              {/* Badge Icon */}
              <motion.div
                className={cn(
                  'w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300',
                  isActive
                    ? 'bg-brand-gold text-brand-black scale-110'
                    : 'bg-brand-gray text-brand-gold hover:bg-brand-gold/20'
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={32} />
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-brand-offBlack border border-brand-gold/30 rounded-lg shadow-gold z-20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-brand-gold" />
                      <h4 className="font-heading font-semibold text-brand-white">
                        {badge.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400">{badge.description}</p>

                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-brand-offBlack" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Label */}
              <p className="text-xs text-gray-400 text-center mt-2 max-w-[80px]">
                {badge.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
