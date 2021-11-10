import {
  CHOOSE_COLOR,
  CHOOSE_FEATURE,
  CHOOSE_WARRANTY,
  GET_PRICE_TO_PAY,
  GET_PRODUCT,
  SET_DETAIL,
  SET_IMAGE,
} from '../types';

const ProductReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        images: action.payload.images,
        technical_details: action.payload.technical_details,
        details: action.payload.details,
        colors: action.payload.colors,
        warranty: action.payload.warranty,
        features: action.payload.features,
        specs: action.payload.specs,
        // currentDetail: action.payload.details[0],
        // currentImage: action.payload.images[0],
      };
    case SET_DETAIL:
      return {
        ...state,
        currentDetail: state.details.find(
          (detail) => detail.id === action.payload
        ),
      };
    case SET_IMAGE:
      return {
        ...state,
        currentImage: state.images.find((image) => image.id === action.payload),
      };
    case CHOOSE_COLOR:
      return {
        ...state,
        currentColor: state.colors.find((color) => color.id === action.payload),
      };
    case CHOOSE_WARRANTY:
      return {
        ...state,
        currentWarranty: state.warranty.find(
          (warran) => warran.id === action.payload
        ),
      };
    case CHOOSE_FEATURE:
      return {
        ...state,
        currentFeature: state.features.find(
          (feature) => feature.id === action.payload
        ),
      };
    case GET_PRICE_TO_PAY:
      return { ...state, priceToPay: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
