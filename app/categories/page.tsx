import Link from 'next/link'
import { getCategories, getPosts } from '@/lib/posts'

export default async function CategoriesPage() {
  const categories = await getCategories()
  const allPosts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const categoryPosts = allPosts.filter((post) => post.category === category)
          return (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-2 text-primary-600">
                {category}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

