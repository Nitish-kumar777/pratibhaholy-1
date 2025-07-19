'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  })
};

const floatingShapes = [
  { shape: 'circle', color: 'rgba(168, 85, 247, 0.08)' },
  { shape: 'triangle', color: 'rgba(59, 130, 246, 0.08)' },
  { shape: 'square', color: 'rgba(236, 72, 153, 0.08)' },
  { shape: 'pentagon', color: 'rgba(14, 165, 233, 0.08)' }
];

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const floatingContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: 'vertical'
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Interactive floating elements that respond to mouse movement
    const handleMouseMove = (e) => {
      if (!floatingContainerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = floatingContainerRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width/2) * 0.05;
      const y = (clientY - top - height/2) * 0.05;
      
      document.querySelectorAll('.floating-interactive').forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    floatingContainerRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      floatingContainerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateFloatingElements = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const size = 30 + Math.random() * 70;
      const shape = floatingShapes[i % floatingShapes.length];
      
      return (
        <motion.div
          key={i}
          className={`absolute floating-interactive`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: 0.1 + Math.random() * 0.1,
            y: 0
          } : {}}
          transition={{ 
            delay: i * 0.05,
            duration: 1,
            ease: "easeOut"
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            filter: 'blur(1px)',
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          {shape.shape === 'circle' && (
            <div 
              className="w-full h-full rounded-full" 
              style={{ backgroundColor: shape.color }}
            />
          )}
          {shape.shape === 'triangle' && (
            <div 
              className="w-full h-full"
              style={{
                backgroundColor: shape.color,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
          )}
          {shape.shape === 'square' && (
            <div 
              className="w-full h-full rounded-lg" 
              style={{ backgroundColor: shape.color }}
            />
          )}
          {shape.shape === 'pentagon' && (
            <div 
              className="w-full h-full"
              style={{
                backgroundColor: shape.color,
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
              }}
            />
          )}
        </motion.div>
      );
    });
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-br from-[#f3f1ff] to-[#e7f2fd] overflow-hidden text-gray-900"
    >
      {/* Background Animated Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.1)_0,_transparent_70%)] animate-pulse" />
      </motion.div>

      {/* Floating Elements Container */}
      <div 
        ref={floatingContainerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {generateFloatingElements()}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-6 sm:p-10 md:p-14 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-xl shadow-purple-100/30 max-w-7xl w-full border border-white/20 transform transition-transform duration-500 hover:scale-[1.005]">

        {/* Left - Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -60, rotate: -5 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          className="w-full lg:w-1/2 relative group"
        >
          {/* Animated Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
          />

          {/* Image with shine effect */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src="/home/image.png"
              alt="Fashion Designing"
              className="w-full h-full object-cover rounded-2xl relative z-10"
              initial={{ scale: 1.1 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 to-blue-100/30 z-0" />
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/30 transform rotate-45 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300" />
            </div>
          </div>

          {/* Decorative corners with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="absolute top-0 left-0 w-14 h-14 border-t-4 border-l-4 border-purple-400 rounded-tl-2xl opacity-70"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="absolute bottom-0 right-0 w-14 h-14 border-b-4 border-r-4 border-blue-400 rounded-br-2xl opacity-70"
          />
        </motion.div>

        {/* Right - Content Section */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-700 uppercase bg-purple-100 rounded-full backdrop-blur-sm transform transition-transform hover:scale-105">
              No.1 Fashion Designing Institute
            </span>
          </motion.div>

          <motion.h1
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors">
              Crafting Fashion Dreams
            </span>
            <br />
            at <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Pratibha Holy Fashion</span>
          </motion.h1>

          <motion.p
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            className="text-lg text-gray-700"
          >
            Since 2020, Pratibha Holy Fashion has empowered over 2000 students to excel in Fashion Designing, Dress Making, and Cutting & Sewing. We offer industry-aligned certified courses for future professionals.
          </motion.p>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="p-2 bg-purple-100 rounded-lg"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </motion.div>
              <div>
                <div className="font-bold">2000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
            </div>

            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <motion.div 
                whileHover={{ rotate: -15 }}
                className="p-2 bg-blue-100 rounded-lg"
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </motion.div>
              <div>
                <div className="font-bold">UP's #1</div>
                <div className="text-sm text-gray-600">Fashion Institute</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons with advanced animations */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/enroll"
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg hover:shadow-purple-500/40 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Enroll Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {/* Button hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.a>

            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f9fafb"
              }}
              whileTap={{ scale: 0.95 }}
              href="/courses/bvoc-fashion-design"
              className="px-6 py-3.5 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md flex items-center justify-center gap-2 transition-all"
            >
              Explore Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-2 bg-gray-500 rounded-full mt-2"
            animate={{
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}