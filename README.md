# Psychology Blog Site

A modern, responsive blog site built with Next.js, TypeScript, and Tailwind CSS, dedicated to sharing psychology content.

## Features

- 📝 Markdown-based blog posts
- 🔍 Full-text search functionality
- 🏷️ Category and tag filtering
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js SSR/SSG
- ♿ Accessible design
- 🔎 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - Reusable React components
- `content/posts/` - Markdown blog posts
- `lib/` - Utility functions and helpers
- `public/` - Static assets (images, favicon, etc.)

## Adding Blog Posts

Create a new markdown file in `content/posts/` with the following frontmatter:

```yaml
---
title: "Your Post Title"
date: "2024-01-15"
author: "Author Name"
category: "Cognitive Psychology"
tags: ["tag1", "tag2"]
excerpt: "Brief description"
image: "/images/post-image.jpg"
readingTime: 5
---

Your post content here...
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

