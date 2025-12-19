import { notFound } from "next/navigation"
import { blogPosts } from "@/config/blog-data"
import { BlogDetail } from "@/components/blog/blog-detail"
import { BlogHeader } from "@/components/blog/blog-header"
import { Footer } from "@/components/footer"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: "Artikel tidak ditemukan" }
  }

  return {
    title: `${post.title} - NusaRaksa Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />
      <BlogDetail post={post} />
      <Footer />
    </main>
  )
}
