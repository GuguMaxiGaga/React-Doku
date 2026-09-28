import { useState } from "react";

function Login ({onLogin}) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);

async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch ('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
        });

        if (!response.ok){
            setError('Ungültige Zugangsdaten.');
            return;
        }

        const data = await response.json();
        onLogin(data.username);
    }
    catch {
        setError ('Verbindungsfehler.');
    }
}

return (
   <div className="flex min-h-screen items-center justify-center px-4">
      <div className="app-form-card w-full max-w-sm">

        
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Willkommen</h2>
          <p className="mt-1 text-sm text-slate-500">Melde dich mit deinen pgweb-Zugangsdaten an, um fortzufahren..</p>

        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="app-label">Benutzername</label>
            <input
              type="text"
              className="app-input"
              placeholder="deinname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="app-label">Passwort</label>
            <input
              type="password"
              className="app-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-red-500">{error}</p>
          )}

          <button
            type="submit"
            className="btn w-full rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 border-none mt-2"
          >
            Anmelden
          </button>

        </form>
      </div>
    </div>
)
}

export default Login;