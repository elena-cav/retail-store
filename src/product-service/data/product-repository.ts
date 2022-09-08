import product from "../models/product";

const products: product[] = [{ sku: "abc" }, { sku: "cvb" }];

export const getProduct = (sku: string | undefined): product => {
  const foundProduct = products.find((product) => product.sku === sku);
  if (!foundProduct) throw new Error();
  return foundProduct;
};
