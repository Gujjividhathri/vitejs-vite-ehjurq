import express from 'express';
import Booking from '../models/Booking';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: 'Error creating booking' });
  }
});

export default router;