import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext, useAuth } from "../contexts/AuthContext";

import { LoginContainer, LoginForm, PaginaContainer } from "../styles/styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { login, logado } = useAuth(AuthContext);

  if (logado) {
    navigate("/painel");
  }

  useEffect(() => {
    document.title = "Unfiltered - Login";
  }, []);

  const fazerLogin = (evento) => {
    evento.preventDefault();

    const sucesso = login(email, senha);

    if (sucesso) {
      navigate("/painel");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <PaginaContainer>
      <LoginContainer>
        <h1>Faça seu login para continuar</h1>
        <p>Entre com suas credenciais para acessar sua conta.</p>

        <LoginForm onSubmit={fazerLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Login</button>
        </LoginForm>
      </LoginContainer>
    </PaginaContainer>
  );
}
