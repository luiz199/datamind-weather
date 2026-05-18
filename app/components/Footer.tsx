"use client"

import { CloudSun, Github, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-sky-500/10 bg-dark-950 mt-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <CloudSun className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-white">
              DataMind<span className="text-sky-400">Weather</span>
            </span>
          </div>

          <p className="text-gray-600 text-xs flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500" /> usando Next.js, TailwindCSS & OpenWeather
          </p>

          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} DataMind Weather. Dados via OpenWeather.
          </p>
        </div>
      </div>
    </footer>
  )
}
