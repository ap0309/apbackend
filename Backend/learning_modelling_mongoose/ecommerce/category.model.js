import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: True,
    },
  },
  { timestamps: True }
);

export const Category = mongoose.model('Category', categorySchema);
