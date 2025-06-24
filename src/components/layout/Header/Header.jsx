import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import header from "../../../assets/images/header.svg"
import "./Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nav = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      style={{
        background: "#ffffff80",
        height: "100%",
      }}
    >
      <div
        id="header"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="header">
            <h1 className="logo">Logo</h1>

            {/* Desktop Navigation */}
            <div className="header--nav">
              <NavLink to={"/"}>Home</NavLink>
              <select>
                <option value="">Regions</option>
                <option value="chui">Chui</option>
                <option value="talas">Talas</option>
                <option value="issyk-kul">Issyk-Kul</option>
                <option value="naryn">Naryn</option>
                <option value="jalal-abad">Jalal-Abad</option>
                <option value="osh">Osh</option>
                <option value="batken">Batken</option>
              </select>
              <NavLink to={"/"}>Culture</NavLink>
              <NavLink to={"/"}>Gallery</NavLink>
              <NavLink to={"/"}>Routes</NavLink>
            </div>

            {/* Language + SignUp */}
            <div className="header--btn">
              <select>
                <option value="">Eng</option>
                <option value="russian">Russian</option>
                <option value="kyrgyz">Kyrgyz</option>
              </select>
              <button onClick={() => nav("/admin")}>Sign up</button>
            </div>

            {/* Burger */}
            <div
              className={`burger-menu ${isMobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="mobile-menu--nav">
              <NavLink to={"/"} onClick={toggleMobileMenu}>
                Home
              </NavLink>
              <div className="mobile-select">
                <select>
                  <option value="">Regions</option>
                  <option value="chui">Chui</option>
                  <option value="talas">Talas</option>
                  <option value="issyk-kul">Issyk-Kul</option>
                  <option value="naryn">Naryn</option>
                  <option value="jalal-abad">Jalal-Abad</option>
                  <option value="osh">Osh</option>
                  <option value="batken">Batken</option>
                </select>
              </div>
              <NavLink to={"/"} onClick={toggleMobileMenu}>
                Culture
              </NavLink>
              <NavLink to={"/"} onClick={toggleMobileMenu}>
                Gallery
              </NavLink>
              <NavLink to={"/"} onClick={toggleMobileMenu}>
                Routes
              </NavLink>

              <div className="mobile-menu--controls">
                <select>
                  <option value="">Eng</option>
                  <option value="russian">Russian</option>
                  <option value="kyrgyz">Kyrgyz</option>
                </select>
                <button onClick={toggleMobileMenu}>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
