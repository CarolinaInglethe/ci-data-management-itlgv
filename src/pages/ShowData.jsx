import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function ShowData() {
  const [csv, setCsv] = useState(null)

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
                csv.header.map((colum, index) => (
                  <th key={index} >{colum}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              csv.data.map((obj, index) => (
              <tr key={index}>
                {
                  obj.map((info) => (
                    <td>{info}</td>
                  ))
                }
                <td><button type="button">Editar</button></td>
                <td><button type="button">Remover</button></td>
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
