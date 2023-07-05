import React from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  //create state for toggle the navbar
  const [active, setActive] = useState("navbar");
  const showNavbar = () => {
    setActive("navbar activeNavbar");
  };
  const hideNavbar = () => {
    setActive("navbar");
  };

  return (
    <section className="navbarSection">
      <div className="header">
        <div className="logo">
          <a href="#" className="logo flex">
            <img src="/title.png" alt="title" className="titleImg" />
            <h1>AriaPzki</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="navBtns flex">
              <button className="btn btnLogin">
                <a href="#">Login</a>
              </button>
              <button className="btn btnSignup">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={hideNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <AiOutlineMenu className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
