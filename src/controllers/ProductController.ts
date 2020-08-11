import { Request, Response } from 'express';
import Product from '../schemas/Product';

class ProductController {
  public static async find(req: Request, res: Response): Promise<Response> {
    const products = await Product.find();

    return res.json(products);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const product = await Product.create(req.body);

    return res.json(product);
  }
}

export default ProductController;
