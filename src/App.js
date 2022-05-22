import logo from './logo.svg';
import './App.css';
import {  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react'
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Profile from './Pages/Profile';
function App() {

  const [user, setUser] = useState('ss')

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Dashboard user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        {/* <Route path='/dashboard' element={<Dashboard user={user}/>}/> */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
