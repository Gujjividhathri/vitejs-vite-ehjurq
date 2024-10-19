import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model('Booking', BookingSchema);