import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowLeft, ArrowRight, RotateCw, Home, Lock, X, Plus } from 'lucide-react'

interface BrowserTab {
  id: number
  url: string
  title: string
}

const BrowserTab: React.FC = () => {
  const [tabs, setTabs] = useState<BrowserTab[]>([
    { id: 1, url: 'https://injective.com/', title: 'Injective' }
  ])
  const [activeTabId, setActiveTabId] = useState(1)
  const [urlInput, setUrlInput] = useState('https://injective.com/')
  const [isLoading, setIsLoading] = useState(false)

  const handleNavigate = (url: string) => {
    setIsLoading(true)
    setUrlInput(url)
    setTimeout(() => setIsLoading(false), 500)
  }

  const addNewTab = () => {
    const newTab = {
      id: Date.now(),
      url: 'https://injective.com/',
      title: 'New Tab'
    }
    setTabs([...tabs, newTab])
    setActiveTabId(newTab.id)
    setUrlInput(newTab.url)
  }

  const closeTab = (id: number) => {
    const newTabs = tabs.filter(t => t.id !== id)
    if (newTabs.length === 0) {
      addNewTab()
    } else {
      setTabs(newTabs)
      if (activeTabId === id) {
        setActiveTabId(newTabs[0].id)
        setUrlInput(newTabs[0].url)
      }
    }
  }

  const quickLinks = [
    { name: 'Helix', url: 'https://helixapp.com/', icon: '📈' },
    { name: 'Choice', url: 'https://choice.exchange/', icon: '🔄' },
    { name: 'Talis', url: 'https://injective.talis.art/', icon: '🎨' },
    { name: 'Bridge', url: 'https://bridge.injective.network/', icon: '🌉' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      {/* Browser Tabs */}
      <div className="px-4 pt-4 flex items-center gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-xl backdrop-blur-xl border-t border-x ${
              activeTabId === tab.id
                ? 'bg-[#262626]/60 border-[#9E7FFF]/30'
                : 'bg-[#262626]/20 border-[#2F2F2F]/30'
            } min-w-[150px] max-w-[200px]`}
            onClick={() => {
              setActiveTabId(tab.id)
              setUrlInput(tab.url)
            }}
            whileHover={{ y: -2 }}
          >
            <span className="text-sm truncate flex-1">{tab.title}</span>
            {tabs.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeTab(tab.id)
                }}
                className="hover:bg-[#2F2F2F]/50 rounded p-1"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </motion.div>
        ))}
        <motion.button
          onClick={addNewTab}
          className="p-2 rounded-lg backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 hover:bg-[#262626]/60"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Plus className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Browser Controls */}
      <div className="px-4 pt-2 pb-4">
        <div className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-3">
            <button className="p-2 rounded-lg hover:bg-[#2F2F2F]/50 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-[#2F2F2F]/50 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNavigate(urlInput)}
              className="p-2 rounded-lg hover:bg-[#2F2F2F]/50 transition-colors"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button className="p-2 rounded-lg hover:bg-[#2F2F2F]/50 transition-colors">
              <Home className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 backdrop-blur-xl bg-[#171717]/40 rounded-xl px-4 py-3 border border-[#2F2F2F]/30">
            <Lock className="w-4 h-4 text-[#10b981]" />
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleNavigate(urlInput)}
              className="flex-1 bg-transparent outline-none text-sm"
              placeholder="Search or enter URL..."
            />
            <Search className="w-4 h-4 text-[#A3A3A3]" />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-4 gap-3">
          {quickLinks.map((link, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigate(link.url)}
              className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-xl p-4 hover:bg-[#262626]/60 transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-2">{link.icon}</div>
              <div className="text-xs font-medium">{link.name}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 mx-4 mb-4 backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 flex items-center justify-center">
              <Search className="w-10 h-10 text-[#9E7FFF]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">In-App Browser</h3>
            <p className="text-[#A3A3A3] mb-4">
              Navigate to any Injective ecosystem dApp
            </p>
            <p className="text-sm text-[#A3A3A3]">
              Current URL: <span className="text-[#9E7FFF]">{urlInput}</span>
            </p>
            <p className="text-xs text-[#A3A3A3] mt-4">
              Note: Full iframe rendering requires production deployment
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BrowserTab
