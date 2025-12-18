import { Suspense } from "react"
import { BlogList } from "@/components/blog/blog-list"
import { BlogHeader } from "@/components/blog/blog-header"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - NusaRaksa Island",
  description: "Artikel dan cerita seputar wisata, budaya, dan tradisi Kepulauan Kangean",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogHeader />
      <Suspense fallback={<div className="py-20 text-center">Memuat artikel...</div>}>
        <BlogList />
      </Suspense>
      <Footer />
    </main>
  )
}
