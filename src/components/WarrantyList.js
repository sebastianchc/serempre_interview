import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const WarrantyList = ({ warrantyItem }) => {
  const { chooseWarranty } = useContext(ProductContext);

  return (
    <button
      className="button_vertically hover"
      onClick={() => chooseWarranty(warrantyItem.id)}
    >
      <p className="bold">
        {warrantyItem.name}
        <br />
        <br />
        <span className="gray_text">{warrantyItem.description}</span>
      </p>
      {warrantyItem.additionalValue !== 0 ? (
        <p>{`+ $${warrantyItem.additionalValue}`}</p>
      ) : null}
    </button>
  );
};

export default WarrantyList;
