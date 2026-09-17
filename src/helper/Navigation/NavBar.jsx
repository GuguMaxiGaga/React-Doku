import { NavLink } from 'react-router-dom';
import { House, Dock, CirclePlus } from 'lucide-react';

function NavBar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content relative z-10 flex min-h-screen flex-col text-slate-700">
        
        <div className="m-3 md:m-5">
          <nav className="app-navbar">
            <div className="flex-none">
              <label 
                htmlFor="my-drawer-4" 
                aria-label="open sidebar" 
                className="app-navbar-btn"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  strokeLinejoin="round" 
                  strokeLinecap="round" 
                  strokeWidth="2" 
                  fill="none" 
                  stroke="currentColor" 
                  className="size-5"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
            </div>
            
            <div className="flex-1 px-4 font-semibold text-lg text-slate-800">
             <span className="tracking-tight">Dokumentiere deinen Bewerbungsfortschritt 🖊️</span>
            </div>
          </nav>
        </div>

      
        <div className="relative z-10 flex-1 p-4 md:p-5">
          {children}
        </div>
      </div>

     
      <div className="drawer-side is-drawer-close:overflow-visible z-50">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <div className="app-drawer-sidebar">
          <ul className="menu w-full grow gap-2 p-3">
            
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `app-menu-item ${isActive ? 'app-menu-link-active' : 'app-menu-link-inactive'}`
                } 
                data-tip="Startseite"
              >
                <House className="size-4 shrink-0 text-indigo-500" />
                <span className="is-drawer-close:hidden">Startseite</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/meine-bewerbungen" 
                className={({ isActive }) => 
                  `app-menu-item ${isActive ? 'app-menu-link-active' : 'app-menu-link-inactive'}`
                } 
                data-tip="Meine Bewerbungen"
              >
                <Dock className="size-4 shrink-0 text-indigo-500" />
                <span className="is-drawer-close:hidden">Meine Bewerbungen</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/bewerbung-hinzufuegen" 
                className={({ isActive }) => 
                  `app-menu-item ${isActive ? 'app-menu-link-active' : 'app-menu-link-inactive'}`
                } 
                data-tip="Bewerbung hinzufügen"
              >
                <CirclePlus className="size-4 shrink-0 text-indigo-500" />
                <span className="is-drawer-close:hidden">Bewerbung hinzufügen</span>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
