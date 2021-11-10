import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';

const Title = () => {
  const { title, description, price } = useContext(ProductContext);

  return (
    <Fragment>
      <p className="red_text">NEW RELEASE</p>
      <h1>{title}</h1>
      <h3 className="gray_text">{description}</h3>
      <div className="price_container">
        <p className="gray_text">STARRING AT</p>
        <h1>{price}</h1>
      </div>
    </Fragment>
  );
};

export default Title;
