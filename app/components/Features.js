"use client";
import React from "react";
import { motion } from "framer-motion";
import { Upload, MessageSquare, Brain } from "lucide-react";

const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const features = [
    {
      icon: <Upload className="w-8 h-8 text-gray-700" />,
      title: "Effortless PDF Upload",
      description:
        "Simply drag and drop your documents. Our AI prepares them instantly for interactive Q&A.",
    },
    {
      icon: <Brain className="w-8 h-8 text-gray-700" />,
      title: "AI-Powered Insights",
      description:
        "No more scrolling through endless pages. Ask questions and get precise, context-aware answers in seconds.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gray-700" />,
      title: "Chat with Your Files",
      description:
        "Turn your PDFs into conversations. Engage with your documents like chatting with an expert assistant.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Why Choose Ask to Doc?
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600">
            Built to transform static documents into smart, interactive knowledge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="p-6 text-left bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
