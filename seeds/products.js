import mongoose from 'mongoose';
import Product from '../models/Product.js';

const productsSeedData = [
  {
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation technology",
    price: 199.99,
    originalPrice: 249.99,
    stock: 50,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500"
    ],
    category: "Electronics",
    isBestSeller: true,
    ratings: [],
    specifications: [
      { name: "Battery Life", value: "30 hours" },
      { name: "Connectivity", value: "Bluetooth 5.0" }
    ],
    tags: ["wireless", "headphones", "audio"]
  },
  {
    name: "Classic Denim Jacket",
    description: "Timeless denim jacket with modern fit",
    price: 89.99,
    originalPrice: 99.99,
    stock: 100,
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
    ],
    category: "Clothing",
    isBestSeller: true,
    specifications: [
      { name: "Material", value: "100% Cotton" },
      { name: "Fit", value: "Regular" }
    ],
    tags: ["denim", "jacket", "clothing"]
  },
  // Add more products...
];

export const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsSeedData);
    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};
