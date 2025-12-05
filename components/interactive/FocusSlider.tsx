'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FocusSliderProps {
  beforeImage?: string
  afterImage?: string
  beforeLabel?: string
  afterLabel?: string
}

export function FocusSlider({
  beforeImage = '/assets/images/placeholder-before.jpg',
  afterImage = '/assets/images/placeholder-after.jpg',
  beforeLabel = 'The Moment You Missed',
  afterLabel = 'The ISO Memory',
}: FocusSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, percentage)))
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative aspect-video rounded-lg overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Full width, underneath) */}
        <div className="absolute inset-0 bg-brand-gray">
          {/* Placeholder for after image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-brand-gold/20 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <p className="text-brand-gold font-heading text-xl">{afterLabel}</p>
              <p className="text-gray-400 text-sm mt-1">Crystal clear. Every detail.</p>
            </div>
          </div>
        </div>

        {/* Before Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 bg-brand-offBlack"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* Placeholder for before image */}
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-brand-red/20 flex items-center justify-center blur-sm">
                <span className="text-6xl">📱</span>
              </div>
              <p className="text-gray-400 font-heading text-xl blur-[1px]">{beforeLabel}</p>
              <p className="text-gray-500 text-sm mt-1">Blurry. Dark. Gone forever.</p>
            </div>
          </div>
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-brand-black/30" />
        </div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-brand-gold cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-gold border-4 border-brand-white shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-brand-black rounded" />
              <div className="w-0.5 h-4 bg-brand-black rounded" />
            </div>
          </div>

          {/* Vertical Line Glow */}
          <div className="absolute inset-0 w-1 bg-brand-gold shadow-[0_0_20px_rgba(191,168,99,0.5)]" />
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-brand-red/90 rounded text-xs font-heading uppercase tracking-wider">
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-brand-gold/90 text-brand-black rounded text-xs font-heading uppercase tracking-wider">
          After
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging ? 0 : 1 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full text-xs text-brand-white/80"
        >
          ← Drag to compare →
        </motion.div>
      </div>

      {/* Caption */}
      <p className="text-center text-gray-400 mt-6 text-sm">
        Don&apos;t leave your memories to chance. <span className="text-brand-gold">See the ISO difference.</span>
      </p>
    </div>
  )
}
