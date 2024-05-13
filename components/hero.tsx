
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const words = ["AI-powered language learning platform", "to make mastering", "any language effectively."];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 mb-10">
      <div className="container mx-auto text-center text-white px-4 md:px-0">
        <h1 className="text-4xl md:text-4xl lg:text-7xl font-extrabold mb-4 leading-tight">
          <AnimatePresence>
            {["Learn ", "Any ", "Language ", "Effortlessly "].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {word}
              </motion.span>
            ))}
          </AnimatePresence>
        </h1>

        <div className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          <AnimatePresence>
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-100">
            Get Started
          </button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent border border-white text-white font-bold py-3 px-6 lg:py-0 lg:px-11 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 relative"
          >
            Try Now 
            <motion.span 
              className="absolute bottom-1 right-2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
 
