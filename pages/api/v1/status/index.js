import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const queryResult = await database.query({
    text: `SELECT 
    current_setting('server_version')  AS server_version,
    cast(current_setting('max_connections')AS INT) AS max_connections,
    cast(current_setting('superuser_reserved_connections') AS INT) AS reserved_connections,
    cast((SELECT count(pid) FROM pg_stat_activity WHERE state = 'active' and datname = $1)AS INT) AS opened_connections;`,
    values: [process.env.POSTGRES_DB],
  });
  const versionResultValue = queryResult.rows[0].server_version;
  const maxConnectionsValue = queryResult.rows[0].max_connections;
  const superuserReservedConnectionsValue =
    queryResult.rows[0].reserved_connections;
  const openConnectionsValue = queryResult.rows[0].opened_connections;
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        status: "healthy",
        version: versionResultValue,
        max_connections:
          maxConnectionsValue - superuserReservedConnectionsValue,
        opened_connections: openConnectionsValue,
      },
    },
  });
}

export default status;
