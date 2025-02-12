import express from 'express';
import Service from '../models/Services.js';

const router = express.Router();

// Add a service
router.post('/', async (req, res) => {
  const { subject, format, price, description } = req.body;

  try {
    const service = new Service({ subject, format, price, description });
    await service.save();
    res.status(201).json({ message: 'Service added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding service', error });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error });
  }
});

export default router;