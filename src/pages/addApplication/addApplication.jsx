import useInputManager from "./inputManager";
import { DbManager } from './dbManager';
import { useState, useEffect } from "react";

function AddApplication({username}) {
  const {application, handleChange} = useInputManager();
  const [status, setStatus] = useState(null);
  async function handleSubmit(event) {
  event.preventDefault();
  try {
        await DbManager(application, username);
        setStatus('success');
    } catch {
        setStatus('error');
        }  
    }         

const [visible, setVisible] = useState(false);

useEffect(() => {
    if (status === null) {
        setVisible(false);
        return;
    }
    const showTimer = setTimeout(() => setVisible(true), 10);
    const hideTimer = setTimeout(() => setVisible(false), 4500);
    const clearTimer = setTimeout(() => setStatus(null), 5000);

    return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearTimeout(clearTimer);
    };
}, [status]);

    return (
        <div className="app-form-card max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-indigo-700 mb-6">Neue Bewerbung anlegen</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    
                    <div className="space-y-4">
                        <div className="border-l-4 border-indigo-500 pl-3">
                            <h3 className="font-semibold text-lg text-neutral-800">Unternehmensdaten</h3>
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Betrieb</label>
                            <input type="text" 
                                className="app-input" 
                                required
                                name="betrieb"
                                value={application.betrieb}
                                onChange={handleChange}
                             />
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Ansprechpartner</label>
                            <input type="text" 
                                className="app-input" 
                                autoComplete="name" 
                                name="ansprechpartner"
                                value={application.ansprechpartner}
                                onChange={handleChange}/>
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Telefon</label>
                            <input type="tel" 
                                className="app-input" 
                                inputMode="tel"
                                placeholder="05321/12345"
                                pattern="[0-9+\s\-\/\(\)]+"
                                autoComplete="tel"
                                name="telefon"
                                value={application.telefon}
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Email</label>
                            <input type="email"
                                className="app-input" 
                                autoComplete="email" 
                                placeholder="mail@example.com"
                                name="email"
                                value={application.email}
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Website</label>
                            <input type="text" 
                                className="app-input" 
                                placeholder="inn-tegrativ.de" 
                                name="internet"
                                value={application.internet}
                                onChange={handleChange}/>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-2">
                                <label className="label text-sm font-medium text-neutral-700">Straße</label>
                                <input type="text" 
                                className="app-input"
                                name="strasse"
                                value={application.strasse}
                                onChange={handleChange} />
                            </div>
                            <div>
                                <label className="label text-sm font-medium text-neutral-700">Hausnummer</label>
                                <input type="text" 
                                className="app-input" 
                                inputMode="numeric"
                                name="hausnummer"
                                value={application.hausnummer}
                                onChange={handleChange} />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <label className="label text-sm font-medium text-neutral-700">Postleitzahl</label>
                                <input type="text" 
                                className="app-input" 
                                inputMode="numeric" 
                                pattern="[0-9]{5}" 
                                maxLength={5} 
                                placeholder="38640"
                                name="plz"
                                value={application.plz}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-2">
                                <label className="label text-sm font-medium text-neutral-700">Ort</label>
                                <input type="text" 
                                className="app-input"
                                name="ort"
                                value={application.ort}
                                onChange={handleChange}
                                 />
                            </div>
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Anwendungen / Tech-Stack</label>
                            <input type="text" 
                            className="app-input" 
                            name="anwendungen"
                            value={application.anwendungen}
                            onChange={handleChange}/>
                        </div>
                    </div>

                   
                    <div className="space-y-4">
                        <div className="border-l-4 border-indigo-500 pl-3">
                            <h3 className="font-semibold text-lg text-neutral-800">Bewerbungsfortschritt</h3>
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Beworben am</label>
                            <input type="date" 
                            className="app-input" 
                            name="beworbenAm"
                            value={application.beworbenAm}
                            onChange={handleChange}/>
                        </div>

                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Rückmeldung am</label>
                            <input type="date" 
                            className="app-input" 
                            name="rueckmeldungAm"
                            value={application.rueckmeldungAm}
                            onChange={handleChange}/>
                        </div>
                         
                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Nachgefragt am</label>
                            <input type="date" 
                            className="app-input" 
                            name="nachgefragtAm"
                            value={application.nachgefragtAm}
                            onChange={handleChange}/>
                        </div>
                         
                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Telefoniert mit</label>
                            <input type="text"
                              className="app-input" 
                              name="telefoniertMit"
                              value={application.telefoniertMit}
                              onChange={handleChange}/>
                        </div>
                         
                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Praktikum möglich?</label>
                            <select className="app-select"
                            name="moeglich"
                            value={application.moeglich}
                            onChange={handleChange}>
                                <option value="" disabled defaultValue>Bitte wählen...</option>
                                <option value="Ja" className="bg-white text-neutral-900">Ja</option>
                                <option value="Nein" className="bg-white text-neutral-900">Nein</option>
                            </select>
                        </div>
                         
                        <div>
                            <label className="label text-sm font-medium text-neutral-700">Praktikum ab</label>
                            <input type="date" 
                            className="app-input"
                            name="praktikumAb"
                            value={application.praktikumAb}
                            onChange={handleChange} />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="label text-sm font-medium text-neutral-700">Entfernung (km)</label>
                                <input type="number" className="app-input" 
                                min="0" step="0.1" 
                                placeholder="12.5" 
                                name="entfernung"
                                value={application.entfernung}
                                onChange={handleChange}/>
                            </div>
                            <div>
                                <label className="label text-sm font-medium text-neutral-700">Fahrtzeit (hh:mm)</label>
                                <input type="text" className="app-input" 
                                pattern="[0-9]{2}:[0-9]{2}" 
                                placeholder="01:30" 
                                maxLength={5}
                                name="fahrtzeit"
                                value={application.fahrtzeit}
                                onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                </div>

              
                <div className="card-actions justify-end mt-6 pt-4 border-t border-white/60">
                    <button type="submit" 
                    className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none w-full md:w-auto shadow-md" >
                        Bewerbung speichern
                    </button>

                   {status === 'success' && (
                        <div className={`alert border-l-4 border-green-500 bg-green-50 text-green-700 px-4 py-2 rounded text-sm w-full
                                        transition-all duration-500
                                         ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                         ✓ Bewerbung erfolgreich gespeichert!
                        </div>
                                )}
                    {status === 'error' && (
                        <div className={`alert border-l-4 border-red-500 bg-red-50 text-red-700 px-4 py-2 rounded text-sm w-full
                                        transition-all duration-500
                                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        ✗ Speichern fehlgeschlagen. Bitte erneut versuchen.
                        </div>
                                )}
                </div>
            </form>
        </div>
    );
}


export default AddApplication;
