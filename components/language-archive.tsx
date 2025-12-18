"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import Link from "next/link"
import { Book, ChevronRight, ChevronLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { vocabularyCategories, shuffleWords, type VocabularyWord } from "@/config/vocabulary-data"

const WORDS_PER_PAGE = 9

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export function LanguageArchive() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("salam")
  const [currentPage, setCurrentPage] = useState(1)
  const [shuffledData, setShuffledData] = useState<Record<string, VocabularyWord[]>>({})
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const shuffled: Record<string, VocabularyWord[]> = {}
    vocabularyCategories.forEach((cat) => {
      shuffled[cat.id] = shuffleWords(cat.words)
    })
    setShuffledData(shuffled)
  }, [])

  const currentCategory = vocabularyCategories.find((cat) => cat.id === selectedCategory)
  const currentWords = shuffledData[selectedCategory] || []

  const filteredWords = useMemo(() => {
    if (!searchQuery) return currentWords
    return currentWords.filter(
      (word) =>
        word.kangean.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.indonesian.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [currentWords, searchQuery])

  const totalPages = Math.ceil(filteredWords.length / WORDS_PER_PAGE)
  const paginatedWords = filteredWords.slice((currentPage - 1) * WORDS_PER_PAGE, currentPage * WORDS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  return (
    <section id="bahasa" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header - Better responsive text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
        >
          <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
            <Book className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            Fitur 1
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 text-balance px-2">
            Arsip Digital Bahasa Kangean
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed font-light px-2">
            Bahasa Kangean (Bĕsa Kangéan) merupakan bahasa lokal masyarakat Kepulauan Kangean yang termasuk dalam rumpun
            bahasa Austronesia. Bahasa ini berkerabat dekat dengan bahasa Madura, namun berkembang secara khas melalui
            interaksi panjang dengan budaya pesisir.
          </p>
        </motion.div>

        {/* Search Bar - Better responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <div className="relative group">
            <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              type="text"
              placeholder="Cari kosakata..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 sm:pl-12 py-5 sm:py-6 text-sm sm:text-base bg-card border-border rounded-full transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </motion.div>

        {/* Category Tabs - Better responsive tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 h-auto bg-transparent mb-8 sm:mb-10">
              {vocabularyCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border rounded-lg sm:rounded-xl transition-all duration-300 hover:border-primary/50 text-xs sm:text-sm"
                >
                  <span className="text-base sm:text-xl">{category.icon}</span>
                  <span className="font-medium truncate">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {vocabularyCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${category.id}-${currentPage}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {paginatedWords.map((word) => (
                    <motion.div key={word.id} variants={itemVariants} layout>
                      <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer h-full hover:-translate-y-1">
                        <CardHeader className="pb-1 sm:pb-2 p-3 sm:p-4 md:p-6 md:pb-2">
                          <CardTitle className="text-lg sm:text-xl font-serif text-primary">{word.kangean}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 sm:p-4 md:p-6 pt-0 md:pt-0">
                          <p className="text-foreground font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                            {word.indonesian}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground italic font-light line-clamp-2">
                            "{word.example}"
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination - Better responsive pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      if (totalPages <= 5) return true
                      if (page === 1 || page === totalPages) return true
                      if (Math.abs(page - currentPage) <= 1) return true
                      return false
                    })
                    .map((page, index, array) => {
                      const showEllipsis = index > 0 && page - array[index - 1] > 1
                      return (
                        <div key={page} className="flex items-center gap-1.5 sm:gap-2">
                          {showEllipsis && <span className="text-muted-foreground text-xs sm:text-sm px-1">...</span>}
                          <Button
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            onClick={() => setCurrentPage(page)}
                            className={`rounded-full transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm ${
                              currentPage === page ? "shadow-lg shadow-primary/25" : "hover:border-primary"
                            }`}
                          >
                            {page}
                          </Button>
                        </div>
                      )
                    })}

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {/* Word count info */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4"
              >
                Menampilkan {paginatedWords.length} dari {filteredWords.length} kosakata
              </motion.p>
            </TabsContent>
          ))}
        </Tabs>

        {/* Link to full blog - Better responsive button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Link href="/blog">
            <Button
              variant="outline"
              className="group bg-transparent rounded-full px-5 sm:px-6 py-5 sm:py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
            >
              Baca Artikel Lengkap di Blog
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
