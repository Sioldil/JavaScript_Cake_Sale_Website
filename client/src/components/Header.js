import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header__top__inner">
                <div class="header__logo">
                  <a href="./index.html">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </div>
                <div class="header__top__right">
                  <div class="header__top__right__links">
                    <a href="#">
                      <img src="assets/img/icon/heart.png" alt="" />
                    </a>
                  </div>
                  <div class="header__top__right__cart">
                    <a href="#">
                      <img src="assets/img/icon/cart.png" alt="" />
                      <span>0</span>
                    </a>
                    <div class="cart__price">
                      Cart: <span>$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="canvas__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="header__menu mobile-menu">
              <ul>
                <li class="active">
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <Link to="About">About</Link>
                </li>
                <li>
                  <a href="./shop.html">Shop</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="dropdown">
                    <li>
                      <a href="./shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="./shoping-cart.html">Shoping Cart</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="./wisslist.html">Wisslist</a>
                    </li>
                    <li>
                      <a href="./Class.html">Class</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;