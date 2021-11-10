import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';

const Specs = () => {
  const { specs } = useContext(ProductContext);

  return (
    <Fragment>
      <div className="down_line">
        <p className="title">Specifications.</p>
      </div>
      <div className="down_line">
        <p className="bold">Dimensions</p>
        <p>{specs.dimension}</p>
      </div>
      <div className="down_line">
        <p className="bold">USB Standard</p>
        <p>{specs.usb_standard}</p>
      </div>
      <div className="down_line">
        <p className="bold">Power Supply</p>
        <p>{specs.power_suply}</p>
      </div>
      <div className="down_line">
        <p className="bold">Frecuency Response (Microphone)</p>
        <p>{specs.frequency_response_microphone}</p>
      </div>
      <div className="down_line">
        <p className="bold">Frecuency Response</p>
        <p>{specs.frequency_response}</p>
      </div>
      <div className="down_line">
        <p className="bold">Noise Cancellation</p>
        <p>{specs.noise_cancelation}</p>
      </div>
    </Fragment>
  );
};

export default Specs;
