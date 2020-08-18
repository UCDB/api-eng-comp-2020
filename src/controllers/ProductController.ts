import { Request, Response } from 'express';
import Product from '../schemas/Product';

class ProductController {
  public static async find(req: Request, res: Response): Promise<Response> {
    const products = await Product.find();

    return res.json(products);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const product = await Product.create(req.body);

    return res.status(201).json(product);
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) {
      const {
        name, code, description, rating,
      } = req.body;

      product.set({
        name, code, description, rating,
      });

      product.save(req.body);

      return res.json(product);
    }

    return res.status(404).send();
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) {
      await product.deleteOne();

      return res.status(204).send();
    }

    return res.status(404).send();
  }
}

export default ProductController;
