import React from "react";
import spinner from "../../static/spinner.gif";

//style
import style from "./shop.module.css";

//redux
import { connect } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartActions";

const Product = ({
  product,
  toggleModal,
  addProductToCart,
  userId,
  isLoading
}) => {
  return (
    <>
      <div className={style.product} onClick={() => toggleModal(product)}>
        <div>
          <img src={product.img} alt={product.imgAlt} />
        </div>
        <div>
          <p>{product.productTitle}</p>
        </div>
        <div>
          <span className={style.productPrice}>${product.price}</span>
        </div>
        <div className={style.productButton}>
          <button
            onClick={e => {
              e.stopPropagation();

              addProductToCart(userId, product._id);
              localStorage.setItem("userId", userId);
            }}
          >
            <span>Add to cart</span>
            {isLoading && (
              <div>
                <img src={spinner} alt="spinner" />
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.cart.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (userId, id) => dispatch(addProductToCart(userId, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
