import React from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <section className="navbarSection">
      <div className="header">
        <div className="logo">
          <a href="#" className="logo flex">
            <img src="/title.png" alt="title" className="titleImg" />
            <h1>AriaPzki</h1>
          </a>
        </div>
        <div className="navbar">
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

          <div className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div className="toggleNavbar">
          <AiOutlineMenu className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
