import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoginVideo from '../assets/Video/LoginVideo.mp4'; // Import the video

const BookingContact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data); // Handle the response
    alert('Form submitted successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section
      id="booking-contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={LoginVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 ${
            darkMode ? 'bg-black opacity-70' : 'bg-black opacity-50'
          }`}
        ></div>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 ${
          darkMode ? 'bg-gray-900 bg-opacity-50' : 'bg-white bg-opacity-10'
        } backdrop-blur-lg rounded-xl p-6 md:p-8 max-w-md w-full mx-4 border ${
          darkMode ? 'border-gray-700' : 'border-white border-opacity-20'
        } shadow-2xl`}
      >
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-green-400' : 'text-green-600'
          } mb-8 font-montserrat text-center`}
        >
          Book a Session
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              className={`block ${
                darkMode ? 'text-green-400' : 'text-green-600'
              } text-sm font-medium mb-2 font-montserrat`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${
                darkMode ? 'bg-gray-800 text-green-400' : 'bg-white bg-opacity-10 text-green-600'
              } placeholder-green-600 placeholder-opacity-70 rounded-lg focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-green-400' : 'focus:ring-green-600'
              } border ${
                darkMode ? 'border-gray-700' : 'border-green-600 border-opacity-20'
              }`}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className={`block ${
                darkMode ? 'text-green-400' : 'text-green-600'
              } text-sm font-medium mb-2 font-montserrat`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${
                darkMode ? 'bg-gray-800 text-green-400' : 'bg-white bg-opacity-10 text-green-600'
              } placeholder-green-600 placeholder-opacity-70 rounded-lg focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-green-400' : 'focus:ring-green-600'
              } border ${
                darkMode ? 'border-gray-700' : 'border-green-600 border-opacity-20'
              }`}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              className={`block ${
                darkMode ? 'text-green-400' : 'text-green-600'
              } text-sm font-medium mb-2 font-montserrat`}
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${
                darkMode ? 'bg-gray-800 text-green-400' : 'bg-white bg-opacity-10 text-green-600'
              } placeholder-green-600 placeholder-opacity-70 rounded-lg focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-green-400' : 'focus:ring-green-600'
              } border ${
                darkMode ? 'border-gray-700' : 'border-green-600 border-opacity-20'
              }`}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              className={`block ${
                darkMode ? 'text-green-400' : 'text-green-600'
              } text-sm font-medium mb-2 font-montserrat`}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${
                darkMode ? 'bg-gray-800 text-green-400' : 'bg-white bg-opacity-10 text-green-600'
              } placeholder-green-600 placeholder-opacity-70 rounded-lg focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-green-400' : 'focus:ring-green-600'
              } border ${
                darkMode ? 'border-gray-700' : 'border-green-600 border-opacity-20'
              }`}
              rows="5"
              placeholder="Enter your message"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full ${
              darkMode ? 'bg-green-400 text-gray-900' : 'bg-green-600 text-white'
            } px-6 py-3 rounded-lg font-montserrat font-semibold ${
              darkMode ? 'hover:bg-green-300' : 'hover:bg-green-700'
            } transition-colors duration-300 focus:outline-none focus:ring-2 ${
              darkMode ? 'focus:ring-green-400' : 'focus:ring-green-600'
            } focus:ring-offset-2`}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default BookingContact;