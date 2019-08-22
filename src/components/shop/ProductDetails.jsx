import React, { useEffect } from "react";

//redux
import { getProductDetails } from "../../redux/actions/productDetailsActions";
import { connect } from "react-redux";

const ProductDetails = ({ history, getProductDetails, productDetails }) => {
  const id = history.location.pathname.split("/").pop();
  useEffect(() => {
    getProductDetails(id);
  }, [getProductDetails, id]);

  console.log(productDetails);

  return <div>Product detail</div>;
};

const mapDispatchToProps = dispatch => {
  return {
    getProductDetails: id => dispatch(getProductDetails(id))
  };
};

const mapStateToProps = state => {
  return {
    productDetails: state.productDetails.productDetails
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
