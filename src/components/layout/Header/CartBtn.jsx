import React from "react";

//style
import style from "./header.module.css";

//React router
import { Link } from "react-router-dom";

const HeaderCart = ({ cart }) => {
  return (
    <div>
      <Link to="/cart" className={style.buttonCart}>
        <span className="mr-1">
          <i className="fas fa-shopping-cart" />
        </span>
        <span>MY CART</span>

        <span className={style.buttonCount}>
          {cart === undefined ? 0 : cart.products.length}
        </span>
      </Link>
    </div>
  );
};

export default HeaderCart;
