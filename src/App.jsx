import './App.css';
import NavBar from './helper/Navigation/NavBar';
import StartPage from './pages/start/start';
import AddApplication from './pages/addApplication/addApplication.jsx'
import MyApplications from './pages/myApplications/myApplications.jsx';
import Login from './pages/login/login.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState(null);

  if (username === null){
    return(
       <div className="app-background">
        <div className="bg-glow-white"></div>
        <div className="bg-glow-orange"></div>
        <Router>
          <Routes>
            <Route path="*" element={<Login onLogin={setUsername} />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  return (
    <div className="app-background">
  <div className="bg-glow-white"></div>
  <div className="bg-glow-orange"></div>
        <Router>    
          <NavBar>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/bewerbung-hinzufuegen" element={<AddApplication username={username}/>} /> 
              <Route path="/meine-bewerbungen" element={<MyApplications username={username}/>} />  
            </Routes>
          </NavBar>
        </Router>
      </div>
  );
}

export default App;
