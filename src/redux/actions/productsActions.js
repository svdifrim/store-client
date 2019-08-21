import { SET_LOADING_PRODUCTS, GET_PRODUCTS } from "../types";
import axios from "axios";

export const getProducts = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING_PRODUCTS
    });
    const response = await axios.get("/products");
    const { data } = response;

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
