import { pool } from '../pool.js';

export async function getApplicationsRoute(request, response) {

  const { username } = request.params;

  try {
    const result = await pool.query(
     
  `SELECT 
    b.id AS bewerbung_id,
    bt.id AS betrieb_id,
    bt.betrieb, bt.ansprechpartner, bt.telefon, bt.email,
    bt.internet, bt.strasse, bt.hausnummer, bt.plz, bt.ort, bt.anwendungen,
    b.beworben_am, b.rueckmeldung_am, b.nachgefragt_am,
    b.telefoniert_mit, b.moeglich, b.praktikum_ab, b.entfernung, b.fahrtzeit
   FROM gruppe_shared.bewerbung b
   JOIN gruppe_shared.betrieb bt ON b.betrieb_id = bt.id
   WHERE b.db_username = $1`,
  [username]
);
    

    response.json(result.rows);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: 'Fehler beim Laden.' });
  }
}