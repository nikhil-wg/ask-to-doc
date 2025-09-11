"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small tagline */}
            <motion.h1
              className="px-4 text-base sm:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              AI-powered document assistant, built for productivity
            </motion.h1>

            {/* Main headline */}
            <motion.p
              className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Turn your PDFs into{" "}
              <span className="relative inline-flex">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 absolute inset-0"></span>
                <span className="relative">instant answers</span>
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="px-4 sm:px-0 mt-9 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition"
              >
                Upload your first PDF
              </a>
              <button
                onClick={() => setIsDemoOpen(true)}
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
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Illustration (clickable) */}
        <motion.div
          className="pb-12 bg-gray-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div
              className="mb-10 relative mx-auto max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl cursor-pointer"
              onClick={() => setIsDemoOpen(true)}
            >
              <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-3xl opacity-30"></span>
              <img
                className="relative w-full h-auto object-contain transform scale-105 sm:scale-110 rounded-3xl"
                src="./imgDash.png"
                alt="Ask to Doc Dashboard"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal for Demo Video */}
      <AnimatePresence>
        {isDemoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black"
                onClick={() => setIsDemoOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Local Video */}
              <div className="aspect-video w-full bg-black">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
