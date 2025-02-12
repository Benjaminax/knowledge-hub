import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation(); // Get the current route location
  const isHomePage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`p-4 fixed top-0 left-0 right-0 z-50 font-montserrat transition-transform duration-300 ${
        isHomePage ? 'bg-transparent' : 'bg-green-800 bg-opacity-50'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl md:text-2xl font-bold">Knowledge Hub</div>
        
        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items */}
        <ul className={`md:flex space-x-4 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/" className="text-white hover:text-gray-300 text-sm md:text-base">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 text-sm md:text-base">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300 text-sm md:text-base">Services</Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-white hover:text-gray-300 text-sm md:text-base">Testimonials</Link>
          </li>
          <li>
            <Link to="/booking-contact" className="text-white hover:text-gray-300 text-sm md:text-base">Booking</Link>
          </li>
          <li>
            <Link to="/resources" className="text-white hover:text-gray-300 text-sm md:text-base">Resources</Link>
          </li>

          {/* Dark Mode Toggle Switch */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;