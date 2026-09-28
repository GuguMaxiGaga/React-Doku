import pg from 'pg';
const { Pool } = pg;

export async function loginRoute(request, response) {
  const { username, password } = request.body;

  try {
    const userPool = new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: username,
      password: password,
    });

    await userPool.query('SELECT 1');
    await userPool.end();

    response.json({ username });
  } catch {
    response.status(401).json({ error: 'Ungültige Zugangsdaten.' });
  }
}