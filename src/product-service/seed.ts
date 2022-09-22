import mongoose from "mongoose";
import { products, Product } from "./models/product";
import * as dotenv from "dotenv";
dotenv.config();

const data: Product[] = [
  {
    sku: "llll",
  },
  {
    sku: "zzzz",
  },
  {
    sku: "bbbb",
  },
  {
    sku: "aaaa",
  },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGOURI || "");
  await products.create(data);
  await mongoose.connection.close();
};

seed().then(() => {
  console.log("IN SEED");
});
