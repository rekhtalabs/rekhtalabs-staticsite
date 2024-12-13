import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';
import Header from './Header';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth, setUsername: setContextUsername } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/rl/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                setAuth(true);
                setContextUsername(username);
                localStorage.setItem('token', data.token);  // Save the token
                navigate(from);
            } else {
                alert(data.message || 'Login failed!');
            }
        } catch (error) {
            alert('Failed to connect to the server.');
        }
    };

    return (
        <>
            <Header title='RekhtaLabs' subtitle={'Technology solutions for Indic Languages'}/>
            <div className='loginpage'>
                <form onSubmit={handleLogin}>
                    <div className='inputs'>
                        <div className='username'>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        </div>    
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
