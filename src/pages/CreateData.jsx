import React from 'react';
import NavBar from '../components/NavBar';

function CreateData() {
  return (
    <div className="CreateData-page">
    <NavBar />
      <h1>Cadastro de novos dados</h1>
      <p>Em manutençao...</p>
      <form>
        <input type="text" placeholder="insira um Id"/>
        <input type="text"  placeholder="Insira um nome"/>
        <input type="text"  placeholder="insira um telefone"/>
        <button> Salvar </button>
      </form>
    </div>
  );
}

export default CreateData;
