'use client'

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  User, Mail, Phone, Home, BookOpen, GraduationCap, 
  ChevronDown, Check, AlertCircle, Loader2 
} from 'lucide-react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    email: '',
    phoneNumber: '',
    address: '',
    educationQualification: '',
    course: '',
    courseMode: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          fathersName: '',
          email: '',
          phoneNumber: '',
          address: '',
          educationQualification: '',
          course: '',
          courseMode: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-90 transform transition-all duration-500 hover:shadow-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center gap-2"
        >
          <GraduationCap className="w-8 h-8" />
          Student Registration Form
        </motion.h2>
        
        {/* Status messages with animations */}
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2"
          >
            <Check className="w-5 h-5 text-green-500" />
            Form submitted successfully! We'll contact you soon.
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            There was an error submitting the form. Please try again.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <User className="w-4 h-4" />
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <User className="w-4 h-4" />
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="fathersName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <User className="w-4 h-4" />
              Father's Name*
            </label>
            <input
              type="text"
              id="fathersName"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Phone className="w-4 h-4" />
                Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Address*
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="educationQualification" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              Education Qualification*
            </label>
            <input
              type="text"
              id="educationQualification"
              name="educationQualification"
              value={formData.educationQualification}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                Select Course*
              </label>
              <div className="relative">
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 appearance-none"
                >
                  <option value="">-- Select a course --</option>
                  <option value="Diploma in Fashion Design">Diploma in Fashion Design</option>
                  <option value="Advance Diploma">Advance Diploma</option>
                  <option value="B.Voc in Fashion Design">B.Voc in Fashion Design</option>
                  <option value="M.Voc in Fashion Design">M.Voc in Fashion Design</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="courseMode" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                Course Mode*
              </label>
              <div className="relative">
                <select
                  id="courseMode"
                  name="courseMode"
                  value={formData.courseMode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 appearance-none"
                >
                  <option value="">-- Select mode --</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 py-3 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <GraduationCap className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;