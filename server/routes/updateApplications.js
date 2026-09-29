import { pool } from '../pool.js';

export async function updateApplications(request, response){
  const { betrieb, ansprechpartner, telefon, email, internet, strasse,
          hausnummer, plz, ort, anwendungen, beworbenAm, rueckmeldungAm,
          nachgefragtAm, telefoniertMit, moeglich, praktikumAb,
          entfernung, fahrtzeit, schuelerId, db_username } = request.body;

          
}