import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        const storedAuth = localStorage.getItem('isAuth');
        const localStorageData = JSON.parse(storedAuth);
        const accessToken = localStorageData?.accesstoken;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response, // Simply return the response if no errors
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized errors
        if (error.response?.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;

            const storedAuth = localStorage.getItem('isAuth');
            const localStorageData = JSON.parse(storedAuth);
            const refreshToken = localStorageData?.refreshToken;

            if (refreshToken) {
                const newAccessToken = await refreshAccessToken(refreshToken);

                if (newAccessToken) {
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest); // Retry the original request
                }
            }
        }

        return Promise.reject(error);
    }
);

// Refresh Token Function
const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await axios.post(`${baseUrl}user/refresh-token`, null, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });

        const accessToken = response.data.data.accessToken;
        const storedAuth = JSON.parse(localStorage.getItem('isAuth')) || {};
        storedAuth.accesstoken = accessToken;

        localStorage.setItem('isAuth', JSON.stringify(storedAuth));
        return accessToken;
    } catch (error) {
        console.error("Error refreshing access token:", error);
        return null;
    }
};

// Generic POST Request
export const PostALL = async (url, formData) => {
    try {
        console.log(url, 'ur;')
        const response = await axiosInstance.post(url, formData);
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return handleError(error);
    }
};

// Generic GET Request
export const getAll = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return handleError(error);
    }
};

// Error Handling Function
const handleError = (error) => {
    if (error.response) {
        return {
            success: false,
            status: error.response.status,
            message: error.response.data.message || "An error occurred",
            error: error.response.data.error || error.response.statusText
        };
    } else if (error.request) {
        return {
            success: false,
            message: "No response from server",
            error: "Network error or server not reachable"
        };
    } else {
        return {
            success: false,
            message: "Unexpected error occurred",
            error: error.message
        };
    }
};
