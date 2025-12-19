"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-types"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import "katex/dist/katex.min.css"

interface BlogDetailProps {
  post: BlogPost
}

export function BlogDetail({ post }: BlogDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <article className="pt-24 pb-20" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 text-balance leading-tight">
            {post.title}
          </h1>

          {/* Meta Info - author image */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <Image src={post.authorImage || "/icon-dark-32x32.png"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm sm:text-base">{post.author}</p>
                <p className="text-xs sm:text-sm">Penulis</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs sm:text-sm">{post.readingTime} baca</span>
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12"
          >
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </motion.div>

          {/* Content with Markdown, Tables, and MathJax Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none
              prose-headings:font-serif prose-headings:font-normal
              prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-medium
              prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 sm:prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-primary
              prose-table:border prose-table:border-border prose-th:bg-muted prose-th:border-border prose-th:p-2 sm:prose-th:p-3 prose-th:text-foreground prose-td:p-2 sm:prose-td:p-3 prose-td:border-border prose-td:text-muted-foreground
              prose-img:rounded-lg prose-img:my-4 sm:prose-img:my-6
              [&_.math-inline]:mx-1 [&_.math-block]:my-4 [&_.math-block]:overflow-x-auto
              [&_table]:w-full [&_table]:table-auto [&_thead]:bg-muted [&_tbody>tr:nth-child(odd)]:bg-muted/30"
          >
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                p: ({ node, ...props }) => <p {...props} className="break-words" />,
                img: ({ node, ...props }) => (
                  <img {...props} className="max-w-full h-auto rounded-lg" />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto w-full my-4">
                    <table {...props} className="w-full border-collapse border border-border" />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead {...props} className="bg-muted border-b border-border" />
                ),
                th: ({ node, ...props }) => (
                  <th {...props} className="border border-border p-2 sm:p-3 text-left text-foreground font-semibold" />
                ),
                td: ({ node, ...props }) => (
                  <td {...props} className="border border-border p-2 sm:p-3 text-muted-foreground" />
                ),
                tr: ({ node, ...props }) => (
                  <tr {...props} className="hover:bg-muted/50 transition-colors" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-2 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border"
          >
            <Tag className="w-4 h-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                #{tag}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </article>
  )
}
