import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Register from './components/Register';
import LoginEmp from './components/LoginEmp';
import EmployeeHome from './components/HomeEmp';
import GreetingPage from './components/GreetingPage';
import './App.css'

// Function to check if the user is authenticated
const isAuthenticated = () => !!localStorage.getItem('employeeToken');

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/employee-login" element={<LoginEmp />} />
                <Route path="/greeting-page" element={<GreetingPage />} />
                <Route
                    path="/employee-home"
                    element={isAuthenticated() ? <EmployeeHome /> : <Navigate to="/employee-login" />}
                />
                {/* Redirect unknown routes to the greeting page*/}
                <Route path="*" element={<Navigate to="/greeting-page" />} />
            </Routes>
        </Router>
    );
}

export default App;
