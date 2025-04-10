import express from 'express';
import { getProducts, getProduct, createProduct } from '../controllers/products.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', protect, createProduct);

export default router;
