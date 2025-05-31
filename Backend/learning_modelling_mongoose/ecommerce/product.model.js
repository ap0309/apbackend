import mongoose from 'mongoose';
import { Category } from './category.model';
import { Int32 } from 'bson';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: True,
    },
    description: {
      type: String,
      required: True,
    },
    ProductImage: {
      type: String,
      required: True,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: True,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: True,
    },
  },
  { timestamps: True }
);

export const Product = mongoose.model('Product', productSchema);
