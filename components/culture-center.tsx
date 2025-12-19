"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronRight, Search, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { cultureCategories, culturalContent } from "@/config/culture-data"
import { logoIconMap } from "@/config/logo"

export function CultureCenter() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedContent, setSelectedContent] = useState<(typeof culturalContent)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredContent = culturalContent.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="budaya" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            Fitur 2
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 text-balance px-2">
            Pusat Informasi Budaya & Tradisi Pesisir
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed font-light px-2">
            Jelajahi kekayaan budaya Pulau Kangean melalui cerita rakyat, sejarah lokal, dan tradisi masyarakat laut
            yang telah diwariskan turun-temurun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-6 sm:mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari budaya & tradisi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 sm:pl-12 pr-4 py-5 sm:py-6 rounded-full border-border bg-card focus:border-primary transition-all duration-300 text-sm"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
        >
          {cultureCategories.map((category) => {
            const Icon = logoIconMap[category.icon as keyof typeof logoIconMap]
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-1.5 sm:gap-2 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.name}
              </Button>
            )
          })}
        </motion.div>

        {/* Content Grid */}
        <ScrollArea className="h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
          <motion.div layout className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 pr-4">
            <AnimatePresence mode="popLayout">
              {filteredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    className="group overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer h-full"
                    onClick={() => setSelectedContent(item)}
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <Badge className="bg-card/90 text-card-foreground backdrop-blur-sm text-xs gap-1">
                          {(() => {
                            const Icon = logoIconMap[item.icon as keyof typeof logoIconMap]
                            return Icon ? <Icon className="w-3 h-3" /> : null
                          })()}
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-light line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center text-primary text-xs sm:text-sm font-medium">
                        Baca Selengkapnya
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredContent.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-base">
                {searchQuery ? `Tidak ada hasil untuk "${searchQuery}"` : "Tidak ada konten untuk kategori ini."}
              </p>
            </motion.div>
          )}
        </ScrollArea>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedContent && (
            <Dialog open={!!selectedContent} onOpenChange={() => setSelectedContent(null)}>
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
                        src={selectedContent.image || "/placeholder.svg"}
                        alt={selectedContent.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <DialogHeader>
                      <Badge className="w-fit mb-2 sm:mb-3 bg-primary/10 text-primary border-0 text-xs">
                        <selectedContent.icon className="w-3 h-3 mr-1 sm:mr-1.5" />
                        {selectedContent.category}
                      </Badge>
                      <DialogTitle className="font-serif text-xl sm:text-2xl font-normal text-foreground">
                        {selectedContent.title}
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground leading-relaxed font-light pt-2 text-sm sm:text-base">
                        {selectedContent.fullContent}
                      </DialogDescription>
                    </DialogHeader>
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
