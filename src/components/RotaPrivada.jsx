import { Navigate } from "react-router-dom";
import { AuthContext, useAuth } from "../contexts/AuthContext";

export const RotaPrivada = ({ children }) => {
  const { logado } = useAuth(AuthContext);
  if (!logado) {
    return <Navigate to="/login" />;
  }

  return children;
};
