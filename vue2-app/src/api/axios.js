import axios from 'axios';

// Create an Axios instance with default configuration
const instance = axios.create({
  baseURL: 'http://localhost:3001', // Base URL for all requests
  timeout: 10000, // Request timeout (10 seconds)
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

// Optional: Add request interceptors
instance.interceptors.request.use(
  config => {
    // Perform actions before request is sent, like setting auth tokens
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Optional: Add response interceptors
instance.interceptors.response.use(
  response => {
    // Any status code within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
