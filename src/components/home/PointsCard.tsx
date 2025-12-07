import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, Zap, Award, TrendingUp } from 'lucide-react'

const PointsCard: React.FC = () => {
  const [points] = useState(12450)
  const [level] = useState(7)
  const [streak] = useState(12)

  const achievements = [
    { name: 'First Trade', icon: Star, unlocked: true, color: 'text-yellow-400' },
    { name: 'Week Warrior', icon: Zap, unlocked: true, color: 'text-blue-400' },
    { name: 'NFT Collector', icon: Award, unlocked: true, color: 'text-purple-400' },
    { name: 'Staking Master', icon: Trophy, unlocked: false, color: 'text-gray-600' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="backdrop-blur-xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 border border-[#2F2F2F]/50 rounded-3xl p-6 mb-6 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#9E7FFF]/10 via-[#38bdf8]/10 to-[#f472b6]/10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Rewards Hub</h2>
            <p className="text-sm text-[#A3A3A3]">Level {level} • {streak} day streak 🔥</p>
          </div>
          <motion.div
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9E7FFF] to-[#38bdf8] flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Trophy className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Points Display */}
        <div className="backdrop-blur-xl bg-[#262626]/40 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#A3A3A3]">Total Points</span>
            <TrendingUp className="w-4 h-4 text-[#10b981]" />
          </div>
          <motion.div
            className="text-4xl font-bold bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] bg-clip-text text-transparent"
            key={points}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
          >
            {points.toLocaleString()}
          </motion.div>
          <div className="mt-3 h-2 bg-[#2F2F2F] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8]"
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-[#A3A3A3] mt-2">3,550 points to Level 8</p>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-[#A3A3A3]">Recent Achievements</h3>
          <div className="grid grid-cols-4 gap-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`backdrop-blur-xl bg-[#262626]/40 rounded-xl p-3 flex flex-col items-center gap-2 ${
                    achievement.unlocked ? 'border border-[#9E7FFF]/30' : 'opacity-50'
                  }`}
                  whileHover={achievement.unlocked ? { scale: 1.1, y: -5 } : {}}
                >
                  <Icon className={`w-6 h-6 ${achievement.color}`} strokeWidth={1.5} />
                  <span className="text-[10px] text-center leading-tight">{achievement.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PointsCard
