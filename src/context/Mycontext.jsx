import { createContext, useContext, useEffect, useState } from "react";

import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;
import toast, { Toaster } from 'react-hot-toast';
const Mycontext = createContext();

const MyContextProvider = ({ children }) => {
    const [isSidebarOpenMenu, setIsSidebarOpenMenu] = useState(true);
    const [isLogin, setLogin] = useState(false);
    const [isAuth, setIsAuth] = useState(() => {
        const storedAuth = localStorage.getItem("isAuth");
        if (storedAuth) {
            try {
                return JSON.parse(storedAuth);
            } catch (error) {
                console.error("Failed to parse isAuth from localStorage:", error);
                return { accessToken: '', refreshToken: '' }; // Default value
            }
        }
        return { accessToken: null, refreshToken: '' }; // Default value if nothing in localStorage
    });


    useEffect(() => {
        if (isAuth.accessToken) {
            setLogin(true); // User is logged in if token exists
        } else {
            setLogin(false); // User is logged out if token doesn't exist
        }
    }, [isAuth]);
    const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
        open: false,
        model: ''
    })

    useEffect(() => {
        console.log('isAuth context', isAuth)
        if (isAuth && isAuth.accessToken && isAuth.refreshToken) {
            // Save to localStorage
            localStorage.setItem("isAuth", JSON.stringify(isAuth));
        } else {
            // Clear localStorage if logged out
            localStorage.removeItem("isAuth");
        }
    }, [isAuth]);

    // const getAll = async (url) => {

    //     const token = isAuth?.token; // Access token
    //     const headers = {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${token}` // Bearer token format
    //     };

    //     try {
    //         const response = await axios.get(`${baseUrl}${url}`, { headers });
    //         return response.data;
    //     } catch (error) {

    //         if (error.response) {
    //             // Server responded with a status other than 2xx

    //             return {
    //                 success: false,
    //                 status: error.response.status,
    //                 message: error.response.data.message || "Error occurred",
    //                 error: error.response.data.error || error.response.statusText,
    //             };
    //         } else if (error.request) {
    //             // Request was made but no response was received
    //             return {
    //                 success: false,
    //                 message: "No response from server",
    //                 error: "Network error or server not reachable",
    //                 status: error.response.status
    //             };
    //         } else {
    //             // Something else caused the error
    //             return {
    //                 success: false,
    //                 message: "Unexpected error occurred",
    //                 error: error.message,
    //                 status: error.response.status
    //             };
    //         }
    //     }
    // }

    const messageBox = ({ status, msg }) => {
        if (status === 'success') {
            toast.success(msg);
        } else {
            toast.error(msg);
        }
    }

    const value = {
        isSidebarOpenMenu,
        setIsSidebarOpenMenu,
        isOpenFullScreenPanel,
        setIsOpenFullScreenPanel,
        messageBox,
        isAuth,
        setIsAuth,
        isLogin,
        setLogin,

    }
    return <Mycontext.Provider value={value}>{children}</Mycontext.Provider>;
}


const useMyContext = () => useContext(Mycontext);
export { MyContextProvider, Mycontext, useMyContext };