"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { motion } from "framer-motion";

export default function BlogPage() {
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // smooth animation
  });
};
  return (
    <div className="w-full h-full bg-white">
      <section className="max-w-7xl mx-auto px-6 md:pb-20 md:pt-12 py-6">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="md:text-5xl text-4xl font-bold Arimo">
            Our Blog
          </h2>

          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
            Coffee stories, tips and inspiration.
          </p>

          <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-6"></div>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
               onClick={scrollToTop}
              key={blog.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08, // 🔥 natural stagger
              }}
              whileHover={{ y: -6 }}
              className="will-change-transform"
            >
              <Link href={`/Blog/${blog.slug}`} className="group">

                {/* 🔥 IMAGE */}
                <div className="relative h-60 rounded-xl overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* 🔥 CONTENT */}
                <p className="text-sm text-gray-400 mt-4">
                  {blog.date}
                </p>

                <h3 className="text-xl font-semibold mt-2 group-hover:text-[#6f4e37] transition">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {blog.desc}
                </p>

              </Link>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}
// import Image from "next/image";
// import Link from "next/link";
// import { blogs } from "@/lib/blogs";

// export default function BlogPage() {
//   return (
//     <div className="w-full h-full bg-white">
//       <section className="max-w-7xl mx-auto px-6 md:pb-20 md:pt-12 py-6 ">
//         <div className="mb-14 text-center">
//           <h2 className="md:text-5xl text-4xl font-bold Arimo">Our Blog</h2>
//           <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
//             Coffee stories, tips and inspiration.
//           </p>

//           <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-6"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogs.map((blog) => (
//             <Link key={blog.slug} href={`/Blog/${blog.slug}`} className="group">
//               <div className="relative h-60 rounded-xl overflow-hidden">
//                 <Image
//                   src={blog.img}
//                   alt={blog.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition duration-500 "
//                 />
//               </div>

//               <p className="text-sm text-gray-400 mt-4">{blog.date}</p>

//               <h3 className="text-xl font-semibold mt-2 group-hover:text-[#6f4e37]">
//                 {blog.title}
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">{blog.desc}</p>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
