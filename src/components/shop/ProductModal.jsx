import React, { useState } from "react";
import uuidv4 from "uuid/v4";

//spinner
import spinner from "../../static/spinner.gif";

//style
import style from "./productModal.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//redux
import { connect } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartActions";

const ProductModal = ({
  product,
  modal,
  toggleModal,
  addProductToCart,
  isLoading
}) => {
  const [userId, setUserId] = useState(uuidv4());

  const addToCart = () => {
    addProductToCart(userId, product._id);
    localStorage.setItem("userId", userId);
  };

  console.log(isLoading);

  return (
    <section className={modal ? style.overlayOpen : style.overlay}>
      <div className={style.modal}>
        <div className={style.modalClose}>
          <span>
            <i className={`fas fa-arrow-left ${style.modalArrow}`} />
          </span>
          <span className="cursor-pointer" onClick={toggleModal}>
            <i className={`fas fa-times ${style.modalCloseIcon}`} />
          </span>
          <div className={style.modalRatingMobile}>
            <div className={style.modalStars}>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div>
              <span>21 reviews</span>
            </div>
          </div>
        </div>
        <div className={style.modalFlex}>
          <div className={style.colOne}>
            <div>
              <img src={product.img} alt={product.imgAlt} />
            </div>
          </div>
          <div className={style.colTwo}>
            <div className={style.modalRating}>
              <div className={style.modalStars}>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div>
                <span>21 reviews</span>
              </div>
            </div>
            <div className={style.modalTitle}>
              <h3>{product.productTitle}</h3>
            </div>
            <div className={style.modalItem}>
              <span>${product.price}</span>
              <span>50 ml</span>
            </div>
            <div>
              <div className={style.modalButtonCart}>
                <button onClick={addToCart}>
                  <div>
                    <span>Add to cart</span>
                    <i className={`fas fa-plus ${style.modalButtonCartIcon}`} />
                  </div>
                  {isLoading && (
                    <div className={style.modalSpinner}>
                      <img src={spinner} alt="spinner" />
                    </div>
                  )}
                </button>
              </div>
              <div className={style.modalText}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore eius molestias laudantium laborum voluptates earum
                  sint distinctio velit modi quas?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.modalButtonDetails}>
          <button>More details</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    product: state.product.product,
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
)(ProductModal);
