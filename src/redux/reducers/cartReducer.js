import { ADD_PRODUCT_TO_CART } from "../types";

const initialState = {
  cart: [],
  isLoading: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
