import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(!!localStorage.getItem('authToken'));
    const [username, setUsername] = useState(localStorage.getItem('username') || '');

    useEffect(() => {
        if (auth) {
            localStorage.setItem('authToken', 'your_auth_token_here');
            localStorage.setItem('username', username);
        } else {
            localStorage.removeItem('authToken');
            localStorage.removeItem('username');
            setUsername('');
        }
    }, [auth, username]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, username, setUsername }}>
            {children}
        </AuthContext.Provider>
    );
};
