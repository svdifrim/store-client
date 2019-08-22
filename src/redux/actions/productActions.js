import { GET_PRODUCT } from "../types";

export const getProduct = product => {
  return {
    type: GET_PRODUCT,
    payload: product
  };
};
