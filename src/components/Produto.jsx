import { ProdutoContainer } from "../styles/styles";

export function Produto({ nome, descricao, preco, adicionarAoCarrinho }) {
  return (
    <ProdutoContainer>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>${preco.toFixed(2)}</p>
      <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
    </ProdutoContainer>
  );
}
