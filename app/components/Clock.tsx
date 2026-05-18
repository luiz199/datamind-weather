"use client"

import { useState, useEffect } from "react"

export default function Clock() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
      setDate(now.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="text-center">
      <p className="text-4xl md:text-6xl font-mono font-bold text-white tracking-wider neon-text-blue">
        {time || "00:00:00"}
      </p>
      <p className="text-sm text-gray-500 mt-1 capitalize">{date}</p>
    </div>
  )
}
