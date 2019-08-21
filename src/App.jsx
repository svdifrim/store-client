import React, { Component } from "react";
import Header from "./components/layout/Header/Header";

//React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    // const { length } = this.props.cart.products.length;
    // console.log(length);

    return (
      <div>
        <BrowserRouter>
          <Header
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            // search={this.state.search}
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

export default App;
