import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home-page">
      <h1>Olá Seja Bem vindo(a) !</h1>
      <p>
        Aqui você poderá vizualizar dados de uma tabela excel 
        podendo, adicionar , editar e excluir dados de uma maneira mais simples
      </p>
      <Link to="/ShowData">Vamos lá</Link>
    </div>
  );
}

export default Home;
