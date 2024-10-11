import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "2023-05-15"
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.",
    date: "2023-04-22"
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "Discover the benefits of TypeScript and how it can improve your JavaScript development workflow.",
    date: "2023-03-10"
  }
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