import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Gerenciamento de Cadastros</h1>
      <nav>
        <ul>
          <li>
            <Link to="./Client">Clientes</Link>
          </li>
          <li>
            <Link to="./Product">Produtos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
