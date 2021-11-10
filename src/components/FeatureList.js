import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const FeatureList = ({ feature }) => {
  const { chooseFeature } = useContext(ProductContext);

  return (
    <button
      className="button_vertically hover"
      onClick={() => chooseFeature(feature.id)}
    >
      <p className="bold">{feature.name}</p>
      {feature.additionalValue !== 0 ? (
        <p>{`+ $${feature.additionalValue}`}</p>
      ) : null}
    </button>
  );
};

export default FeatureList;
