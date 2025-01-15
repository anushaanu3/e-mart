import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <div className="navbar navbar-dark bg-dark ">
        <div className="container d-flex ">
          <div className="nav  text-start">
            <a className="navbar-brand " href="/">
              E-mart
            </a>
          </div>
          <div className="nav">
            <input type="text" placeholder="Search.." />
          </div>
          <div className="nav">
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link text-decoration-none">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link text-decoration-none">
                  Signout
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/cart" className=" nav-link text-decoration-none">
                  cart <span>[{cartItems.length}]</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar d-flex text-bg-light">
        <div className="container d-flex">
          <ul className="navbar-nav d-flex flex-row gap-4 fw-bold">
            <li>
              <Link to="/mobiles" className="text-dark text-decoration-none">
                Mobiles
              </Link>
            </li>
            <li>
              <Link to="/computers" className="text-dark text-decoration-none">
                Computers
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="text-dark text-decoration-none">
                Speakers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
