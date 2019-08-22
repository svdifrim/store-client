import React from "react";

import style from "./header.module.css";

//react router
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className={style.headerLogo}>
      Amazing store
    </Link>
  );
};

export default HeaderLogo;
