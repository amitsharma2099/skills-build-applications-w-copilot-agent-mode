import { Router } from 'express';
import { User } from '../models/User';

export const userRouter = Router();

userRouter.get('/', async (_req, res) => {
  const users = await User.find().limit(10);
  res.json(users);
});

userRouter.post('/', async (req, res) => {
  const { username, email } = req.body;
  const user = new User({ username, email });
  await user.save();
  res.status(201).json(user);
});
