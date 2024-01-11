import './App.css';
import Login from './Pages/Login';
import EcoQuests from './Pages/EcoQuests'
import Home from './Pages/Home';
import Map from './Pages/Map';
import Profile from './Pages/Profile';
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
      <Route path='/' element={<Login />} />
      <Route path='/quests' element={<EcoQuests />} />
      <Route path='/home' element={<Home />} />
      <Route path='/map' element={<Map />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
