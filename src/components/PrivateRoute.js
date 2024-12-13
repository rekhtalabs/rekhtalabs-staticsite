import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    return auth ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
