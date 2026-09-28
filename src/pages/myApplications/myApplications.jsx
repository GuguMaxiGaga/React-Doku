import { useEffect, useState } from "react";
import { FileUser } from 'lucide-react'; 
import EditModal from "./editModal";

function MyApplications ({ username }) {
    const [applications, setApplications] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [editApp, setEditApp] = useState(null);

    useEffect(() => {
        async function fetchApplications() {
            const response = await fetch(`/api/applications/${username}`);
            const data = await response.json();
            setApplications(data);
        }
        fetchApplications();
    }, []);
    async function handleSave(id, form){
      await fetch (`/api/applications/${id}`, {
        method: 'PUT',
        headers: {'Content Type': 'application/json'},
        body: JSON.stringify(form),
      });

      const response = await fetch(`/api/applications/${username}`);
      const data = await response.json();
      setApplications(data);
    }

    return (
        <div className="max-w-3xl mx-auto">
            
            <div className="mb-6 border-l-2 border-indigo-500 pl-3">
                <h2 className="text-xl font-bold text-indigo-700 mb-6">Meine Bewerbungen</h2>
                <p className="text-sm text-slate-500">{applications.length} Einträge</p>
            </div>

            <div className="app-form-card p-0 overflow-hidden">
                {applications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                        <FileUser className="size-10 mb-3 opacity-40" />
                        <p className="text-sm">Noch keine Bewerbungen eingetragen.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        {applications.map((app, index) => (
                            <div key={app.bewerbung_id}>
                                
                           
                                <div className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                                    
                                    <span className="text-2xl font-thin text-slate-300 tabular-nums w-8 shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div className="size-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                                        <FileUser className="size-5 text-indigo-500" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-800 truncate">{app.betrieb}</p>
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mt-0.5">
                                            {app.ansprechpartner}{app.telefon ? ` | ${app.telefon}` : ''}
                                        </p>
                                    </div>

                                    
                                        <span className="text-xs text-slate-400 shrink-0">
                                            {new Date().toLocaleDateString('de-DE')}
                                        </span>
                                    

                                    <button 
                                        className="app-navbar-btn"
                                        onClick={() => setOpenId(openId === app.bewerbung_id ? null : app.bewerbung_id)}
                                    >
                                        <svg className={`size-4 transition-transform ${openId === app.bewerbung_id ? 'rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 3L20 12 6 21 6 3z"/>
                                        </svg>
                                    </button>

                                </div>

                              
                                {openId === app.bewerbung_id && (
                                    <div className="px-6 py-5 bg-slate-50 border-t border-slate-100">
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">                                     
                                               <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Email</span>
                                                <p className="text-slate-800 mt-0.5">{app.email || '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Website</span>
                                                <p className="text-slate-800 mt-0.5">{app.internet || '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Adresse</span>
                                                <p className="text-slate-800 mt-0.5"> {[app.strasse, app.hausnummer, app.plz, app.ort].some(Boolean) ? `${app.strasse || '—'} ${app.hausnummer || '—'}, ${app.plz || '—'} ${app.ort || '—'}`.trim() : '—'} </p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Anwendungen</span>
                                                <p className="text-slate-800 mt-0.5">{app.anwendungen || '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Rückmeldung am</span>
                                                <p className="text-slate-800 mt-0.5">{app.rueckmeldung_am ? new Date(app.rueckmeldung_am).toLocaleDateString('de-DE') : '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Nachgefragt am</span>
                                                <p className="text-slate-800 mt-0.5">{app.nachgefragt_am ? new Date(app.nachgefragt_am).toLocaleDateString('de-DE') : '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Telefoniert mit</span>
                                                <p className="text-slate-800 mt-0.5">{app.telefoniert_mit || '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Praktikum möglich</span>
                                                <p className="text-slate-800 mt-0.5">{app.moeglich || '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Praktikum ab</span>
                                                <p className="text-slate-800 mt-0.5">{app.praktikum_ab ? new Date(app.praktikum_ab).toLocaleDateString('de-DE') : '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Entfernung</span>
                                                <p className="text-slate-800 mt-0.5">{app.entfernung ? `${app.entfernung} km` : '—'}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 uppercase tracking-wide">Fahrtzeit</span>
                                                <p className="text-slate-800 mt-0.5">{app.fahrtzeit || '—'}</p>
                                            </div>

                                        </div>
                                        <div className="flex justify-center mt-2">
                                        <button 
                                          className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none btn-sm"
                                           onClick={() => setEditApp(app)}>
                                          Bearbeiten
                                        </button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                )}
            </div>
            {editApp && (
      <EditModal
        app={editApp}
        onClose={() => setEditApp(null)}
        onSave={handleSave}
    />
)}
        </div>
    );
}

export default MyApplications;