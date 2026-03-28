"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    "/herosection.jpeg",
    "/herosection.jpeg",
    "/herosection.jpeg",
    "/herosection.jpeg",
    "/herosection.jpeg",
    "/herosection.jpeg",
    "/herosection.jpeg",
    "/herosection.jpeg",
  ];

  /* 🔥 Animations */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const section = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-white md:py-16 py-8"
    >
      <div className="max-w-7xl mx-auto md:px-6 px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="md:text-5xl text-4xl font-bold Arimo">
            Our Gallery
          </h2>

          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
            A glimpse into our cozy café, handcrafted drinks,
            and delicious creations.
          </p>

          <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-6"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-2"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setActiveImage(img)}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <Image
                  src={img}
                  alt="gallery"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/30"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 MODAL WITH ANIMATION */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[70vh]"
            >
              <Image
                src={activeImage}
                alt="preview"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";

// export default function GallerySection() {

//   const [activeImage, setActiveImage] = useState(null);

//   const images = [
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//     "/herosection.jpeg",
//   ];

//   return (
//     <section className="w-full bg-white md:py-16 py-8">

//       <div className="max-w-7xl mx-auto md:px-6 px-2">

//         {/* Section Header */}
//         <div className="mb-14 text-center">
//           <h2 className="md:text-5xl text-4xl font-bold Arimo">Our Gallery</h2>
//           <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
//             A glimpse into our cozy café, handcrafted drinks,
//             and delicious creations.
//           </p>

//           <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-6"></div>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-2">

//           {images.map((img, index) => (

//             <div
//               key={index}
//               className="relative h-64 overflow-hidden rounded-xl cursor-pointer group"
//               onClick={() => setActiveImage(img)}
//             >

//               <Image
//                 src={img}
//                 alt="gallery"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

//             </div>

//           ))}

//         </div>
//       </div>

//       {/* Image Modal */}
//       {activeImage && (

//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">

//           <button
//             onClick={() => setActiveImage(null)}
//             className="absolute top-6 right-6 text-white"
//           >
//             <X size={32} />
//           </button>

//           <div className="relative w-full max-w-4xl h-[70vh]">

//             <Image
//               src={activeImage}
//               alt="preview"
//               fill
//               className="object-contain rounded-lg"
//             />

//           </div>

//         </div>

//       )}
//     </section>
//   );
// }