import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Mix Guará - Supermercado Oficial | Nova Alcântara - MA",
  description:
    "O supermercado que une qualidade, economia e praticidade para toda a região do Cujupe – Nova Alcântara. Produtos frescos, preços baixos e atendimento de qualidade.",
  keywords: "supermercado, Nova Alcântara, Cujupe, Maranhão, Mix Guará, compras, economia, qualidade",
  authors: [{ name: "Mix Guará" }],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
    ],
    apple: {
      url: "/favicon.ico",
      sizes: "180x180",
      type: "image/x-icon",
    },
  },
  openGraph: {
    title: "Mix Guará - Supermercado Oficial",
    description:
      "O supermercado que une qualidade, economia e praticidade para toda a região do Cujupe – Nova Alcântara.",
    type: "website",
    locale: "pt_BR",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
