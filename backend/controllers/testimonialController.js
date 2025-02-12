import Testimonial from '../models/Testimonial.js';
import validator from 'validator';

// Submit a new testimonial
export const submitTestimonial = async (req, res) => {
  try {
    const { name, email, feedback, rating } = req.body;

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Validate rating (assuming rating is between 1 and 5)
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const newTestimonial = new Testimonial({ name, email, feedback, rating });
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a testimonial
export const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    if (testimonial.email !== email) {
      return res.status(403).json({ message: 'Unauthorized: Email does not match' });
    }
    await Testimonial.findByIdAndDelete(id);
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a testimonial
export const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, email, feedback, rating } = req.body;

  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    if (testimonial.email !== email) {
      return res.status(403).json({ message: 'Unauthorized: Email does not match' });
    }

    // Update the testimonial fields
    testimonial.name = name || testimonial.name;
    testimonial.feedback = feedback || testimonial.feedback;
    testimonial.rating = rating || testimonial.rating;

    await testimonial.save();
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};