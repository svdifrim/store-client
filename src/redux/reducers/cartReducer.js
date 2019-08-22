import {
  GET_USER_CART,
  SET_LOADING_USER_CART,
  UNSET_LOADING_USER_CART
} from "../types";

const initialState = {
  cart: [],
  isLoading: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_USER_CART:
      return {
        ...state,
        isLoading: true
      };
    case UNSET_LOADING_USER_CART:
      return {
        ...state,
        isLoading: false
      };
    case GET_USER_CART:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
