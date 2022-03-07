import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
// import InfoContext from '../context/infoContext';
// import { useNavigate } from 'react-router-dom';

function CreateData() {
  // const { inputsValues, setInputValues, csv, setCsv  } = useContext(InfoContext);
  // const navigate = useNavigate();

  // const handleChangeInputs = ({ target: { name, value } }) => {
  //   setInputValues([
  //     ...inputsValues,
  //     [name] = value,
  //   ]);
  //   console.log(inputsValues)
  // }

  // const handleClickToSave = async () => {
  //   const newData = await csv.data.push([
  //     inputsValues.id, inputsValues.nome, inputsValues.telefone
  //   ])
  //   await setCsv({
  //     ...csv,
  //     "data": newData
  //   })
  //   console.log(newData)
  //   console.log(csv.data)
  //   // navigate('/ShowData');
  // }

  return (
    <div className="CreateData-page">
    <NavBar />
      <h1>Cadastro de novos dados</h1> 
      <p>Em manutençao...</p>
      {/* <form>
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
          value={inputsValues.nome}
          placeholder="Insira um nome"
          onChange={ handleChangeInputs }
        />
        <input
          type="text"
          name="telefone"
          value={inputsValues.telefone}
          placeholder="insira um telefone"
          onChange={ handleChangeInputs }
        />
        <button type="button" onClick={ handleClickToSave }> Salvar </button>
      </form> */}
    </div>
  );
}

export default CreateData;
