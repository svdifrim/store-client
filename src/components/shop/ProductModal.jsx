import React from "react";

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
  isLoading,
  userId
}) => {
  const addToCart = () => {
    addProductToCart(userId, product._id);
    localStorage.setItem("userId", userId);
  };

  const totalStars = 5;
  //set star percentage
  const starPercentage = (product.rating / totalStars) * 100;
  //round star percentage
  const starsPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  console.log(starsPercentageRounded);

  return (
    <section
      className={modal ? style.overlayOpen : style.overlay}
      onClick={toggleModal}
    >
      <div
        className={style.modal}
        onClick={e => {
          e.stopPropagation();
        }}
      >
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
                <div className={style.starsOuter}>
                  <div className={style.starsInner} />
                </div>
                <div className={style.emptyStars}>
                  <div
                    className={style.fullStars}
                    style={{ width: starsPercentageRounded }}
                  />
                </div>
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
