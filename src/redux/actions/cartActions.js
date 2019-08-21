import { ADD_PRODUCT_TO_CART } from "../types";
import axios from "axios";

export const getUserCart = userId => async dispatch => {
  try {
    const response = await axios.get("/cart", { headers: { user: userId } });
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const addProductToCart = (userId, id) => async dispatch => {
  try {
    const response = await axios.post(`/cart/${id}`, null, {
      headers: { user: userId }
    });

    const { data } = response;
    console.log(data);

    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
