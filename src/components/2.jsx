'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';

const courses = [
  {
    name: 'Diploma in Fashion Design',
    description: 'Master design principles, textiles, and merchandising with hands-on industry training and portfolio development.',
    img: '/course/Diploma-in-Fashion-Design.png',
    path: '/courses/diploma-fashion-design',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'Advance Diploma',
    description: 'Advanced training in sustainable fashion, global markets, and brand development with cutting-edge technologies.',
    img: '/course/Advance-Diploma.png',
    path: '/courses/advance-diploma-fashion-design',
    color: 'from-rose-500 to-pink-600'
  },
  {
    name: 'B.Voc in Fashion Design',
    description: 'UGC-recognized degree blending creative design with technical skills in marketing and CAD technologies.',
    img: '/fashion-image.png',
    path: '/courses/bvoc-fashion-design',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'M.Voc in Fashion Design',
    description: 'Postgraduate program focusing on research-led design and leadership in global fashion industry.',
    img: '/course/M.Voc-in-Fashion-Design.png',
    path: '/courses/mvoc-fashion-design',
    color: 'from-emerald-500 to-teal-600'
  }
];

const CoursesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      infinite: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        {/* Header with advanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-24"
        >
          <motion.span 
            animate={{
              scale: [1, 1.05, 1],
              rotate: [-2, 0.5, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="inline-block px-5 py-2 bg-white text-purple-600 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            Fashion Revolution Starts Here
          </motion.span>
          
          <motion.h2
            initial={{ letterSpacing: '0em' }}
            whileInView={{ letterSpacing: '0.02em' }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Craft Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Fashion Legacy</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Immerse yourself in world-class fashion education with industry-leading instructors and cutting-edge facilities.
          </motion.p>
        </motion.div>

        {/* Interactive courses grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group"
            >
              {/* 3D card effect container */}
              <div className="perspective-1000">
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative h-full transform-style-preserve-3d transition-all duration-500 ease-out"
                >
                  {/* Course card */}
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col transform transition-all duration-500 group-hover:shadow-3xl">
                    {/* Image with parallax effect */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <img 
                          src={course.img} 
                          alt={course.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className={`absolute inset-0 bg-gradient-to-b ${course.color} opacity-20`} />
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mr-3" />
                        <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                          Program {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {course.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 flex-1">
                        {course.description}
                      </p>
                      
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className="self-start"
                      >
                        <Link
                          href={course.path}
                          className={`px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r ${course.color} shadow-lg hover:shadow-xl transition-all flex items-center`}
                        >
                          Discover More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 group-hover:opacity-50 transition-opacity -z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 opacity-30 group-hover:opacity-50 transition-opacity -z-10"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Creative Vision?
          </h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full text-white font-bold bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl hover:shadow-2xl transition-all flex items-center mx-auto"
            >
              Schedule a Campus Tour
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 animate-bounce-horizontal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements for the whole section */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-purple-200 opacity-20 blur-xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-pink-200 opacity-20 blur-xl -z-10"
      />
    </section>
  );
};

export default CoursesSection;