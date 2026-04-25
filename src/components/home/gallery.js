"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Gallery = () => {
  return (
    <section className="md:mb-12 md:py-20 py-8 md:px-6 px-2 bg-white ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16 flex flex-col  items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-gray-500"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl md:text-5xl Arimo max-w-125 font-semibold  Arimo leading-tight text-center"
          >
            Moments at Our Café
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-600 leading-relaxed max-w-162.5"
          >
            Our skilled baristas craft every cup with passion, precision, and a
            deep appreciation for great coffee, carefully preparing each drink
            to deliver a rich and memorable experience.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 grid-rows-6 gap-2 md:grid-cols-3 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-4 xl:h-[90vh] md:h-[75vh] h-[90vh]">
          {/* Div 1 */}
          <motion.div
            initial={{ y: 8 , opacity:0.5 }}
            whileInView={{ y: 0 , opacity:1 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="row-span-3 min-h-28 rounded-lg  flex items-center justify-center  md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 xl:col-span-2 xl:row-span-2"
          >
            {/* <strong>Div 1</strong> */}
            <Image
              src="/gallery/5.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Div 2 */}
          <motion.div
            initial={{ y: 8 , opacity:0.5 }}
            whileInView={{ y: 0 , opacity:1 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="col-start-1 row-start-4 min-h-20 rounded-lg flex items-center justify-center  md:col-start-3 md:row-start-1 xl:col-start-3 xl:row-start-1"
          >
            <Image
              src="/gallery/6.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Div 3 */}
          <motion.div   initial={{ y: 8 , opacity:0.5 }}
          
          viewport={{ once: true, amount: 0.3 }}
            whileInView={{ y: 0 , opacity:1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="row-span-2 col-start-2 row-start-3 min-h-24 rounded-lg  flex items-center justify-center  md:row-span-2 md:col-start-3 md:row-start-2 xl:col-start-1 xl:row-start-3 xl:row-end-3"
          >
            <Image
              src="/gallery/7.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Div 4 */}
          <motion.div   initial={{ y: 8 , opacity:0.5 }}
          
          viewport={{ once: true, amount: 0.3 }}
            whileInView={{ y: 0 , opacity:1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="row-span-2 col-start-1 row-start-5 min-h-20 rounded-lg  flex items-center justify-center  md:col-start-3 md:row-start-4 md:row-end-5  xl:col-start-1 xl:row-start-4 xl:row-end-5 "
          >
            <Image
              src="/gallery/9.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          {/* <motion.div
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="row-span-2 col-start-1 row-start-5 min-h-20 rounded-lg  flex items-center justify-center bg-slate-400 md:col-start-3 md:row-start-4  xl:col-start-1 xl:row-start-4 "
          >
            <Image
              src="/gallery/9.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div> */}

          {/* Div 5 */}
          <motion.div   initial={{ y: 8 , opacity:0.5 }}
            whileInView={{ y: 0 , opacity:1 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="row-span-2 col-start-2 row-start-5 min-h-20 rounded-lg  flex items-center justify-center  md:col-start-2 md:row-start-3 md:row-end-3 xl:row-span-2 xl:col-start-3 xl:row-start-2"
          >
            <Image
              src="/gallery/9.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Div 6 */}
          <motion.div   initial={{ y: 8 , opacity:0.5 }}
          
          viewport={{ once: true, amount: 0.3 }}
            whileInView={{ y: 0 , opacity:1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="col-start-2 row-start-2 min-h-20 rounded-lg  flex items-center justify-center  md:col-start-1 md:row-start-3 xl:col-start-3 xl:row-start-4"
          >
            <Image
              src="/gallery/10.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Div 7 */}
          <motion.div   initial={{ y: 8 , opacity:0.5 }}
          
          viewport={{ once: true, amount: 0.3 }}
            whileInView={{ y: 0 , opacity:1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="col-start-2 row-start-1 min-h-24 rounded-lg flex items-center justify-center  md:col-span-2 md:col-start-1 md:row-start-4 xl:row-span-2 xl:col-start-2 xl:col-end-2 xl:row-start-3"
          >
            <Image
              src="/gallery/8.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
