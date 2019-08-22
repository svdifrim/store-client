import React, { Component } from "react";
import Header from "./components/layout/Header/Header";

//React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

//Redux
import { connect } from "react-redux";
import { getUserCart } from "./redux/actions/cartActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("userId");
    this.props.getUserCart(userId);
  }

  componentDidUpdate() {
    if (this.props.cart) {
      const cart = this.props.cart ? this.props.cart : [];
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            cart={this.props.cart}
          />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: userId => dispatch(getUserCart(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
