import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogoutLink() {
    const { setAuth, setUsername } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(false);
        setUsername(''); // Clear username from context
        navigate('/'); // Navigate to homepage on logout
    };

    return (
        <a href="/" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a>
    );
}

export default LogoutLink;
