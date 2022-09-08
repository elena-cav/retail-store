import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import product from "./models/product";
import { getProduct } from "./data/product-repository";
export const handle = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const sku = event.pathParameters?.productSKU;
  const foundProduct = getProduct(sku);
  return { statusCode: 200, body: JSON.stringify(foundProduct) };
};
