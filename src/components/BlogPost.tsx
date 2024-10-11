import React from 'react';
import { useParams, Link } from 'react-router-dom';

// To add a new blog post:
// 1. Create a new object in the `blogPosts` array in the Blog.tsx file
// 2. Create a new file in the `src/content/blog` directory with the same name as the blog post's id (e.g., `1.md` for id: 1)
// 3. Write your blog post content in Markdown format in the new file
// 4. The new blog post will automatically appear on the blog page and be accessible via its individual route

interface BlogPostContent {
  id: number;
  title: string;
  date: string;
  content: string;
}

const blogPosts: BlogPostContent[] = [
  // Example blog post (uncomment and modify as needed):
  // {
  //   id: 1,
  //   title: "My First Blog Post",
  //   date: "2023-03-15",
  //   content: "This is the full content of my amazing blog post..."
  // },
  // Add more blog posts here...
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link to="/blog" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">&larr; Back to Blog</Link>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1>{post.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
};

export default BlogPost;