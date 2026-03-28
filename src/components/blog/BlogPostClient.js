"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/lib/blogs";

export default function BlogPostClient({ blog }) {

  const relatedBlogs = blog.relatedBlogs
    ? blogs.filter((b) => blog.relatedBlogs.includes(b.slug))
    : blogs.filter(
        (b) =>
          b.slug !== blog.slug &&
          b.category === blog.category
      );

  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="max-w-5xl mx-auto px-6 pb-10 text-white">

            <div className="text-sm opacity-80 flex gap-3">
              <span>{blog.category}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mt-2 Arimo">
              {blog.title}
            </h1>

            <p className="mt-2 text-sm opacity-80">
              By {blog.author}
            </p>

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          <p className="text-gray-500 text-lg mb-6">
            {blog.desc}
          </p>

          <div className="text-gray-700 leading-7 whitespace-pre-line">
            {blog.content}
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-8">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block space-y-6">

          <div className="p-4 border rounded-xl">
            <h3 className="font-semibold mb-2 Arimo">Blog Info</h3>
            <p className="text-sm text-gray-500">
              Category: {blog.category}
            </p>
            <p className="text-sm text-gray-500">
              Read Time: {blog.readTime}
            </p>
            <p className="text-sm text-gray-500">
              Author: {blog.author}
            </p>
          </div>

        </div>
      </div>

      {/* RELATED BLOGS */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6 Arimo">
          Related Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {relatedBlogs.map((item) => (
            <Link key={item.slug} href={`/Blog/${item.slug}`}>
              <div className="border border-gray-300 rounded-xl overflow-hidden group">
                <div className="relative h-40">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold Arimo">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}