import { blogs } from "@/lib/blogs";
import BlogPostClient from "@/components/blog/BlogPostClient";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-20 text-center">Blog not found</div>;
  }

  return (
    <div className="w-full h-full bg-white">
      <BlogPostClient blog={blog} />
    </div>
  );
}