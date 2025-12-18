"use client"

import { useRef } from "react"
import Image from "next/image"
import { QrCode, Smartphone, MapPin, Book, Camera, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { images } from "@/config/images"

const qrFeatures = [
  {
    icon: Book,
    title: "Sejarah & Budaya",
    description: "Penjelasan lengkap tentang sejarah dan makna budaya lokasi",
  },
  {
    icon: MapPin,
    title: "Cerita Lokal",
    description: "Cerita rakyat dan legenda yang berkaitan dengan tempat tersebut",
  },
  {
    icon: Camera,
    title: "Dokumentasi Visual",
    description: "Foto dan video dokumentasi singkat dari lokasi",
  },
]

const qrLocations = [
  { name: "Pantai Tanjung Kiras", type: "Wisata Bahari" },
  { name: "Kampung Adat Palasa", type: "Kampung Budaya" },
  { name: "Pelabuhan Tradisional", type: "Spot Sejarah" },
  { name: "Bukit Cinta", type: "Spot Alam" },
]

export function QRCodeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="qr" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
              <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
              Fitur 4
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 text-balance">
              QR Code Budaya & Wisata
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light">
              Temukan QR Code di lokasi wisata dan budaya Kangean. Pindai untuk mengakses informasi lengkap tentang
              sejarah, cerita lokal, dan kosakata Bahasa Kangean yang relevan dengan tempat tersebut.
            </p>

            {/* Features */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
              {qrFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* How to Use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="bg-muted/30 border-border">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h4 className="font-medium text-foreground mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    Cara Menggunakan
                  </h4>
                  <ol className="space-y-2 sm:space-y-3">
                    {[
                      "Temukan QR Code di lokasi wisata",
                      "Buka kamera ponsel Anda",
                      "Pindai QR Code yang tersedia",
                      "Baca informasi budaya lokasi",
                    ].map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground font-light"
                      >
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 font-medium">
                          {index + 1}
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative max-w-[240px] sm:max-w-[280px] md:max-w-xs lg:max-w-sm mx-auto">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative bg-foreground rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-2.5 md:p-3 shadow-2xl"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-6 md:h-7 bg-foreground rounded-b-2xl sm:rounded-b-3xl" />
                <div className="bg-background rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Screen Content */}
                  <div className="p-4 sm:p-5 md:p-6 pt-8 sm:pt-10 md:pt-12">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.5 }}
                      className="text-center mb-4 sm:mb-5 md:mb-6"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <QrCode className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-sm sm:text-base md:text-lg font-normal text-foreground mb-0.5 sm:mb-1">
                        Pantai Tanjung Kiras
                      </h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-light">Wisata Bahari</p>
                    </motion.div>

                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                        className="bg-muted/50 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                      >
                        <h4 className="text-[10px] sm:text-xs font-medium text-foreground mb-1 sm:mb-2">Sejarah</h4>
                        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed font-light line-clamp-2">
                          Pantai ini dahulu merupakan tempat pendaratan nelayan...
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="bg-muted/50 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                      >
                        <h4 className="text-[10px] sm:text-xs font-medium text-foreground mb-1 sm:mb-2">
                          Kosakata Lokal
                        </h4>
                        <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-[10px] sm:text-xs font-light px-2 py-0.5">
                            Tassé' = Laut
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] sm:text-xs font-light px-2 py-0.5">
                            Pasér = Pasir
                          </Badge>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR Code Card - Floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ delay: 0.9, type: "spring" }}
                className="absolute -left-4 sm:-left-8 md:-left-12 top-1/4 bg-card rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-border max-w-[100px] sm:max-w-[120px] md:max-w-[140px] hidden sm:block"
              >
                <Image
                  src={images.qr.mockup || "/placeholder.svg"}
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="rounded-lg sm:rounded-xl w-full h-auto"
                />
                <p className="text-[10px] sm:text-xs text-center mt-2 sm:mt-3 text-muted-foreground font-light">
                  Pindai Saya!
                </p>
              </motion.div>

              {/* Location List - Floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -right-2 sm:-right-4 md:-right-8 bottom-1/4 bg-card rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-border hidden sm:block"
              >
                <h4 className="text-[10px] sm:text-xs font-medium text-foreground mb-2 sm:mb-3">Lokasi QR Code</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {qrLocations.slice(0, 3).map((loc, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground font-light"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent flex-shrink-0" />
                      <span className="truncate max-w-[80px] sm:max-w-none">{loc.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
