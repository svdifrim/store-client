import axios from "axios";
import {
  GET_USER_CART,
  SET_LOADING_USER_CART,
  UNSET_LOADING_USER_CART
} from "../types";

export const getUserCart = userId => async dispatch => {
  try {
    const response = await axios.get("/cart", { headers: { user: userId } });
    const { data } = response;

    dispatch({
      type: GET_USER_CART,
      payload: data[0].products
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProductToCart = (userId, id) => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING_USER_CART
    });

    await axios.post(`/cart/${id}`, null, {
      headers: { user: userId }
    });

    dispatch({
      type: UNSET_LOADING_USER_CART
    });
  } catch (error) {
    console.log(error);
  }
};
