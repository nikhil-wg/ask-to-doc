"use client";

import React from "react";
import { motion } from "framer-motion";

const HowToUse = () => {
  // Variants for container (stagger effect)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for each step card
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-10 bg-white sm:py-16 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={item}
        >
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does Ask to Doc work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Get started in minutes — upload your documents and turn them into
            smart conversations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-12 lg:mt-20">
          {/* Dotted line illustration */}
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Steps connector"
            />
          </div>

          <motion.div
            className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"
            variants={container}
          >
            {/* Step 1 */}
            <motion.div variants={item}>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">1</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Create your free account
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Sign up securely with Clerk authentication to access your own
                document space.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={item}>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">2</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Upload your PDFs
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Drag and drop your reports, research papers, or eBooks — AI
                instantly prepares them for Q&A.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={item}>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">3</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Chat with your documents
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Ask any question and get instant, accurate answers without
                scrolling through hundreds of pages.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowToUse;
