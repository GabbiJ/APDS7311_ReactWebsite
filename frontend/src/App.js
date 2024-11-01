import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import LoginEmp from './components/LoginEmp';
import LoginCust from './components/LoginCust';
import CustPayment from './components/CustPayment';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/employee-login" element={<LoginEmp />} />
                <Route path="/login" element={<LoginCust/>} />
                <Route path="/make" element={<CustPayment/>}/>


                    
                
              
            </Routes>
        </Router>
    );
}

export default App;
