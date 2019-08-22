import axios from "axios";
import { GET_PRODUCT_DETAILS } from "../types";

export const getProductDetails = id => async dispatch => {
  try {
    const response = await axios.get(`products/${id}`);
    const { data } = response;

    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
