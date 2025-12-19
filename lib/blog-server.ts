"use server"

import fs from "fs"
import path from "path"
import { BlogPost } from "@/lib/blog-types"

// Default placeholder paths
const DEFAULT_BLOG_IMAGE = "/placeholder.svg?height=600&width=800"
const DEFAULT_AUTHOR_IMAGE = "/icon-dark-32x32.png"

interface FrontmatterData {
  title: string
  description?: string
  excerpt?: string
  author: string
  authorImage: string
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readingTime: string
  slug?: string
}

/**
 * Parse YAML/frontmatter from markdown content
 */
function parseFrontmatter(fileContent: string): {
  frontmatter: Record<string, any>
  content: string
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = fileContent.match(frontmatterRegex)

  if (!match) {
    return { frontmatter: {}, content: fileContent }
  }

  const [, frontmatterStr, content] = match
  const frontmatter: Record<string, any> = {}

  frontmatterStr.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":")
    if (colonIndex === -1) return

    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()

    // Handle different value types
    if (value === "true") {
      frontmatter[key] = true
    } else if (value === "false") {
      frontmatter[key] = false
    } else if (value.startsWith("[") && value.endsWith("]")) {
      // Parse arrays
      try {
        frontmatter[key] = JSON.parse(value)
      } catch {
        frontmatter[key] = value
      }
    } else if (value.startsWith('"') && value.endsWith('"')) {
      frontmatter[key] = value.slice(1, -1)
    } else if (!isNaN(Number(value)) && value !== "") {
      frontmatter[key] = Number(value)
    } else {
      frontmatter[key] = value
    }
  })

  return { frontmatter, content }
}

/**
 * Resolve image path - use direct path from frontmatter
 */
function getImagePath(imageName: string): string {
  // If it's already a path (starts with /), return as is
  if (imageName.startsWith("/")) {
    return imageName
  }
  // Otherwise return default
  return DEFAULT_BLOG_IMAGE
}

/**
 * Resolve author image path - use direct path from frontmatter
 */
function getAuthorImagePath(authorImageName: string): string {
  // If it's already a path (starts with /), return as is
  if (authorImageName.startsWith("/")) {
    return authorImageName
  }
  // Otherwise return default
  return DEFAULT_AUTHOR_IMAGE
}

/**
 * Get all blog posts from markdown files
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), "content", "blog")
    const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"))

    const posts: BlogPost[] = files
      .map((file) => {
        try {
          const filePath = path.join(blogDir, file)
          const fileContent = fs.readFileSync(filePath, "utf-8")
          const { frontmatter, content } = parseFrontmatter(fileContent)
          const slug = file.replace(".md", "")

          return {
            id: frontmatter.id || slug,
            slug,
            title: frontmatter.title || "",
            excerpt: frontmatter.excerpt || frontmatter.description || "",
            content,
            author: frontmatter.author || "",
            authorImage: getAuthorImagePath(frontmatter.authorImage || "default"),
            category: frontmatter.category || "",
            tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
            image: getImagePath(frontmatter.image || ""),
            publishedAt: frontmatter.publishedAt || new Date().toISOString().split("T")[0],
            readingTime: frontmatter.readingTime || "",
          }
        } catch (error) {
          console.error(`Error processing ${file}:`, error)
          return null
        }
      })
      .filter((post): post is BlogPost => post !== null)

    // Sort by publishedAt date (newest first)
    return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { frontmatter, content } = parseFrontmatter(fileContent)

    return {
      id: frontmatter.id || slug,
      slug,
      title: frontmatter.title || "",
      excerpt: frontmatter.excerpt || frontmatter.description || "",
      content,
      author: frontmatter.author || "",
      authorImage: getAuthorImagePath(frontmatter.authorImage || "default"),
      category: frontmatter.category || "",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      image: getImagePath(frontmatter.image || ""),
      publishedAt: frontmatter.publishedAt || new Date().toISOString().split("T")[0],
      readingTime: frontmatter.readingTime || "",
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}
