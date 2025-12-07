import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Dapp {
  name: string
  description: string
  url: string
  icon: string
  color: string
}

interface EcosystemCardProps {
  dapp: Dapp
  index: number
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ dapp, index }) => {
  return (
    <motion.a
      href={dapp.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="block backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-5 hover:bg-[#262626]/60 transition-all group"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dapp.color} flex items-center justify-center text-2xl shadow-lg`}>
          {dapp.icon}
        </div>
        <ExternalLink className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#9E7FFF] transition-colors" />
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-[#9E7FFF] transition-colors">
        {dapp.name}
      </h3>
      <p className="text-sm text-[#A3A3A3] line-clamp-2">{dapp.description}</p>
    </motion.a>
  )
}

export default EcosystemCard
