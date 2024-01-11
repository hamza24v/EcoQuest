import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import EcoQuests from './Pages/EcoQuest/EcoQuests'
import {
  Routes,
  Route,
  // Link,
  // useNavigate, 
  // useLocation,
  // Navigate,
  // Outlet,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Login />} /> */}
      <Route path='/' element={<EcoQuests />} />
    </Routes>
  );
}

export default App;
