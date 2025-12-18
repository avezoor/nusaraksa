"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Users, Camera, FileText, ShoppingBag, Play, Heart, MessageCircle, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { images } from "@/config/images"

const galleryItems = [
  {
    id: 1,
    type: "photo",
    title: "Sunset di Pantai Kangean",
    author: "Ahmad Fauzi",
    image: images.gallery.sunset,
    likes: 234,
    comments: 18,
  },
  {
    id: 2,
    type: "photo",
    title: "Kehidupan Nelayan",
    author: "Siti Aisyah",
    image: images.gallery.nelayanLife,
    likes: 189,
    comments: 12,
  },
  {
    id: 3,
    type: "video",
    title: "Tarian Tradisional Kangean",
    author: "Muh. Rizki",
    image: images.gallery.traditionalDance,
    likes: 412,
    comments: 45,
  },
  {
    id: 4,
    type: "photo",
    title: "Pasar Pagi Kangean",
    author: "Dewi Lestari",
    image: images.gallery.pasarPagi,
    likes: 156,
    comments: 8,
  },
  {
    id: 5,
    type: "writing",
    title: "Rindu Kampung Halaman",
    author: "Fadila Nur",
    image: images.gallery.writing,
    likes: 298,
    comments: 32,
    excerpt: "Di setiap hembusan angin laut, aku menemukan aroma kampung yang telah lama kurindukan...",
  },
  {
    id: 6,
    type: "photo",
    title: "Anak-anak Pesisir",
    author: "Hasan Abdullah",
    image: images.gallery.childrenPesisir,
    likes: 367,
    comments: 28,
  },
]

const activities = [
  {
    id: 1,
    title: "Festival Budaya Kangean 2024",
    date: "15 Agustus 2024",
    image: images.activities.festivalBudaya,
    description: "Festival tahunan yang menampilkan seni dan budaya Kangean dengan berbagai pertunjukan tradisional.",
  },
  {
    id: 2,
    title: "Aksi Bersih Pantai",
    date: "22 April 2024",
    image: images.activities.bersihPantai,
    description: "Kegiatan gotong royong membersihkan pantai yang diikuti oleh ratusan pemuda Kangean.",
  },
  {
    id: 3,
    title: "Workshop Anyaman Tradisional",
    date: "10 Juni 2024",
    image: images.activities.workshopAnyaman,
    description: "Pelatihan kerajinan anyaman tradisional untuk melestarikan keterampilan lokal.",
  },
]

const umkmProducts = [
  {
    id: 1,
    name: "Kerupuk Ikan Kangean",
    price: "Rp 25.000",
    seller: "Bu Aminah",
    image: images.umkm.kerupukIkan,
    description: "Kerupuk ikan khas Kangean, dibuat dari ikan segar hasil tangkapan nelayan lokal.",
    contact: "+62 812-3456-7890",
  },
  {
    id: 2,
    name: "Anyaman Tas Pandan",
    price: "Rp 150.000",
    seller: "Ibu Sari Craft",
    image: images.umkm.tasPandan,
    description: "Tas anyaman dari daun pandan, dibuat dengan teknik tradisional turun-temurun.",
    contact: "+62 813-4567-8901",
  },
  {
    id: 3,
    name: "Terasi Kangean",
    price: "Rp 35.000",
    seller: "Pak Mahmud",
    image: images.umkm.terasi,
    description: "Terasi premium khas Kangean dengan cita rasa autentik dari udang segar.",
    contact: "+62 815-6789-0123",
  },
  {
    id: 4,
    name: "Kerajinan Kerang",
    price: "Rp 75.000",
    seller: "Dewi Kerang Art",
    image: images.umkm.kerajinanKerang,
    description: "Hiasan dinding dari kerang laut yang dikumpulkan dan dirangkai dengan indah.",
    contact: "+62 817-8901-2345",
  },
]

