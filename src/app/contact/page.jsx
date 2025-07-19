"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useLenis } from '@studio-freight/react-lenis';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Building2,
  ClipboardCheck
} from 'lucide-react';

const ContractPage = () => {
  const lenis = useLenis();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you soon.');
    lenis?.scrollTo(0, { duration: 1.2 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Head>
        <title>Contract with Pratibha Holy Fashion</title>
        <meta name="description" content="Get in touch with Pratibha Holy Fashion for business inquiries" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        {/* Animated Header */}
        <motion.header
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -left-6 text-6xl opacity-20"
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 relative">
              Business Partnership
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's create something beautiful together. Fill out the form to establish a business relationship with Pratibha Holy Fashion.
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <motion.section
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/2 bg-white rounded-3xl shadow-xl overflow-hidden mx-auto"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex items-center">
              <ClipboardCheck className="w-6 h-6 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">Start Our Journey</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-sm"
                    placeholder="Enter your full name"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-sm"
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-sm"
                    placeholder="+91 "
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-10 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-sm"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }} 
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center h-5">
                  <input
                    id="agreed"
                    name="agreed"
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-purple-300"
                  />
                </div>
                <label htmlFor="agreed" className="ml-3 text-sm text-gray-700">
                  I agree to the <span className="text-purple-600 font-medium">terms and conditions</span> outlined in this contract
                </label>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!formData.agreed}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all flex items-center justify-center ${formData.agreed ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                Send Partnership Request
                <ArrowRight className={`w-5 h-5 ml-2 transition-all ${formData.agreed ? 'opacity-100' : 'opacity-50'}`} />
              </motion.button>
            </form>
          </motion.section>
        </div>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex items-center">
            <Building2 className="w-6 h-6 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">Our Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-5 rounded-xl"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                State, Bank Colony,<br />
                Saharanpur, Uttar Pradesh 247001
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-5 rounded-xl"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">
                (+91) 8882 3366 94<br />
                (+91) 8958 4640 83
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-5 rounded-xl"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                pratibhaholyfashion@gmail.com<br />
                info@pratibhaholyfashion.com
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-5 rounded-xl"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 9AM - 6PM<br />
                Sunday: Closed
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="fixed -right-32 -bottom-32 w-64 h-64 rounded-full bg-purple-200 opacity-20 pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="fixed -left-40 top-1/4 w-80 h-80 rounded-full bg-indigo-200 opacity-20 pointer-events-none"
        />
      </motion.main>
    </div>
  );
};

export default ContractPage;