"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Mobile Toggle can go here */}
            <div className="flex lg:hidden"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="px-4 text-base sm:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Smart email campaign builder, made for Developers
            </motion.h1>

            <motion.p
              className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Turn your visitors into profitable{" "}
              <span className="relative inline-flex">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 absolute inset-0"></span>
                <span className="relative">business</span>
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="px-4 sm:px-0 mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition"
              >
                Get more customers
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl hover:bg-gray-900 hover:text-white transition"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18 13.426C6.86 14.392 5 13.448 5 11.811V5.439C5 3.802 6.86 2.858 8.18 3.824l4.36 3.187c1.093.799 1.093 2.43 0 3.229L8.18 13.426Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              60 Days free trial · No credit card required
            </motion.p>
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div
          className="pb-12 bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-6xl">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 absolute inset-0">
                </span>
                <img
                  className="w-full h-auto object-contain transform scale-105 sm:scale-110 rounded-3xl"
                  src="./imgDash.png"
                  alt="Hero Illustration"
                />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
