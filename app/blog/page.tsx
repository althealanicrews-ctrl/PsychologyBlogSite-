import { getPosts, getCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'

interface PageProps {
  searchParams: {
    category?: string
  }
}

export default async function BlogPage({ searchParams }: PageProps) {
  const category = searchParams?.category
  const posts = await getPosts(category ? { category } : undefined)
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Posts</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore our collection of psychology articles and insights
        </p>
      </div>

      <CategoryFilter categories={categories} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No posts found. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

