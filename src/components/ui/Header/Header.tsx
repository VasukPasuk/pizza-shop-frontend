import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import {AiFillMoon, AiFillSun} from "react-icons/ai";
import {MdSettings} from "react-icons/md";
import {FaPizzaSlice, FaUser} from "react-icons/fa6";
import {useTheme} from "../../../hooks/useTheme.tsx";

type TypeHeaderProps = {
  role?: 'customer' | 'admin'
};

function Header(props:TypeHeaderProps) {
  const {theme, setTheme } = useTheme()
  const {role = "customer"} = props;
  if (role === "customer") {
    return (
      <header
        id="header_component"
        style={theme === 'dark' ? {boxShadow: '0 0 5px 5px rgba(0,0,0,0.1)'} : {}}
      >
        <div className="logo_container">
          <FaPizzaSlice id="logo"/>
          <span className="logo-text">
          PIZZA PARADISE
        </span>
        </div>
        <ul className="header-links_group">
          <li>
            <Link to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <div className="header-tools_group">
          <div onClick={() => setTheme(prev => prev === "dark" ? 'light' : 'dark')}>
            {theme === "dark" ? <AiFillMoon/> : <AiFillSun/>}
          </div>
          {/*<div className="separator"/>*/}
          <MdSettings/>
          {/*<div className="separator"/>*/}
          <FaUser/>
        </div>
      </header>
    );
  }
  return (
    <header>
      1
    </header>
  )
}

export default Header;