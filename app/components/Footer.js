"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto  px-2 py-5 sm:px-6 lg:px-8">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center text-teal-600"
        >
          <svg
            className="h-8"
            viewBox="0 0 118 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your logo paths */}
            <path
              d="M37.83 19.2047C37.2352..."
              fill="currentColor"
            />
            {/* ... rest of your paths */}
          </svg>
        </motion.div>

        {/* Navigation links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className=" flex justify-center space-x-6 text-sm font-medium text-gray-600"
        >
          <a href="#" className="hover:text-teal-600 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors">
            Privacy
          </a>
        </motion.nav>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          &copy; {new Date().getFullYear()} Ask My Doc. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
