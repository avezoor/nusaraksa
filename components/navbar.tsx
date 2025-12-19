"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

const navItems = [
  { name: "Beranda", href: "#beranda" },
  { name: "Bahasa", href: "#bahasa" },
  { name: "Budaya", href: "#budaya" },
  { name: "Peta Wisata", href: "#peta" },
  { name: "Blog", href: "/blog" },
  { name: "Ruang Pemuda", href: "#pemuda" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center"
            >
              <Image src="/icon-dark-32x32.png" alt="NusaRaksa Logo" width={32} height={32} priority />
            </motion.div>
            <span
              className={`font-serif text-lg sm:text-xl font-normal tracking-tight transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-card"
              }`}
            >
              NusaRaksa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    scrolled ? "text-muted-foreground hover:text-foreground" : "text-card/80 hover:text-card"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden lg:block"
          >
            <Link href="/blog">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                Jelajahi Sekarang
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${scrolled ? "text-foreground" : "text-card"} w-9 h-9 sm:w-10 sm:h-10`}
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] bg-background border-border p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <Image src="/icon-dark-32x32.png" alt="NusaRaksa Logo" width={32} height={32} />
                    </div>
                    <span className="font-serif text-lg font-normal">NusaRaksa</span>
                  </Link>
                </div>

                {/* Nav Items */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3.5 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-xl transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-4 border-t border-border">
                  <Link href="/blog" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6">
                      Jelajahi Sekarang
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
