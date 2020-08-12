import { Document, model, Schema } from 'mongoose';

interface User extends Document {
  name: string,
  email: string,
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default model<User>('users', UserSchema);
