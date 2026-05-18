<div align="center">
  <br/>
  <a href="https://github.com/luiz199/datamind-weather">
    <img src="https://img.shields.io/badge/DataMind-Weather-0ea5e9?style=for-the-badge&logo=nextdotjs&logoColor=white&labelColor=0a0f1e" alt="DataMind Weather"/>
  </a>
  <br/>
  <br/>

  <p align="center">
    <strong>🌦 A modern, intelligent weather forecast application</strong>
    <br/>
    Built with Next.js 14, TailwindCSS, Framer Motion & OpenWeather API
  </p>

  <br/>

  <div>
    <img src="https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=nextdotjs" alt="Next.js 14"/>
    <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="TailwindCSS"/>
    <img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer" alt="Framer Motion"/>
    <img src="https://img.shields.io/badge/OpenWeather-API-EB6E4B?style=flat-square&logo=openweathermap" alt="OpenWeather API"/>
  </div>

  <div>
    <img src="https://img.shields.io/github/actions/workflow/status/luiz199/datamind-weather/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white&label=CI&color=00FF41" alt="CI"/>
    <img src="https://img.shields.io/github/last-commit/luiz199/datamind-weather/main?style=flat-square&logo=git&logoColor=white&labelColor=0a0f1e&color=00FF41" alt="Last Commit"/>
    <img src="https://img.shields.io/github/repo-size/luiz199/datamind-weather?style=flat-square&logo=files&logoColor=white&labelColor=0a0f1e&color=00FF41" alt="Repo Size"/>
    <img src="https://img.shields.io/github/stars/luiz199/datamind-weather?style=flat-square&logo=github&logoColor=white&labelColor=0a0f1e&color=00FF41" alt="Stars"/>
    <img src="https://img.shields.io/github/license/luiz199/datamind-weather?style=flat-square&logo=opensourceinitiative&logoColor=white&labelColor=0a0f1e&color=00FF41" alt="License"/>
  </div>

  <br/>
  <br/>

  <div align="center">
    <br/>
    <table>
      <tr>
        <td align="center">
          <img src="https://img.icons8.com/fluency/48/000000/sun.png" alt="clear" width="48"/>
          <br/>
          <sub>Sunny</sub>
        </td>
        <td align="center">
          <img src="https://img.icons8.com/fluency/48/000000/cloud.png" alt="clouds" width="48"/>
          <br/>
          <sub>Cloudy</sub>
        </td>
        <td align="center">
          <img src="https://img.icons8.com/fluency/48/000000/rain.png" alt="rain" width="48"/>
          <br/>
          <sub>Rain</sub>
        </td>
        <td align="center">
          <img src="https://img.icons8.com/fluency/48/000000/storm.png" alt="storm" width="48"/>
          <br/>
          <sub>Storm</sub>
        </td>
        <td align="center">
          <img src="https://img.icons8.com/fluency/48/000000/snow.png" alt="snow" width="48"/>
          <br/>
          <sub>Snow</sub>
        </td>
      </tr>
    </table>
    <br/>
  </div>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Design System](#-design-system)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🚀 Overview

**DataMind Weather** is a premium, futuristic weather application that delivers real-time weather data with a stunning neon-themed interface. Designed with a SaaS mindset, it combines real-time weather fetching, 5-day forecasts, GPS location detection, and an immersive user experience with particle animations and glassmorphism design.

The application runs in two modes:
- **Live Mode** — fetches real data from the [OpenWeather API](https://openweathermap.org/api)
- **Demo Mode** — uses realistic mock data, no API key required

---

## ✨ Features

### Core
- **Real-time Weather** — current temperature, humidity, wind speed, visibility & thermal sensation
- **5-Day Forecast** — daily temperature ranges with weather icons
- **City Search** — search any city worldwide with autocomplete history
- **GPS Location** — one-click location detection for instant local weather
- **Responsive Design** — fully optimized for mobile, tablet & desktop

### UI/UX
- **Neon Glassmorphism** — futuristic glass cards with cyan and emerald neon glows
- **Animated Particles** — live canvas-based floating particle background
- **Digital Clock** — live clock with date display
- **Smooth Transitions** — Framer Motion powered page and element animations
- **Loading States** — animated loaders for weather data fetching
- **Error Handling** — elegant error messages for invalid cities or connection issues

### Technical
- **Search History** — persists last 5 searches in localStorage
- **API Proxy** — secure backend route prevents API key exposure
- **Type Safe** — fully typed with TypeScript
- **Optimized** — built for Vercel with automatic static optimization

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.2 | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5.4 | Static type checking |
| [TailwindCSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animation library |
| [Lucide React](https://lucide.dev/) | 0.400 | Icon library |
| [OpenWeather API](https://openweathermap.org/api) | — | Weather data provider |

---

## 🎨 Design System

### Color Palette

```css
--dark-950:  #030712     /* Primary background */
--dark-900:  #0a0f1e     /* Secondary background */
--dark-800:  #111827     /* Card background */
--sky-400:   #38bdf8     /* Primary neon accent */
--sky-500:   #0ea5e9     /* Secondary neon accent */
--emerald:   #10b981     /* Complementary accent */
```

### Typography
- **Headings:** Inter (Bold)
- **Body:** Inter (Regular)
- **Monospace:** JetBrains Mono — used for clock and badges

### Glassmorphism
All cards use a frosted-glass effect with `backdrop-filter: blur(20px)` and subtle neon borders that glow on hover.

---

## 📁 Project Structure

```
datamind-weather/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts          # API proxy (secure OpenWeather calls + mock fallback)
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive navigation bar
│   │   ├── SearchBar.tsx          # City search with history dropdown
│   │   ├── WeatherCard.tsx        # Main weather display card
│   │   ├── ForecastCard.tsx       # 5-day forecast cards
│   │   ├── Clock.tsx              # Live digital clock
│   │   ├── AnimatedBackground.tsx # Canvas particle system
│   │   └── Footer.tsx             # Premium footer
│   ├── globals.css                # Global styles, themes & utilities
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Main page (orchestrates all components)
├── .env.local                     # Environment variables
├── tailwind.config.ts             # Custom Tailwind theme
├── tsconfig.json                  # TypeScript configuration
└── vercel.json                    # Vercel deployment config
```

---

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenWeather API key (optional — app works in demo mode without it)

### Installation

```bash
# Clone the repository
git clone https://github.com/luiz199/datamind-weather.git
cd datamind-weather

# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at **http://localhost:3000**.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
# OpenWeather API Key
# Get yours at: https://openweathermap.org/api
# Leave empty to use demo mode (mock data)
NEXT_PUBLIC_OPENWEATHER_KEY=
```

### Variable Reference

| Variable | Required | Default | Description |
|---|---|---|---|
| `NEXT_PUBLIC_OPENWEATHER_KEY` | No | `empty` | OpenWeather API key. Omit or leave empty for demo mode |

---

## 📡 API Endpoints

### `GET /api/weather`

Proxy endpoint for weather data. Prevents client-side API key exposure.

#### Query Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `city` | `string` | No* | City name (e.g., `São Paulo`, `Tokyo`) |
| `lat` | `number` | No* | Latitude coordinate |
| `lon` | `number` | No* | Longitude coordinate |
| `type` | `string` | No | `weather` (current) or `forecast` (5-day) |

*Either `city` or both `lat`/`lon` must be provided.

#### Response Example

```json
{
  "name": "São Paulo",
  "sys": { "country": "BR" },
  "main": {
    "temp": 28.5,
    "feels_like": 27.2,
    "humidity": 65
  },
  "weather": [{ "main": "Clear", "description": "céu limpo", "icon": "01d" }],
  "wind": { "speed": 3.2, "deg": 120 },
  "visibility": 10000,
  "coord": { "lat": -23.55, "lon": -46.63 }
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fluiz199%2Fdatamind-weather)

1. Push the code to your GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add environment variable `NEXT_PUBLIC_OPENWEATHER_KEY`
4. Deploy — Vercel automatically detects Next.js

The project includes a `vercel.json` with pre-configured build settings.

---

## 🗺 Roadmap

- [x] Real-time weather data
- [x] 5-day forecast
- [x] GPS location detection
- [x] Search history (localStorage)
- [x] Animated particle background
- [x] Digital clock
- [ ] Weather alerts & notifications
- [ ] Hourly forecast breakdown
- [ ] Dark/light theme toggle
- [ ] Multiple language support
- [ ] Weather maps (rain, temperature, wind)
- [ ] PWA support (offline mode)
- [ ] Unit tests with Jest & Testing Library

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <br/>
  <p>
    Built with ❤️ using <strong>Next.js</strong>, <strong>TailwindCSS</strong> & <strong>OpenWeather</strong>
  </p>
  <p>
    <sub>© 2026 DataMind. All rights reserved.</sub>
  </p>
  <br/>
</div>
