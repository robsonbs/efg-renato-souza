const { exec } = require("node:child_process");
const state = [
  ".      ",
  ".  .   ",
  ".  .  .",
  "   .  .",
  "      .",
  "       ",
];

function checkPostgres(current) {
  exec("docker exec postgres_dev pg_isready --host localhost", handleReturn);

  async function handleReturn(_, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(
        `\r🔴 Aguardando Postgres aceitar conexões ${state[current % 6]} `
      );
      await delay(300);
      return checkPostgres((current + 1) % 6);
    }
    process.stdout.write("\n🟢 Postgres está pronto e aceitando conexões\n");
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkPostgres(0);
