import orchestrator from "tests/orchestrator.js";
import { cleanDatabase } from "./index.js";
beforeAll(async () => {
  await orchestrator.waitForAllServices();
  cleanDatabase();
});

test("GET /api/v1/migrations  should return status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  expect(response.status).toEqual(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
