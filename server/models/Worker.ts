import mongoose from 'mongoose';

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: [{ type: String }],
  rating: { type: Number, default: 0 },
});

export default mongoose.model('Worker', WorkerSchema);