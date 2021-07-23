import { useState } from "react";

import FormProduct from "../../components/FormProduct";
import Header from "../../components/Header";

function Product() {
  const [isModal, setIsModal] = useState(false);

  function handleModal() {
    !isModal ? setIsModal(true) : setIsModal(false);
    console.log(isModal);
  }

  return (
    <div>
      <Header />
      <h2>Registro de Produtos</h2>

      <button onClick={handleModal}>Novo produto</button>
      {isModal ? <FormProduct /> : ""}

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>SKU</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Camiseta Masculina</td>
            <td>Camiseta preta masculina tamanhos P, M e G</td>
            <td>Camisa</td>
            <td>13245678</td>
            <td>59.80</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;
