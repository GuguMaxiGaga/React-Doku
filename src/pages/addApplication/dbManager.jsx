export async function DbManager (application) {
    const response = await fetch ('/api/applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            betrieb: application.betrieb,
            ansprechpartner: application.ansprechpartner,
            telefon: application.telefon,
            email: application.email,
            internet: application.internet,
            strasse: application.strasse,
            hausnummer: application.hausnummer,
            plz: application.plz,
            ort: application.ort,
            anwendungen: application.anwendungen
        }),
    });

    if (!response.ok){
        throw new Error('Speichern fehlgeschlagen');
    }
}
