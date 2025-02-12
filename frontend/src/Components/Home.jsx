import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Background from '../assets/images/Background.jpg';

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-start text-left"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl font-bold text-white mb-4 font-montserrat"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Igniting Curiosity, Establishing Success.
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-300 mb-8 font-montserrat"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Personalized STEM tutoring for kids in grades 3–8. Inspire curiosity, improve grades, and build essential skills!
        </motion.p>
        <div className="space-x-4">
          <Link to="/booking-contact">
            <motion.button 
              className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900 font-montserrat"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Trial
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button 
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 font-montserrat"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;