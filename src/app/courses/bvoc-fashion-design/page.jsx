"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from '@studio-freight/react-lenis';
import { 
  Award,
  Calendar,
  Users,
  BookOpenText,
  Briefcase,
  Check,
  ChevronRight,
  Scissors,
  Shirt,
  Ruler,
  Palette,
  Camera,
  Building2,
  GraduationCap,
  LayoutDashboard,
  Sparkles
} from 'lucide-react';

const BVocFashionDesign = () => {
  const lenis = useLenis();
  const currentYear = new Date().getFullYear();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const semesterData = [
    {
      year: "Year 1: Foundation",
      icon: <BookOpenText className="w-6 h-6 text-purple-600" />,
      courses: [
        "Design Fundamentals",
        "Textile Science",
        "Pattern Making",
        "Fashion Sketching",
        "Draping Techniques"
      ]
    },
    {
      year: "Year 2: Specialization",
      icon: <LayoutDashboard className="w-6 h-6 text-purple-600" />,
      courses: [
        "Advanced Pattern Making",
        "Fashion Illustration",
        "Textile Design",
        "Merchandising",
        "Sustainable Fashion"
      ]
    },
    {
      year: "Year 3: Professional",
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      courses: [
        "Luxury Brand Management",
        "Fashion Photography",
        "Portfolio Development",
        "Entrepreneurship",
        "Final Collection"
      ]
    }
  ];

  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "UGC Recognized",
      desc: "Bachelor of Vocation degree with NSQF alignment"
    },
    {
      icon: <Scissors className="w-8 h-8 text-purple-600" />,
      title: "Hands-on Training",
      desc: "Practical workshops with industry tools"
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Placement Support",
      desc: "Dedicated career guidance and placement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative py-20 md:py-32 bg-gradient-to-r from-purple-600/10 to-purple-600/10 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={item} className="text-center max-w-4xl mx-auto">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                UGC Recognized Degree
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              B.Voc in <span className="text-purple-600">Fashion Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              3-Year Industry-Focused Program at <span className="font-semibold text-purple-600">Pratibha Holy Fashion Institute</span>
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={item}
            >
              <Link 
                href="/enroll"
                onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
              >
                <button className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all">
                  Enrollment Now Open
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 hidden lg:block"
        >
          <Image 
            src="/fashion-design.png"
            alt="Fashion Design"
            width={500}
            height={500}
            className="opacity-70"
          />
        </motion.div>
      </motion.section>

      {/* Program Highlights */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto px-4 py-16"
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Limited to 30 Students Per Batch
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized attention with industry-experienced faculty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-purple-500"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Curriculum */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              3-Year Comprehensive Curriculum
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {semesterData.map((year, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-purple-50 rounded-xl p-6 shadow-inner border border-purple-100"
              >
                <div className="flex items-center mb-6 pb-2 border-b border-purple-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    {year.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700">{year.year}</h3>
                </div>
                <ul className="space-y-3">
                  {year.courses.map((course, j) => (
                    <li key={j} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-purple-500 mt-0.5 mr-3" />
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Gallery */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="py-16 bg-gradient-to-r from-purple-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Fashion Studio
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities for practical learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Design Studio",
                icon: <Palette className="w-8 h-8 text-purple-600" />
              },
              {
                title: "Sewing Lab",
                icon: <Scissors className="w-8 h-8 text-purple-600" />
              },
              {
                title: "Photography Setup",
                icon: <Camera className="w-8 h-8 text-purple-600" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <div className="h-64 bg-purple-100 flex items-center justify-center">
                  <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Fashion Career</h2>
            <p className="text-xl mb-8">
              Limited seats available for {currentYear}-{currentYear + 3} batch
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/enroll"
                  onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
                >
                  <button className="px-8 py-3 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-lg shadow-lg">
                    Apply Now
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-purple-700 font-bold rounded-lg transition-colors">
                    Contact Advisor
                  </button>
                </Link>
              </motion.div>
            </div>
            <p className="mt-8 text-purple-200 text-sm">
              <Sparkles className="inline w-4 h-4 mr-1" />
              Pratibha Holy Fashion Institute • UGC Recognized • Industry Partnerships
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BVocFashionDesign;