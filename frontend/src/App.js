import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import LoginEmp from './components/LoginEmp';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/employee-login" element={<LoginEmp />} />
            </Routes>
        </Router>
    );
}

export default App;
