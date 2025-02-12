import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  format: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Service', serviceSchema);