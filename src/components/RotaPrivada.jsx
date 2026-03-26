import { Navigate } from "react-router-dom";

export const RotaPrivada = ({ children }) => {
  const tokenExistente = localStorage.getItem("token");

  if (!tokenExistente) {
    return <Navigate to="/login" />;
  }

  return children;
};
