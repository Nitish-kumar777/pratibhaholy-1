'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    course: 'Fashion Design',
    review: 'The institute transformed my understanding of fashion. The hands-on training with industry experts helped me land my dream job at a top design house!',
    rating: 5,
    avatar: '/avatars/student1.png',
    date: 'June 2023'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    course: 'Textile Technology',
    review: 'The curriculum is perfectly balanced between theory and practice. The state-of-the-art labs gave me the technical skills that set me apart in the industry.',
    rating: 4,
    avatar: '/avatars/student2.png',
    date: 'March 2023'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    course: 'Fashion Marketing',
    review: 'The business side of fashion was a mystery to me until I joined this institute. The industry connections and internship opportunities are unmatched.',
    rating: 5,
    avatar: '/avatars/student3.png',
    date: 'January 2024'
  },
];

const StudentReviews = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const nextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoRotate || isHovering) return;
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [autoRotate, activeReview, isHovering]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Students Say
        </motion.h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              key={reviews[activeReview].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
              aria-live="polite"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200 relative"
                >
                  <Image 
                    src={reviews[activeReview].avatar} 
                    alt={reviews[activeReview].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{reviews[activeReview].name}</h3>
                      <p className="text-pink-600 font-medium">{reviews[activeReview].course}</p>
                      <p className="text-gray-500 text-sm mt-1">{reviews[activeReview].date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < reviews[activeReview].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 italic">"{reviews[activeReview].review}"</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition z-10"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition z-10"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveReview(index)}
              className={`w-4 h-4 rounded-full transition-all ${activeReview === index ? 'bg-pink-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setAutoRotate(!autoRotate)}
            className="text-sm text-pink-600 hover:text-pink-800 font-medium flex items-center gap-2"
          >
            {autoRotate ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Pause auto-rotation
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Resume auto-rotation
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;