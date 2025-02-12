import React from 'react';
import { motion } from 'framer-motion';
import ServicesBackground from '../assets/images/ServicesBackground.jpg'; // Import the background image

const Services = ({ darkMode }) => {
  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="services"
      className={`min-h-screen flex flex-col lg:flex-row ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      {/* Background Image Section (Full Width on Mobile, Left Half on Desktop) with Dark Overlay */}
      <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ServicesBackground})` }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Section (Full Width on Mobile, Right Half on Desktop) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="container mx-auto text-center lg:text-left">
          {/* Add padding to the top of the content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-8 lg:pt-16" // Adjust padding-top for mobile and desktop
          >
            {/* Heading with Gradient Text */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-4xl font-bold bg-gradient-to-r ${
                darkMode ? 'from-green-400 to-blue-400' : 'from-green-600 to-blue-600'
              } bg-clip-text text-transparent mb-8 font-montserrat`}
            >
              Helping You Improve
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } mb-8 font-montserrat`}
            >
              We'll help you study smart! Our STEM tutoring services cover a range of topics to ensure success.
            </motion.p>

            {/* Technology-related Courses */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h3
                className={`text-2xl ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                } font-semibold mb-4`}
              >
                Technology-related Courses
              </h3>
              <ul className="space-y-3">
                {[
                  'Artificial Intelligence',
                  'Fundamentals of Robotics',
                  'Programming',
                  'Cybersecurity and Networking',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`text-lg ${
                      darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    } hover:translate-x-2 transition-all duration-300 flex items-center gap-2 justify-center lg:justify-start`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Science-based Courses */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8"
            >
              <h3
                className={`text-2xl ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                } font-semibold mb-4`}
              >
                Science-based Courses
              </h3>
              <ul className="space-y-3">
                {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`text-lg ${
                      darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    } hover:translate-x-2 transition-all duration-300 flex items-center gap-2 justify-center lg:justify-start`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3
                className={`text-2xl ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                } font-semibold mb-4`}
              >
                Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  'One-on-One Sessions Available',
                  'Interactive Learning Environment',
                  'Flexible Schedules',
                  'Hands-on Activities and Challenges',
                  'Discounts Available for Siblings',
                  'Free English Lessons',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`text-lg ${
                      darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    } hover:translate-x-2 transition-all duration-300 flex items-center gap-2 justify-center lg:justify-start`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;