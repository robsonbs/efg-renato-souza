describe("GET /api/v1/status", () => {
  let response;
  let body;

  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status");
    body = await response.json();
  });

  test("should return status 200", () => {
    expect(response.status).toEqual(200);
  });

  test("should return valid updated_at as ISO string", () => {
    expect(body.updated_at).toBeDefined();

    const parsedUpdatedAt = new Date(body.updated_at).toISOString();
    expect(parsedUpdatedAt).toEqual(body.updated_at);
  });
});

describe("GET /api/v1/status database", () => {
  let response;
  let database;
  let responseBody;

  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status");
    responseBody = await response.json();
    database = responseBody.dependencies.database;
  });

  test("database status should be healthy", () => {
    expect(database.status).toBeDefined();
    expect(database.status).toEqual("healthy");
  });

  test("should return a valid current database version", () => {
    expect(database.version).toBeDefined();
    expect(typeof database.version).toBe("string");
  });

  test("should return the current opened connections as number", () => {
    expect(database.opened_connections).toBeDefined();
    expect(database.opened_connections).toEqual(1);
    expect(typeof database.opened_connections).toBe("number");
  });

  test("should return the max connections for database", () => {
    expect(database.max_connections).toBeDefined();
    expect(typeof database.max_connections).toBe("number");
  });

  test("should return object containing", () => {
    expect(responseBody).toMatchObject(
      expect.objectContaining({
        updated_at: expect.any(String),
        dependencies: {
          database: {
            status: expect.any(String),
            version: expect.any(String),
            max_connections: expect.any(Number),
            opened_connections: expect.any(Number),
          },
        },
      })
    );
  });
});
