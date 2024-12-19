// NavbarComponent.jsx
import React from 'react';
import '../../assets/css/tiny-slider.css';
import '../../assets/css/style.css';
import { NavLink } from 'react-router-dom'; 
import { useCart } from '../../store/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
        <div className="container">
          <a className="navbar-brand" href="/">Furni<span>.</span></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="/images/user.svg" alt="user" />
                </a>
              </li>
              <li>
                <NavLink className="nav-link position-relative" to="/cart">
                  <img src="/images/cart.svg" alt="cart" />
                  {totalItems > 0 && (
                    <span
                      className="badge bg-danger position-absolute top-10 start-100 translate-middle"
                      style={{ fontSize: '0.75rem', borderRadius: '50%' }}
                    >
                      {totalItems}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
