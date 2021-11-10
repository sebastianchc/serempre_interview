import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';
import ColorsList from './ColorsList';

const Colors = () => {
  const { colors } = useContext(ProductContext);

  return (
    <Fragment>
      <p className="title">Choose your finish.</p>
      <div className="colors_container">
        {colors.map((color) => (
          <ColorsList key={color.id} color={color} />
        ))}
      </div>
    </Fragment>
  );
};

export default Colors;
