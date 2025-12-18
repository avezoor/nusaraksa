"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function BlogHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="pt-20 pb-12 bg-foreground text-background border-b border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm"
        >
          <Link href="/" className="text-background">
            Beranda
          </Link>
          <ChevronRight className="w-4 h-4 text-background" />
          <span className="text-background font-medium">Blog</span>
        </motion.div>
      </div>
    </section>
  )
}
