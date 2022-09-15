import { Schema, model } from "mongoose";

export interface Product {
  sku: string;
}

const schema = new Schema<Product>({
  sku: { type: "string", required: true },
});

export const products = model<Product>("products", schema);
