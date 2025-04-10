import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }, // Price at time of purchase
    title: String, // Product name at time of purchase
  }],
  totalAmount: { type: Number, required: true },
  shippingAddress: {
    fullName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true }
  },
  paymentInfo: {
    method: { type: String, required: true }, // COD, Card, UPI, etc.
    status: { type: String, default: 'pending' },
    transactionId: String,
    paidAt: Date
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  statusHistory: [{
    status: String,
    date: { type: Date, default: Date.now },
    note: String
  }],
  shippingInfo: {
    provider: String,
    trackingNumber: String,
    estimatedDelivery: Date
  },
  invoice: {
    number: String,
    url: String,
    generatedAt: Date
  },
  discount: {
    code: String,
    amount: Number
  },
  cancellation: {
    reason: String,
    date: Date,
    by: { type: String, enum: ['user', 'admin'] }
  },
  notes: String
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
