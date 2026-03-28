"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open daily from 8:00 AM to 10:00 PM."
    },
    {
      question: "Do you offer takeaway?",
      answer: "Yes, all our drinks and food items are available for takeaway."
    },
    {
      question: "Do you provide free WiFi?",
      answer: "Yes! We provide high-speed WiFi for all our customers."
    },
    {
      question: "Do you have vegan options?",
      answer: "Yes, we offer a variety of vegan-friendly drinks and pastries."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto md:pb-20 pb-8 px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 Arimo">
            Our Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Everything we do is guided by our passion for exceptional coffee,
            sustainable practices, and creating a welcoming space where
            community and craftsmanship come together.
          </p>
        </div>

      <div className="space-y-4">

        {faqs.map((faq, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm"
            >

              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-6"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                </motion.div>

              </button>

              <AnimatePresence initial={false}>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          );
        })}

      </div>

    </section>
  );
}