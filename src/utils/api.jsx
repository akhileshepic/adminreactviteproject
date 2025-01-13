import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;
export const PostALL = async (formData, url) => {

    const storedAuth = localStorage.getItem('isAuth');
    const localStorageData = JSON.parse(storedAuth);
    const token = localStorageData?.token; // Access token

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Bearer token format
    };

    try {
        const response = await axios.post(`${baseUrl}${url}`, JSON.stringify(formData), { headers });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            return {
                success: false,
                message: error.response.data.message || "Error occurred",
                error: error.response.data.error || error.response.statusText,
            };
        } else if (error.request) {
            // Request was made but no response was received
            return {
                success: false,
                message: "No response from server",
                error: "Network error or server not reachable",
            };
        } else {
            // Something else caused the error
            return {
                success: false,
                message: "Unexpected error occurred",
                error: error.message,
            };
        }
    }
};


export const getAll = async (url) => {
    const storedAuth = localStorage.getItem('isAuth');
    const localStorageData = JSON.parse(storedAuth);
    const token = localStorageData?.token; // Access token
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Bearer token format
    };
    try {
        const response = await axios.get(`${baseUrl}${url}`, { headers });
        return response.data;
    } catch (error) {

        if (error.response) {
            // Server responded with a status other than 2xx

            return {
                success: false,
                status: error.response.status,
                message: error.response.data.message || "Error occurred",
                error: error.response.data.error || error.response.statusText,
            };
        } else if (error.request) {
            // Request was made but no response was received
            return {
                success: false,
                message: "No response from server",
                error: "Network error or server not reachable",
                status: error.response.status
            };
        } else {
            // Something else caused the error
            return {
                success: false,
                message: "Unexpected error occurred",
                error: error.message,
                status: error.response.status
            };
        }
    }
}