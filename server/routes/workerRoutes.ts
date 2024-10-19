import express from 'express';
import Worker from '../models/Worker';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workers' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newWorker = new Worker(req.body);
    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (error) {
    res.status(400).json({ message: 'Error creating worker' });
  }
});

export default router;