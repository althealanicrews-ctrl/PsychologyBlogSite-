import Link from 'next/link'
import { Post } from '@/lib/posts'
import { format } from 'date-fns'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
      {post.image && (
        <Link href={`/blog/${post.slug}`}>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold mb-2 hover:text-primary-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}

