import React, { useEffect, useState } from 'react';

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
      fetch('/peopleInformation.csv')
      .then((res) => res.text())
      .then((text) => setCsv(parseCSV(text)) );
  }, []);

  return (
    <div className="ShowData-page">
      <h1>Pagina de dados</h1>
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
          !csv ?  
          <p>Carregando...</p>
        :
          csv.data.map((obj, index) => (
          <tr key={index}>
            <td>{obj.name}</td>
            <td>{obj.flight_number}</td>
            <td>{Date(obj.date_utc)}</td>
            <td>{obj.rocket}</td>
            <button type="button">Editar</button>
            <button type="button">Remover</button>
          </tr>
          ))
        }
        
      </tbody>
     </table>
    </div>
  );
}

export default ShowData;
