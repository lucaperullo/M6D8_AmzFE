import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/*logo on the left ->img */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/*Search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 Links */}
      <div className="header_nav">
        {/*1stlink */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Luca</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/*2ndlink */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/*3rdlink */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket icon with number of items */}
      <Link to="/cart">
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          {/**Shopping basket icon */}
          {/**Number of items in the basket */}
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
