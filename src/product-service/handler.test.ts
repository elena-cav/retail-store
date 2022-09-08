import { handle } from "./handler";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

describe("ProductService", () => {
  test("It returns a 200 status code ", async () => {
    const event: APIGatewayProxyEvent = {
      body: "",
    } as any;
    const response = await handle(event);
    expect(response.statusCode).toBe(200);
  });
});
