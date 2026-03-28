"use client";
import React from "react";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <section className="bg-white py-24 ">
      <div className="max-w-6xl mx-auto md:px-12 px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-gray-500"
          >
            Visit Us
          </motion.p>
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl font-semibold mt-2 Arimo">
            Come Enjoy a Cup of Coffee
          </motion.h2>
          <motion.p   initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }} className="text-gray-600 mt-4 max-w-xl mx-auto">
            Stop by our café and experience freshly brewed coffee in a warm,
            welcoming atmosphere.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Address */}
          <motion.div    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }} className="flex flex-col items-center gap-4">
            <MapPin className="w-8 h-8 text-[#c48a3a]" />
            <h3 className="font-semibold text-lg Arimo">Address</h3>
            <p className="text-gray-600">
              123 Coffee Street <br />
              Downtown, Karachi
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.35, duration: 0.6 }} className="flex flex-col items-center gap-4">
            <Clock className="w-8 h-8 text-[#c48a3a]" />
            <h3 className="font-semibold text-lg Arimo">Opening Hours</h3>
            <p className="text-gray-600">
              Mon – Fri: 8AM – 8PM <br />
              Sat – Sun: 9AM – 10PM
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div   initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6 }} className="flex flex-col items-center gap-4">
            <Phone className="w-8 h-8 text-[#c48a3a]" />
            <h3 className="font-semibold text-lg Arimo">Contact</h3>
            <p className="text-gray-600">+92 300 1234567</p>

            <div className="flex gap-4 mt-2">
              <Instagram className="w-5 h-5 text-gray-700 cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-700 cursor-pointer" />
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
      </div>
      <div className="mt-20 w-full md:h-[520px] h-[300px]  overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=ARVACI%20coffee%20340%20W%2037th%20St%20New%20York&t=h&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
