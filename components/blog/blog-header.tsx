"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Newspaper } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BlogHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            <Newspaper className="w-4 h-4 mr-1.5" />
            Blog NusaRaksa
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-foreground mb-6 text-balance">
            Cerita dari Kangean
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Temukan artikel menarik seputar wisata, budaya, kuliner, dan kekayaan alam Kepulauan Kangean yang ditulis
            oleh warga lokal dan pecinta budaya.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
