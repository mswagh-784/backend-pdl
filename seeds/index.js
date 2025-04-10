import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedProducts } from './products.js';
import { seedCategories } from './categories.js';
import { seedOrders } from './orders.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedCategories();
    await seedProducts();
    await seedOrders();
    console.log('All data seeded successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Seeding error:', err);
    process.exit(1);
  });
