"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdmissionsBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Set the deadline date (June 30, 2025)
    const deadline = new Date("2025-06-30T23:59:59").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };

    // Initial call
    updateCountdown();
    
    // Update every minute
    const timer = setInterval(updateCountdown, 60000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 px-4 sm:p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden">
      {/* Floating animated circles */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white opacity-5"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-white opacity-5"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-4 md:space-y-6"
      >
        <div className="inline-flex items-center px-3 py-1 mb-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Limited Seats Available
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Admissions Open <br className="sm:hidden" />For 2025
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto">
          Now offering <span className="font-bold">Animation</span> & <span className="font-bold">Fashion Designing</span> programs with industry experts
        </p>
        
        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 pt-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs opacity-80">DAYS</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs opacity-80">HOURS</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs opacity-80">MINUTES</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 whitespace-nowrap"
            >
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center border-2 border-white/50 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
        
        <p className="text-sm sm:text-base text-white/70 pt-2">
          Application deadline: June 30, 2025
        </p>
      </motion.div>
    </div>
  );
}