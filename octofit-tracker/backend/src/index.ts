import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker';

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running on port 8000.' });
});

app.use('/api/users', userRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB on port 27017');
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
