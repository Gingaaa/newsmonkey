import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ change,searchvalue }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      change(theme);
    } else {
      setTheme("light");
      change(theme);
    }
  };
  const find = (e)=>{
    searchvalue(e.target.value)
  }

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark ${
          theme === "light" ? "bground" : "bgrounds"
        }`}
      >
        <div className="container-fluid ">
          <div className="brandBtn">
            {theme === "light" ? (
              <h2>News App</h2>
            ) : (
              <h2 className="rainbow-text">News App</h2>
            )}
            {/* <h2 className="rainbow-text">News App</h2> */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" aria-current="page" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className="searchbar">
            <input type="text" onChange={find} placeholder="Search here"/>
          </div>
          <div className="toggleWrapper">
            <input type="checkbox" className="dn" id="dn" />
            <label htmlFor="dn" className="toggle" onClick={toggleTheme}>
              <span className="toggle__handler">
                <span className="crater crater--1"></span>
                <span className="crater crater--2"></span>
                <span className="crater crater--3"></span>
              </span>
              <span className="star star--1"></span>
              <span className="star star--2"></span>
              <span className="star star--3"></span>
              <span className="star star--4"></span>
              <span className="star star--5"></span>
              <span className="star star--6"></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
