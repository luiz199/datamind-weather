import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")
  const type = searchParams.get("type") || "weather"

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY?.trim()

  if (!apiKey) {
    if (type === "forecast") {
      return NextResponse.json(getMockForecast())
    }
    return NextResponse.json(getMockWeather(city || "São Paulo"))
  }

  try {
    let url: string
    if (type === "forecast") {
      if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      } else if (city) {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`
      } else {
        return NextResponse.json({ error: "Cidade ou coordenadas necessárias" }, { status: 400 })
      }
    } else {
      if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      } else if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`
      } else {
        return NextResponse.json({ error: "Cidade necessária" }, { status: 400 })
      }
    }

    const res = await fetch(url)
    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json({ error: "Cidade não encontrada" }, { status: 404 })
      }
      return NextResponse.json({ error: "Erro ao buscar dados" }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Weather API error:", error)
    return NextResponse.json({ error: "Erro de conexão" }, { status: 500 })
  }
}

function getMockWeather(city: string) {
  const conditions = [
    { main: "Clear", description: "céu limpo", icon: "01d" },
    { main: "Clouds", description: "nublado", icon: "02d" },
    { main: "Rain", description: "chuva leve", icon: "10d" },
    { main: "Clouds", description: "parcialmente nublado", icon: "02d" },
  ]
  const c = conditions[Math.floor(Math.random() * conditions.length)]
  const temp = 22 + Math.random() * 10
  return {
    name: city || "São Paulo",
    sys: { country: "BR" },
    main: {
      temp,
      feels_like: temp - 2 + Math.random() * 4,
      humidity: 50 + Math.floor(Math.random() * 30),
    },
    weather: [c],
    wind: { speed: 2 + Math.random() * 5, deg: Math.floor(Math.random() * 360) },
    visibility: 8000 + Math.floor(Math.random() * 2000),
    coord: { lat: -23.55, lon: -46.63 },
  }
}

function getMockForecast() {
  const days = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]
  const conditions = [
    { main: "Clear", description: "céu limpo", icon: "01d" },
    { main: "Clouds", description: "nublado", icon: "02d" },
    { main: "Rain", description: "chuva", icon: "10d" },
    { main: "Clouds", description: "parc. nublado", icon: "02d" },
    { main: "Clear", description: "ensolarado", icon: "01d" },
  ]
  const list = []
  const now = new Date()
  for (let i = 0; i < 5; i++) {
    const d = new Date(now)
    d.setDate(d.getDate() + i + 1)
    const c = conditions[i % conditions.length]
    list.push({
      dt: Math.floor(d.getTime() / 1000),
      main: { temp_max: 25 + Math.random() * 8, temp_min: 18 + Math.random() * 5 },
      weather: [c],
      day: days[d.getDay()],
      date: d.toLocaleDateString("pt-BR", { day: "numeric", month: "short" }),
    })
  }
  return { list }
}
