"use client";

import Image from "next/image";
import { Coffee, RockingChair, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export default function CafeExperienceProfessional() {

  const sections = [
    {
      title: "Cozy Corners",
      desc: "Warm lighting, soft chairs, and aromatic coffee for a relaxing vibe.",
      img: "/herosection.jpeg",
      icon: RockingChair,
      reverse: false
    },
    {
      title: "Work-Friendly",
      desc: "Fast Wi-Fi, power outlets, and calm background music make it perfect for focus.",
      img: "/1.webp",
      icon: Laptop,
      reverse: true
    },
    {
      title: "Interior Design",
      desc: "Natural textures, curated décor, and stylish touches throughout the café.",
      img: "/2.webp",
      icon: Coffee,
      reverse: false
    },
    {
      title: "Perfect Meetings",
      desc: "Private corners and communal tables for collaboration or quiet chats.",
      img: "/3.webp",
      icon: RockingChair,
      reverse: true
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

  return (
    <section className="md:py-20 py-8 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex justify-center items-center flex-col text-center px-3 mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-center Arimo max-w-125 font-semibold mt-3 leading-tight">
            The Café Experience
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-162.5 mx-auto">
            Every corner of our café is thoughtfully designed for relaxation, connection, and creativity.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((sec, i) => {
            const Icon = sec.icon;

            // 🔥 dynamic directions
            const imageVariant = {
              hidden: { opacity: 0, x: sec.reverse ? 80 : -80 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7 }
              }
            };

            const textVariant = {
              hidden: { opacity: 0, x: sec.reverse ? -80 : 80 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 0.2 }
              }
            };

            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-16 ${
                  sec.reverse ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Image */}
                <motion.div
                  variants={imageVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative md:w-1/2 w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={sec.img}
                    alt={sec.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Text Card */}
                <motion.div
                  variants={textVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="md:w-1/2 bg-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col gap-4"
                >

                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={22} className="text-[#8b5e3c]" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-[#3a2c24]">
                      {sec.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-base md:text-lg">
                    {sec.desc}
                  </p>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
// import Image from "next/image";
// import { Coffee, RockingChair, Laptop } from "lucide-react";

// export default function CafeExperienceProfessional() {
//   const sections = [
//     {
//       title: "Cozy Corners",
//       desc: "Warm lighting, soft chairs, and aromatic coffee for a relaxing vibe.",
//       img: "/herosection.jpeg",
//       icon: RockingChair,
//       reverse: false
//     },
//     {
//       title: "Work-Friendly",
//       desc: "Fast Wi-Fi, power outlets, and calm background music make it perfect for focus.",
//       img: "/herosection.jpeg",
//       icon: Laptop,
//       reverse: true
//     },
//     {
//       title: "Interior Design",
//       desc: "Natural textures, curated décor, and stylish touches throughout the café.",
//       img: "/herosection.jpeg",
//       icon: Coffee,
//       reverse: false
//     },
//     {
//       title: "Perfect Meetings",
//       desc: "Private corners and communal tables for collaboration or quiet chats.",
//       img: "/herosection.jpeg",
//       icon: RockingChair,
//       reverse: true
//     }
//   ];

//   return (
//     <section className="md:py-20 py-8 bg-[#faf7f4]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//           <div className=" w-full items-center flex  justify-center flex-col text-center px-3 mb-20 " >

//           <h2 className="text-4xl md:text-5xl Arimo max-w-125 font-semibold mt-3 Arimo leading-tight">
//                 The Café Experience
//           </h2>

//           <p className="mt-4 text-gray-600 leading-relaxed max-w-162.5">
//          Every corner of our café is thoughtfully designed for relaxation, connection, and creativity. </p>
//         </div>

    

//         {/* Sections */}
//         <div className="space-y-24">
//           {sections.map((sec, i) => {
//             const Icon = sec.icon;
//             return (
//               <div
//                 key={i}
//                 className={`flex flex-col md:flex-row items-center gap-6 md:gap-16 ${
//                   sec.reverse ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Image */}
//                 <div className="relative md:w-1/2 w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
//                   <Image
//                     src={sec.img}
//                     alt={sec.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Text Card */}
//                 <div className="md:w-1/2 bg-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300">
//                   <div className="flex items-center gap-4">
//                     <Icon size={22} className="text-[#8b5e3c]" />
//                     <h3 className="text-2xl md:text-3xl font-semibold text-[#3a2c24]">
//                       {sec.title}
//                     </h3>
//                   </div>
//                   <p className="text-gray-700 text-base md:text-lg">{sec.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }