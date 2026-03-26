import { useEffect, useState } from "react";

import {
  PaginaContainer,
  PaginaHeader,
  PainelContainer,
  ProdutosLista,
} from "../styles/styles";

import { Produto } from "../components/Produto";

export function Painel({ adicionarAoCarrinho }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados);
        setCarregando(false);
      });
  }, []);

  return (
    <PaginaContainer>
      <PaginaHeader>
        <h1>Produtos em estoque</h1>
        <p>Aqui você pode ver os produtos disponíveis em estoque.</p>
      </PaginaHeader>
      <PainelContainer>
        <ProdutosLista>
          {carregando ? (
            <p>Carregando produtos...</p>
          ) : (
            produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.title}
                descricao={produto.description}
                preco={produto.price}
                adicionarAoCarrinho={adicionarAoCarrinho}
              />
            ))
          )}
        </ProdutosLista>
      </PainelContainer>
    </PaginaContainer>
  );
}
