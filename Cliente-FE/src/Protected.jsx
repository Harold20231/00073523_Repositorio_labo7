import React, { useEffect, useState } from "react";
import API from "./utils/api";
import { Link } from "react-router-dom";

const Protected = () => {
  const [message, setMessage] = useState("Loading..."); // Mensaje de estado

  // Request a backend al montar componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/protected"); // Usar token automáticamente
        setMessage(response.data.message);            // Mostrar mensaje de backend
      } catch (err) {
        console.error(err);
        setMessage("Access Denied: You need to log in first."); // Error si no hay token válido
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>{message}</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Protected;
