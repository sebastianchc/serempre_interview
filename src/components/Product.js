import React, { Fragment, useContext } from 'react';
import ProductContext from '../context/ProductContext';
import ImageList from './ImageList';
import TechList from './TechList';

const Product = () => {
  const { images, technical_details, currentImage } =
    useContext(ProductContext);

  return (
    <Fragment>
      <div className="border_img big">
        {currentImage ? (
          <img className="main_img" src={currentImage.x2} alt="Main" />
        ) : (
          <img className="main_img" src={images[0].x2} alt="Main" />
        )}
      </div>
      <div className="list_img">
        {images.map((image) => (
          <ImageList key={image.id} image={image} />
        ))}
      </div>
      <div className="list_tech">
        {technical_details.map((tech) => (
          <TechList key={tech.name} tech={tech} />
        ))}
      </div>
    </Fragment>
  );
};

export default Product;
