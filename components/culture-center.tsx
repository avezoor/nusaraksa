"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { BookOpen, History, Anchor, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { images } from "@/config/images"

const culturalContent = [
  {
    id: 1,
    category: "Cerita Rakyat",
    icon: BookOpen,
    title: "Legenda Putri Kangean",
    description: "Kisah seorang putri yang menjaga keseimbangan laut dan daratan di Kepulauan Kangean.",
    image: images.culture.legendaPutri,
    fullContent:
      "Dikisahkan pada zaman dahulu, terdapat seorang putri bernama Dewi Kangean yang hidup di sebuah kerajaan kecil di tengah lautan. Ia memiliki kemampuan untuk berkomunikasi dengan makhluk laut dan menjaga keseimbangan alam. Setiap tahun, ia melakukan ritual untuk memastikan hasil tangkapan nelayan melimpah dan cuaca mendukung pelayaran. Hingga kini, masyarakat Kangean masih mempercayai keberadaan roh putri yang menjaga pulau mereka.",
  },
  {
    id: 2,
    category: "Cerita Rakyat",
    icon: BookOpen,
    title: "Asal Usul Pulau Sepanjang",
    description: "Legenda terbentuknya Pulau Sepanjang dari seekor naga laut yang tertidur.",
    image: images.culture.pulauSepanjang,
    fullContent:
      "Konon, Pulau Sepanjang terbentuk dari seekor naga laut raksasa yang tertidur lelap setelah menjaga lautan dari badai besar. Tubuhnya yang membentang menjadi daratan panjang yang kini disebut Pulau Sepanjang. Para nelayan percaya bahwa naga tersebut masih hidup dan melindungi mereka dari bahaya laut. Ritual persembahan dilakukan setiap tahun sebagai bentuk penghormatan.",
  },
  {
    id: 3,
    category: "Sejarah Lokal",
    icon: History,
    title: "Kampung Nelayan Arjasa",
    description: "Sejarah kampung nelayan tertua di Kangean yang menjadi pusat perdagangan hasil laut.",
    image: images.culture.kampungArjasa,
    fullContent:
      "Kampung Arjasa merupakan salah satu pemukiman tertua di Kepulauan Kangean. Didirikan pada abad ke-17, kampung ini menjadi pusat perdagangan ikan dan hasil laut. Rumah-rumah panggung tradisional masih dapat ditemukan di sepanjang pesisir. Masyarakat Arjasa terkenal dengan teknik penangkapan ikan turun-temurun dan kerajinan anyaman jaring dari serat alami.",
  },
  {
    id: 4,
    category: "Sejarah Lokal",
    icon: History,
    title: "Pelabuhan Kuno Kalianget",
    description: "Jejak pelabuhan kuno yang menjadi jalur perdagangan maritim Nusantara.",
    image: images.culture.pelabuhanKalianget,
    fullContent:
      "Pelabuhan Kalianget pernah menjadi salah satu pelabuhan penting dalam jalur perdagangan maritim Nusantara. Pada masa kejayaannya, pelabuhan ini ramai dikunjungi pedagang dari berbagai daerah. Berbagai komoditas seperti garam, ikan kering, dan rempah-rempah diperdagangkan di sini. Sisa-sisa bangunan kolonial dan gudang tua masih dapat ditemukan di sekitar area pelabuhan.",
  },
  {
    id: 5,
    category: "Tradisi Laut",
    icon: Anchor,
    title: "Petik Laut Kangean",
    description: "Ritual tahunan nelayan sebagai ungkapan syukur atas hasil laut yang melimpah.",
    image: images.culture.petikLaut,
    fullContent:
      "Petik Laut adalah ritual tahunan yang dilakukan masyarakat Kangean sebagai bentuk syukur kepada Tuhan dan penghormatan kepada laut. Dalam ritual ini, sesaji berupa hasil bumi dan laut dihanyutkan ke tengah laut menggunakan perahu yang dihias indah. Acara ini biasanya diiringi dengan pertunjukan seni tradisional, doa bersama, dan makan bersama seluruh warga kampung.",
  },
  {
    id: 6,
    category: "Tradisi Laut",
    icon: Anchor,
    title: "Teknik Jaring Tradisional",
    description: "Kearifan lokal dalam membuat dan menggunakan jaring ikan secara berkelanjutan.",
    image: images.culture.jaringTradisional,
    fullContent:
      "Nelayan Kangean memiliki teknik pembuatan jaring yang diwariskan turun-temurun. Jaring dibuat dari serat alami yang dianyam dengan pola khusus untuk menangkap jenis ikan tertentu. Teknik ini tidak hanya efektif tetapi juga ramah lingkungan karena menggunakan lubang jaring yang memungkinkan ikan kecil lolos. Pengetahuan ini menjadi bagian penting dari pariwisata berkelanjutan Kangean.",
  },
]

const categories = [
  { id: "all", name: "Semua", icon: BookOpen },
  { id: "Cerita Rakyat", name: "Cerita Rakyat", icon: BookOpen },
  { id: "Sejarah Lokal", name: "Sejarah Lokal", icon: History },
  { id: "Tradisi Laut", name: "Tradisi Laut", icon: Anchor },
]

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
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              size="sm"
              className={`gap-1.5 sm:gap-2 rounded-full px-3 sm:px-5 text-xs sm:text-sm transition-all duration-300 ${
                selectedCategory === category.id ? "shadow-lg shadow-primary/25" : "hover:border-primary/50"
              }`}
            >
              <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{category.name}</span>
            </Button>
          ))}
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
                        <Badge className="bg-card/90 text-card-foreground backdrop-blur-sm text-xs">
                          <item.icon className="w-3 h-3 mr-1" />
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
