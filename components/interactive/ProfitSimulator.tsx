'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, DollarSign, TrendingUp } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export function ProfitSimulator() {
  const [athletes, setAthletes] = useState(500)
  const [rebatePercent, setRebatePercent] = useState(10)

  // Calculate projected fundraising
  const avgOrderValue = 45 // Average order per athlete
  const participationRate = 0.7 // 70% participation
  const projectedRevenue = athletes * avgOrderValue * participationRate
  const projectedFundraising = projectedRevenue * (rebatePercent / 100)

  return (
    <div className="bg-brand-offBlack rounded-2xl p-8 md:p-12 border border-brand-gray/30">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-white mb-3">
          Fundraising <span className="text-brand-gold">Calculator</span>
        </h3>
        <p className="text-gray-400">
          See how much your organization could earn with ISO Photo XP
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Athletes Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-brand-white font-medium">
              <Users size={18} className="text-brand-gold" />
              Number of Athletes
            </label>
            <span className="text-2xl font-heading font-bold text-brand-gold">
              {athletes.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="50"
            max="2000"
            step="50"
            value={athletes}
            onChange={(e) => setAthletes(Number(e.target.value))}
            className="w-full h-2 bg-brand-gray rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50</span>
            <span>2,000</span>
          </div>
        </div>

        {/* Rebate Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-brand-white font-medium">
              <DollarSign size={18} className="text-brand-gold" />
              Rebate Percentage
            </label>
            <span className="text-2xl font-heading font-bold text-brand-gold">
              {rebatePercent}%
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="20"
            step="1"
            value={rebatePercent}
            onChange={(e) => setRebatePercent(Number(e.target.value))}
            className="w-full h-2 bg-brand-gray rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>20%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <motion.div
        key={`${athletes}-${rebatePercent}`}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-brand-black rounded-xl p-8 text-center border border-brand-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp size={24} className="text-brand-gold" />
          <span className="text-gray-400 text-lg">Projected Fundraising</span>
        </div>
        <div className="text-5xl md:text-6xl font-heading font-bold text-brand-gold mb-4">
          {formatCurrency(projectedFundraising)}
        </div>
        <p className="text-gray-400 text-sm">
          Based on {athletes.toLocaleString()} athletes with {rebatePercent}% rebate
        </p>
        <p className="text-gray-500 text-xs mt-2">
          *Assumes 70% participation rate and ${avgOrderValue} average order value
        </p>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a href="#contact" className="btn-primary">
          Get Your Custom Quote
        </a>
      </div>
    </div>
  )
}
