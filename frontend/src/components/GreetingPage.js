// Greeting page
//this should be the default landing page of the website
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Greeting.css';

function GreetingPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Secure Payments Portal</h1>
            
        </div>
    );
}

export default GreetingPage;