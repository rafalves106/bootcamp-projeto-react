import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { NavbarContainer } from "../styles/styles";

export function Navbar({ carrinho }) {
  const { logout, usuario, logado } = useContext(AuthContext);

  return (
    <NavbarContainer>
      {logado ? (
        <>
          <div>
            <p>Bem vindo - {usuario.nome}</p>
            <button onClick={logout}>Logout</button>
          </div>
          <h1>Painel Unfiltered</h1>
          <span>{carrinho} - Carrinho</span>
        </>
      ) : (
        <h1>Painel Unfiltered</h1>
      )}
    </NavbarContainer>
  );
}
