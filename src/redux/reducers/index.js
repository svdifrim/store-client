import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;
