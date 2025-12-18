import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "NusaRaksa Island - Platform Edukasi Budaya & Pariwisata Pulau Kangean",
  description:
    "Platform digital pelestarian budaya dan pariwisata berkelanjutan Pulau Kangean. Jelajahi bahasa, tradisi, dan keindahan alam Kepulauan Kangean.",
  generator: "v0.app",
  keywords: ["Kangean", "Pariwisata", "Budaya", "Bahasa Kangean", "Wisata Bahari", "Kepulauan Kangean"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
