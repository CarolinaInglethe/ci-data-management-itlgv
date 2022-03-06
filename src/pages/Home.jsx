import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home-page">
      <h1>Olá Seja Bem vindo(a) !</h1>
      <Link to="/ShowData">Veja</Link>
    </div>
  );
}

export default Home;
