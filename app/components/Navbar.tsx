"use client"

import { useState } from "react"
import { CloudSun, Menu, X, Github, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-sky-500/10 bg-dark-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <CloudSun className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
              DataMind<span className="text-sky-400">Weather</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Previsão Inteligente
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-sky-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-sky-500/10 bg-dark-900/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4">
              <span className="block text-sm text-gray-500">Previsão Inteligente</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
