'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Courses',
    hasDropdown: true,
    subItems: [
      { name: 'Diploma in Fashion Design', path: '/courses/diploma-fashion-design' },
      { name: 'Advance Diploma', path: '/courses/advance-diploma-fashion-design' },
      { name: 'B.Voc in Fashion Design', path: '/courses/bvoc-fashion-design' },
      { name: 'M.Voc in Fashion Design', path: '/courses/mvoc-fashion-design' }
    ]
  },
  { name: 'Enrollment', path: '/enroll' },
  { name: 'Contact', path: '/contact' }
];

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sidebarRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
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

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  const handleNavigation = () => {
    setIsOpen(false);
  };

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with animation */}
        <Link href="/" className="logo-link relative z-50">
          <motion.div 
            className="relative w-40 h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image 
              src="/logo.png" 
              alt="Fashion School Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_ITEMS.map((item, index) => (
            <div key={index} className="relative group">
              {item.subItems ? (
                <>
                  <div 
                    className="flex items-center"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link 
                      href={item.path || '/'}
                      className="relative px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    >
                      <span className="relative z-10">{item.name}</span>
                      {hoveredItem === item.name && (
                        <motion.span
                          layoutId="navItemUnderline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </Link>
                    <button 
                      onClick={() => toggleSubmenu(item.name)}
                      className="p-1 text-gray-500 hover:text-purple-600 transition-colors"
                      aria-label={`Toggle ${item.name} menu`}
                    >
                      <motion.span
                        animate={{
                          rotate: activeSubmenu === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  </div>

                  <AnimatePresence>
                    {(activeSubmenu === item.name || hoveredItem === item.name) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, type: 'spring', bounce: 0.1 }}
                        className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {item.subItems.map((subItem) => (
                          <Link 
                            key={subItem.name} 
                            href={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 text-sm relative"
                          >
                            <motion.span
                              whileHover={{ x: 5 }}
                              transition={{ type: 'spring', stiffness: 500 }}
                              className="flex items-center gap-2"
                            >
                              <ChevronRight className="w-3 h-3 text-purple-400" />
                              {subItem.name}
                            </motion.span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={item.path}
                    className="relative px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hoveredItem === item.name && (
                      <motion.span
                        layoutId="navItemUnderline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">(+91) 8882 3366 94</span>
          </div>
          <motion.a
            href="/enroll"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Apply Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors relative z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black z-40 lg:hidden"
              />

              {/* Sidebar */}
              <motion.div
                ref={sidebarRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-white z-50 lg:hidden overflow-y-auto flex flex-col"
              >
                <div className="flex justify-between items-center p-4 border-b border-purple-100 bg-white sticky top-0 z-10">
                  <Link href="/" className="logo-link" onClick={handleNavigation}>
                    <motion.div 
                      className="relative w-32 h-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Image 
                        src="/logo.png" 
                        alt="Fashion School Logo"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </Link>
                  <motion.button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 hover:text-purple-600 transition-colors rounded-full hover:bg-purple-50"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Contact Info - Mobile */}
                <div className="p-4 bg-purple-50 border-b border-purple-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <a href="tel:+918882336694" className="text-gray-700 hover:text-purple-600">
                        (+91) 8882 3366 94
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <a href="mailto:pratibhaholyfashion@gmail.com" className="text-gray-700 hover:text-purple-600">
                        pratibhaholyfashion@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="p-4 overflow-y-auto flex-grow">
                  {NAV_ITEMS.map((item, index) => (
                    <div key={index} className="mb-2">
                      {item.subItems ? (
                        <>
                          <div className="rounded-lg overflow-hidden">
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="flex justify-between items-center p-3 w-full text-left font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg transition-colors"
                              aria-label={`Toggle ${item.name} menu`}
                            >
                              {item.name}
                              <motion.span
                                animate={{
                                  rotate: activeSubmenu === item.name ? 90 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight size={18} />
                              </motion.span>
                            </button>

                            <AnimatePresence>
                              {activeSubmenu === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden bg-white rounded-b-lg shadow-inner"
                                >
                                  <div className="py-2 space-y-1">
                                    {item.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.path}
                                        onClick={handleNavigation}
                                        className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors text-sm border-l-2 border-transparent hover:border-purple-400 ml-3"
                                      >
                                        <motion.span
                                          whileHover={{ x: 5 }}
                                          transition={{ type: 'spring', stiffness: 500 }}
                                          className="flex items-center gap-2"
                                        >
                                          <ChevronRight className="w-3 h-3 text-purple-400" />
                                          {subItem.name}
                                        </motion.span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={handleNavigation}
                          className="block p-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 500 }}
                            className="block"
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Footer with CTA */}
                <div className="mt-auto p-4 border-t border-purple-100">
                  <Link
                    href="/enroll"
                    onClick={handleNavigation}
                    className="block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center rounded-lg font-medium transition-colors shadow-md"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}