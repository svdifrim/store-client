import React from "react";

//style
import style from "./cart.module.css";

const CartItem = ({ product }) => {
  console.log(product);

  return (
    <div className={style.cartProduct}>
      <div className={style.cartImgContainer}>
        <img src={product.img} alt={product.imgAlt} />
      </div>
      <div className={style.description}>
        <h3>{product.productTitle}</h3>
      </div>
      <div className={style.quantity}>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
      <div className={style.deleteButtonContainer}>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
