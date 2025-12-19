"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { getRandomQuote, quotes } from "@/config/quotes"

const footerLinks = {
  fitur: [
    { name: "Arsip Bahasa", href: "#bahasa" },
    { name: "Pusat Budaya", href: "#budaya" },
    { name: "Peta Wisata", href: "#peta" },
    { name: "QR Budaya", href: "#qr" },
    { name: "Ruang Pemuda", href: "#pemuda" },
  ],
  informasi: [
    { name: "Tentang Kami", href: "#" },
    { name: "Tim NusaRaksa", href: "#" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
  ],
  dukungan: [
    { name: "Panduan Pengguna", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Hubungi Kami", href: "#" },
    { name: "Kontribusi Konten", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [quote, setQuote] = useState(quotes[0]) // Start dengan quote pertama (deterministic)
  const [mounted, setMounted] = useState(false)

  // Set random quote setelah client mount (cegah hydration mismatch)
  useEffect(() => {
    setMounted(true)
    setQuote(getRandomQuote())

    const interval = setInterval(() => {
      setQuote(getRandomQuote())
    }, 5000) // Ganti quote setiap 5 detik

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-foreground text-background" ref={ref}>
      {/* Quote Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              key={quote.text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-4 px-2 text-balance">
                "{quote.text}"
              </p>
              <p className="text-background/60 font-light text-sm sm:text-base">— {quote.author}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="grid gap-8 sm:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 md:col-span-3 lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center"
              >
                <Image src="/icon-dark-32x32.png" alt="NusaRaksa Logo" width={32} height={32} priority />
              </motion.div>
              <span className="font-serif text-lg sm:text-xl font-normal">NusaRaksa Island</span>
            </Link>
            <p className="text-background/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm font-light">
              Platform digital pelestarian budaya dan pariwisata berkelanjutan Pulau Kangean. Menghubungkan generasi
              muda, masyarakat adat, dan pelaku UMKM.
            </p>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-background/60 font-light">
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Kepulauan Kangean, Sumenep, Madura</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>info@nusaraksa.id</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {[
            { title: "Fitur", links: footerLinks.fitur },
            { title: "Informasi", links: footerLinks.informasi },
            { title: "Dukungan", links: footerLinks.dukungan },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
            >
              <h4 className="font-medium mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-background/60 hover:text-background transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-background/10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs sm:text-sm text-background/50 font-light text-center sm:text-left">
            © 2025 NusaRaksa Island. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
              >
                <Link
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
