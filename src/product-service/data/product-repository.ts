import { products, Product } from "../models/product";

export const getProduct = async (sku: string | undefined): Promise<Product> => {
  const foundProduct = await products.findOne({ sku });
  if (!foundProduct) throw new Error();
  return foundProduct;
};
