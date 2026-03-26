import { Navigate } from "react-router-dom";
import { AuthContext, useData } from "../contexts/AuthContext";

export const RotaPrivada = ({ children }) => {
  const { logado } = useData(AuthContext);
  if (!logado) {
    return <Navigate to="/login" />;
  }

  return children;
};
