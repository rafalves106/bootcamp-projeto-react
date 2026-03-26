import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { GlobalStyles } from "./styles/styles";

import { Login } from "./pages/Login";
import { Painel } from "./pages/Painel";

import { Navbar } from "./components/Navbar";
import { RotaPrivada } from "./components/RotaPrivada";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppProviders>
        <BrowserRouter>
          <Navbar usuario="John Doe" />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/painel"
              element={
                <RotaPrivada>
                  <Painel />
                </RotaPrivada>
              }
            />
          </Routes>
        </BrowserRouter>
      </AppProviders>
    </>
  );
}

export default App;
