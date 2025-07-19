'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { MoveRight, GraduationCap, Sparkles, Ruler, Scissors, Palette } from 'lucide-react';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';

// Replace these with your actual image paths
const IMAGES = {
  gridPattern: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDEiLz48cGF0aCBkPSJNMCAzMEg2ME0zMCAwVjYwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==',
  fabricTexture: '/images/fabric-texture.jpg',
  sketch1: '/images/fashion-sketch-1.jpg',
  sketch2: '/images/fashion-sketch-2.jpg',
  sketch3: '/images/fashion-sketch-3.jpg',
};

const stats = [
  { label: "Students Empowered", value: 1500, icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Career Success", value: 1450, icon: <Sparkles className="w-5 h-5" /> },
  { label: "Batches Completed", value: 50, icon: <Ruler className="w-5 h-5" /> },
  { label: "Industry Partners", value: 56, icon: <Scissors className="w-5 h-5" /> },
];

export default function FashionStatsHero() {
  const containerRef = useRef(null);
  const { ref: statsRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  // Lenis smooth scroll initialization
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      syncTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Animated Stats Counter */}
      <div 
        ref={statsRef}
        className="relative z-20 bg-gradient-to-b from-purple-900 to-purple-950 py-16 overflow-hidden"
      >
        {/* Floating grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 bg-repeat bg-center" 
          style={{ backgroundImage: `url(${IMAGES.gridPattern})` }} 
        />
        
        {/* Animated floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`stat-float-${i}`}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 200 - 100],
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}

        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                Transforming Aspirations
              </span> Into Fashion Careers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {inView && <CountUp end={stat.value} duration={2.5} />}+
                </h3>
                <p className="text-sm md:text-base text-purple-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yBg, opacity: opacityBg, scale: scaleBg }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-900/80 to-rose-900/90" />
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center" 
            style={{ backgroundImage: `url(${IMAGES.fabricTexture})` }} 
          />
          
          {/* Animated floating fashion sketches */}
          {[IMAGES.sketch1, IMAGES.sketch2, IMAGES.sketch3].map((sketch, i) => (
            <motion.div
              key={`sketch-${i}`}
              className="absolute opacity-30 mix-blend-lighten pointer-events-none"
              style={{
                backgroundImage: `url(${sketch})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '300px',
                height: '400px',
                left: `${20 + (i * 25)}%`,
                top: `${20 + (i * 10)}%`
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                rotate: [0, Math.random() * 10 - 5],
                transition: {
                  duration: 8 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-6 py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            {/* Logo/Brand */}
            <motion.div 
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-2 rounded-full bg-pink-500/20">
                <GraduationCap className="w-5 h-5 text-pink-300" />
              </div>
              <span className="text-sm font-medium tracking-wider text-pink-200">
                PRATIBHA HOLY FASHION
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                Design Your Future
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-rose-300">
                In Fashion
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div 
              className="mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-4">
                Our <span className="text-pink-300 font-medium">industry-leading programs</span> combine 
                traditional craftsmanship with <span className="text-pink-300 font-medium">digital innovation</span> 
                to prepare you for the future of fashion.
              </p>
            </motion.div>

            {/* CTA Button with advanced hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link
                href="/courses"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium overflow-hidden"
              >
                <span className="relative z-10">Explore Programs</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">
                  <MoveRight className="w-5 h-5" />
                </span>
                
                {/* Button hover effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Button animation elements */}
                <span className="absolute -inset-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute -inset-4">
                  {[...Array(4)].map((_, i) => (
                    <span 
                      key={`btn-circle-${i}`}
                      className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        rotate: `${i * 90}deg`,
                        scale: 1 - (i * 0.1)
                      }}
                    />
                  ))}
                </span>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent text-white font-medium border-2 border-white/20 hover:border-pink-400 transition-all overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <span className="relative z-10 text-pink-300">
                  <Palette className="w-5 h-5" />
                </span>
                <span className="absolute inset-0 bg-white/5 group-hover:bg-pink-900/20 transition-colors duration-300"></span>
              </Link>
            </motion.div>

            {/* Floating course categories */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {['Fashion Illustration', 'Textile Science', 'Pattern Making', 'Digital Design'].map((category, i) => (
                <motion.div
                  key={`category-${i}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-pink-900/20 transition-colors cursor-pointer"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <h3 className="text-sm font-medium text-pink-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                    {category}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-white/5 pointer-events-none"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            transition: {
              duration: 90,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-2 border-white/5 pointer-events-none"
        />
      </section>
    </div>
  );
}