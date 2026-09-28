export async function DbManager (application, username) {
    const response = await fetch ('/api/applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //Betrieb
            betrieb: application.betrieb,
            ansprechpartner: application.ansprechpartner,
            telefon: application.telefon,
            email: application.email,
            internet: application.internet,
            strasse: application.strasse,
            hausnummer: application.hausnummer,
            plz: application.plz,
            ort: application.ort,
            anwendungen: application.anwendungen,

            //Bewerbung
            beworbenAm: application.beworbenAm,
            rueckmeldungAm: application.rueckmeldungAm,
            nachgefragtAm: application.nachgefragtAm,
            telefoniertMit: application.telefoniertMit,
            moeglich: application.moeglich,
            praktikumAb: application.praktikumAb,
            entfernung: application.entfernung,
            fahrtzeit: application.fahrtzeit,
            
            schuelerId: 1,
            db_username: username
            
        }),
    });

    if (!response.ok){
        throw new Error('Speichern fehlgeschlagen');
    }
}
