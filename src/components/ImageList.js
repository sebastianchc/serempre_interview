import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ImageList = ({ image }) => {
  const { setImage } = useContext(ProductContext);

  return (
    <button className="border_img hover" onClick={() => setImage(image.id)}>
      <img className="minor_img" src={image.x1} alt="Minor" />
    </button>
  );
};

export default ImageList;
