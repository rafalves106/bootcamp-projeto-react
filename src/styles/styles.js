import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
    }
`;

// Estilos para a Navbar

export const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  border-radius: 8px;
  padding: 0 2rem;
  height: 5vh;
  margin: 1vh 2rem;
  background-color: #333;
  color: #fff;
  text-align: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    text-align: left;
  }

  span {
    font-size: 1rem;
    text-align: right;
  }

  button {
    padding: 0.5rem;
    background-color: #555;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #777;
    }
  }
`;

export const PaginaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 93vh;
  padding: 0 2rem 2rem;
`;

export const PaginaHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

// Estilos para a página de login

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  gap: 1rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 300px;
  margin-top: 1rem;

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }
`;

// Estilos para a página de painel

export const PainelContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  overflow-y: auto;
`;

export const ProdutosLista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const ProdutoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #333;
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  height: 180px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  p {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  button {
    padding: 0.5rem;
    background-color: #555;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #777;
    }
  }
`;
