import express from 'express';
import { createOrder, getOrders, getOrder } from '../controllers/orders.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.get('/:id', protect, getOrder);

export default router;
