import path from 'path';
import { fileURLToPath } from 'url';
import Booking from '../models/Booking.js';
import { createXlsx } from '../services/xlsxService.js';
import { sendEmail } from '../services/emailService.js';

// Define __dirname manually (since it's not available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newBooking = new Booking({ name, email, phone, message });
    await newBooking.save();

    res.status(201).json(newBooking);

    try {
      const bookings = await Booking.find();
      const xlsxFilePath = await createXlsx(bookings);

      const recipient = "kojoben29@gmail.com";
      const subject = "New Booking Notification";
      const body = `A new booking has been made by ${name}.`;

      await sendEmail(recipient, subject, body, xlsxFilePath);
    } catch (taskError) {
      console.error("Error in background tasks:", taskError.message);
    }
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res.status(400).json({ message: error.message });
  }
};


// Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ message: "Error retrieving bookings" });
  }
};

// Get a single booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a booking by ID
export const updateBookingById = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, message },
      { new: true }
    );
    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a booking by ID
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
