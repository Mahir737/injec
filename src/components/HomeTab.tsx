import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Newspaper, Award, ChevronDown, ChevronUp } from 'lucide-react'
import StatsCard from './home/StatsCard'
import NewsCard from './home/NewsCard'
import EcosystemCard from './home/EcosystemCard'
import PointsCard from './home/PointsCard'
import SocialLinks from './home/SocialLinks'

const HomeTab: React.FC = () => {
  const [showSocials, setShowSocials] = useState(false)

  const ecosystemDapps = [
    {
      name: 'MultiVM',
      description: 'Deploy smart contracts across multiple VMs',
      url: 'https://multivm.injective.com/',
      icon: '🔷',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Talis NFT',
      description: 'Premier NFT marketplace on Injective',
      url: 'https://injective.talis.art/',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Bridge',
      description: 'Cross-chain asset transfers',
      url: 'https://bridge.injective.network/',
      icon: '🌉',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'InjHub',
      description: 'Staking, governance & community buyback',
      url: 'https://injhub.com/',
      icon: '🏛️',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Helix',
      description: 'Advanced trading platform',
      url: 'https://helixapp.com/',
      icon: '📈',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Choice Exchange',
      description: 'Seamless token swaps',
      url: 'https://choice.exchange/',
      icon: '🔄',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-4 pt-6 pb-4"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] bg-clip-text text-transparent">
          Injective App
        </h1>
        <p className="text-[#A3A3A3]">Your gateway to the Injective ecosystem</p>
      </motion.div>

      {/* Points Card */}
      <PointsCard />

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#9E7FFF]" />
          <h2 className="text-xl font-semibold">Live Stats</h2>
        </div>
        <StatsCard />
      </motion.div>

      {/* Latest News */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Newspaper className="w-5 h-5 text-[#38bdf8]" />
          <h2 className="text-xl font-semibold">Latest News</h2>
        </div>
        <NewsCard />
      </motion.div>

      {/* Ecosystem dApps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-[#f472b6]" />
          <h2 className="text-xl font-semibold">Ecosystem dApps</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ecosystemDapps.map((dapp, index) => (
            <EcosystemCard key={index} dapp={dapp} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Social Links Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <motion.button
          onClick={() => setShowSocials(!showSocials)}
          className="w-full backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-4 flex items-center justify-between hover:bg-[#262626]/60 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-semibold">Community & Socials</span>
          {showSocials ? (
            <ChevronUp className="w-5 h-5 text-[#9E7FFF]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#9E7FFF]" />
          )}
        </motion.button>

        {showSocials && <SocialLinks />}
      </motion.div>
    </motion.div>
  )
}

export default HomeTab
