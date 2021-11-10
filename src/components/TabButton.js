import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const TabButton = ({ detail }) => {
  const { setDetail } = useContext(ProductContext);

  return (
    <button className="gray_text" onClick={() => setDetail(detail.id)}>
      {detail.name}
    </button>
  );
};
export default TabButton;
