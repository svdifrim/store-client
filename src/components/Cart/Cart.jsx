import React from "react";
import CartItem from "./CartItem";

//style
import style from "./cart.module.css";

//Reudx
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  return (
    <div className="container">
      <div className={style.productsContainer}>
        <h1>My cart</h1>
        {cart &&
          cart.map(product => {
            return <CartItem key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
