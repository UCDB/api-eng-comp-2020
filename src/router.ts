import { Router } from 'express';
import productRoute from './productRoute';

const router = Router();

router.get('/', (req, res) => res.status(200).json('Welcome to NodeJs App using TypeScript and Nodemon'));

router.get('/products', productRoute.list);
router.post('/products', productRoute.create);

export default router;
