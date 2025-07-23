import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="main_holder">
        <div className="holder_info">
          <div className="info-first">
            <a href="#">
              <i id="telephone" className="bi bi-telephone-fill"></i> +464 145 684 325
            </a>
            <a href="#">
              <i className="bi bi-envelope"></i> admin@example.com
            </a>
          </div>
          <div className="info-second">
            <Link to="/pages/BecomeTeacher">Become a Teacher</Link>
            <Link to="/pages/Myprofile">MyProfile</Link>
          </div>
        </div>
      </div>

      <div className="second_basic">
        <div className="info-holder-second-bar">
          <div className="info-container">
            <i id="burger_111" className="bi bi-list burger-icon"></i>
            <img
              src="https://varsity.mhrtheme.com/wp-content/uploads/2022/11/logo.png"
              alt="Logo"
            />

            <ul>
              <li id="li-1">
                <Link to="/">
                  Home <i className="bi bi-chevron-down"></i>
                </Link>
              </li>

              <li id="li-2">
                <Link to="/pages/Courselist">
                  All Courses <i className="bi bi-chevron-down"></i>
                </Link>
              </li>

              <li id="li-3">
                <Link to="/pages/BlogGrid">
                  Blog Classic <i className="bi bi-chevron-down"></i>
                </Link>
              </li>

              <li id="li-4">
                <Link to="/pages/AboutUs">
                  Pages <i className="bi bi-chevron-down"></i>
                </Link>
              </li>

              <li>
                <Link to="/pages/Conactus">Contact Us</Link>
              </li>
            </ul>

            <Link to="/pages/LiveClass">
              <button id="btn-header" className="btn btn-primary px-4 custom-btn">
                Join Live Class
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
