import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });
import { pool } from './pool.js';
import { loginRoute } from './routes/login.js';
import { addApplicationsRoute } from './routes/addApplications.js';
import { getApplicationsRoute } from './routes/getApplications.js';

const requiredVariables = ['DB_HOST', 'DB_PORT', 'DB_NAME'];
const missingVariables = requiredVariables.filter((v) => !process.env[v]);
if (missingVariables.length > 0) {
  throw new Error(`In deiner .env fehlen: ${missingVariables.join(', ')}`);
}

const app = express();
app.use(express.json());

app.get('/api/health', async (_request, response) => {
  try {
    const result = await pool.query('SELECT NOW() AS database_time');
    response.json({ connected: true, databaseTime: result.rows[0].database_time });
  } catch (error) {
    response.status(500).json({ connected: false, message: error.message });
  }
});

app.post('/api/login', loginRoute);
app.post('/api/applications', addApplicationsRoute);
app.get('/api/applications/:username', getApplicationsRoute);

const port = Number(process.env.PORT) || 3001;
app.listen(port, () => console.log(`API läuft auf http://localhost:${port}`));