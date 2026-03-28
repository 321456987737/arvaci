"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const drinks = [
  {
    name: "Espresso",
    desc: "Strong and bold shot of pure coffee flavor.",
    price: "$3.50",
    img: "/coffee/OIP-Picsart-BackgroundRemover.jpg",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk and foam.",
    price: "$4.50",
    img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
  },
  {
    name: "Espresso",
    desc: "Strong and bold shot of pure coffee flavor.",
    price: "$3.50",
    img: "/coffee/OIP-Picsart-BackgroundRemover.jpg",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk and foam.",
    price: "$4.50",
    img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
  },
  {
    name: "Cold Brew",
    desc: "Slow brewed coffee served chilled and refreshing.",
    price: "$4.00",
    img: "/coffee/coldbrew.webp",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk and foam.",
    price: "$4.50",
    img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
  },
  {
    name: "Latte",
    desc: "Smooth espresso blended with creamy milk.",
    price: "$4.75",
    img: "/coffee/latte.webp",
  },
  {
    name: "Cold Brew",
    desc: "Slow brewed coffee served chilled and refreshing.",
    price: "$4.00",
    img: "/coffee/coldbrew.webp",
  },
];

export default function Menusection() {

  // 🔥 Parent stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 🔥 Card animation
  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full md:py-20 py-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl Arimo font-extrabold text-[#3a2c24] mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-gray-600 text-sm">
            Explore our most popular items — crafted with care to delight every time.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4"
        >
          {drinks.map((drink, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group lg:rounded-3xl rounded-2xl md:p-6 p-3 bg-[#faf7f4]"
            >

              {/* Image */}
              <div className="relative flex justify-center items-center mb-6 h-[150px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={drink.img}
                    alt={drink.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between mt-6 w-full md:px-2">
                <h3 className="text-[18px] font-semibold Arimo">
                  {drink.name}
                </h3>

                <span className="text-lg font-semibold text-[#6f4e37]">
                  {drink.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-3 text-[14px] md:px-2">
                {drink.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";

// const drinks = [
//   {
//     name: "Espresso",
//     desc: "Strong and bold shot of pure coffee flavor.",
//     price: "$3.50",
//     img: "/coffee/OIP-Picsart-BackgroundRemover.jpg",
//   },
//   {
//      name: "Cappuccino",
//      desc: "Rich espresso with steamed milk and foam.",
//      price: "$4.50",
//      img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
//    },
//    {
//      name: "Espresso",
//      desc: "Strong and bold shot of pure coffee flavor.",
//      price: "$3.50",
//      img: "/coffee/OIP-Picsart-BackgroundRemover.jpg",
//    },
//   {
//      name: "Cappuccino",
//      desc: "Rich espresso with steamed milk and foam.",
//     price: "$4.50",
//     img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
//    },
//   {
//     name: "Cold Brew",
//     desc: "Slow brewed coffee served chilled and refreshing.",
//     price: "$4.00",
//     img: "/coffee/coldbrew.webp",
//    },
//    {
//      name: "Cappuccino",
//      desc: "Rich espresso with steamed milk and foam.",
//      price: "$4.50",
//      img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
//    },
//   {
//      name: "Latte",
//     desc: "Smooth espresso blended with creamy milk.",
//     price: "$4.75",
//     img: "/coffee/latte.webp",
//   },
//   {
//     name: "Cold Brew",
//     desc: "Slow brewed coffee served chilled and refreshing.",
//     price: "$4.00",
//     img: "/coffee/coldbrew.webp",
//   },
// ];

// export default function Menusection() {
//   return (
//     <section className="w-full md:py-20 py-8     bg-[#ffffff]">
//       <div className="max-w-7xl mx-auto  px-6">
         
//         {/* Heading */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-4xl md:text-5xl Arimo font-extrabold text-[#3a2c24] mb-4">
//             Our Menu Highlights
//           </h2>
//           <p className="text-gray-600 text-sm">
//             Explore our most popular items — crafted with care to delight every time.
//           </p>
//         </div>

//         {/* Products */}
//         <div className="grid  grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4">
//           {drinks.map((drink, index) => (
//             <div
//               key={index}
//               className="group  rounded-3xl md:p-6 p-2  transition duration-300"
//             >
//               {/* Image */}
//               <div className="relative flex justify-center items-center mb-6 h-[150px]">
//                 <Image
//                   src={drink.img}
//                   alt={drink.name}
//                   fill
//                   className="object-contain group-hover:scale-110 transition duration-300"
//                 />
//               </div>

//               {/* Info */}
//               <div className="flex items-center justify-between mt-6 w-full md:px-2">
//               <h3 className="text-[18px] font-semibold text-center Arimo">
//                 {drink.name}
//               </h3>
//                 <span className="text-lg font-semibold text-[#6f4e37]">
//                   {drink.price}
//                 </span>

//               </div>

//               <p className="text-gray-500 text-sm mt-3 text-[14px] md:px-2">
//                 {drink.desc}
//               </p>

//               {/* Price + Button */}
//             </div>
//           ))}
//         </div>
//         </div>
//     </section>
//   );
// }