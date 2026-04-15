"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#F9F7F5] text-gray-800 py-20 px-6"
      // variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* SVG stays same */}
               <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="60"
            fill="none"
            viewBox="0 0 533 117"
          >

            <path
              fill="#000"
              d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
            />

            <path
              fill="#000"
              fillRule="evenodd"
              d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
              clipRule="evenodd"
            />

            <path
              stroke="#000"
              d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
            />

            <path
              stroke="#000"
              d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
              clipRule="evenodd"
            />

          </svg>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Savor every sip. Our coffee is crafted with love, roasted with care,
            and served with passion.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 uppercase text-sm">Explore</h3>
          <ul className="flex flex-col gap-3">
            {["Home", "About", "Menu", "Gallery", "Blog", "Contact"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="hover:text-[#c77f4c] transition"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Hours */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 uppercase text-sm">Hours</h3>
          <ul className="text-gray-600 text-sm flex flex-col gap-1">
            <li>Mon - Fri: 7am - 8pm</li>
            <li>Sat: 8am - 9pm</li>
            <li>Sun: 8am - 6pm</li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 uppercase text-sm">Connect</h3>

          <div className="flex gap-4 mb-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-[#c77f4c] transition text-lg"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            Email:{" "}
            <a
              href="mailto:hello@brewhaven.com"
              className="hover:text-[#c77f4c]"
            >
              hello@brewhaven.com
            </a>
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Phone: +123 456 7890
          </p>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Brew Haven. Crafted with passion ☕
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import { FaInstagram, FaFacebookF, FaTwitter } from "lucide-react";
// import { Instagram, Facebook, Twitter } from "lucide-react";
// const Footer = () => {
//   return (
//     <footer className="bg-[#F9F7F5] text-gray-800 py-20 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
//         {/* Logo & Tagline */}
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center gap-3">
//             {
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="180"
//                 height="60"
//                 fill="none"
//                 viewBox="0 0 533 117"
//               >
//                 <path
//                   fill="#000"
//                   d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
//                 />
//                 <path
//                   fill="#000"
//                   fillRule="evenodd"
//                   d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
//                   clipRule="evenodd"
//                 />
//                 <path
//                   stroke="#000"
//                   d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
//                 />
//                 <path
//                   stroke="#000"
//                   d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             }
//           </div>
//           <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
//             Savor every sip. Our coffee is crafted with love, roasted with care,
//             and served with passion.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h3 className="text-gray-800 font-semibold mb-4 uppercase tracking-wide text-sm">
//             Explore
//           </h3>
//           <ul className="flex flex-col gap-3">
//             <li>
//               <Link href="/" className="hover:text-[#c77f4c] transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-[#c77f4c] transition">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/menu" className="hover:text-[#c77f4c] transition">
//                 Menu
//               </Link>
//             </li>
//             <li>
//               <Link href="/gallery" className="hover:text-[#c77f4c] transition">
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog" className="hover:text-[#c77f4c] transition">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-[#c77f4c] transition">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Opening Hours */}
//         <div>
//           <h3 className="text-gray-800 font-semibold mb-4 uppercase tracking-wide text-sm">
//             Hours
//           </h3>
//           <ul className="text-gray-600 text-sm flex flex-col gap-1">
//             <li>Mon - Fri: 7am - 8pm</li>
//             <li>Sat: 8am - 9pm</li>
//             <li>Sun: 8am - 6pm</li>
//           </ul>
//         </div>

//         {/* Social & Contact */}
//         <div>
//           <h3 className="text-gray-800 font-semibold mb-4 uppercase tracking-wide text-sm">
//             Connect
//           </h3>
//           <div className="flex gap-4 mb-4">
//             <a
//               href="#"
//               className="text-gray-600 hover:text-[#c77f4c] transition text-lg"
//             >
//               <Instagram />
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-[#c77f4c] transition text-lg"
//             >
//               <Facebook />
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-[#c77f4c] transition text-lg"
//             >
//               <Twitter />
//             </a>
//           </div>
//           <p className="text-gray-600 text-sm">
//             Email:{" "}
//             <a
//               href="mailto:hello@brewhaven.com"
//               className="hover:text-[#c77f4c]"
//             >
//               hello@brewhaven.com
//             </a>
//           </p>
//           <p className="text-gray-600 text-sm mt-1">Phone: +123 456 7890</p>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} Brew Haven. Crafted with passion ☕
//       </div>
//     </footer>
//   );
// };

// export default Footer;
