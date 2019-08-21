import { GET_PRODUCTS, SET_LOADING_PRODUCTS, GET_PRODUCT } from "../types";

const initialState = {
  products: [],
  isLoading: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_PRODUCTS:
      return {
        ...state,
        isLoading: true
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
