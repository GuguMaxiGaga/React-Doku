export async function DbManager (application) {
    const response = await fetch ('/api/applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            betrieb: application.betrieb,
            ansprechpartner: application.ansprechpartner,
            email: application.email
        }),
    });

    if (!response.ok){
        throw new Error('Speichern fehlgeschlagen');
    }
}
