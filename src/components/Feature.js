import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';
import FeatureList from './FeatureList';

const Feature = () => {
  const { features } = useContext(ProductContext);

  return (
    <Fragment>
      <p className="title">Features.</p>
      <div className="warranty_container">
        {features.map((feature) => (
          <FeatureList key={feature.id} feature={feature} />
        ))}
      </div>
    </Fragment>
  );
};

export default Feature;
