import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const RotaPrivada = ({ children }) => {
  const { logado } = useContext(AuthContext);

  if (!logado) {
    return <Navigate to="/login" />;
  }

  return children;
};
