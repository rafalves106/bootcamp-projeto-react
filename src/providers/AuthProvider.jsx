import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregandoContexto, setCarregandoContexto] = useState(true);

  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token");

    if (tokenSalvo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUsuario({ nome: "Admin", email: "admin@unfiltered.com" });
    }

    setCarregandoContexto(false);
  }, []);

  function login(email, senha) {
    if (email === "admin@unfiltered.com" && senha === "admin123") {
      const usuarioLogado = { nome: "Admin", email };
      setUsuario(usuarioLogado);
      localStorage.setItem("token", "token-fake-123456");
      return true;
    }
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ usuario, login, logout, logado: !!usuario, carregandoContexto }}
    >
      {children}
    </AuthContext.Provider>
  );
}
