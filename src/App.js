import logo from './logo.svg';
import './App.css';
import {  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Profile from './Pages/Profile';
function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
