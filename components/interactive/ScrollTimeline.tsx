'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Smartphone, Camera, Image } from 'lucide-react'
import { cn } from '@/lib/utils'
import { JOURNEY_STEPS } from '@/lib/constants'

const iconMap = {
  smartphone: Smartphone,
  camera: Camera,
  image: Image,
}

export function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
        {/* Background line */}
        <div className="absolute inset-0 bg-brand-gray/30" />
        {/* Animated progress line */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-brand-gold origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Timeline Steps */}
      <div className="space-y-24 md:space-y-32">
        {JOURNEY_STEPS.map((step, index) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap]
          const isEven = index % 2 === 0

          return (
            <TimelineStep
              key={step.id}
              step={step}
              Icon={Icon}
              isEven={isEven}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          )
        })}
      </div>
    </div>
  )
}

interface TimelineStepProps {
  step: (typeof JOURNEY_STEPS)[number]
  Icon: typeof Smartphone
  isEven: boolean
  index: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function TimelineStep({ step, Icon, isEven, index, scrollYProgress }: TimelineStepProps) {
  const stepProgress = useTransform(
    scrollYProgress,
    [index * 0.33, (index + 1) * 0.33],
    [0, 1]
  )

  const opacity = useTransform(stepProgress, [0, 0.5], [0.3, 1])
  const scale = useTransform(stepProgress, [0, 0.5], [0.8, 1])

  return (
    <motion.div
      className={cn(
        'relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center',
        isEven ? 'md:text-right' : 'md:text-left md:direction-rtl'
      )}
      style={{ opacity }}
    >
      {/* Content Side */}
      <motion.div
        className={cn(
          'space-y-4',
          isEven ? 'md:pr-16' : 'md:pl-16 md:order-2 md:direction-ltr'
        )}
        style={{ scale }}
      >
        <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-heading uppercase tracking-wider rounded">
          Step {step.id}
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-white">
          {step.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {step.description}
        </p>
      </motion.div>

      {/* Icon Side */}
      <motion.div
        className={cn(
          'flex justify-center',
          isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16 md:order-1'
        )}
        style={{ scale }}
      >
        <div className="relative">
          {/* Icon Container */}
          <motion.div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-offBlack border-2 border-brand-gold/30 flex items-center justify-center"
            whileHover={{ scale: 1.1, borderColor: 'rgba(191, 168, 99, 0.8)' }}
          >
            <Icon size={40} className="text-brand-gold" />
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-gold/20"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </div>
      </motion.div>

      {/* Center Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <motion.div
          className="w-4 h-4 rounded-full bg-brand-gold"
          style={{ scale: useTransform(stepProgress, [0, 0.5], [0.5, 1]) }}
        />
      </div>
    </motion.div>
  )
}
