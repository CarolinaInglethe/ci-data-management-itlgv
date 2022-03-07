import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';

function ShowData() {
  const {csv, setCsv} = useContext(InfoContext);
  const navigate = useNavigate();

  const parseCSV = (text) => {
    const result = {
      header: [],
      data: [],
    };
    const [header, ...content] = text.split('\n');
    result.header = header.split(','); 
    content.forEach((item) => {
        result.data.push(item.split(','));
    })
    return result;
  }

  useEffect(() => {
      fetch('peopleInformation.csv')
      .then((res) => res.text())
      .then((text) => setCsv(parseCSV(text)) )
      .catch(() => console.log("Erro no fetch"))
  }, []);

  const handleClickUpdate = () => {
    navigate('/UpdateData');
  }

  const handleClickDelete = ({ target: { name } }) => {
    const newData = csv.data.filter((rw) => rw[1] !== name);
    setCsv({
      ...csv,
      "data": newData
    });
  }


  return (
    <div className="ShowData-page">
      <NavBar />
      {
        !csv ?  
          <p>Carregando...</p>
        :
        <table>
          <thead>
            <tr>
              {
                !csv.header ? <p>Carregando...</p>
                : csv.header.map((colum, index) => (
                    <th key={index} >{colum}</th>
                  ))
              }
            </tr>
          </thead>
          <tbody>
            {
              !csv.data ? <p>Carregando...</p>
              : csv.data.map((row, index) => (
                  <tr key={index}>
                    {
                      row.map((col) => (
                        <td>{col}</td>
                      ))
                    }
                    <td><button type="button" onClick={ handleClickUpdate }>Editar</button></td>
                    <td><button type="button" name={row[1]} onClick={handleClickDelete}>Remover</button></td>
                  </tr>
              ))
            }
      </tbody>
     </table>
      }
    </div>
  );
}

export default ShowData;
