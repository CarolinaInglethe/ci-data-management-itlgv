import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import { useNavigate } from 'react-router-dom';

function Form() {
  /*
  const { csv, setCsv } = useContext(InfoContext);
  const [ nameInput, setNameInput ] = useState('');
  const [ tipoInput, setTipoInput ] = useState('');
  const [ escritorInput, setEscritorInput ] = useState('');
  const [ lancamentoInput, setLancamentoInput] = useState('');
  const navigate = useNavigate();

  const handleChangeInputs = ({ target: { name, value } }) => {
    console.log(name,value);
  }

  const handleClickToSave = async () => {
    console.log('save and navigate');
    // navigate('/ShowData');
  }
  */

  return (
    <div className="Form-page">
    <NavBar />
      <p>Em manutençao...</p>
      {/*
       <form>
         <input
          type="text"
          name="id"
          value={inputsValues.id}
          placeholder="insira um Id"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="nome"
          value={nameInput}
          placeholder="Insira um nome"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="telefone"
          value={lancamentoInput}
          placeholder="insira um telefone"
          onChange={ handleChangeInputs }
        />
        <button type="button" onClick={ handleClickToSave }> Salvar </button>
      </form>
        */} 
    </div>
  );
}

export default Form;
