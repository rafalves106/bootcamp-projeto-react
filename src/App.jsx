import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider } from "./auth/AuthProvider";
import { AuthContext } from "./contexts/AuthContext";

import { GlobalStyles } from "./styles/styles";

import { Login } from "./pages/Login";
import { Painel } from "./pages/Painel";

import { Navbar } from "./components/Navbar";
import { RotaPrivada } from "./components/RotaPrivada";

function App() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  const adicionarAoCarrinho = () => {
    setQuantidadeCarrinho(quantidadeCarrinho + 1);
  };

  useEffect(() => {
    if (quantidadeCarrinho > 0) {
      document.title = `Unfiltered - Carrinho (${quantidadeCarrinho})`;
    }
  }, [quantidadeCarrinho]);

  return (
    <>
      <GlobalStyles />

      <AuthProvider>
        <BrowserRouter>
          <Navbar usuario="John Doe" carrinho={quantidadeCarrinho} />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/painel"
              element={
                <RotaPrivada>
                  <Painel adicionarAoCarrinho={adicionarAoCarrinho} />
                </RotaPrivada>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
