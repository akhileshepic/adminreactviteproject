import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Mycontext } from './App';

const PrivateRoute = ({ children }) => {
    const { token, isLogin } = useContext(Mycontext);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return children;


};

export default PrivateRoute;
