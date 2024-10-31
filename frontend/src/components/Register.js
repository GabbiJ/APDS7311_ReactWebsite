//registration form

import React, { useState } from 'react';
import '../Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        idNumber: '',
        accountNumber: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert(result.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error connecting to the server');
        }
    };

    return (
        <div class = "container">            
            <form class="form" onSubmit={handleSubmit}>
                <h1 class = "title" >Registration</h1>
                <label>
                    <div class="flex">
                        <input
                            class="input"
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </label>

                <label>
                    <div class="flex">
                        <input
                            type="text"
                            class="input"
                            name="idNumber"
                            placeholder="ID Number"
                            value={formData.idNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </label>

                <label>
                    <div class="flex">
                        <input
                            type="text"
                            class="input"
                            name="accountNumber"
                            placeholder="Account Number"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </label>

                <label>
                    <div class="flex">
                        <input
                            type="password"
                            class="input"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </label>
                <button class = "submit" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
