import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Proxy path, not actual backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
