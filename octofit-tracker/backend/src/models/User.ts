import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  createdAt: Date;
}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: () => new Date() }
});

export const User = model<UserDocument>('User', userSchema);
