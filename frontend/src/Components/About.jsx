import React from 'react';
import { motion } from 'framer-motion';
import AboutBackground from '../assets/images/AboutBackground.jpg'; // Import the background image

const About = ({ darkMode }) => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center ${
        darkMode ? 'text-white' : 'text-gray-900'
      } py-16 relative`}
      style={{
        backgroundImage: `url(${AboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? 'bg-black opacity-70' : 'bg-black opacity-50'
        }`}
      ></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`p-6 md:p-10 rounded-lg shadow-lg ${
            darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'
          }`}
        >
          {/* Heading with Gradient Text */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${
              darkMode ? 'from-green-400 to-blue-400' : 'from-green-600 to-blue-600'
            } bg-clip-text text-transparent mb-6 md:mb-10 text-center font-montserrat`}
          >
            What is Knowledge Hub?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-base md:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-6 leading-relaxed font-montserrat text-center`}
          >
            We are passionate about inspiring young minds through STEM education. Our mission is to make learning fun, engaging, and effective for students in grades 3–8.
          </motion.p>

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-base md:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-6 leading-relaxed font-montserrat`}
          >
            I have a strong academic background, having earned top honors and recognition for my dedication to excellence. I was awarded the Overall Best Student Citation and have received subject-based awards in science and technology, demonstrating my expertise and passion in these areas. My involvement in the Robotics Club further enriched my knowledge and hands-on experience in cutting-edge technologies, robotics, and programming. I have also undertaken independent projects, showcasing my commitment to innovation and continuous learning. These projects, available on my GitHub profile, reflect my practical application of STEM concepts and my ability to solve real-world problems through coding and technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-base md:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-6 leading-relaxed font-montserrat`}
          >
            With this strong foundation and a passion for guiding others, I am dedicated to helping students unlock their potential, build confidence, and achieve academic success in science, technology, and beyond. Studying Computer Science at Academic City University and taking cybersecurity courses puts me in a great position to solve this problem.
          </motion.p>

          {/* Age Groups */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3
              className={`text-xl md:text-2xl font-bold ${
                darkMode ? 'text-green-400' : 'text-green-800'
              } mb-6 font-montserrat text-center`}
            >
              Age Groups
            </h3>
            <ul className="list-disc list-inside text-base md:text-lg mb-6 font-montserrat pl-6">
              {["Young children between the ages of 5 and 12.", "Teenagers and college students from ages 13 to 20."].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`text-base md:text-lg ${
                    darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                  } hover:translate-x-2 transition-all duration-300 flex items-center gap-2`}
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

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3
              className={`text-xl md:text-2xl font-bold ${
                darkMode ? 'text-green-400' : 'text-green-800'
              } mb-6 font-montserrat text-center`}
            >
              Our Mission
            </h3>
            <p
              className={`text-base md:text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } mb-6 leading-relaxed font-montserrat`}
            >
              My mission is to provide high-quality, personalized online tutoring services that foster curiosity, academic excellence, and a love for science and technology. I specialize in delivering engaging and interactive learning experiences for students, ensuring they gain the knowledge and skills necessary to thrive in the modern world.
            </p>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3
              className={`text-xl md:text-2xl font-bold ${
                darkMode ? 'text-green-400' : 'text-green-800'
              } mb-6 font-montserrat text-center`}
            >
              Deliverables
            </h3>
            <ul className="list-disc list-inside text-base md:text-lg mb-6 font-montserrat pl-6">
              {[
                "Weekly tutoring sessions (1-2 hours per session).",
                "Access to supplementary learning materials and resources.",
                "Monthly progress reports highlighting strengths and areas for improvement.",
                "Hands-on projects to encourage practical learning.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`text-base md:text-lg ${
                    darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                  } hover:translate-x-2 transition-all duration-300 flex items-center gap-2`}
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

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h3
              className={`text-xl md:text-2xl font-bold ${
                darkMode ? 'text-green-400' : 'text-green-800'
              } mb-6 font-montserrat text-center`}
            >
              Value Propositions
            </h3>
            <ul className="list-disc list-inside text-base md:text-lg mb-10 font-montserrat pl-6">
              {[
                "One-on-one or Small Group Sessions: Personalized attention to address each student’s needs.",
                "Interactive Learning platforms: Incorporating experiments, coding exercises, and creative projects to reinforce concepts.",
                "Basic science concepts (biology, chemistry, physics).",
                "Introductory coding and robotics.",
                "Hands-on engineering challenges.",
                "Progress Tracking: Regular assessments and progress reports to keep parents informed.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`text-base md:text-lg ${
                    darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                  } hover:translate-x-2 transition-all duration-300 flex items-center gap-2`}
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
      <div className="pb-32"></div> {/* Extra space for the footer */}
    </section>
  );
};

export default About;