import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import Link from 'next/link'
import { remark } from 'remark'
import html from 'remark-html'
import PostCard from '@/components/PostCard'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  // Get related posts (same category, excluding current post)
  const relatedPosts = (await getPosts({ category: post.category }))
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Post Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

