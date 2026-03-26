import { useState } from "react";

import { DataContext } from "../contexts/DataContext";

export function DataProvider({ children }) {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  const adicionarAoCarrinho = () => {
    setQuantidadeCarrinho(quantidadeCarrinho + 1);
  };

  return (
    <DataContext.Provider value={{ quantidadeCarrinho, adicionarAoCarrinho }}>
      {children}
    </DataContext.Provider>
  );
}
