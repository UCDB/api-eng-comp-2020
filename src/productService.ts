import { Product, products } from './productInterface';

const productsList: Product[] = products;

const find = async (): Promise<Product[]> => new Promise((resolve) => resolve(productsList));

const create = async (product: Product): Promise<void> => new Promise((resolve, reject) => {
  const productAlreadyExists = productsList.includes(product);

  if (productAlreadyExists) {
    reject(new Error('This product already exists.'));
  }
  productsList.push(product);

  resolve();
});

const update = async (product: Product): Promise<Product> => new Promise((resolve, reject) => {
  const { id } = product;
  if (!id) {
    reject(new Error('Id must be provided.'));
  }

  const productIndex = productsList.findIndex((prod) => prod.id === id);
  if (productIndex < 0) {
    reject(new Error(`Product with id ${id} not found.`));
  }
  productsList[productIndex] = product;

  resolve(product);
});

const remove = async (id: Product['id']): Promise<void> => new Promise((resolve, reject) => {
  const productIndex = productsList.findIndex((prod) => prod.id === id);
  if (productIndex < 0) {
    reject(new Error(`Product with id ${id} not found.`));
  }
  productsList.slice(productIndex, 1);
  resolve();
});

export default {
  find, create, update, remove,
};
