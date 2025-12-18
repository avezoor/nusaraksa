"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ChevronRight, ChevronLeft, Search, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { blogPosts, blogCategories, shuffleArray, type BlogPost } from "@/config/blog-data"

const POSTS_PER_PAGE = 6

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [currentPage, setCurrentPage] = useState(1)
  const [shuffledPosts, setShuffledPosts] = useState<BlogPost[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setShuffledPosts(shuffleArray(blogPosts))
  }, [])

  const filteredPosts = shuffledPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Semua" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-full border-border bg-card focus:border-primary transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className={`rounded-full px-4 sm:px-5 transition-all duration-300 text-xs sm:text-sm ${
                selectedCategory === category ? "shadow-lg shadow-primary/25" : "hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div layout className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {post.readingTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 font-light line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                            <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        <div className="flex items-center text-primary text-xs sm:text-sm font-medium">
                          Baca
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-1.5 sm:gap-2 mt-12"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full w-9 h-9 sm:w-10 sm:h-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={`rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-all duration-300 text-xs sm:text-sm ${
                  currentPage === page ? "shadow-lg shadow-primary/25" : ""
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full w-9 h-9 sm:w-10 sm:h-10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {/* Empty State */}
        {paginatedPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              {searchQuery ? `Tidak ada artikel untuk "${searchQuery}"` : "Belum ada artikel untuk kategori ini."}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
