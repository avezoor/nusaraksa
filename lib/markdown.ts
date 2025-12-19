import fs from "fs"
import path from "path"

export interface BlogFrontmatter {
  title: string
  description: string
  author: string
  authorImage: string
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readingTime: string
  slug?: string
}

export interface BlogPostData extends BlogFrontmatter {
  slug: string
  content: string
}

/**
 * Parse YAML/frontmatter from markdown content
 */
export function parseFrontmatter(fileContent: string): {
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
 * Get all blog posts from markdown files
 */
export async function getAllBlogPosts(): Promise<BlogPostData[]> {
  const blogDir = path.join(process.cwd(), "content", "blog")
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"))

  const posts: BlogPostData[] = files.map((file) => {
    const filePath = path.join(blogDir, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { frontmatter, content } = parseFrontmatter(fileContent)
    const slug = file.replace(".md", "")

    return {
      title: frontmatter.title || "",
      description: frontmatter.description || frontmatter.excerpt || "",
      author: frontmatter.author || "",
      authorImage: frontmatter.authorImage || "",
      category: frontmatter.category || "",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      image: frontmatter.image || "",
      publishedAt: frontmatter.publishedAt || "",
      readingTime: frontmatter.readingTime || "",
      slug,
      content,
    }
  })

  // Sort by publishedAt date (newest first)
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostData | null> {
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { frontmatter, content } = parseFrontmatter(fileContent)

  return {
    title: frontmatter.title || "",
    description: frontmatter.description || frontmatter.excerpt || "",
    author: frontmatter.author || "",
    authorImage: frontmatter.authorImage || "",
    category: frontmatter.category || "",
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    image: frontmatter.image || "",
    publishedAt: frontmatter.publishedAt || "",
    readingTime: frontmatter.readingTime || "",
    slug,
    content,
  }
}
