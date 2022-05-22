import './App.css'; 
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import Login from './Login'
import Home from './Home';
function App() {
  return(  
      
  <div >      
    <BrowserRouter>
      <Routes>
       <Route path="/" exact element={<Login/>} />
       <Route path="/Home" exact element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
