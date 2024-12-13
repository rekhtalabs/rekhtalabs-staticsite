import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ArchivePage from './components/ArchivePage';
import HomePage from './components/HomePage';
import SherExplanationsChat from './components/SherExplanationsChat';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <div className='app-wrapper'>
                <div className='main-content'>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/archive" element={<ArchivePage />} />
                            <Route path="/tashriih" element={<PrivateRoute><SherExplanationsChat /></PrivateRoute>} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
