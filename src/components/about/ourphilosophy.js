"use client";

import { Coffee, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function CafeValues() {

  const values = [
    {
      icon: Coffee,
      title: "Quality Beans",
      desc: "We carefully source premium coffee beans from trusted farms to ensure every cup delivers rich flavor and exceptional quality."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Our coffee supports responsible farming and sustainable practices that protect the environment and future generations."
    },
    {
      icon: Users,
      title: "Community",
      desc: "More than a café, we are a welcoming space where people gather, connect, and share meaningful moments."
    }
  ];

  // 🔥 Heading animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // 🔥 Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 🔥 Card animation
  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="md:py-20 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 Arimo">
            Our Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Everything we do is guided by our passion for exceptional coffee,
            sustainable practices, and creating a welcoming space where
            community and craftsmanship come together.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {values.map((itemData, i) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm text-center"
              >

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-5"
                >
                  <div className="p-4 bg-[#8b5e3c]/10 rounded-full">
                    <Icon size={28} className="text-[#8b5e3c]" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">
                  {itemData.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {itemData.desc}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
// import { Coffee, Leaf, Users } from "lucide-react";

// export default function CafeValues() {

//   const values = [
//     {
//       icon: Coffee,
//       title: "Quality Beans",
//       desc: "We carefully source premium coffee beans from trusted farms to ensure every cup delivers rich flavor and exceptional quality."
//     },
//     {
//       icon: Leaf,
//       title: "Sustainability",
//       desc: "Our coffee supports responsible farming and sustainable practices that protect the environment and future generations."
//     },
//     {
//       icon: Users,
//       title: "Community",
//       desc: "More than a café, we are a welcoming space where people gather, connect, and share meaningful moments."
//     }
//   ];

//   return (
//     <section className="md:py-20 py-8 bg-white">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-4xl md:text-5xl font-semibold mb-4 Arimo">
//             Our Philosophy
//           </h2>

//           <p className="text-gray-600 leading-relaxed">
//             Everything we do is guided by our passion for exceptional coffee,
//             sustainable practices, and creating a welcoming space where
//             community and craftsmanship come together.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {values.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={i}
//                 className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 text-center"
//               >

//                 <div className="flex justify-center mb-5">
//                   <div className="p-4 bg-[#8b5e3c]/10 rounded-full">
//                     <Icon size={28} className="text-[#8b5e3c]" />
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed text-sm">
//                   {item.desc}
//                 </p>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }