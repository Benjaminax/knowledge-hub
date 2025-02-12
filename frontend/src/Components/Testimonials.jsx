import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, Quote, Trash } from 'lucide-react';

const Testimonials = ({ darkMode }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    text: '',
    author: '',
    rating: 5,
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Retrieve email from local storage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('testimonialEmail');
    if (savedEmail) {
      setNewTestimonial((prev) => ({ ...prev, email: savedEmail }));
    }
  }, []);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/testimonials');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        setMessage({ type: 'error', text: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewTestimonial((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTestimonial.text || !newTestimonial.author || !newTestimonial.email) {
      setMessage({ type: 'error', text: 'Please fill out all fields.' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/testimonials/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTestimonial.author,
          email: newTestimonial.email,
          feedback: newTestimonial.text,
          rating: newTestimonial.rating,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit testimonial');

      const data = await response.json();
      setTestimonials([...testimonials, data]);
      setNewTestimonial({
        text: '',
        author: '',
        rating: 5,
        email: newTestimonial.email, // Keep the email for future deletions
      });

      // Save email to local storage
      localStorage.setItem('testimonialEmail', newTestimonial.email);
      setMessage({ type: 'success', text: 'Testimonial submitted successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  const handleDelete = async (id, email) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const response = await fetch(`http://localhost:5000/testimonials/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) throw new Error('Failed to delete testimonial');

        setTestimonials(testimonials.filter((testimonial) => testimonial._id !== id));
        setMessage({ type: 'success', text: 'Testimonial deleted successfully!' });
      } catch (error) {
        setMessage({ type: 'error', text: error.message });
      }
    }
  };

  const StarRating = ({ rating, onRatingChange, interactive = false }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            } ${
              interactive ? 'cursor-pointer hover:opacity-80' : ''
            }`}
            onClick={() => interactive && onRatingChange(star)}
            aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className={`min-h-screen flex items-center pt-25 pb-10 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? 'text-green-400' : 'text-green-800'
            } mb-8 font-montserrat`}
          >
            Testimonials
          </h2>

          {message.text && (
            <div
              className={`mb-4 p-4 rounded-lg ${
                message.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}
            >
              {message.text}
            </div>
          )}

          {loading ? (
            <div className="text-center">Loading testimonials...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className={`p-6 rounded-lg shadow-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={testimonial.rating} />
                    <div className="flex items-center space-x-4">
                      <Quote size={24} className="text-green-600" />
                      {testimonial.email === newTestimonial.email && (
                        <Trash
                          size={20}
                          className="text-red-500 cursor-pointer hover:text-red-600"
                          onClick={() => handleDelete(testimonial._id, testimonial.email)}
                          aria-label="Delete testimonial"
                        />
                      )}
                    </div>
                  </div>
                  <p
                    className={`text-lg ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    } mb-4 font-montserrat`}
                  >
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex flex-col space-y-2">
                    <p
                      className={`${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      } font-bold font-montserrat`}
                    >
                      — {testimonial.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Mail size={16} />
                      <span>{testimonial.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className={`p-6 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}
          >
            <h3
              className={`text-xl font-bold ${
                darkMode ? 'text-green-400' : 'text-green-800'
              } mb-4 font-montserrat`}
            >
              Add Your Testimonial
            </h3>

            <div className="mb-4">
              <label
                className={`block ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } font-montserrat mb-2`}
              >
                Rating
              </label>
              <StarRating
                rating={newTestimonial.rating}
                onRatingChange={handleRatingChange}
                interactive={true}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="text"
                className={`block ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } font-montserrat mb-2`}
              >
                Your Testimonial
              </label>
              <textarea
                id="text"
                name="text"
                value={newTestimonial.text}
                onChange={handleInputChange}
                className={`w-full p-2 border ${
                  darkMode ? 'border-gray-600 bg-gray-700 text-gray-100' : 'border-gray-300 bg-white'
                } rounded-lg font-montserrat`}
                rows="4"
                required
                aria-label="Testimonial text"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="author"
                className={`block ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } font-montserrat mb-2`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={newTestimonial.author}
                onChange={handleInputChange}
                className={`w-full p-2 border ${
                  darkMode ? 'border-gray-600 bg-gray-700 text-gray-100' : 'border-gray-300 bg-white'
                } rounded-lg font-montserrat`}
                required
                aria-label="Your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className={`block ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } font-montserrat mb-2`}
              >
                Your Email
              </label>
              <div className="relative">
                <Mail
                  size={20}
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newTestimonial.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 p-2 border ${
                    darkMode ? 'border-gray-600 bg-gray-700 text-gray-100' : 'border-gray-300 bg-white'
                  } rounded-lg font-montserrat`}
                  required
                  aria-label="Your email"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`bg-green-800 text-white px-4 py-2 rounded-lg font-montserrat ${
                darkMode ? 'hover:bg-green-700' : 'hover:bg-green-900'
              }`}
              aria-label="Submit testimonial"
            >
              Submit Testimonial
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;