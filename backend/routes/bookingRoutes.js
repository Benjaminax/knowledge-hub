import express from 'express';
import { createBooking, getBookings, getBookingById, updateBookingById, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

// Define routes
router.post('/', createBooking); // Create a new booking
router.get('/', getBookings); // Get all bookings
router.get('/:id', getBookingById); // Get a single booking by ID
router.put('/:id', updateBookingById); // Update a booking by ID
router.delete('/:id', deleteBooking); // Delete a booking by ID

export default router;