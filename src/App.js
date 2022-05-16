import React from 'react';
import './App.css';
import DashBoard from './Routes/Dashboard';
import LoginPage from './Routes/LoginPage';
import "./Style/components.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 





function App(){
 
  return(
    <div className='app'> 

    <BrowserRouter>

    <Routes>


      <Route path='/' element ={<LoginPage />} />
      <Route path='/dashboard/*' element ={<DashBoard />} />

    </Routes>
    
    
    
    </BrowserRouter>
  
      
      {/* <LoginPage /> */}

      

      

      



    </div>
  );

}

//Prop is a property for individual components

//States


export default App;
