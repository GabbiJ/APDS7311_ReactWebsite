// Greeting page
//this should be the default landing page of the website
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Greeting.css';

function GreetingPage() {
    const navigate = useNavigate();

    return (
        <div className="greeting-container">
            <h1>Welcome to the Secure Payments Portal</h1>
            <div className="button-container">
                <button 
                    className="login-button"
                    onClick={() => navigate('/employee-login')}
                >
                    Login Employee
                </button>
                <button 
                    className="login-button"
                    onClick={() => navigate('/login')}
                >
                    Login Customer
                </button>
            </div>
        </div>
    );
}

export default GreetingPage;