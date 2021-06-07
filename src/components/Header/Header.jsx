import React from "react";
import logo from "../../assest/img/pizza-logo.svg";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
