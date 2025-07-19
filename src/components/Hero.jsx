"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";
import Lenis from "@studio-freight/lenis";

const FashionCourseSlider = () => {
  const slides = [
    {
      name: "Diploma in Fashion Design",
      image: "/img/fashion1.png",
      text: "Comprehensive program covering design principles, textile science, and fashion merchandising. Includes industry internships and portfolio development.",
      highlight: "🎓 1-Year Certification",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "B.Voc in Fashion Design",
      image: "/img/fashion2.png",
      text: "3-year UGC-recognized degree blending creative design with technical skills. Includes modules on fashion marketing, entrepreneurship, and CAD technologies.",
      highlight: "🏛️ UGC Recognized Degree",
      color: "from-blue-500 to-teal-600"
    },
    {
      name: "M.Voc in Fashion Design",
      image: "/img/fashion3.png",
      text: "Postgraduate program focusing on research-led design, innovation management, and leadership in the global fashion industry.",
      highlight: "🌍 Global Industry Focus",
      color: "from-amber-500 to-orange-600"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      wheelMultiplier: 0.8
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, isMobile ? 7000 : 5000);
    return () => clearInterval(interval);
  }, [slides.length, isMobile, isPaused]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToSlide((currentIndex + 1) % slides.length),
    onSwipedRight: () => goToSlide((currentIndex - 1 + slides.length) % slides.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Animation variants
  const textVariants = {
    enter: (dir) => ({ y: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
    exit: (dir) => ({ y: dir > 0 ? -50 : 50, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }),
  };

  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 1.1 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.9, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }),
  };

  // Floating elements effect
  const floatingElements = Array.from({ length: 15 }).map((_, i) => {
    const size = 20 + Math.random() * 60;
    const delay = Math.random() * 0.5;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/5 border border-white/10 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 0.1, 0],
          y: [20, -20, 20],
          x: [0, Math.random() * 100 - 50, 0]
        }}
        transition={{
          duration: 10 + Math.random() * 20,
          delay,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    );
  });

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>Pratibha Holy Fashion - Professional Fashion Design Courses</title>
        <meta name="description" content="Transform your passion into profession with our industry-leading fashion design programs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        ref={containerRef}
        className="relative h-screen flex items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        {...swipeHandlers}
      >
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {floatingElements}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>

        {/* Animated background image */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentIndex}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].name}
              className="w-full h-full object-cover object-center"
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* Content container */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl backdrop-blur-lg bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <motion.h1
              className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-400 to-yellow-300 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Pratibha Holy Fashion
            </motion.h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-yellow-400 text-gray-900 rounded-full shadow">
                Job Oriented Program
              </span>
              <motion.span 
                className="inline-block px-3 py-1 text-sm font-semibold bg-white/10 text-white rounded-full border border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentIndex].highlight}
              </motion.span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              {slides[currentIndex].name}
            </h2>

            <div className="h-24 sm:h-28 overflow-hidden relative mb-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.p
                  key={currentIndex}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-base sm:text-lg leading-relaxed text-white/90"
                >
                  {slides[currentIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enroll">
                <motion.button
                  className={`px-8 py-4 bg-gradient-to-r ${slides[currentIndex].color} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ENROLL NOW
                  <span className="ml-2 inline-block animate-bounce">→</span>
                </motion.button>
              </Link>
              <Link href={`/courses/${slides[currentIndex].name.toLowerCase().replace(/ /g, '-')}`}>
                <motion.button
                  className="px-6 py-3 border border-white/30 hover:border-white text-white rounded-full font-medium backdrop-blur-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  COURSE DETAILS
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation dots with progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative w-12 h-2 rounded-full bg-white/20 overflow-hidden group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`absolute inset-0 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-transparent'}`}
                initial={{ width: "0%" }}
                animate={{ 
                  width: index === currentIndex ? "100%" : "0%",
                  transition: { 
                    duration: isMobile ? 7 : 5,
                    ease: "linear"
                  }
                }}
              />
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/50 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-6 border-l border-white/50 mt-1"
          >
            <motion.div
              className="w-1 h-2 bg-white/80 ml-[3px] mt-1"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FashionCourseSlider;