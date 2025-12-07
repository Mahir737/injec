import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Twitter, Github, Youtube, Send, Globe } from 'lucide-react'

const SocialLinks: React.FC = () => {
  const socials = [
    { name: 'Discord', icon: MessageCircle, url: 'https://discord.com/invite/NK4qdbv', color: 'from-indigo-500 to-purple-500' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/Injective', color: 'from-blue-400 to-cyan-400' },
    { name: 'Reddit', icon: MessageCircle, url: 'https://www.reddit.com/r/injective/', color: 'from-orange-500 to-red-500' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/InjectiveLabs', color: 'from-gray-600 to-gray-800' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/channel/UCN99m0dicoMjNmJV9mxioqQ', color: 'from-red-500 to-pink-500' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/joininjective', color: 'from-blue-500 to-indigo-500' },
    { name: 'Website', icon: Globe, url: 'https://injective.com/', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-4 grid grid-cols-2 gap-3"
    >
      {socials.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-xl p-4 hover:bg-[#262626]/60 transition-all group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="font-medium group-hover:text-[#9E7FFF] transition-colors">{social.name}</span>
            </div>
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export default SocialLinks
