import { handle } from "../handler";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Product, products } from "../models/product";
const db = require("./testdb");

beforeEach(async () => {
  await products.create({ sku: "abc" });
});

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});

describe("ProductService", () => {
  test("It returns a 200 status code ", async () => {
    const event: APIGatewayProxyEvent = {
      body: "",
      pathParameters: { productSKU: "abc" },
    } as any;
    const response = await handle(event);
    expect(response.statusCode).toBe(200);
  });
  test("Should have got the correct product", async () => {
    const event: APIGatewayProxyEvent = {
      body: "",
      pathParameters: { productSKU: "abc" },
    } as any;
    const response = await handle(event);
    const product = JSON.parse(response.body) as Product;
    expect(product.sku).toBe("abc");
  });
  test("Should have returned 400 not found if product is not found", async () => {
    const event: APIGatewayProxyEvent = {
      body: "",
      pathParameters: { productSKU: "ahjgbc" },
    } as any;

    const response = await handle(event);
    expect(response.statusCode).toBe(400);
  });
});
