import React from "react";

//Reudx
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  return <div>hey you</div>;
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
