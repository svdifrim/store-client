import React, { Component } from "react";
import SideNav from "../layout/Sidenav/SideNav";
import Shop from "../shop/Shop";
import ProductModal from "../shop/ProductModal";

//redux
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getProduct } from "../../redux/actions/productActions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "Select brand",
      skinType: "Select skin type",
      age: "Select age",
      toggle: 0,
      modal: false,
      search: ""
    };
  }

  componentWillMount() {
    this.props.getProducts();
    this.props.getCategories();
  }

  onToggle = index => {
    this.setState({
      toggle: index
    });
  };

  toggleModal = id => {
    this.props.getProduct(id);

    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container-col-1">
          <SideNav
            categories={this.props.categories}
            toggle={this.state.toggle}
            onToggle={this.onToggle}
          />
        </div>
        <div className="container-col-2">
          <Shop
            // search={this.state.search}
            skinType={this.state.skinType}
            brand={this.state.brand}
            age={this.state.age}
            products={this.props.products}
            isLoading={this.props.isLoading}
            handleChange={this.handleChange}
            toggleModal={this.toggleModal}
          />
        </div>
        <ProductModal modal={this.state.modal} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    isLoading: state.products.isLoading,
    categories: state.categories.categories,
    cart: state.cart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getCategories: () => dispatch(getCategories()),
    getProduct: id => dispatch(getProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
