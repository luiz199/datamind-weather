"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CloudSun, MapPin, AlertCircle, Loader2, Crosshair,
  Sunrise, Sunset, Gauge, ArrowDown
} from "lucide-react"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Clock from "./components/Clock"
import WeatherCard from "./components/WeatherCard"
import ForecastCard from "./components/ForecastCard"
import AnimatedBackground from "./components/AnimatedBackground"
import Footer from "./components/Footer"

export default function Home() {
  const [weather, setWeather] = useState<any>(null)
  const [forecast, setForecast] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [city, setCity] = useState("")
  const [gpsLoading, setGpsLoading] = useState(false)
  const [initial, setInitial] = useState(true)

  const fetchWeather = useCallback(async (q: string) => {
    setLoading(true)
    setError("")
    setCity(q)
    setInitial(false)
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`/api/weather?city=${encodeURIComponent(q)}`),
        fetch(`/api/weather?city=${encodeURIComponent(q)}&type=forecast`),
      ])
      if (!weatherRes.ok) {
        const err = await weatherRes.json()
        throw new Error(err.error || "Cidade não encontrada")
      }
      const w = await weatherRes.json()
      setWeather(w)

      if (forecastRes.ok) {
        const f = await forecastRes.json()
        const days = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]
        const seen = new Set<string>()
        const filtered = (f.list || []).filter((item: any) => {
          const d = new Date(item.dt * 1000)
          const key = d.toLocaleDateString("pt-BR")
          if (seen.has(key)) return false
          seen.add(key)
          item.day = days[d.getDay()]
          item.date = d.toLocaleDateString("pt-BR", { day: "numeric", month: "short" })
          return true
        }).slice(0, 5)
        setForecast(filtered)
      }
    } catch (err: any) {
      setError(err.message || "Erro ao buscar clima")
      setWeather(null)
      setForecast([])
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchByCoords = useCallback(async (lat: number, lon: number) => {
    setLoading(true)
    setError("")
    setInitial(false)
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`/api/weather?lat=${lat}&lon=${lon}`),
        fetch(`/api/weather?lat=${lat}&lon=${lon}&type=forecast`),
      ])
      if (!weatherRes.ok) throw new Error("Erro ao buscar clima")
      const w = await weatherRes.json()
      setWeather(w)
      setCity(w.name || "")

      if (forecastRes.ok) {
        const f = await forecastRes.json()
        const days = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]
        const seen = new Set<string>()
        const filtered = (f.list || []).filter((item: any) => {
          const d = new Date(item.dt * 1000)
          const key = d.toLocaleDateString("pt-BR")
          if (seen.has(key)) return false
          seen.add(key)
          item.day = days[d.getDay()]
          item.date = d.toLocaleDateString("pt-BR", { day: "numeric", month: "short" })
          return true
        }).slice(0, 5)
        setForecast(filtered)
      }
    } catch (err: any) {
      setError("Erro ao buscar clima")
    } finally {
      setLoading(false)
      setGpsLoading(false)
    }
  }, [])

  const getGPS = () => {
    setGpsLoading(true)
    if (!navigator.geolocation) {
      setError("GPS não disponível neste navegador")
      setGpsLoading(false)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      () => {
        setError("Não foi possível obter sua localização. Permita o acesso ao GPS.")
        setGpsLoading(false)
      },
      { timeout: 8000, enableHighAccuracy: false }
    )
  }

  const weatherData = weather ? {
    name: weather.name,
    country: weather.sys?.country || "",
    temp: weather.main?.temp || 0,
    feelsLike: weather.main?.feels_like || 0,
    description: weather.weather?.[0]?.description || "",
    humidity: weather.main?.humidity || 0,
    windSpeed: weather.wind?.speed || 0,
    windDeg: weather.wind?.deg || 0,
    visibility: weather.visibility || 0,
    icon: weather.weather?.[0]?.icon || "01d",
    main: weather.weather?.[0]?.main || "Clear",
    lat: weather.coord?.lat || 0,
    lon: weather.coord?.lon || 0,
  } : null

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-16">
        <section className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-sm mb-4">
                <CloudSun className="w-4 h-4" />
                <span>Previsão do Tempo Inteligente</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                DataMind <span className="gradient-text-blue">Weather</span>
              </h1>
              <p className="text-gray-500 text-sm">Clima em tempo real com tecnologia de ponta</p>
            </motion.div>

            <div className="w-full max-w-2xl mb-6">
              <SearchBar onSearch={fetchWeather} isLoading={loading} />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={getGPS}
              disabled={gpsLoading}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-sky-500/20 text-sky-400 hover:bg-sky-500/10 transition-all text-sm mb-8 disabled:opacity-50"
            >
              {gpsLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Crosshair className="w-4 h-4" />
              )}
              Usar minha localização
            </motion.button>

            {initial && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-8"
              >
                <Clock />

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-8"
                >
                  <ArrowDown className="w-5 h-5 text-gray-600 mx-auto" />
                </motion.div>

                <p className="text-gray-600 text-xs mt-2">Digite uma cidade ou use GPS</p>
              </motion.div>
            )}

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-3 py-12"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
                  </div>
                  <div className="absolute inset-0 bg-sky-500/10 rounded-2xl blur-xl animate-pulse" />
                </div>
                <p className="text-gray-500 text-sm">Buscando dados climáticos...</p>
              </motion.div>
            )}

            {error && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm max-w-md"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <AnimatePresence>
              {weatherData && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-4xl space-y-6"
                >
                  <WeatherCard data={weatherData} />

                  {forecast.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-4 text-center">
                        Previsão para os <span className="gradient-text-blue">próximos dias</span>
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {forecast.map((item, i) => (
                          <ForecastCard key={item.dt} data={{
                            date: item.date,
                            day: item.day,
                            tempMax: item.main?.temp_max || 0,
                            tempMin: item.main?.temp_min || 0,
                            description: item.weather?.[0]?.description || "",
                            icon: item.weather?.[0]?.icon || "01d",
                            main: item.weather?.[0]?.main || "Clear",
                          }} index={i} />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="text-center">
                    <p className="text-gray-600 text-[10px] flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Dados via OpenWeather API • {weatherData.name}, {weatherData.country}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
