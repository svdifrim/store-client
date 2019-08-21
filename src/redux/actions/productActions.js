import { GET_PRODUCT } from "../types";
import axios from "axios";

export const getProduct = id => async dispatch => {
  try {
    const response = await axios.get(`/products/${id}`);
    const { data } = response;

    dispatch({
      type: GET_PRODUCT,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
