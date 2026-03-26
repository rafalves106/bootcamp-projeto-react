import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { NavbarContainer } from "../styles/styles";
import { useData } from "../contexts/DataContext";

export function Navbar() {
  const { logout, usuario, logado } = useContext(AuthContext);
  const { quantidadeCarrinho } = useData();

  useEffect(() => {
    if (quantidadeCarrinho > 0) {
      document.title = `Unfiltered - Carrinho (${quantidadeCarrinho})`;
    }
  }, [quantidadeCarrinho]);

  return (
    <NavbarContainer>
      {logado ? (
        <>
          <div>
            <p>Bem vindo - {usuario.nome}</p>
            <button onClick={logout}>Logout</button>
          </div>
          <h1>Painel Unfiltered</h1>
          <span>{quantidadeCarrinho} - Carrinho</span>
        </>
      ) : (
        <h1>Painel Unfiltered</h1>
      )}
    </NavbarContainer>
  );
}
