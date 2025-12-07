import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Clock } from 'lucide-react'

interface NewsItem {
  title: string
  excerpt: string
  url: string
  date: string
  image: string
}

const NewsCard: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated news - in production, fetch from injective.com/blog API
    setTimeout(() => {
      setNews([
        {
          title: 'Injective Launches Revolutionary MultiVM Platform',
          excerpt: 'Deploy smart contracts across multiple virtual machines seamlessly...',
          url: 'https://injective.com/blog/',
          date: '2 hours ago',
          image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
        },
        {
          title: 'Record Trading Volume on Helix Exchange',
          excerpt: 'Helix reaches new all-time high in daily trading volume...',
          url: 'https://injective.com/blog/',
          date: '5 hours ago',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80'
        },
        {
          title: 'New NFT Collections Launch on Talis',
          excerpt: 'Exclusive digital art collections now available on Injective...',
          url: 'https://injective.com/blog/',
          date: '1 day ago',
          image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80'
        }
      ])
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl p-6">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-[#2F2F2F]/50 rounded-xl" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {news.map((item, index) => (
        <motion.a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="block backdrop-blur-xl bg-[#262626]/40 border border-[#2F2F2F]/50 rounded-2xl overflow-hidden hover:bg-[#262626]/60 transition-all group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex gap-4 p-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#9E7FFF]/20 to-[#38bdf8]/20">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-[#9E7FFF] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#A3A3A3] line-clamp-1 mb-2">{item.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                <Clock className="w-3 h-3" />
                <span>{item.date}</span>
                <ExternalLink className="w-3 h-3 ml-auto group-hover:text-[#9E7FFF] transition-colors" />
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export default NewsCard
