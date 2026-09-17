import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });

const { Pool } = pg;
const requiredVariables = ['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];
const missingVariables = requiredVariables.filter((variable) => !process.env[variable]);

if (missingVariables.length > 0) {
  throw new Error(`In deiner .env fehlen: ${missingVariables.join(', ')}`);
}

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const app = express();
app.use(express.json());


app.get('/api/health', async (_request, response) => {
  try {
    const result = await pool.query('SELECT NOW() AS database_time');
    response.json({ connected: true, databaseTime: result.rows[0].database_time });
  } catch (error) {
    console.error('PostgreSQL-Verbindung fehlgeschlagen:', error.message);
    response.status(500).json({ connected: false, message: 'PostgreSQL-Verbindung fehlgeschlagen.' });
  }
});

const port = Number(process.env.PORT) || 3001;
app.post('/api/applications', async (request, response) => {
  const {betrieb, ansprechpartner, email} = request.body;
  
  try {
    await pool.query(
      `INSERT INTO gruppe_shared.betrieb (name, ansprechpartner, telefon)
      VALUES ($1,$2,$3)`,
      [betrieb, ansprechpartner, email]
    );

    response.status(201).json({saved:true});
  }
  catch (error){
    console.error(error.message);
    response.status(500).json({saved: false});
  }
});
app.listen(port, () => {
  console.log(`API läuft auf http://localhost:${port}`);
});
