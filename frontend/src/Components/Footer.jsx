import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Knowledge Hub</h3>
            <p className="text-sm md:text-base text-gray-400">Igniting Curiosity, Establishing Success.</p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm md:text-base text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-sm md:text-base text-gray-400 hover:text-white">About</a></li>
              <li><a href="/services" className="text-sm md:text-base text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/testimonials" className="text-sm md:text-base text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="/booking-contact" className="text-sm md:text-base text-gray-400 hover:text-white">Booking</a></li>
              <li><a href="/resources" className="text-sm md:text-base text-gray-400 hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a href="mailto:hooriahashmi7@gmail.com" className="flex items-center text-sm md:text-base text-gray-400 hover:text-white">
                <FaEnvelope className="mr-2" /> hooriahashmi7@gmail.com
              </a>
              <a href="tel:0535378349" className="flex items-center text-sm md:text-base text-gray-400 hover:text-white">
                <FaPhone className="mr-2" /> 0535378349
              </a>
              <a href="https://www.instagram.com/knowledgeable_hub?igsh=MTNia3YxemNuZWo2bQ==" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center text-sm md:text-base text-gray-400 hover:text-white">
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm md:text-base text-gray-400">&copy; {new Date().getFullYear()} Knowledge Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;