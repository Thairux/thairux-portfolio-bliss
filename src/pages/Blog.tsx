import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

// To add a new blog post:
// 1. Create a new object in the `blogPosts` array below
// 2. Fill in the details: id, title, excerpt, and date
// 3. The new blog post will automatically appear on the page
// 4. Create a new file in the `src/content/blog` directory with the same name as the blog post's id (e.g., `1.md` for id: 1)
// 5. Write your full blog post content in Markdown format in the new file
// 6. Update the `blogPosts` array in the BlogPost.tsx component with the full content
const blogPosts: BlogPost[] = [
  // Example blog post (uncomment and modify as needed):
  // {
  //   id: 1,
  //   title: "My First Blog Post",
  //   excerpt: "This is a short preview of my amazing blog post...",
  //   date: "2023-03-15"
  // },
  // Add more blog posts here...
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <Link to={`/blog/${post.id}`} className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;