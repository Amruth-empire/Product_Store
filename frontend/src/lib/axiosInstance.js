// lib/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // proxy path
});

export default axiosInstance;
