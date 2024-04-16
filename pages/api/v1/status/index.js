import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionResult = await database.query("SHOW server_version;");
  const versionResultValue = versionResult.rows[0].server_version;

  const [maxConnectionsResult, superuserReservedConnectionsResult] =
    await database.query(
      "SHOW max_connections; SHOW superuser_reserved_connections;"
    );
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;
  const superuserReservedConnectionsValue =
    superuserReservedConnectionsResult.rows[0].superuser_reserved_connections;
  const openConnectionsResult = await database.query({
    text: "SELECT numbackends as opened_connections FROM pg_stat_database where datname = $1",
    values: [process.env.POSTGRES_DB],
  });
  const openConnectionsValue = openConnectionsResult.rows[0].opened_connections;
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        status: "healthy",
        version: versionResultValue,
        max_connections:
          parseInt(maxConnectionsValue) -
          parseInt(superuserReservedConnectionsValue),
        opened_connections: openConnectionsValue,
      },
    },
  });
}

export default status;
