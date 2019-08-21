import React from "react";
import Categories from "../Categories/Categories";
import Advertisement from "../Categories/Advertisement";
import spinner from "../../../static/spinner.gif";

//style
import style from "./sidenav.module.css";
import { connect } from "react-redux";

const SideNav = ({ categories, toggle, onToggle, isLoading }) => {
  return (
    <nav>
      <div className={`${style.categories}`}>
        <div>
          <h1>ALL CATEGORIES</h1>
        </div>

        {isLoading && (
          <div className="spinner-container">
            <img src={spinner} alt="spinner" />
          </div>
        )}
        {categories &&
          categories.map((category, index) => {
            return category ? (
              <Categories
                key={category._id}
                index={index}
                category={category}
                style={style}
                toggle={toggle}
                onToggle={onToggle}
              />
            ) : null;
          })}
      </div>
      <Advertisement style={style} />
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.categories.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(SideNav);
