import { GET_PRODUCT_DETAILS } from "../types";

const initialState = {
  productDetails: {},
  isLoading: false
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload
      };

    default:
      return state;
  }
};

export default productDetailsReducer;
