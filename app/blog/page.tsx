import { Suspense } from "react"
import { BlogListClient } from "@/components/blog/blog-list-client"
import { BlogHeader } from "@/components/blog/blog-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - NusaRaksa Island",
  description: "Artikel dan cerita seputar wisata, budaya, dan tradisi Kepulauan Kangean",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />
      <Suspense fallback={<div className="py-20 text-center">Memuat artikel...</div>}>
        <BlogListClient />
      </Suspense>
      <Footer />
    </main>
  )
}
