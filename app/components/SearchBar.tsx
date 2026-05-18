"use client"

import { useState } from "react"
import { Search, MapPin, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

interface SearchBarProps {
  onSearch: (city: string) => void
  isLoading: boolean
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [recent, setRecent] = useState<string[]>(() => {
    if (typeof window === "undefined") return []
    try {
      return JSON.parse(localStorage.getItem("dw-recent") || "[]")
    } catch {
      return []
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query.trim())
    const updated = [query.trim(), ...recent.filter((c) => c !== query.trim())].slice(0, 5)
    setRecent(updated)
    localStorage.setItem("dw-recent", JSON.stringify(updated))
    setQuery("")
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
        <div className="relative flex items-center glass-card-blue rounded-2xl border border-sky-500/20 group-hover:border-sky-500/40 transition-all duration-300">
          <MapPin className="absolute left-4 w-5 h-5 text-sky-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar cidade... Ex: São Paulo, Rio, Tokyo, London"
            className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none px-12 py-4 text-sm"
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="mr-2 p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-sky-500/25 transition-all"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>

      {recent.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mt-3 justify-center"
        >
          {recent.map((city) => (
            <button
              key={city}
              onClick={() => {
                onSearch(city)
                setQuery("")
              }}
              className="px-3 py-1.5 rounded-lg border border-sky-500/10 bg-dark-800 hover:border-sky-500/30 hover:bg-dark-700 text-gray-500 hover:text-sky-400 text-xs transition-all"
            >
              {city}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}
