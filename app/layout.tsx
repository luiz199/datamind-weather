import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DataMind Weather - Previsão do Tempo Inteligente",
  description: "Previsão do tempo moderna e precisa com inteligência artificial. Dados em tempo real do OpenWeather.",
  keywords: ["clima", "tempo", "previsao", "weather", "data", "inteligencia"],
  openGraph: {
    title: "DataMind Weather",
    description: "Previsão do Tempo Inteligente",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
