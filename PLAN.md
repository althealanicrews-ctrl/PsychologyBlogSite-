# Psychology Blog Site - Project Plan

## Project Overview
A modern, user-friendly blog site dedicated to psychology content with a comprehensive admin panel for non-technical content management. The site will feature articles, resources, and an engaging reading experience, while allowing administrators to manage content through a web-based interface without needing to touch code or commit to GitHub.

## Technology Stack

### Frontend Framework
- **Next.js 14+** (App Router) - React framework with SSR/SSG for optimal performance
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS for rapid styling
- **Framer Motion** - Smooth animations and transitions

### Backend & Database
- **PostgreSQL** - Relational database for storing blog posts, users, and metadata
- **Prisma** - Type-safe ORM for database access
- **Next.js API Routes** - Server-side API endpoints for CRUD operations
- **NextAuth.js** - Authentication for admin panel

### Content Management
- **Database-driven content** - All posts stored in PostgreSQL
- **Rich text editor** - For admin panel (e.g., React Quill, TipTap, or Lexical)
- **Image upload** - Cloud storage integration (Cloudinary, AWS S3, or Vercel Blob)
- **Markdown support** - Optional markdown rendering for content

### Admin Panel Features
- **Authentication** - Secure login system for admin users
- **Post Management** - Create, edit, delete, and publish posts
- **Media Library** - Upload and manage images
- **Category/Tag Management** - Organize content
- **Draft/Published States** - Content workflow
- **Preview Mode** - Preview posts before publishing
- **User Management** - Manage admin users (optional)

## Site Structure

### Public Pages
1. **Homepage** - Featured posts, recent articles, hero section
2. **Blog Listing** - All published posts with pagination and filters
3. **Individual Post** - Full article with reading time, tags, related posts
4. **About** - Site information and author bio
5. **Categories** - Browse posts by psychology topics
6. **Search** - Search results page

### Admin Panel Pages
1. **Login** - Authentication page
2. **Dashboard** - Overview of posts, stats, recent activity
3. **Posts List** - Table/grid view of all posts with filters
4. **Post Editor** - Create/edit posts with rich text editor
5. **Media Library** - Upload and manage images
6. **Categories/Tags** - Manage categories and tags
7. **Settings** - Site configuration (optional)

### Psychology Categories
- Cognitive Psychology
- Clinical Psychology
- Developmental Psychology
- Social Psychology
- Neuropsychology
- Positive Psychology
- Research & Studies
- Mental Health & Wellness

## Database Schema

### Users Table
```sql
- id (UUID, Primary Key)
- email (String, Unique)
- name (String)
- passwordHash (String)
- role (Enum: ADMIN, EDITOR)
- createdAt (DateTime)
- updatedAt (DateTime)
```

### Posts Table
```sql
- id (UUID, Primary Key)
- slug (String, Unique)
- title (String)
- content (Text) - Rich text or markdown
- excerpt (String)
- authorId (UUID, Foreign Key -> Users)
- category (String)
- tags (String[]) - Array of tags
- featuredImage (String) - URL to image
- status (Enum: DRAFT, PUBLISHED, ARCHIVED)
- publishedAt (DateTime, Nullable)
- createdAt (DateTime)
- updatedAt (DateTime)
- readingTime (Integer) - Calculated or stored
```

### Categories Table (Optional - can be enum)
```sql
- id (UUID, Primary Key)
- name (String, Unique)
- slug (String, Unique)
- description (String, Optional)
- createdAt (DateTime)
```

### Tags Table (Optional - can be array)
```sql
- id (UUID, Primary Key)
- name (String, Unique)
- slug (String, Unique)
- createdAt (DateTime)
```

## API Routes Structure

### Public API Routes
- `GET /api/posts` - Get all published posts (with pagination, filters)
- `GET /api/posts/[slug]` - Get single post by slug
- `GET /api/categories` - Get all categories
- `GET /api/tags` - Get all tags
- `GET /api/search` - Search posts

