'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { X, ArrowRight, MoveRight, ZoomIn } from 'lucide-react';

const TrainingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  // Sample images - replace with your actual images
  const galleryImages = [
    { id: 1, src: '/gallery/img1.png', alt: 'Fashion design workshop' },
    { id: 2, src: '/gallery/img2.png', alt: 'Students working on patterns' },
    { id: 3, src: '/gallery/img3.png', alt: 'Fabric selection session' },
    { id: 4, src: '/gallery/img4.png', alt: 'Sewing techniques demonstration' },
    { id: 5, src: '/gallery/img5.png', alt: 'Design critique session' },
    { id: 6, src: '/gallery/img6.png', alt: 'Fashion show preparation' },
    { id: 7, src: '/gallery/img7.png', alt: 'Textile printing workshop' },
    { id: 8, src: '/gallery/img8.png', alt: 'Draping techniques class' },
    { id: 9, src: '/gallery/img9.png', alt: 'Portfolio development' },
    { id: 10, src: '/gallery/img10.png', alt: 'Industry expert session' },
    { id: 11, src: '/gallery/img11.png', alt: 'Pattern making class' },
    { id: 12, src: '/gallery/img12.png', alt: 'Graduation showcase' },
  ];
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
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

  return (
    <section 
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-repeat" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-float-${i}`}
            className="absolute rounded-full bg-purple-200/20 backdrop-blur-sm"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 200 - 100],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with floating animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
        >
          <motion.span 
            className="inline-block px-5 py-2 bg-white text-purple-600 rounded-full text-sm font-medium mb-6 shadow-lg"
            animate={{
              rotate: [0, 2, -2, 0],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Behind The Scenes
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ letterSpacing: '0em' }}
            whileInView={{ letterSpacing: '0.02em' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Fashion Training
            </span> Gallery
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Interactive gallery grid */}
        <motion.div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1
                  }
                }
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              
              {/* Image overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                </motion.div>
              </motion.div>
              
              {/* Zoom indicator */}
              <motion.div
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ZoomIn className="w-4 h-4 text-gray-800" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg transition-all group">
            View Full Gallery
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Image modal with Lenis pause */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.1
                }
              }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full h-full max-h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs mb-2">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{selectedImage.alt}</h3>
                  </div>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                    onClick={() => setSelectedImage(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="mt-4 flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors">
                    Share <MoveRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrainingGallery;