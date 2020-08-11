import { Schema, model, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  code: string;
  description?: string;
  rating?: number;
}

const ProductSchema = new Schema({
  name: String,
  code: String,
  description: String,
  rating: Number,
});

export default model<Product>('products', ProductSchema);
