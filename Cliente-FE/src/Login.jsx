import React, { useState } from "react";
import API from "./utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");         // Estado para email
  const [password, setPassword] = useState("");   // Estado para password
  const [error, setError] = useState("");         // Estado para errores
  const navigate = useNavigate();                 // Hook para navegación

  // Función que maneja el login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      // Enviar request al backend
      const response = await API.post("/signin", { email, password });
      localStorage.setItem("token", response.data.token); // Guardar token en localStorage
      alert("Login successful!");
      navigate("/protected"); // Redirigir a página protegida
    } catch (err) {
      // Mostrar mensaje de error
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
