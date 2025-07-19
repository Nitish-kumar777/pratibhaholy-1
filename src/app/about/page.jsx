'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import { 
  Medal, GraduationCap, Laptop, Users, TrendingUp, Briefcase,
  Check, ArrowRight, Mail, Phone, ChevronRight, Award, BookOpen,
  Ruler, Scissors, Palette, LayoutGrid
} from 'lucide-react';

export default function AboutPage() {
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                No.1 Fashion Designing Institute in Uttar Pradesh
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                Unfold your imagination and evolve your fashion journey with our comprehensive programs
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/enroll"
                  className="flex items-center gap-2 bg-white text-purple-700 font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition max-w-max"
                >
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <Image
                src="/about-hero.png" // Replace with your image path
                alt="Fashion students working"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Institute Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                About <span className="text-purple-600">Pratibha Holy Fashion</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Established in 2020, we have trained more than 2000 students who have outshone in every sphere of their life. 
              We offer advanced professional certified courses in Cutting & Sewing, Dress Making and Fashion Designing.
            </p>
            <p className="text-lg text-gray-600">
              Fashion designing is one of the most prominent courses for youth in India and worldwide. 
              Countless aspiring designers choose Pratibha Holy Fashion each year, making us the recognized 
              leader in fashion education in Uttar Pradesh.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-4 rounded-lg border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" /> 2000+
                </h3>
                <p className="text-gray-600 mt-1">Students Trained</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-pink-50 p-4 rounded-lg border border-pink-100"
              >
                <h3 className="text-2xl font-bold text-pink-700 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" /> 100%
                </h3>
                <p className="text-gray-600 mt-1">Practical Learning</p>
              </motion.div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg border-2 border-white"
            >
              <Image
                src="/classroom.png" // Replace with your image
                alt="Fashion classroom"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg border-2 border-white"
            >
              <Image
                src="/about-hero.png" // Replace with your image
                alt="Students working"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg col-span-2 border-2 border-white"
            >
              <Image
                src="/fashion-show.png" // Replace with your image
                alt="Fashion show"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fashion Kit Section */}
      <div className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2">
              <LayoutGrid className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Unfold Your Imagination: <span className="text-purple-600">Fashion Design Kit</span>
              </h2>
            </div>
            <div className="mt-4 h-1 w-20 bg-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="/fashion-kit.png" // Replace with your image
                alt="Fashion design kit"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Step into the realm of fashion excellence with our comprehensive Fashion Design course, 
                complemented by our exclusive Fashion Design Kit.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="flex-shrink-0 h-6 w-6 text-purple-500 mt-1" />
                  <p className="text-gray-700">Diverse Fabric Swatch Kit for material selection</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="flex-shrink-0 h-6 w-6 text-purple-500 mt-1" />
                  <p className="text-gray-700">Specialized Fashion Design Sewing Machine</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="flex-shrink-0 h-6 w-6 text-purple-500 mt-1" />
                  <p className="text-gray-700">All-inclusive Stationery Kit</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="flex-shrink-0 h-6 w-6 text-purple-500 mt-1" />
                  <p className="text-gray-700">Online and Offline learning options</p>
                </li>
              </ul>
              <p className="text-lg text-gray-700 font-medium">
                This is more than a course—it's a transformative experience that equips you with essential 
                resources to excel in the fashion industry.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4"
              >
                <Link
                  href="/courses"
                  className="flex items-center gap-2 text-purple-700 font-medium hover:text-purple-800 transition"
                >
                  Explore our courses <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2">
              <Medal className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose <span className="text-purple-600">Pratibha Holy Fashion</span>
              </h2>
            </div>
            <div className="mt-4 h-1 w-20 bg-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="text-purple-600 text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Fashion Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Pratibha Holy Fashion today and transform your passion into a profession with our industry-leading programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition"
              >
                Contact Us <Mail className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Focused Environment",
    description: "Our institute is structured to help students focus on both academic and creative development."
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "LMS Access",
    description: "Access pre-recorded course videos anytime through our learning management system."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "360° Development",
    description: "Activities designed for holistic development including soft skills and leadership."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Learn From Experts",
    description: "Our mentors are industry professionals focused on practical, industry-relevant learning."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Placement Assistance",
    description: "We connect students with internship and job opportunities through our industry network."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Flexible Learning",
    description: "Choose between online and offline learning options to suit your schedule."
  }
];