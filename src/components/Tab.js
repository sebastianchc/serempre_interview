import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';
import TabButton from './TabButton';

const Tab = () => {
  const { details, currentDetail } = useContext(ProductContext);

  return (
    <Fragment>
      <div className="details_container">
        {details.map((detail) => (
          <TabButton key={detail.id} detail={detail} />
        ))}
      </div>
      {currentDetail ? (
        <p className="gray_text">{currentDetail.description}</p>
      ) : (
        <p className="gray_text">{details[0].description}</p>
      )}
    </Fragment>
  );
};

export default Tab;
