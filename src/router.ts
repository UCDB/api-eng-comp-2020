import { Router } from 'express';
import ProductController from './controllers/ProductController';

const router = Router();

router.get('/', (req, res) => res.json('Welcome to NodeJs App using TypeScript and Nodemon'));

router.get('/products', ProductController.find);
router.post('/products', ProductController.create);

export default router;
