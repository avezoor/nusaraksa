"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { mapCategories, mapLocations, googleMapsEmbed } from "@/config/map-data"
import { logoIconMap } from "@/config/logo"

// Create categoryColors from mapCategories
const categoryColors = mapCategories.reduce(
  (acc, cat) => {
    acc[cat.id] = cat.color
    return acc
  },
  {} as Record<string, string>,
)

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

        {/* Google Maps Embed Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-xl sm:shadow-2xl shadow-primary/5">
            <div className="aspect-video w-full">
              <iframe
                src={googleMapsEmbed.embedUrl}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={googleMapsEmbed.title}
                className="w-full h-full"
              />
            </div>
          </div>
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
                      {(() => {
                        const Icon = logoIconMap[location.icon as keyof typeof logoIconMap]
                        return Icon ? <Icon className="w-4 h-4 sm:w-5 sm:h-5" /> : null
                      })()}
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
                          {(() => {
                            const Icon = logoIconMap[selectedLocation.icon as keyof typeof logoIconMap]
                            return Icon ? <Icon className="w-4 h-4 sm:w-5 sm:h-5" /> : null
                          })()}
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
