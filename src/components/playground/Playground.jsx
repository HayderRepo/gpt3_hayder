import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
    <p>
      <a href="#location">Location</a>
    </p>
  </>
);

const Playground = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in </p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            color="fff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="fff"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar__links-sign">
                <p>Sign in </p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;