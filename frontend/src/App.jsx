import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import BookingContact from './Components/BookingContact';
import Resources from './Components/Resources';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  // Apply dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Pass dark mode state and toggle function to Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main app container */}
      <div className="font-montserrat flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route
              path="/booking-contact"
              element={<BookingContact darkMode={darkMode} />}
            />
            <Route path="/resources" element={<Resources darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route
              path="/testimonials"
              element={<Testimonials darkMode={darkMode} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;