import { Request, Response } from 'express';
import productService from './productService';
import { Product } from './productInterface';

const list = async (request: Request, response: Response): Promise<Response> => {
  const productList: Product[] = await productService.find();
  return response.status(200).json(productList);
};

const create = async (request: Request, response: Response): Promise<Response> => {
  try {
    await productService.create(request.body);
    return response.status(201).send();
  } catch (error) {
    return response.status(500).json(error);
  }
};

export default { list, create };
