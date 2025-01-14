import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/authReducer";

const SldierContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],

};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <SldierContext.Provider value={{ ...state }}>{children}</SldierContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(SldierContext);
};

export { AppProvider, SldierContext, useProductContext };