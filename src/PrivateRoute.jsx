import React from 'react'
import { useMyContext } from './context/Mycontext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isLogin, isAuth } = useMyContext();

    if (!isAuth.accessToken) {
        return <Navigate to="/login" replace />;
    }
    return children;

}

export default PrivateRoute