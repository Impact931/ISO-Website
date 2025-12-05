'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, DollarSign, TrendingUp, Camera } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export function EarningsCalculator() {
  const [gamedays, setGamedays] = useState(4)
  const [ratePerDay, setRatePerDay] = useState(300)

  // Calculate earnings
  const monthlyEarnings = gamedays * ratePerDay
  const yearlyEarnings = monthlyEarnings * 12
  const bonusEstimate = yearlyEarnings * 0.1 // 10% bonus estimate

  return (
    <div className="bg-brand-offBlack rounded-2xl p-8 md:p-12 border border-brand-gray/30">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-white mb-3">
          Earnings <span className="text-brand-gold">Calculator</span>
        </h3>
        <p className="text-gray-400">
          See how much you could earn as an ISO Certified Photographer
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Gamedays Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-brand-white font-medium">
              <Calendar size={18} className="text-brand-gold" />
              Gamedays per Month
            </label>
            <span className="text-2xl font-heading font-bold text-brand-gold">
              {gamedays}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={gamedays}
            onChange={(e) => setGamedays(Number(e.target.value))}
            className="w-full h-2 bg-brand-gray rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>12</span>
          </div>
        </div>

        {/* Rate Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-brand-white font-medium">
              <DollarSign size={18} className="text-brand-gold" />
              Rate per Gameday
            </label>
            <span className="text-2xl font-heading font-bold text-brand-gold">
              {formatCurrency(ratePerDay)}
            </span>
          </div>
          <input
            type="range"
            min="150"
            max="500"
            step="25"
            value={ratePerDay}
            onChange={(e) => setRatePerDay(Number(e.target.value))}
            className="w-full h-2 bg-brand-gray rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$150</span>
            <span>$500</span>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Monthly */}
        <motion.div
          key={`monthly-${monthlyEarnings}`}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-brand-black rounded-xl p-6 text-center border border-brand-gray/30"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Camera size={18} className="text-brand-gold" />
            <span className="text-gray-400 text-sm">Monthly</span>
          </div>
          <div className="text-3xl font-heading font-bold text-brand-white">
            {formatCurrency(monthlyEarnings)}
          </div>
        </motion.div>

        {/* Yearly */}
        <motion.div
          key={`yearly-${yearlyEarnings}`}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-brand-black rounded-xl p-6 text-center border border-brand-gold/30"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp size={18} className="text-brand-gold" />
            <span className="text-gray-400 text-sm">Yearly</span>
          </div>
          <div className="text-3xl font-heading font-bold text-brand-gold">
            {formatCurrency(yearlyEarnings)}
          </div>
        </motion.div>

        {/* Bonus */}
        <motion.div
          key={`bonus-${bonusEstimate}`}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-brand-black rounded-xl p-6 text-center border border-brand-gray/30"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign size={18} className="text-brand-gold" />
            <span className="text-gray-400 text-sm">Est. Bonus</span>
          </div>
          <div className="text-3xl font-heading font-bold text-brand-white">
            +{formatCurrency(bonusEstimate)}
          </div>
        </motion.div>
      </div>

      {/* Benefits List */}
      <div className="bg-brand-black rounded-xl p-6 mb-8 border border-brand-gray/30">
        <h4 className="font-heading font-semibold text-brand-white mb-4">
          What&apos;s Included:
        </h4>
        <ul className="grid md:grid-cols-2 gap-3">
          {[
            'Flexible schedule - you choose when to shoot',
            'All bookings handled by ISO',
            'Equipment recommendations & discounts',
            'Training & certification program',
            'Liability insurance coverage',
            'Direct deposit payments',
          ].map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a href="#apply" className="btn-primary">
          Apply to Join the Network
        </a>
        <p className="text-gray-500 text-sm mt-3">
          Applications reviewed within 48 hours
        </p>
      </div>
    </div>
  )
}
