import orchestrator from "tests/orchestrator.js";
import { cleanDatabase } from "./index.js";

async function getMigrationsResponse(method) {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method,
  });
  return response;
}

async function getDataBaseStatus() {
  const response = await fetch("http://localhost:3000/api/v1/status");
  return await response.json();
}

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await cleanDatabase();
});

test("OTHER HTTP METHODS to /api/v1/migrations should not let opened connections in database", async () => {
  for (let method of ["HEAD", "PUT", "DELETE", "OPTIONS", "PATCH"]) {
    await cleanDatabase();

    const migrationsResponse = await getMigrationsResponse(method);
    // console.log(`{method: ${method}, status:${migrationsResponse.status}}`);
    expect(migrationsResponse.status).toBe(405);

    const status = await getDataBaseStatus();
    expect(status.dependencies.database.opened_connections).toEqual(1);
  }
});
