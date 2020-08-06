import { Product, products } from './productInterface';

const productsList: Product[] = products;

const get = async (): Promise<Product[]> => productsList;

const create = async (product: Product): Promise<void> => {
  productsList.push(product);
};

export default { get, create };
