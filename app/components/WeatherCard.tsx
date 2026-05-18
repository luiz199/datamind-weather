"use client"

import { motion } from "framer-motion"
import {
  Droplets, Wind, Thermometer, Eye, Compass,
  Sun, Moon, Cloud, CloudSun, CloudRain, CloudLightning,
  CloudSnow, CloudFog, CloudDrizzle
} from "lucide-react"

interface WeatherData {
  name: string
  country: string
  temp: number
  feelsLike: number
  description: string
  humidity: number
  windSpeed: number
  windDeg: number
  visibility: number
  icon: string
  main: string
  lat: number
  lon: number
}

function getWeatherIcon(main: string, icon: string) {
  const isNight = icon.endsWith("n")
  const iconMap: Record<string, any> = {
    Clear: isNight ? Moon : Sun,
    Clouds: Cloud,
    Rain: CloudRain,
    Drizzle: CloudDrizzle,
    Thunderstorm: CloudLightning,
    Snow: CloudSnow,
    Mist: CloudFog,
    Fog: CloudFog,
    Haze: CloudFog,
    Smoke: CloudFog,
    Dust: CloudFog,
    Sand: CloudFog,
    Ash: CloudFog,
    Squall: CloudWind,
    Tornado: CloudLightning,
  }
  return iconMap[main] || (isNight ? Moon : Sun)
}

function CloudWind(props: any) { return <Wind {...props} /> }

export default function WeatherCard({ data }: { data: WeatherData }) {
  const Icon = getWeatherIcon(data.main, data.icon)
  const windDir = ["N", "NE", "L", "SE", "S", "SO", "O", "NO"][Math.round(data.windDeg / 45) % 8]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-emerald-500 to-blue-500 rounded-3xl opacity-10 blur-2xl" />
      <div className="relative glass-card rounded-3xl border border-sky-500/10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{data.name}</h2>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
                  {data.country}
                </span>
              </div>
              <p className="text-gray-500 text-sm capitalize">{data.description}</p>
            </div>
            <div className="text-right">
              <p className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                {Math.round(data.temp)}°
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sensação {Math.round(data.feelsLike)}°
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center py-6">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
              <Icon className="w-24 h-24 text-sky-400 relative" strokeWidth={1.5} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Umidade", value: `${data.humidity}%`, icon: Droplets, color: "from-sky-500 to-blue-600" },
              { label: "Vento", value: `${data.windSpeed} m/s ${windDir}`, icon: Wind, color: "from-emerald-500 to-teal-600" },
              { label: "Sensação", value: `${Math.round(data.feelsLike)}°`, icon: Thermometer, color: "from-orange-500 to-red-600" },
              { label: "Visibilidade", value: `${(data.visibility / 1000).toFixed(1)} km`, icon: Eye, color: "from-purple-500 to-pink-600" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-3 border border-sky-500/5 hover:border-sky-500/20 transition-all"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">{item.value}</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
