"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { MapPin, Waves, TreePalm, Anchor, Camera, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { images } from "@/config/images"

const mapLocations = [
  {
    id: 1,
    name: "Pantai Tanjung Kiras",
    category: "Pantai & Bahari",
    icon: Waves,
    position: { top: "30%", left: "25%" },
    image: images.map.pantaiTanjungKiras,
    description: "Pantai dengan pasir putih dan air jernih kebiruan. Cocok untuk snorkeling dan menikmati sunset.",
    history:
      "Pantai ini dahulu merupakan tempat pendaratan nelayan dan hingga kini masih menjadi lokasi ritual laut tahunan.",
    etiquette: "Jaga kebersihan, hormati area ritual, dan hindari mengambil terumbu karang.",
  },
  {
    id: 2,
    name: "Kampung Adat Palasa",
    category: "Kampung Budaya",
    icon: TreePalm,
    position: { top: "45%", left: "55%" },
    image: images.map.kampungPalasa,
    description: "Kampung tradisional dengan rumah-rumah panggung khas Kangean dan tradisi yang masih terjaga.",
    history:
      "Kampung tertua di Kangean yang didirikan pada abad ke-16. Masyarakatnya masih menjalankan adat istiadat leluhur.",
    etiquette: "Mohon izin sebelum mengambil foto, berpakaian sopan, dan ikuti petunjuk pemandu lokal.",
  },
  {
    id: 3,
    name: "Bukit Cinta",
    category: "Spot Alam",
    icon: Camera,
    position: { top: "20%", left: "70%" },
    image: images.map.bukitCinta,
    description: "Puncak bukit dengan pemandangan spektakuler ke seluruh Kepulauan Kangean dan lautan lepas.",
    history: "Menurut legenda, bukit ini adalah tempat pertemuan sepasang kekasih yang terpisah oleh lautan.",
    etiquette: "Bawa perlengkapan mendaki yang memadai dan jangan membuang sampah sembarangan.",
  },
  {
    id: 4,
    name: "Pelabuhan Tradisional",
    category: "Spot Sejarah",
    icon: Anchor,
    position: { top: "60%", left: "35%" },
    image: images.map.pelabuhanTradisional,
    description:
      "Pelabuhan nelayan tradisional dengan perahu-perahu warna-warni dan suasana kehidupan pesisir autentik.",
    history: "Pelabuhan ini telah beroperasi sejak zaman kolonial dan menjadi jalur perdagangan penting di kawasan.",
    etiquette: "Hati-hati di area dermaga, hormati aktivitas nelayan, dan jangan menghalangi jalan perahu.",
  },
  {
    id: 5,
    name: "Goa Laut Kangean",
    category: "Spot Alam",
    icon: Camera,
    position: { top: "75%", left: "60%" },
    image: images.map.goaLaut,
    description: "Goa alami di tebing laut dengan stalaktit dan stalagmit yang memukau serta air laut yang jernih.",
    history: "Goa ini dipercaya sebagai tempat pertapaan tokoh spiritual Kangean pada masa lampau.",
    etiquette: "Gunakan pemandu lokal, bawa alat penerangan, dan jangan menyentuh formasi batuan.",
  },
]

const categoryColors: Record<string, string> = {
  "Pantai & Bahari": "bg-chart-1",
  "Kampung Budaya": "bg-chart-2",
  "Spot Alam": "bg-chart-3",
  "Spot Sejarah": "bg-chart-4",
}

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof mapLocations)[0] | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="peta" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
        >
          <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            Fitur 3
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 text-balance px-2">
            Peta Budaya & Wisata Interaktif
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed font-light px-2">
            Jelajahi destinasi budaya dan wisata Pulau Kangean melalui peta interaktif. Klik pada setiap titik untuk
            informasi lengkap.
          </p>
        </motion.div>

        {/* Interactive Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-card shadow-xl sm:shadow-2xl shadow-primary/5">
            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src={images.map.background || "/placeholder.svg"}
                alt="Peta Pulau Kangean"
                fill
                className="object-cover"
              />

              {/* Location Markers */}
              {mapLocations.map((location, index) => (
                <motion.button
                  key={location.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ top: location.position.top, left: location.position.left }}
                  onClick={() => setSelectedLocation(location)}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredLocation === location.id ? 1.2 : 1,
                      y: hoveredLocation === location.id ? -5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl ${categoryColors[location.category]} text-primary-foreground shadow-lg cursor-pointer`}
                  >
                    <location.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping opacity-25 bg-inherit" />
                  </motion.div>

                  {/* Hover Tooltip - Hidden on touch devices */}
                  <AnimatePresence>
                    {hoveredLocation === location.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 sm:mb-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground text-background text-xs sm:text-sm rounded-lg sm:rounded-xl whitespace-nowrap shadow-xl hidden sm:block"
                      >
                        {location.name}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-6 sm:border-8 border-transparent border-t-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Legend - Better responsive layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8"
          >
            {Object.entries(categoryColors).map(([category, color]) => (
              <div key={category} className="flex items-center gap-1.5 sm:gap-2">
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-md sm:rounded-lg ${color}`} />
                <span className="text-xs sm:text-sm text-muted-foreground font-light">{category}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Location Cards Grid - Better responsive grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10 md:mt-12 max-w-5xl mx-auto"
        >
          {mapLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card
                className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedLocation(location)}
              >
                <CardHeader className="pb-2 p-3 sm:p-4 md:p-6 md:pb-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${categoryColors[location.category]} text-primary-foreground flex items-center justify-center flex-shrink-0`}
                    >
                      <location.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <div className="min-w-0">
                      <CardTitle className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {location.name}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground font-light">{location.category}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0 md:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 font-light">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Detail Modal - Better responsive modal with ScrollArea */}
        <AnimatePresence>
          {selectedLocation && (
            <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
              <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl bg-card max-h-[90vh] p-0 overflow-hidden">
                <ScrollArea className="max-h-[90vh]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="p-4 sm:p-6"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                      <Image
                        src={selectedLocation.image || "/placeholder.svg"}
                        alt={selectedLocation.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <DialogHeader>
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${categoryColors[selectedLocation.category]} text-primary-foreground flex items-center justify-center`}
                        >
                          <selectedLocation.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <Badge variant="outline" className="font-light text-xs">
                          {selectedLocation.category}
                        </Badge>
                      </div>
                      <DialogTitle className="font-serif text-xl sm:text-2xl font-normal text-foreground">
                        {selectedLocation.name}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-1 sm:mb-1.5 text-sm sm:text-base">Deskripsi</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm font-light">
                          {selectedLocation.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 sm:mb-1.5 text-sm sm:text-base">
                          Sejarah & Budaya
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm font-light">
                          {selectedLocation.history}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 sm:mb-1.5 text-sm sm:text-base">
                          Etika Kunjungan
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm font-light">
                          {selectedLocation.etiquette}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                      <Button className="flex-1 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all duration-300 text-sm py-5 sm:py-6">
                        <MapPin className="w-4 h-4 mr-2" />
                        Lihat di Google Maps
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent rounded-full text-sm py-5 sm:py-6">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Bagikan Lokasi
                      </Button>
                    </div>
                  </motion.div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
