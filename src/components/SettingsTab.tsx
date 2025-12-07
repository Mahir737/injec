import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  HelpCircle,
  LogOut,
  ChevronRight,
  Moon,
  Sun,
  Volume2,
  Lock,
  Eye,
  Smartphone
} from 'lucide-react'

const SettingsTab: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [biometrics, setBiometrics] = useState(false)

  const settingsSections = [
    {
      title: 'Account',
      icon: User,
      items: [
        { label: 'Profile Settings', icon: User, action: () => {} },
        { label: 'Privacy & Security', icon: Shield, action: () => {} },
        { label: 'Biometric Login', icon: Smartphone, toggle: true, value: biometrics, onChange: setBiometrics },
      ]
    },
    {
      title: 'Preferences',
      icon: Palette,
      items: [
        { label: 'Dark Mode', icon: darkMode ? Moon : Sun, toggle: true, value: darkMode, onChange: setDarkMode },
        { label: 'Notifications', icon: Bell, toggle: true, value: notifications, onChange: setNotifications },
        { label: 'Sound Effects', icon: Volume2, toggle: true, value: soundEnabled, onChange: setSoundEnabled },
        { label: 'Language', icon: Globe, value: 'English', action: () => {} },
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { label: 'Change Password', icon: Lock, action: () => {} },
        { label: 'Two-Factor Auth', icon: Shield, action: () => {} },
        { label: 'Trusted Devices', icon: Smartphone, action: () => {} },
      ]
    },
    {
      title: 'Support',
      icon: HelpCircle,
      items: [
        { label: 'Help Center', icon: HelpCircle, action: () => {} },
        { label: 'Contact Support', icon: Globe, action: () => {} },
        { label: 'Terms of Service', icon: Eye, action: () => {} },
      ]
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
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-[#A3A3A3]">Manage your app preferences</p>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="backdrop-blur-xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 border border-[#2F2F2F]/50 rounded-3xl p-6 mb-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9E7FFF] to-[#38bdf8] flex items-center justify-center text-2xl">
            👤
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">Injective User</h3>
            <p className="text-sm text-[#A3A3A3]">inj1abc...xyz789</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-[#2F2F2F]/50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => {
          const SectionIcon = section.icon
          return (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <SectionIcon className="w-5 h-5 text-[#9E7FFF]" />
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </div>

              <div className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl overflow-hidden">
                {section.items.map((item, itemIndex) => {
                  const ItemIcon = item.icon
                  return (
                    <motion.div
                      key={itemIndex}
                      className={`flex items-center justify-between p-4 hover:bg-[#262626]/60 transition-all ${
                        itemIndex !== section.items.length - 1 ? 'border-b border-[#2F2F2F]/30' : ''
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 flex items-center justify-center">
                          <ItemIcon className="w-5 h-5 text-[#9E7FFF]" strokeWidth={1.5} />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>

                      {item.toggle ? (
                        <button
                          onClick={() => item.onChange && item.onChange(!item.value)}
                          className={`w-12 h-6 rounded-full transition-all ${
                            item.value ? 'bg-[#9E7FFF]' : 'bg-[#2F2F2F]'
                          }`}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full shadow-lg"
                            animate={{ x: item.value ? 26 : 2 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        </button>
                      ) : item.value ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-[#A3A3A3]">{item.value}</span>
                          <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Logout Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full mt-6 backdrop-blur-xl bg-[#ef4444]/20 border border-[#ef4444]/30 rounded-2xl p-4 flex items-center justify-center gap-3 hover:bg-[#ef4444]/30 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <LogOut className="w-5 h-5 text-[#ef4444]" />
        <span className="font-semibold text-[#ef4444]">Sign Out</span>
      </motion.button>

      {/* App Version */}
      <div className="text-center mt-6 text-sm text-[#A3A3A3]">
        <p>Injective App v1.0.0</p>
        <p className="text-xs mt-1">Built with ❤️ for the Injective ecosystem</p>
      </div>
    </motion.div>
  )
}

export default SettingsTab
