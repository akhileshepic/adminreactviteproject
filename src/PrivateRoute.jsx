import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Mycontext } from './App';

const PrivateRoute = ({ children }) => {
    const { isLogin } = useContext(Mycontext);

    if (!isLogin) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
