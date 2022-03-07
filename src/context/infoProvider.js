import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
    const [csv, setCsv] = useState(null)


  const contextValues = {
    csv,
    setCsv,
  };

  return (
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};