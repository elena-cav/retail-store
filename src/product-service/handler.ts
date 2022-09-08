import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import product from "./product";
export const handle = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const products: product[] = [{ sku: "abc" }, { sku: "cvb" }];
  const sku = event.pathParameters?.productSKU;

  const foundProduct = products.find((product) => product.sku === sku);

  return { statusCode: 200, body: JSON.stringify(foundProduct) };
};
