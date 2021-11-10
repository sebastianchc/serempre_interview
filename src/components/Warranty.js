import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';
import WarrantyList from './WarrantyList';

const Warranty = () => {
  const { warranty } = useContext(ProductContext);

  return (
    <Fragment>
      <p className="title">
        Would you like to add extended warranty coverage?.
      </p>
      <div className="warranty_container">
        {warranty.map((warrantyItem) => (
          <WarrantyList key={warrantyItem.id} warrantyItem={warrantyItem} />
        ))}
      </div>
    </Fragment>
  );
};

export default Warranty;
