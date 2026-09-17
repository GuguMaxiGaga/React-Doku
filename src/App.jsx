import './App.css';
import NavBar from './helper/Navigation/NavBar';
import StartPage from './pages/start/start';
import AddApplication from './pages/addApplication/addApplication.jsx'
import MyApplications from './pages/myApplications/myApplications.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app-background">
  <div className="bg-glow-white"></div>
  <div className="bg-glow-orange"></div>
        <Router>    
          <NavBar>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/bewerbung-hinzufuegen" element={<AddApplication />} /> 
              <Route path="/meine-bewerbungen" element={<MyApplications />} />  
            </Routes>
          </NavBar>
        </Router>
      </div>
  );
}

export default App;
