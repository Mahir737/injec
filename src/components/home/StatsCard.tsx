import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Activity, Users } from 'lucide-react'

const StatsCard: React.FC = () => {
  const [stats, setStats] = useState({
    price: 0,
    marketCap: 0,
    volume24h: 0,
    totalTransactions: 0,
    loading: true
  })

  useEffect(() => {
    // Simulated stats - in production, fetch from injscan.com API
    const fetchStats = async () => {
      // Simulate API call
      setTimeout(() => {
        setStats({
          price: 24.87,
          marketCap: 2340000000,
          volume24h: 145000000,
          totalTransactions: 45678901,
          loading: false
        })
      }, 1000)
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Update every 30s
    return () => clearInterval(interval)
  }, [])

  const statItems = [
    {
      label: 'INJ Price',
      value: stats.loading ? '...' : `$${stats.price.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-[#10b981]',
      bgColor: 'from-green-500/20 to-emerald-500/20'
    },
    {
      label: 'Market Cap',
      value: stats.loading ? '...' : `$${(stats.marketCap / 1000000000).toFixed(2)}B`,
      icon: TrendingUp,
      color: 'text-[#9E7FFF]',
      bgColor: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      label: '24h Volume',
      value: stats.loading ? '...' : `$${(stats.volume24h / 1000000).toFixed(1)}M`,
      icon: Activity,
      color: 'text-[#38bdf8]',
      bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      label: 'Total TXs',
      value: stats.loading ? '...' : `${(stats.totalTransactions / 1000000).toFixed(1)}M`,
      icon: Users,
      color: 'text-[#f472b6]',
      bgColor: 'from-pink-500/20 to-rose-500/20'
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {statItems.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-4 hover:bg-[#262626]/60 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 ${stat.color}`} strokeWidth={1.5} />
            </div>
            <p className="text-[#A3A3A3] text-xs mb-1">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default StatsCard
