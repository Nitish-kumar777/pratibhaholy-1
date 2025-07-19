"use client"

import { motion, useAnimation } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLenis } from '@studio-freight/react-lenis';
import { 
  LayoutDashboard, 
  Ruler, 
  Scissors, 
  Shirt, 
  Palette,
  Laptop2,
  Library,
  Briefcase,
  BookOpenCheck,
  Users,
  Award,
  ChevronRight,
  Check
} from 'lucide-react';

const AdvancedDiplomaFashionDesign = () => {
  const currentYear = new Date().getFullYear();
  const lenis = useLenis();

  // Animation controls for scroll-triggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const modules = [
    {
      title: "Year 1: Foundations",
      icon: <BookOpenCheck className="w-6 h-6 text-purple-600" />,
      items: [
        "Design Principles & Theory",
        "Textile Science",
        "Pattern Making Basics",
        "Fashion Illustration",
        "Garment Construction"
      ]
    },
    {
      title: "Year 2: Advanced Specialization",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      items: [
        "Advanced Draping Techniques",
        "Fashion CAD",
        "Collection Development",
        "Industry Internship",
        "Portfolio Creation"
      ]
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Exclusive Batch",
      description: "Only 30 students selected through rigorous screening"
    },
    {
      icon: <Scissors className="w-8 h-8 text-purple-600" />,
      title: "Master Techniques",
      description: "Learn from industry experts with 10+ years experience"
    },
    {
      icon: <Laptop2 className="w-8 h-8 text-purple-600" />,
      title: "Advanced Curriculum",
      description: "Includes digital design tools and sustainable fashion"
    }
  ];

  const faculty = [
    {
      name: "Prof. Ananya Sharma",
      specialization: "Textile Design",
      experience: "Former Head Designer at FabIndia",
      icon: <Palette className="w-10 h-10 text-purple-500" />
    },
    {
      name: "Prof. Rajiv Malhotra",
      specialization: "Fashion Technology",
      experience: "15 years at Arvind Fashion Ltd",
      icon: <Ruler className="w-10 h-10 text-purple-500" />
    },
    {
      name: "Prof. Nandini Kapoor",
      specialization: "Luxury Brand Management",
      experience: "Ex-Gucci, now consultant for Indian designers",
      icon: <Shirt className="w-10 h-10 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Advanced Diploma in Fashion Design | Pratibha Holy Fashion Institute</title>
        <meta name="description" content="2-year Advanced Diploma in Fashion Design at Pratibha Holy Fashion Institute. Limited to 30 students per batch." />
      </Head>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Advanced Diploma Program
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fashion Design <span className="text-purple-600">Mastery</span> Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Transform your creative vision into wearable art with our <span className="font-semibold text-purple-600">2-year intensive program</span>
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/enroll" 
                passHref
                onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
              >
                <button className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl text-lg">
                  Apply for {currentYear} Batch
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Program Highlights */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Program
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A carefully crafted curriculum designed to bridge the gap between classroom learning and industry requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Curriculum Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Curriculum
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Structured progression from fundamental concepts to advanced specialization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modules.map((module, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                </div>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-purple-500 mt-0.5 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Faculty Spotlight */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn From Industry Pioneers
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our faculty brings decades of combined experience from leading fashion houses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-48 bg-purple-50 flex items-center justify-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                    {member.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.specialization}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Fashion Journey</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Limited to 30 students per batch for personalized mentorship and industry-focused training
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex flex-col sm:flex-row gap-4 items-center"
            >
              <Link 
                href="/enroll"
                onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
              >
                <button className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl text-lg">
                  Apply Now
                </button>
              </Link>
              <Link 
                href="/programs" 
                className="text-white hover:text-purple-200 font-medium flex items-center"
              >
                Explore other programs <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AdvancedDiplomaFashionDesign;