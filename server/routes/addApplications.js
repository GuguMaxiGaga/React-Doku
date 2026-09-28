import { pool } from '../pool.js';

export async function addApplicationsRoute(request, response) {
  const { betrieb, ansprechpartner, telefon, email, internet, strasse,
          hausnummer, plz, ort, anwendungen, beworbenAm, rueckmeldungAm,
          nachgefragtAm, telefoniertMit, moeglich, praktikumAb,
          entfernung, fahrtzeit, schuelerId, db_username } = request.body;

  try {
    const betriebResult = await pool.query(
      `INSERT INTO gruppe_shared.betrieb (betrieb, ansprechpartner, telefon, email, internet, strasse, hausnummer, plz, ort, anwendungen)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       RETURNING id`,
      [betrieb, ansprechpartner, telefon, email, internet, strasse, hausnummer, plz, ort, anwendungen]
    );

    const betriebId = betriebResult.rows[0].id;

    await pool.query(
      `INSERT INTO gruppe_shared.bewerbung (db_username, schueler_id, betrieb_id, beworben_am, rueckmeldung_am, nachgefragt_am, telefoniert_mit, moeglich, praktikum_ab, entfernung, fahrtzeit)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [db_username, schuelerId, betriebId, beworbenAm || null, rueckmeldungAm || null, nachgefragtAm || null, telefoniertMit, moeglich, praktikumAb || null, entfernung, fahrtzeit]
    );

    response.status(201).json({ saved: true });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ saved: false });
  }
}