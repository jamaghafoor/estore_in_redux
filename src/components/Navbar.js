import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { productReducer } from "../reducers/productReducer";
export default function Navbar() {
  const cart = useSelector((state) => state.productReducer.cart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            EMART SHOP
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark px-3" type="submit">
               <i className="fa fa-sign-in"></i> Login
              </button>
              <button className="btn btn-outline-dark px-3 mx-2" type="submit">
               <i className="fa fa-user-plus"></i> Register
              </button>
              <Link to="/cart">
              <button className="btn btn-outline-dark px-3" type="submit">
               <i className="fa fa-shopping-cart"></i> Cart ({cart.length})
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
