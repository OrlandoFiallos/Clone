import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Header() {
  return (
    <div>
      <div className="header">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
        <div className="header__nav1">
          <FmdGoodOutlinedIcon />
          <div className="header__option ">
            <span className="header__optionLineOne">Enviar a</span>
            <span className="header__optionLineTwo">Honduras</span>
          </div>
        </div>
        <div className="header__search">
          <div className="header__deals">
            <span>Ofertas</span>
            <ArrowDropDownOutlinedIcon className="header__dealsIcon" />
          </div>
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
            <ShoppingCartOutlined />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </div>
      </div>
      <div className="bottom__nav">
        <div className="bottom__navButton">
          <span className="navButton__contain">
            <MenuOutlinedIcon />
            <p>Todo</p>
          </span>
        </div>
        <div className="bottom__navlinks">
          <p>Ofertas del Día</p>
          <p>Servicio al Cliente</p>
          <p>Listas</p>
          <p>Tarjetas de Regalo</p>
          <p>Vender</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
