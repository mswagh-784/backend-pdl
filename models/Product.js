import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String, required: true }],
  stock: { type: Number, required: true, default: 0 },
  ratings: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5 },
    review: String,
    date: { type: Date, default: Date.now }
  }],
  specifications: [{
    name: String,
    value: String
  }],
  isBestSeller: { type: Boolean, default: false },
  isNewArrival: { type: Boolean, default: false },
  discount: { type: Number, default: 0 }, // Percentage
  tags: [String],
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
