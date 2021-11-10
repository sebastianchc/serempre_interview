import React, { Fragment, useContext, useEffect } from 'react';
import ProductContext from '../context/ProductContext';
import Colors from './Colors';
import Feature from './Feature';
import Product from './Product';
import Specs from './Specs';
import Tab from './Tab';
import Title from './Title';
import Warranty from './Warranty';

const Main = () => {
  const { product, getProduct } = useContext(ProductContext);

  useEffect(() => {
    getProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {product ? (
        <div className="main">
          <div className="column_1">
            <Product />
          </div>
          <div className="column_2">
            <Title />
            <Tab />
            <Colors />
            <Warranty />
            <Feature />
            <Specs />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Main;
