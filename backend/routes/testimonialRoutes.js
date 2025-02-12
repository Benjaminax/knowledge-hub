import express from 'express';
import { submitTestimonial, getTestimonials, deleteTestimonial, updateTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.post('/submit', submitTestimonial);
router.get('/', getTestimonials);
router.delete('/:id', deleteTestimonial); // Route for deleting a testimonial
router.put('/:id', updateTestimonial); // Route for updating a testimonial

export default router;