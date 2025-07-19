"use client"

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
  Quote
} from 'lucide-react';

const DiplomaFashionDesign = () => {
  const lenis = useLenis();

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Duration",
      description: "1 Year Intensive Program"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Batch Size",
      description: "Limited to 30 Students"
    },
    {
      icon: <BookOpenText className="w-6 h-6 text-purple-600" />,
      title: "Curriculum",
      description: "Comprehensive training in design principles"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      title: "Outcome",
      description: "Portfolio development and industry-ready skills"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      batch: "Batch of 2023",
      role: "Junior Designer at FabIndia",
      quote: "The diploma program transformed my creative skills into professional expertise."
    },
    {
      name: "Rahul Mehta",
      batch: "Batch of 2022",
      role: "Pattern Maker at Arvind Fashion",
      quote: "The small batch size ensured personalized attention from faculty."
    },
    {
      name: "Ananya Patel",
      batch: "Batch of 2023",
      role: "Freelance Fashion Designer",
      quote: "Practical projects gave me confidence to start my own label."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Diploma in Fashion Design | Pratibha Holy Fashion Institute</title>
        <meta name="description" content="1-year Diploma in Fashion Design at Pratibha Holy Fashion Institute. Limited to 30 students per batch." />
      </Head>

      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-white mb-16">
          <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.header variants={itemVariants} className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Professional Diploma Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Diploma in <span className="text-purple-600">Fashion Design</span>
              </h1>
              <p className="text-xl text-gray-600">
                Offered by <span className="font-semibold text-purple-600">Pratibha Holy Fashion Institute</span>
              </p>
            </motion.header>
          </div>
        </section>

        {/* Course Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Course Image */}
          <motion.div variants={imageVariants} className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/course/Dress-Making.png"
              alt="Fashion Design Students"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Course Info */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Course Overview</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 h-8 w-8 bg-purple-50 rounded-full flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link 
                  href="/enroll" 
                  passHref
                  onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
                >
                  <button className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl">
                    Enrollment Now Open
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Curriculum Highlights */}
        <motion.section 
          variants={itemVariants}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Scissors className="w-8 h-8 text-purple-600" />,
                title: "Pattern Making",
                description: "Master the art of creating precise patterns for various garments"
              },
              {
                icon: <Shirt className="w-8 h-8 text-purple-600" />,
                title: "Garment Construction",
                description: "Learn professional sewing and assembly techniques"
              },
              {
                icon: <Ruler className="w-8 h-8 text-purple-600" />,
                title: "Textile Science",
                description: "Understand fabric properties and appropriate usage"
              },
              {
                icon: <Palette className="w-8 h-8 text-purple-600" />,
                title: "Fashion Illustration",
                description: "Develop skills to visualize your designs"
              },
              {
                icon: <BookOpenText className="w-8 h-8 text-purple-600" />,
                title: "Design Theory",
                description: "Learn principles of color, form, and composition"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-purple-600" />,
                title: "Portfolio Development",
                description: "Create a professional portfolio to showcase your work"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-24 bg-purple-50 p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Student Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.batch} • {testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white p-12 rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Limited Seats Available</h3>
          <p className="text-xl mb-8">Only 30 students per batch to ensure quality education</p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link 
              href="/enroll"
              onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
            >
              <button className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl">
                Secure Your Spot Now
              </button>
            </Link>
            <Link 
              href="/programs" 
              className="text-white hover:text-purple-200 font-medium flex items-center"
            >
              Explore other programs <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default DiplomaFashionDesign;