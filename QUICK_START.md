# Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding New Blog Posts

1. Create a new markdown file in `content/posts/` with a `.md` extension
2. Add frontmatter at the top of the file:

```yaml
---
title: "Your Post Title"
date: "2024-01-15"
author: "Author Name"
category: "Cognitive Psychology"
tags: ["tag1", "tag2"]
excerpt: "Brief description of your post"
image: "/images/your-image.jpg"  # Optional
readingTime: 5
---

Your post content here in markdown format...
```

3. Save the file and it will automatically appear on your blog!

## Project Structure

```
├── app/                    # Next.js pages and layouts
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog routes
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Individual posts
│   ├── categories/        # Categories page
│   └── about/             # About page
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
│   └── CategoryFilter.tsx
├── content/posts/         # Your blog posts (markdown)
├── lib/                   # Utility functions
│   └── posts.ts          # Post fetching and parsing
└── public/                # Static assets
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Styling
Modify `app/globals.css` for global styles and typography.

### Components
Update components in the `components/` directory to match your design preferences.

## Next Steps

1. Add your own blog posts to `content/posts/`
2. Customize the design and branding
3. Add images to `public/images/`
4. Configure SEO settings in `app/layout.tsx`
5. Deploy to Vercel, Netlify, or your preferred hosting platform

## Features to Implement

- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] RSS feed generation
- [ ] Related posts algorithm
- [ ] Social sharing buttons
- [ ] Comments system
- [ ] Analytics integration

See `PLAN.md` for the complete project roadmap.

