import './App.css'; 
import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import Login from './Login'
import Home from './Home';
import Tablets from './Tablets';
import { Cart } from './Cart';
/*import Fetch from './Fetch';*/
import Admin from './Admin';
function App() { 
  return(  

  <div >      
    <BrowserRouter>
      <Routes>
       <Route path="/" exact element={<Login/>} />
       <Route path="/Home" exact element={<Home/>}/>  
       <Route path="/Tablets" exact element={<Tablets/>} />
       <Route path="/Cart" exact element={<Cart/>} />
       <Route path="/Admin" exact element={<Admin/>}/>
       
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
