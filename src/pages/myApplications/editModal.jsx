import {useState} from "react";

function EditModal ({ app, onClose, onSave}){
    const [form, setForm] = useState({
    betrieb: app.betrieb || '',
    ansprechpartner: app.ansprechpartner || '',
    telefon: app.telefon || '',
    email: app.email || '',
    internet: app.internet || '',
    strasse: app.strasse || '',
    hausnummer: app.hausnummer || '',
    plz: app.plz || '',
    ort: app.ort || '',
    anwendungen: app.anwendungen || '',
    beworben_am: app.beworben_am ? app.beworben_am.split('T')[0] : '',
    rueckmeldung_am: app.rueckmeldung_am ? app.rueckmeldung_am.split('T')[0] : '',
    nachgefragt_am: app.nachgefragt_am ? app.nachgefragt_am.split('T')[0] : '',
    telefoniert_mit: app.telefoniert_mit || '',
    moeglich: app.moeglich || '',
    praktikum_ab: app.praktikum_ab ? app.praktikum_ab.split('T')[0] : '',
    entfernung: app.entfernung || '',
    fahrtzeit: app.fahrtzeit || '',

});

async function handleSubmit(event) {
    event.preventDefault();
    await onSave(app.bewerbung_id, form);
    onClose();
};

async function handleChange(event){
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
};

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="app-form-card w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
         <div className="border-l-2 border-indigo-500 pl-3">
        <h2 className="text-lg font-semibold text-slate-800">Bewerbung bearbeiten</h2>
        <p className="text-sm text-slate-500">{app.betrieb}</p>
            </div>
                <button onClick={onClose} className="btn btn-ghost btn-sm btn-square text-slate-400">✕</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">

   
    <div className="border-l-2 border-indigo-300 pl-3">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Unternehmen</h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="app-label">Betrieb</label>
            <input className="app-input" name="betrieb" value={form.betrieb} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Ansprechpartner</label>
            <input className="app-input" name="ansprechpartner" value={form.ansprechpartner} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Telefon</label>
            <input className="app-input" name="telefon" value={form.telefon} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Email</label>
            <input className="app-input" type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="col-span-2">
            <label className="app-label">Website</label>
            <input className="app-input" name="internet" value={form.internet} onChange={handleChange} />
        </div>
    </div>

  
    <div className="border-l-2 border-indigo-300 pl-3 mt-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Adresse</h3>
    </div>
    <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
            <label className="app-label">Straße</label>
            <input className="app-input" name="strasse" value={form.strasse} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Hausnr.</label>
            <input className="app-input" name="hausnummer" value={form.hausnummer} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">PLZ</label>
            <input className="app-input" name="plz" value={form.plz} onChange={handleChange} />
        </div>
        <div className="col-span-2">
            <label className="app-label">Ort</label>
            <input className="app-input" name="ort" value={form.ort} onChange={handleChange} />
        </div>
    </div>


    <div className="border-l-2 border-indigo-300 pl-3 mt-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Bewerbungsfortschritt</h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="app-label">Beworben am</label>
            <input className="app-input" type="date" name="beworben_am" value={form.beworben_am} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Rückmeldung am</label>
            <input className="app-input" type="date" name="rueckmeldung_am" value={form.rueckmeldung_am} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Nachgefragt am</label>
            <input className="app-input" type="date" name="nachgefragt_am" value={form.nachgefragt_am} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Telefoniert mit</label>
            <input className="app-input" name="telefoniert_mit" value={form.telefoniert_mit} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Praktikum möglich?</label>
            <select className="app-select" name="moeglich" value={form.moeglich} onChange={handleChange}>
                <option value="">Bitte wählen...</option>
                <option value="true">Ja</option>
                <option value="false">Nein</option>
            </select>
        </div>
        <div>
            <label className="app-label">Praktikum ab</label>
            <input className="app-input" type="date" name="praktikum_ab" value={form.praktikum_ab} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Entfernung (km)</label>
            <input className="app-input" type="number" name="entfernung" value={form.entfernung} onChange={handleChange} />
        </div>
        <div>
            <label className="app-label">Fahrtzeit (hh:mm)</label>
            <input className="app-input" name="fahrtzeit" value={form.fahrtzeit} onChange={handleChange} />
        </div>
        <div className="col-span-2">
            <label className="app-label">Anwendungen / Tech-Stack</label>
            <input className="app-input" name="anwendungen" value={form.anwendungen} onChange={handleChange} />
        </div>
    </div>

   
    <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
        <button type="button" onClick={onClose} className="btn btn-ghost btn-sm text-slate-500">
            Abbrechen
        </button>
        <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none btn-sm shadow-lg shadow-indigo-200">
            Speichern
        </button>
    </div>

</form>
            </form>
        </div>
    </div>
)};

export default EditModal;