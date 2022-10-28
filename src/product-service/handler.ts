import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProduct } from "./data/product-repository";
import mongoose from "mongoose";
import { products } from "./models/product";

export const handle = async (event: APIGatewayProxyEvent): Promise<any> => {
  const sku = event.pathParameters?.productSKU;

  if (!sku) {
    return {
      statusCode: 500,
    };
  }

  console.log("ENV URI", process.env.MONGOURI);
  await mongoose.connect(process.env.MONGOURI || "");

  let foundProduct;
  try {
    foundProduct = await getProduct(sku);
  } catch (e) {
    return { statusCode: 400, body: "Product not found" };
  }

  return { statusCode: 200, body: JSON.stringify(foundProduct) };
};
