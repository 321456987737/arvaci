"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="md:py-20 py-6 md:px-12 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 w-full flex flex-col items-center justify-center text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-gray-500"
          >
            About Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl Arimo max-w-125 font-semibold mb-8 leading-tight"
          >
            Brewing coffee with passion and tradition
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 leading-relaxed max-w-162.5"
          >
            Our coffee shop was built for people who appreciate the beauty
            of a perfectly brewed cup. From carefully sourced beans to
            handcrafted drinks, every detail is designed to create a warm
            and memorable experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            
          viewport={{ once: true, amount: 0.3 }}
            className="mt-4 text-gray-600 max-w-135"
          >
            Whether you are starting your morning or relaxing in the afternoon,
            we invite you to slow down and enjoy the moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/About">
              <button className="mt-6 px-6 py-3 cursor-pointer border text-black rounded-md transition hover:scale-105">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-2/5 w-full"
        >
          <div className="relative w-full h-[350px] md:h-screen rounded-3xl overflow-hidden">
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src="/about/4.png"
                alt="coffee shop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;

