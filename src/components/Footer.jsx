'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import { 
  Clock, Mail, Phone, MapPin, Calendar, 
  Facebook, Instagram, Twitter, Youtube,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    color: "#f43f5e",
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <motion.div variants={itemVariants} className="space-y-5">
          <motion.h2 
            whileHover={hoverEffect}
            className="text-2xl font-bold text-rose-400 flex items-center gap-2"
          >
            <span>Pratibha</span>
          </motion.h2>
          <p className="text-gray-300 font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-400" />
            City of Wales
          </p>
          <p className="text-gray-400">
            Our Fashion Design Course is Crafted To Empower Students With The Skills They Need To Excel in Both Digital And Hand-Crafted Aspects Of Fashion Design.
          </p>
          <div className="flex gap-4 pt-2">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -3, color: "#f43f5e" }}
                className="text-gray-400 hover:text-rose-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="space-y-5">
          <motion.h3 
            whileHover={hoverEffect}
            className="text-xl font-semibold text-rose-400 flex items-center gap-2"
          >
            <ChevronRight className="w-5 h-5" />
            Quick Links
          </motion.h3>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Courses", href: "/courses" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" }
            ].map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
              >
                <Link 
                  href={link.href}
                  className="text-gray-400 hover:text-rose-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Hours Section */}
        <motion.div variants={itemVariants} className="space-y-5">
          <motion.h3 
            whileHover={hoverEffect}
            className="text-xl font-semibold text-rose-400 flex items-center gap-2"
          >
            <Clock className="w-5 h-5" />
            Opening Hours
          </motion.h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-300">Monday To Saturday</p>
                <p className="text-gray-400">08:00 AM – 09:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-300">Sunday</p>
                <p className="text-gray-400">Closed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact & Newsletter */}
        <motion.div variants={itemVariants} className="space-y-5">
          <motion.h3 
            whileHover={hoverEffect}
            className="text-xl font-semibold text-rose-400 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </motion.h3>
          <address className="not-italic text-gray-400 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
              <p>Stata, Bank Colony, Schartanpur, Uttar Pradesh 247001</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <p>(+91) 8882 3366 94</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <p>pratibhaholyfashion@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <p>info@pratibhaholyfashion.com</p>
            </div>
          </address>

          <div className="pt-2">
            <motion.h3 
              whileHover={hoverEffect}
              className="text-xl font-semibold text-rose-400 mb-3 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Newsletter
            </motion.h3>
            <p className="text-gray-300 mb-3">
              Sign Up To Get Updates & News About Us.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 flex-grow"
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f43f5e" }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-600 text-white px-4 py-2 rounded-r-md flex items-center gap-1"
              >
                Sign Up <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="text-center md:text-left">
          <Link 
            href="https://www.prattbharbayfashion.com" 
            className="text-gray-400 hover:text-rose-400 transition-colors"
          >
            © {new Date().getFullYear()} Pratibha Holy Fashion. All Rights Reserved.
          </Link>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <motion.a 
            whileHover={hoverEffect}
            href="#" 
            className="text-gray-400 hover:text-rose-400 transition-colors text-sm md:text-base"
          >
            Terms of use
          </motion.a>
          <motion.a 
            whileHover={hoverEffect}
            href="#" 
            className="text-gray-400 hover:text-rose-400 transition-colors text-sm md:text-base"
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            whileHover={hoverEffect}
            href="#" 
            className="text-gray-400 hover:text-rose-400 transition-colors text-sm md:text-base"
          >
            Refund Policy
          </motion.a>
          <motion.a 
            whileHover={hoverEffect}
            href="#" 
            className="text-gray-400 hover:text-rose-400 transition-colors text-sm md:text-base"
          >
            Sitemap
          </motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;