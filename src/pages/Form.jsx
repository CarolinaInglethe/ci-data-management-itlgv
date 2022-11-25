import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import { useNavigate } from 'react-router-dom';

function Form() {
  const { csv, setCsv } = useContext(InfoContext);
  const [ inputsValues, setInputsValues ] = useState({
    Nome: '',
    Tipo: '',
    Escritor: '',
    Lançamento: '',
    Resumo: '',
    Pontuação: '',
    Criticas: '',
  })
  const navigate = useNavigate();

  const handleChangeInputs = ({ target: { name, value } }) => {
    setInputsValues({
      ...inputsValues,
      [name]: value,
  })
  }

  const handleClickToSave = async () => {
    console.log('save and navigate');
    console.log(inputsValues);
    // navigate('/ShowData');
  }

  return (
    <div className="Form-page">
    <NavBar />
      <p>Em manutençao...</p>
       <form>
        <input
          type="text"
          name="Nome"
          value={inputsValues.Nome}
          placeholder="Nome do livro"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="Tipo"
          value={inputsValues.Tipo}
          placeholder="Tipo. Ex: Fantasia"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="Escritor"
          value={inputsValues.Escritor}
          placeholder="nome do Escritor"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="Lançamento"
          value={inputsValues.Lançamento}
          placeholder="Data de lançamento"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="Resumo"
          value={inputsValues.Resumo}
          placeholder="Escreva um Resumo"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="Pontuação"
          value={inputsValues.Pontuação}
          placeholder="Insira uma pontução de 0 a 10"
          onChange={ handleChangeInputs }
        />
         <input
          type="text"
          name="Criticas"
          value={inputsValues.Criticas}
          placeholder="Escreva sua Critica"
          onChange={ handleChangeInputs }
        />
        <button type="button" onClick={ handleClickToSave }> Salvar </button>
      </form>
    </div>
  );
}

export default Form;