### Admin API Routes (Protected)
- `GET /api/admin/posts` - Get all posts (including drafts)
- `POST /api/admin/posts` - Create new post
- `PUT /api/admin/posts/[id]` - Update post
- `DELETE /api/admin/posts/[id]` - Delete post
- `POST /api/admin/posts/[id]/publish` - Publish post
- `POST /api/admin/upload` - Upload image
- `GET /api/admin/media` - Get all media files
- `DELETE /api/admin/media/[id]` - Delete media file
- `GET /api/admin/categories` - Manage categories
- `POST /api/admin/categories` - Create category
- `PUT /api/admin/categories/[id]` - Update category
- `DELETE /api/admin/categories/[id]` - Delete category

## File Structure

```
CursorBlogSite/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── blog/                    # Blog routes
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/              # Individual post pages
│   │       └── page.tsx
│   ├── categories/              # Category pages
│   │   └── page.tsx
│   ├── search/                  # Search page
│   │   └── page.tsx
│   ├── about/                   # About page
│   │   └── page.tsx
│   ├── admin/                   # Admin panel (protected)
│   │   ├── layout.tsx           # Admin layout with sidebar
│   │   ├── login/               # Login page
│   │   │   └── page.tsx
│   │   ├── dashboard/           # Admin dashboard
│   │   │   └── page.tsx
│   │   ├── posts/               # Post management
│   │   │   ├── page.tsx         # Posts list
│   │   │   ├── new/             # Create new post
│   │   │   │   └── page.tsx
│   │   │   └── [id]/            # Edit post
│   │   │       └── page.tsx
│   │   ├── media/               # Media library
│   │   │   └── page.tsx
│   │   └── categories/          # Category management
│   │       └── page.tsx
│   └── api/                     # API routes
│       ├── posts/
│       │   ├── route.ts         # GET all posts
│       │   └── [slug]/
│       │       └── route.ts     # GET single post
│       ├── admin/
│       │   ├── posts/
│       │   │   ├── route.ts     # GET/POST posts
│       │   │   └── [id]/
│       │   │       └── route.ts # PUT/DELETE post
│       │   ├── upload/
│       │   │   └── route.ts     # POST upload image
│       │   └── media/
│       │       ├── route.ts     # GET all media
│       │       └── [id]/
│       │           └── route.ts # DELETE media
│       └── auth/
│           └── [...nextauth]/
│               └── route.ts     # NextAuth handler
├── components/                  # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
│   ├── PostList.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── RelatedPosts.tsx
│   └── admin/                   # Admin components
│       ├── AdminLayout.tsx
│       ├── AdminSidebar.tsx
│       ├── PostEditor.tsx
│       ├── PostList.tsx
│       ├── MediaUploader.tsx
│       ├── MediaLibrary.tsx
│       └── CategoryManager.tsx
├── lib/                         # Utilities
│   ├── db.ts                   # Prisma client
│   ├── auth.ts                 # NextAuth configuration
│   ├── posts.ts                # Post fetching functions
│   ├── search.ts               # Search functionality
│   ├── utils.ts                # Helper functions
│   └── validations.ts          # Zod schemas for validation
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
│   ├── images/
│   └── favicon.ico
├── .env                        # Environment variables
├── .env.example               # Example env file
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── PLAN.md
```

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/blogdb"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Image Upload (choose one)
CLOUDINARY_URL="cloudinary://..."
# OR
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_S3_BUCKET_NAME="..."
AWS_REGION="..."
# OR
BLOB_READ_WRITE_TOKEN="..." # Vercel Blob
```

## Development Phases

### Phase 1: Foundation & Database Setup
- Set up Next.js project with TypeScript
- Configure Tailwind CSS
- Set up PostgreSQL database
- Configure Prisma and create schema
- Run initial migrations
- Set up environment variables

### Phase 2: Authentication & Admin Structure
- Install and configure NextAuth.js
- Create admin login page
- Build admin layout with sidebar navigation
- Set up protected routes middleware
- Create admin dashboard page

### Phase 3: Post Management (Admin)
- Build post list page with table/grid view
- Create post editor with rich text editor
- Implement create/edit post functionality
- Add draft/published status management
- Implement post deletion
- Add image upload functionality

### Phase 4: Public Blog Pages
- Create homepage with featured posts
- Build blog listing page with pagination
- Create individual post pages
- Add category filtering
- Implement search functionality

### Phase 5: Media & Category Management
- Build media library interface
- Implement image upload to cloud storage
- Create category/tag management pages
- Add category/tag CRUD operations

### Phase 6: Enhancement
- Add related posts feature
- Implement dark mode
- Optimize SEO (meta tags, Open Graph, structured data)
- Add RSS feed
- Implement reading time calculation
- Add post preview functionality

### Phase 7: Polish & Optimization
- Improve animations and transitions
- Optimize performance (image optimization, caching)
- Add analytics integration
- Implement error handling and validation
- Add loading states and error boundaries
- Final testing and refinement

## Admin Panel Features Detail

### Post Editor
- **Rich Text Editor**: WYSIWYG editor with formatting options
- **Metadata Fields**: Title, slug, excerpt, category, tags
- **Featured Image**: Upload and set featured image
- **Status Toggle**: Switch between draft and published
- **Auto-save**: Save drafts automatically
- **Preview**: Preview post before publishing
- **Slug Generation**: Auto-generate URL-friendly slugs from title

### Media Library
- **Upload Interface**: Drag-and-drop or file picker
- **Image Gallery**: Grid view of all uploaded images
- **Image Management**: Delete, rename, view details
- **Image Optimization**: Automatic resizing/optimization
- **Search/Filter**: Find images quickly

### Dashboard
- **Statistics**: Total posts, published posts, drafts
- **Recent Activity**: Latest posts created/edited
- **Quick Actions**: Create new post, upload image
- **Analytics**: Page views, popular posts (optional)

## Design Principles

### Visual Design
- Clean, minimalist layout focused on readability
- Calming color palette (soft blues, greens, neutrals)
- Generous whitespace
- High contrast for accessibility
- Professional typography (serif for body, sans-serif for headings)
- Modern admin panel UI (similar to WordPress, Ghost, etc.)

### User Experience
- Easy navigation for both public and admin
- Fast page loads
- Clear content hierarchy
- Accessible design (WCAG 2.1 AA)
- Smooth scrolling and transitions
- Intuitive admin interface for non-technical users

## Security Considerations

- **Authentication**: Secure password hashing (bcrypt)
- **Authorization**: Role-based access control
- **API Protection**: Verify authentication on all admin routes
- **Input Validation**: Validate all user inputs (Zod schemas)
- **SQL Injection**: Prisma handles parameterized queries
- **XSS Protection**: Sanitize rich text content
- **CSRF Protection**: NextAuth handles CSRF tokens
- **Rate Limiting**: Implement rate limiting on API routes

## Deployment Considerations

### Database Hosting Options
- **Vercel Postgres** - Integrated with Vercel
- **Supabase** - PostgreSQL with additional features
- **Railway** - Easy PostgreSQL hosting
- **AWS RDS** - Enterprise option
- **Neon** - Serverless PostgreSQL

### Image Storage Options
- **Vercel Blob** - Integrated with Vercel
- **Cloudinary** - Image optimization included
- **AWS S3** - Scalable and reliable
- **Supabase Storage** - If using Supabase

### Hosting Platform
- **Vercel** - Recommended for Next.js (easy deployment)
- **Netlify** - Alternative option
- **AWS Amplify** - Enterprise option
- **Self-hosted** - VPS or dedicated server

## Performance Goals
- Lighthouse score: 90+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Optimized images (WebP format, lazy loading)
- Database query optimization
- API response caching

## Accessibility Goals
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Accessible admin panel forms

## Future Enhancements (Optional)
- Multi-author support with author profiles
- Comments system
- Newsletter integration
- Social sharing optimization
- Advanced analytics
- Content scheduling
- SEO tools in admin panel
- Export/import functionality
- Backup and restore

