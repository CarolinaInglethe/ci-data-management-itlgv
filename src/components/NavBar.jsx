import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="NavBar-page">
      <Link to="/ShowData">Tabela</Link>
      <Link to="/CreateData">Cadastrar novos Dados</Link>
    </div>
  );
}

export default NavBar;
