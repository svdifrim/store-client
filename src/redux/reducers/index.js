import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productDetailsReducer from "./productDetailsReducer";
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  product: productReducer,
  categories: categoriesReducer,
  cart: cartReducer
});

export default rootReducer;
