'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface CategoryFilterProps {
  categories: string[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !selectedCategory
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`/blog?category=${encodeURIComponent(category)}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}

