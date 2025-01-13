import { createContext, useContext, useEffect, useState } from "react";

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
                return { user: null, token: '' }; // Default value
            }
        }
        return { user: null, token: '' }; // Default value if nothing in localStorage
    });


    useEffect(() => {
        if (isAuth.token) {
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
        if (isAuth && isAuth.token) {
            // Save to localStorage
            localStorage.setItem("isAuth", JSON.stringify(isAuth));
        } else {
            // Clear localStorage if logged out
            localStorage.removeItem("isAuth");
        }
    }, [isAuth]);



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
        setLogin
    }
    return <Mycontext.Provider value={value}>{children}</Mycontext.Provider>;
}


const useMyContext = () => useContext(Mycontext);
export { MyContextProvider, Mycontext, useMyContext };