import React from 'react'
import { motion } from 'framer-motion'
import { Home, Globe, Wallet, Settings } from 'lucide-react'

type Tab = 'home' | 'browser' | 'wallet' | 'settings'

interface NavigationProps {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home' as Tab, icon: Home, label: 'Home' },
    { id: 'browser' as Tab, icon: Globe, label: 'Browser' },
    { id: 'wallet' as Tab, icon: Wallet, label: 'Wallet' },
    { id: 'settings' as Tab, icon: Settings, label: 'Settings' },
  ]

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mb-4 backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-3xl shadow-2xl">
        <div className="flex items-center justify-around px-2 py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex flex-col items-center gap-1 px-6 py-2 rounded-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#9E7FFF]/20 to-[#38bdf8]/20 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <Icon
                  className={`w-6 h-6 relative z-10 transition-colors ${
                    isActive ? 'text-[#9E7FFF]' : 'text-[#A3A3A3]'
                  }`}
                  strokeWidth={1.5}
                />
                
                <span
                  className={`text-xs font-medium relative z-10 transition-colors ${
                    isActive ? 'text-white' : 'text-[#A3A3A3]'
                  }`}
                >
                  {tab.label}
                </span>

                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#9E7FFF] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
