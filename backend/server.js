import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // Use Mongoose
import bookingRoutes from './routes/bookingRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Use the booking routes
app.use('/bookings', bookingRoutes);

// Use the testimonial routes
app.use('/testimonials', testimonialRoutes);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// MongoDB connection
const uri = "mongodb+srv://kojoben29:Ost0UIZdvRIEDMRJ@cluster0.7ajsk.mongodb.net/stem?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected via Mongoose"))
.catch(err => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});