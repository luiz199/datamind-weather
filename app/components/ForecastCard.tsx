"use client"

import { motion } from "framer-motion"
import {
  Sun, Moon, Cloud, CloudSun, CloudRain, CloudLightning,
  CloudSnow, CloudFog, CloudDrizzle, Wind
} from "lucide-react"

interface ForecastData {
  date: string
  day: string
  tempMax: number
  tempMin: number
  description: string
  icon: string
  main: string
}

function getForecastIcon(main: string) {
  const iconMap: Record<string, any> = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: CloudRain,
    Drizzle: CloudDrizzle,
    Thunderstorm: CloudLightning,
    Snow: CloudSnow,
    Mist: CloudFog,
    Fog: CloudFog,
    Haze: CloudFog,
  }
  return iconMap[main] || CloudSun
}

export default function ForecastCard({ data, index }: { data: ForecastData; index: number }) {
  const Icon = getForecastIcon(data.main)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card rounded-2xl p-4 border border-sky-500/10 hover:border-sky-500/30 transition-all duration-300"
    >
      <div className="text-center">
        <p className="text-sm font-semibold text-white mb-1">{data.day}</p>
        <p className="text-[10px] text-gray-600 mb-3">{data.date}</p>

        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="absolute inset-0 bg-sky-500/5 rounded-full blur-md" />
            <Icon className="w-10 h-10 text-sky-400 relative" strokeWidth={1.5} />
          </div>
        </div>

        <p className="text-[10px] text-gray-500 capitalize mb-2">{data.description}</p>

        <div className="flex items-center justify-center gap-2">
          <span className="text-white font-bold text-lg">{Math.round(data.tempMax)}°</span>
          <span className="text-gray-600 text-sm">{Math.round(data.tempMin)}°</span>
        </div>
      </div>
    </motion.div>
  )
}
