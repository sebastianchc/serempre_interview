import axios from 'axios';
import React, { useReducer } from 'react';
import {
  CHOOSE_COLOR,
  CHOOSE_FEATURE,
  CHOOSE_WARRANTY,
  GET_PRODUCT,
  SET_DETAIL,
  SET_IMAGE,
} from '../types';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

const ProductState = ({ children }) => {
  const initialState = {
    product: null,
    title: '',
    description: '',
    price: null,
    images: [],
    technical_details: [],
    details: [],
    colors: [],
    warranty: [],
    features: [],
    specs: null,
    currentDetail: null,
    currentImage: null,
    currentColor: null,
    currentWarranty: null,
    currentFeature: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProduct = async () => {
    try {
      const url = 'https://frontend-interview-api-sepia.vercel.app/api/items';
      const response = await axios.get(url);
      dispatch({
        type: GET_PRODUCT,
        payload: response.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setDetail = (id) => {
    dispatch({
      type: SET_DETAIL,
      payload: id,
    });
  };
  const setImage = (id) => {
    dispatch({
      type: SET_IMAGE,
      payload: id,
    });
  };
  const chooseColor = (id) => {
    dispatch({
      type: CHOOSE_COLOR,
      payload: id,
    });
  };
  const chooseWarranty = (id) => {
    dispatch({
      type: CHOOSE_WARRANTY,
      payload: id,
    });
  };
  const chooseFeature = (id) => {
    dispatch({
      type: CHOOSE_FEATURE,
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        title: state.title,
        description: state.description,
        price: state.price,
        images: state.images,
        technical_details: state.technical_details,
        details: state.details,
        colors: state.colors,
        warranty: state.warranty,
        features: state.features,
        specs: state.specs,
        currentDetail: state.currentDetail,
        currentImage: state.currentImage,
        currentColor: state.currentColor,
        currentWarranty: state.currentWarranty,
        currentFeature: state.currentFeature,
        getProduct,
        setDetail,
        setImage,
        chooseColor,
        chooseWarranty,
        chooseFeature,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
