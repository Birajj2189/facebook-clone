import './App.css';
import Body from './components/Body';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App max-h-[100vh]">
      <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<Body/>}/>  
       <Route exact path="/Login" element={<Login/>}/>  
       <Route exact path="/Register" element={<Register/>}/>  
       <Route exact path="/Register" element={<Register/>}/>  
       <Route exact path="/Profile" element={<Profile/>}/>  

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
