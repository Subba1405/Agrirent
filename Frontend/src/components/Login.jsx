import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const { email, password } = formData;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard'); // Navigate to the dashboard after successful login
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const handleSignupNavigation = () => {
        navigate('/signup'); // Navigate to the signup page instead of the login page
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleSignupNavigation}>
                Go to Signup
            </button> {/* Button to navigate to the signup page */}
        </div>
    );
};

export default Login;
