import React from "react";
import logo from "../assets/images/logo.jpeg";

function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="McDonalds" />
        </div>
        <div className=" nav-right">
          <div className="nav-right-top">
            <div className="nav-right-top-left">
              <ul>
                <li>
                  <select>
                    <option>Language</option>
                    <option>English</option>
                    <option>Espanol</option>
                  </select>
                </li>
                <li>Sign Up for Email</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="nav-right-top-right">
              <ul>
                <li>Search</li>
                <li>
                  <a href="">Change your Location</a>
                </li>
                <li>
                  <button>Order Now</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-right-bottom">
            <ul>
              <li>
                <select>
                  <option>Our Menu</option>
                </select>
              </li>
              <li>Download App</li>
              <li>MyMcDonald's Rewards</li>
              <li>Exclusive Deals</li>
              <li>About Our Food</li>
              <li>Locate</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
