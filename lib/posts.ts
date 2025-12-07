import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  author: string
  category: string
  tags: string[]
  excerpt: string
  image?: string
  readingTime: number
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.(md|mdx)$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  
  let filePath: string | null = null
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  }
  
  if (!filePath) {
    return null
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    tags: data.tags || [],
    excerpt: data.excerpt || '',
    image: data.image,
    readingTime: data.readingTime || 5,
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  
  return posts
}

export function getPosts(options?: { limit?: number; category?: string; tag?: string }): Post[] {
  let posts = getAllPosts()
  
  if (options?.category) {
    posts = posts.filter((post) => post.category === options.category)
  }
  
  if (options?.tag) {
    posts = posts.filter((post) => post.tags.includes(options.tag!))
  }
  
  if (options?.limit) {
    posts = posts.slice(0, options.limit)
  }
  
  return posts
}

export function getCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories).sort()
}

export function getTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((post) => post.tags))
  return Array.from(tags).sort()
}

