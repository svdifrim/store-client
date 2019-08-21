import { GET_PRODUCT } from "../types";

const initialState = {
  product: {},
  isLoading: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