export function YouthCreativeSpace() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<(typeof umkmProducts)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("gallery")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredGallery = galleryItems.filter(
    (item) =>
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredActivities = activities.filter(
    (item) =>
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredProducts = umkmProducts.filter(
    (item) =>
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.seller.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section id="pemuda" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            Fitur 5
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 text-balance px-2">
            Ruang Kreatif Pemuda Kangean
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed font-light px-2">
            Ruang ekspresi dan kreasi generasi muda Kangean. Temukan galeri karya, dokumentasi kegiatan, dan produk UMKM
            lokal berbasis budaya.
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
              placeholder="Cari galeri, kegiatan, atau produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 sm:pl-12 pr-4 py-5 sm:py-6 rounded-full border-border bg-card focus:border-primary transition-all duration-300 text-sm"
            />
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="gallery" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="grid grid-cols-3 gap-2 sm:gap-3 h-auto bg-transparent mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
              <TabsTrigger
                value="gallery"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm"
              >
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Galeri</span>
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Kegiatan</span>
              </TabsTrigger>
              <TabsTrigger
                value="umkm"
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">UMKM</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <ScrollArea className="h-[400px] sm:h-[480px] md:h-[520px] lg:h-[550px]">
              {filteredGallery.length > 0 ? (
                <motion.div layout className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pr-4">
                  {filteredGallery.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        className="group overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 cursor-pointer"
                        onClick={() => setSelectedGalleryItem(item)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-foreground/80 backdrop-blur-sm flex items-center justify-center"
                              >
                                <Play className="w-4 h-4 sm:w-6 sm:h-6 text-background ml-0.5 sm:ml-1" />
                              </motion.div>
                            </div>
                          )}
                          <Badge className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-card/90 text-card-foreground backdrop-blur-sm text-xs">
                            {item.type === "photo" ? "Foto" : item.type === "video" ? "Video" : "Tulisan"}
                          </Badge>
                        </div>
                        <CardContent className="p-3 sm:p-4">
                          <h3 className="font-medium text-sm sm:text-base text-foreground mb-0.5 sm:mb-1 group-hover:text-primary transition-colors duration-300 truncate">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 font-light">
                            oleh {item.author}
                          </p>
                          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              {item.likes}
                            </span>
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              {item.comments}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <EmptyState searchQuery={searchQuery} />
              )}
            </ScrollArea>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <ScrollArea className="h-[400px] sm:h-[480px] md:h-[520px] lg:h-[550px]">
              {filteredActivities.length > 0 ? (
                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pr-4">
                  {filteredActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500 group">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4 sm:p-5 md:p-6">
                          <Badge variant="secondary" className="mb-2 sm:mb-3 font-light text-xs">
                            {activity.date}
                          </Badge>
                          <h3 className="font-serif text-lg sm:text-xl font-normal text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                            {activity.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                            {activity.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <EmptyState searchQuery={searchQuery} />
              )}
            </ScrollArea>
          </TabsContent>

          {/* UMKM Tab */}
          <TabsContent value="umkm">
            <ScrollArea className="h-[400px] sm:h-[480px] md:h-[520px] lg:h-[550px]">
              {filteredProducts.length > 0 ? (
                <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4 pr-4">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        className="overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 cursor-pointer group"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-3 sm:p-4">
                          <h3 className="font-medium text-xs sm:text-sm md:text-base text-foreground mb-0.5 sm:mb-1 group-hover:text-primary transition-colors truncate">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-1 sm:mb-2 font-light truncate">
                            {product.seller}
                          </p>
                          <p className="text-primary font-semibold text-sm sm:text-base">{product.price}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <EmptyState searchQuery={searchQuery} />
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {/* Gallery Item Modal */}
        <AnimatePresence>
          {selectedGalleryItem && (
            <Dialog open={!!selectedGalleryItem} onOpenChange={() => setSelectedGalleryItem(null)}>
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
                        src={selectedGalleryItem.image || "/placeholder.svg"}
                        alt={selectedGalleryItem.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl sm:text-2xl font-normal text-foreground">
                        {selectedGalleryItem.title}
                      </DialogTitle>
                    </DialogHeader>
                    <p className="text-muted-foreground font-light text-sm sm:text-base">
                      oleh {selectedGalleryItem.author}
                    </p>
                    {selectedGalleryItem.excerpt && (
                      <p className="text-foreground italic mt-3 sm:mt-4 font-light text-sm sm:text-base">
                        &quot;{selectedGalleryItem.excerpt}&quot;
                      </p>
                    )}
                    <div className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                        {selectedGalleryItem.likes} suka
                      </span>
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        {selectedGalleryItem.comments} komentar
                      </span>
                    </div>
                  </motion.div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
              <DialogContent className="max-w-[95vw] sm:max-w-sm md:max-w-md bg-card max-h-[90vh] p-0 overflow-hidden">
                <ScrollArea className="max-h-[90vh]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="p-4 sm:p-6"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                      <Image
                        src={selectedProduct.image || "/placeholder.svg"}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl sm:text-2xl font-normal text-foreground">
                        {selectedProduct.name}
                      </DialogTitle>
                    </DialogHeader>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 font-light">
                      {selectedProduct.seller}
                    </p>
                    <p className="text-primary text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                      {selectedProduct.price}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light">
                      {selectedProduct.description}
                    </p>
                    <Button className="w-full bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all duration-300 py-5 sm:py-6 text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Hubungi Penjual
                    </Button>
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

function EmptyState({ searchQuery }: { searchQuery: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
      <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
      <p className="text-muted-foreground text-base">
        {searchQuery ? `Tidak ada hasil untuk "${searchQuery}"` : "Tidak ada konten untuk ditampilkan."}
      </p>
    </motion.div>
  )
}
