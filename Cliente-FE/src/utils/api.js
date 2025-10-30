import axios from "axios";

// Crear instancia de Axios apuntando al backend
const API = axios.create({
  baseURL: "http://localhost:5000",
});

// Interceptor que añade el token JWT a cada request automáticamente
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
