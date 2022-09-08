import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProduct } from "./data/product-repository";
export const handle = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const sku = event.pathParameters?.productSKU;
  let foundProduct;
  try {
    foundProduct = getProduct(sku);
  } catch (e) {
    return { statusCode: 400, body: "Product not found" };
  }

  return { statusCode: 200, body: JSON.stringify(foundProduct) };
};
