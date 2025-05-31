import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: True,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: True,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: True,
    },
    order_items: {
      type: [orderItemSchema],
      required: True,
    },
    shipping_add: {
      type: String,
      required: Type,
    },
    status: {
      type: String,
      enum: ['pending', 'cancelled', 'delivered'],
      default: 'pending',
    },
  },
  { timestamps: True }
);

export const order = mongoose.model('order', orderSchema);
