import React from "react";

//style
import style from "./header.module.css";

//React router
import { Link } from "react-router-dom";

const HeaderCart = () => {
  return (
    <div>
      <Link to="/cart" className={style.buttonCart}>
        <span className="mr-1">
          <i className="fas fa-shopping-cart" />
        </span>
        <span>MY CART</span>
        <span className={style.buttonCount}>0</span>
      </Link>
    </div>
  );
};

export default HeaderCart;
