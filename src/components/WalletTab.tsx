import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, Send, ArrowDownToLine, History, Copy, Eye, EyeOff, Plus } from 'lucide-react'

type WalletView = 'main' | 'create' | 'import'

const WalletTab: React.FC = () => {
  const [view, setView] = useState<WalletView>('main')
  const [showBalance, setShowBalance] = useState(true)
  const [address] = useState('inj1abc...xyz789')
  const [balance] = useState(1234.56)

  const tokens = [
    { symbol: 'INJ', name: 'Injective', balance: 1234.56, value: 30678.45, icon: '💎' },
    { symbol: 'USDT', name: 'Tether', balance: 5000.00, value: 5000.00, icon: '💵' },
    { symbol: 'ATOM', name: 'Cosmos', balance: 250.00, value: 2750.00, icon: '⚛️' },
  ]

  const recentTransactions = [
    { type: 'send', amount: '-50 INJ', to: 'inj1def...', time: '2 hours ago', status: 'confirmed' },
    { type: 'receive', amount: '+100 USDT', from: 'inj1ghi...', time: '5 hours ago', status: 'confirmed' },
    { type: 'swap', amount: '25 INJ → 500 USDT', time: '1 day ago', status: 'confirmed' },
  ]

  if (view === 'create' || view === 'import') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="px-4 pt-6 pb-4"
      >
        <button
          onClick={() => setView('main')}
          className="mb-6 text-[#9E7FFF] hover:text-[#38bdf8] transition-colors"
        >
          ← Back
        </button>

        <div className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 flex items-center justify-center">
              <Wallet className="w-10 h-10 text-[#9E7FFF]" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {view === 'create' ? 'Create New Wallet' : 'Import Wallet'}
            </h2>
            <p className="text-[#A3A3A3]">
              {view === 'create'
                ? 'Secure your wallet with a recovery phrase'
                : 'Enter your recovery phrase or private key'}
            </p>
          </div>

          {view === 'create' ? (
            <div className="space-y-4">
              <div className="backdrop-blur-xl bg-[#171717]/40 rounded-2xl p-6 border border-[#2F2F2F]/30">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="backdrop-blur-xl bg-[#262626]/40 rounded-lg p-3 border border-[#2F2F2F]/30">
                      <span className="text-xs text-[#A3A3A3] mr-2">{i + 1}.</span>
                      <span className="text-sm">word{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] font-semibold hover:opacity-90 transition-opacity">
                I've Saved My Recovery Phrase
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <textarea
                className="w-full h-32 backdrop-blur-xl bg-[#171717]/40 rounded-2xl p-4 border border-[#2F2F2F]/30 outline-none focus:border-[#9E7FFF]/50 transition-colors resize-none"
                placeholder="Enter your 12 or 24 word recovery phrase..."
              />
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] font-semibold hover:opacity-90 transition-opacity">
                Import Wallet
              </button>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-4 pt-6 pb-4"
    >
      {/* Wallet Header */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 border border-[#2F2F2F]/50 rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9E7FFF] to-[#38bdf8] flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold">My Wallet</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#A3A3A3]">{address}</span>
                <button className="hover:text-[#9E7FFF] transition-colors">
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 rounded-lg hover:bg-[#2F2F2F]/50 transition-colors"
          >
            {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-[#A3A3A3] mb-2">Total Balance</p>
          <h1 className="text-4xl font-bold">
            {showBalance ? `$${(balance * 24.87).toLocaleString()}` : '••••••'}
          </h1>
          <p className="text-sm text-[#10b981] mt-1">+12.5% this week</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <motion.button
            className="backdrop-blur-xl bg-[#262626]/40 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-[#262626]/60 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 text-[#9E7FFF]" />
            <span className="text-xs">Send</span>
          </motion.button>
          <motion.button
            className="backdrop-blur-xl bg-[#262626]/40 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-[#262626]/60 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDownToLine className="w-5 h-5 text-[#38bdf8]" />
            <span className="text-xs">Receive</span>
          </motion.button>
          <motion.button
            className="backdrop-blur-xl bg-[#262626]/40 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-[#262626]/60 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <History className="w-5 h-5 text-[#f472b6]" />
            <span className="text-xs">History</span>
          </motion.button>
        </div>
      </div>

      {/* Tokens */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Assets</h3>
          <button className="text-sm text-[#9E7FFF] hover:text-[#38bdf8] transition-colors">
            Manage
          </button>
        </div>
        <div className="space-y-3">
          {tokens.map((token, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-4 hover:bg-[#262626]/60 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20 flex items-center justify-center text-xl">
                    {token.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{token.symbol}</h4>
                    <p className="text-sm text-[#A3A3A3]">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    {showBalance ? token.balance.toFixed(2) : '••••'}
                  </p>
                  <p className="text-sm text-[#A3A3A3]">
                    {showBalance ? `$${token.value.toLocaleString()}` : '••••'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentTransactions.map((tx, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold capitalize">{tx.type}</span>
                <span className={tx.amount.startsWith('-') ? 'text-[#ef4444]' : 'text-[#10b981]'}>
                  {tx.amount}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-[#A3A3A3]">
                <span>{tx.time}</span>
                <span className="text-[#10b981]">{tx.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => setView('create')}
          className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-xl p-4 hover:bg-[#262626]/60 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5 text-[#9E7FFF] mx-auto mb-2" />
          <span className="text-sm">Create Wallet</span>
        </motion.button>
        <motion.button
          onClick={() => setView('import')}
          className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-xl p-4 hover:bg-[#262626]/60 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDownToLine className="w-5 h-5 text-[#38bdf8] mx-auto mb-2" />
          <span className="text-sm">Import Wallet</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default WalletTab
