"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MenuSection() {
  const [active, setActive] = useState("coffee");

  const menuData = {
    coffee: [
      {
        name: "Espresso",
        price: "$3",
        desc: "Rich and bold single-shot coffee.",
        img: "/coffee/OIP-Picsart-BackgroundRemover.jpg",
      },
      {
        name: "Cappuccino",
        price: "$4.5",
        desc: "Espresso with steamed milk and foam.",
        img: "/coffee/Cappuccino-Picsart-BackgroundRemover.webp",
      },
      {
        name: "Latte",
        price: "$4",
        desc: "Smooth espresso blended with creamy milk.",
        img: "/coffee/Latte.webp",
      },
    ],
    drinks: [
      {
        name: "Cold Brew",
        price: "$5",
        desc: "Slow brewed cold coffee with smooth flavor.",
        img: "/coffee/coldbrew.webp",
      },
      {
        name: "Caramel Macchiato",
        price: "$5.5",
        desc: "Espresso with caramel and steamed milk.",
        img: "/coffee/pngwing.com (25).png",
      },
    ],
    breakfast: [
      {
        name: "Pancakes",
        price: "$6",
        desc: "Fluffy pancakes served with maple syrup.",
        img: "/food/pancake.png",
      },
      {
        name: "Avocado Toast",
        price: "$7",
        desc: "Toasted bread topped with fresh avocado.",
        img: "/food/avocadotoast.png",
      },
    ],
    bakery: [
      {
        name: "Butter Croissant",
        price: "$3",
        desc: "Freshly baked buttery croissant.",
        img: "/food/croissants.png",
      },
      {
        name: "Chocolate Muffin",
        price: "$3.5",
        desc: "Soft muffin filled with chocolate chips.",
        img: "/food/muffin.png",
      },
    ],
    desserts: [
      {
        name: "Chocolate Cake",
        price: "$5",
        desc: "Rich and moist chocolate cake slice.",
        img: "/food/chocolate.png",
      },
      {
        name: "Cheesecake",
        price: "$5.5",
        desc: "Creamy cheesecake with biscuit base.",
        img: "/food/pngwing.com (24).png",
      },
    ],
    snacks: [
      {
        name: "Club Sandwich",
        price: "$6",
        desc: "Triple layer chicken sandwich.",
        img: "/food/pngwing.com (23).png",
      },
      {
        name: "Chicken Wrap",
        price: "$6.5",
        desc: "Grilled chicken wrap with sauce.",
        img: "/food/chickenwrap.png",
      },
    ],
  };

  const categories = [
    { id: "coffee", name: "Coffee" },
    { id: "drinks", name: "Drinks" },
    { id: "breakfast", name: "Breakfast" },
    { id: "bakery", name: "Bakery" },
    { id: "desserts", name: "Desserts" },
    { id: "snacks", name: "Snacks" },
  ];

  /* ---------------- Smooth Scroll ---------------- */
  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 100;

      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActive(id); // instant UI update
    }
  };

  /* ---------------- Scroll Spy (FIXED) ---------------- */
  useEffect(() => {
    const sections = categories.map((cat) =>
      document.getElementById(cat.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        let visible = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = entry.target.id;
          }
        });

        if (visible) setActive(visible);
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  /* ---------------- Animations ---------------- */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-white">
      {/* MOBILE NAV */}
      <div className="md:hidden sticky top-23 z-40 bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto gap-6 px-4 py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className={`whitespace-nowrap pb-0.5 text-sm font-medium transition border-b-2
              ${
                active === cat.id
                  ? "border-[#6f4e37] text-[#6f4e37]"
                  : "border-transparent text-gray-500"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 md:py-20 py-6 flex gap-14">
        {/* SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-28 sticky top-32 h-fit hidden md:block"
        >
          <h3 className="text-lg font-semibold mb-6">Menu</h3>

          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleScroll(cat.id)}
                className={`text-sm border-l-2 pl-4 py-1 transition-all duration-300
                ${
                  active === cat.id
                    ? "border-[#6f4e37] text-[#6f4e37] font-semibold translate-x-1"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex-1">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              variants={sectionVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold Arimo">{cat.name}</h2>
                <div className="w-16 h-1 bg-[#6f4e37] mt-3"></div>
              </div>

              {/* GRID */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4"
              >
                {menuData[cat.id].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    whileHover={{ y: -8, scale: 1.03 }}
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
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between mt-6 w-full md:px-2">
                      <h3 className="text-[18px] font-semibold Arimo">
                        {item.name}
                      </h3>

                      <span className="text-lg font-semibold text-[#6f4e37]">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-3 text-[14px] md:px-2">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function MenuSection() {
//   const [active, setActive] = useState("coffee");

//   const menuData = {
//     coffee: [
//       {
//         name: "Espresso",
//         price: "$3",
//         desc: "Rich and bold single-shot coffee.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Cappuccino",
//         price: "$4.5",
//         desc: "Espresso with steamed milk and foam.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Latte",
//         price: "$4",
//         desc: "Smooth espresso blended with creamy milk.",
//         img: "/herosection.jpeg",
//       },
//     ],

//     drinks: [
//       {
//         name: "Cold Brew",
//         price: "$5",
//         desc: "Slow brewed cold coffee with smooth flavor.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Caramel Macchiato",
//         price: "$5.5",
//         desc: "Espresso with caramel and steamed milk.",
//         img: "/herosection.jpeg",
//       },
//     ],

//     breakfast: [
//       {
//         name: "Pancakes",
//         price: "$6",
//         desc: "Fluffy pancakes served with maple syrup.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Avocado Toast",
//         price: "$7",
//         desc: "Toasted bread topped with fresh avocado.",
//         img: "/herosection.jpeg",
//       },
//     ],

//     bakery: [
//       {
//         name: "Butter Croissant",
//         price: "$3",
//         desc: "Freshly baked buttery croissant.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Chocolate Muffin",
//         price: "$3.5",
//         desc: "Soft muffin filled with chocolate chips.",
//         img: "/herosection.jpeg",
//       },
//     ],

//     desserts: [
//       {
//         name: "Chocolate Cake",
//         price: "$5",
//         desc: "Rich and moist chocolate cake slice.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Cheesecake",
//         price: "$5.5",
//         desc: "Creamy cheesecake with biscuit base.",
//         img: "/herosection.jpeg",
//       },
//     ],

//     snacks: [
//       {
//         name: "Club Sandwich",
//         price: "$6",
//         desc: "Triple layer chicken sandwich.",
//         img: "/herosection.jpeg",
//       },
//       {
//         name: "Chicken Wrap",
//         price: "$6.5",
//         desc: "Grilled chicken wrap with sauce.",
//         img: "/herosection.jpeg",
//       },
//     ],
//   };

//   const categories = [
//     { id: "coffee", name: "Coffee" },
//     { id: "drinks", name: "Drinks" },
//     { id: "breakfast", name: "Breakfast" },
//     { id: "bakery", name: "Bakery" },
//     { id: "desserts", name: "Desserts" },
//     { id: "snacks", name: "Snacks" },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: "-30% 0px -60% 0px",
//       },
//     );

//     categories.forEach((cat) => {
//       const el = document.getElementById(cat.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="bg-white">
//       {/* MOBILE TOP NAV */}
//       <div className="md:hidden sticky top-23 z-40 bg-white border-b border-gray-200">
//         <div className="flex overflow-x-auto gap-6 px-4 py-3">
//           {categories.map((cat) => (
//             <a
//               key={cat.id}
//               href={`#${cat.id}`}
//               className={`whitespace-nowrap pb-0.5 text-sm font-medium transition border-b-2

//               ${
//                 active === cat.id
//                   ? "border-[#6f4e37] text-[#6f4e37]"
//                   : "border-transparent text-gray-500"
//               }

//               `}
//             >
//               {cat.name}
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-350 mx-auto px-4 md:px-6 md:py-20 py-6 flex gap-14">
//         {/* DESKTOP SIDEBAR */}
//         <div className="w-25 sticky top-32 h-fit hidden md:block">
//           <h3 className="text-lg font-semibold mb-6 Arimo">Menu</h3>

//           <div className="flex flex-col gap-3">
//             {categories.map((cat) => (
//               <a
//                 key={cat.id}
//                 href={`#${cat.id}`}
//                 className={`text-sm border-l-2 pl-4 py-1 transition

//                 ${
//                   active === cat.id
//                     ? "border-[#6f4e37] text-[#6f4e37] font-semibold"
//                     : "border-transparent text-gray-500 hover:text-black"
//                 }

//                 `}
//               >
//                 {cat.name}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* MENU CONTENT */}
//         <div className="flex-1">
//           {categories.map((cat) => (
//             <div key={cat.id} id={cat.id} className="mb-24 scroll-mt-28">
//               {/* Title */}
//               <div className="mb-10">
//                 <h2 className="text-3xl font-bold Arimo">{cat.name}</h2>

//                 <div className="w-16 h-1 bg-[#6f4e37] mt-3"></div>
//               </div>

//               {/* Items */}
//               <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4">
//                 {menuData[cat.id].map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
//                   >
//                     <div className="relative h-52 w-full">
//                       <Image
//                         src={item.img}
//                         alt={item.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <div className="md:p-5 p-3">
//                       <div className="flex justify-between items-center">
//                         <h3 className="text-[17px] font-semibold Arimo">
//                           {item.name}
//                         </h3>

//                         <span className="text-lg font-semibold text-[#6f4e37]">
//                           {item.price}
//                         </span>
//                       </div>

//                       <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
