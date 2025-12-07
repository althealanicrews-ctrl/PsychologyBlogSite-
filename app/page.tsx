import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function Home() {
  const posts = await getPosts({ limit: 6 })

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Exploring the Human Mind
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover insights into psychology, mental health, and the fascinating world of human behavior
        </p>
      </section>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <Link
          href="/blog"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          View All Posts
        </Link>
      </section>
    </div>
  )
}

