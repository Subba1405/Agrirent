import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup ()  {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const { name, email, password } = formData;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response.data);
        }
    };
    const handleloginnavigation=(e) =>{
        e.preventDefault();
        navigate('/login');
    };
    const handledash =(e) =>{
         navigate('/Dashboard');
    };
    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                <button type="submit">Sign Up</button>
                <button onClick={handleloginnavigation}>
                    goto login page
                </button>
                <button onClick={handledash}>
                    goto home page
                </button>
            </form>
        </div>
    );
};

export default Signup;
