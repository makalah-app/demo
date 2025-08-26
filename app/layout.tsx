import type React from "react"
import type { Metadata } from "next"
import { Roboto, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import GlobalFooter from "@/components/global-footer"

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Makalah AI – Industrial Academic Writing Platform",
  description: "Platform kolaborasi penulisan makalah akademik berbasis AI dengan 7 fase terstruktur",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="id" className={`${roboto.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" content="#0b0f14" />
  {/* theme is set by client components (GlobalHeader / page useEffect) to avoid DOM mutations before hydration */}
      </head>
      <body>
        {children}
        <GlobalFooter />
      </body>
    </html>
  )
}
