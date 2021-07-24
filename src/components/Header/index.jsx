import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header>
      <h1>Gerenciamento de Cadastros</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="./Client">
            <li>Clientes</li>
          </Link>
          <Link to="./Product">
            <li>Produtos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
