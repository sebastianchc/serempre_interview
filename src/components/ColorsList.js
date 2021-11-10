import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ColorsList = ({ color }) => {
  const { chooseColor } = useContext(ProductContext);

  return (
    <button
      className="button_border hover"
      onClick={() => chooseColor(color.id)}
    >
      <p className="bold">{color.name}</p>
      <span className="gray_text">{color.description}</span>
    </button>
  );
};

export default ColorsList;
