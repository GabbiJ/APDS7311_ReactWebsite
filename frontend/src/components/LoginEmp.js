// login form for employee

import React, { useState } from 'react';
import '../Login.css';

function LoginEmp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous error

        try {
            const response = await fetch('/api/auth/employee-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed. Please check your credentials.');
            }

            const data = await response.json();
            const token = data.token;

            // Store token in local storage for authenticated actions
            localStorage.setItem('employeeToken', token);

            alert('Login successful!');
            // Redirect or display employee dashboard
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <h2>Employee Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="submit-button">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginEmp;