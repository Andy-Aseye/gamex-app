import React from 'react';
import logo from './pictures/comcast-logo.png';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-transparent p-3 mb-5">
  <a className="navbar-brand mx-3" href="#"><img src={logo} id="logo"/></a>
  <button className="navbar-toggler btn-close-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active px-4 nav-click">
        <a className="nav-link" href="#product">Product</a>
      </li>
      <li className="nav-item px-4 nav-click">
        <a className="nav-link" href="#news">News</a>
      </li>
      <li className="nav-item px-4 nav-click">
        <a className="nav-link" href="#discounts">Discounts</a>
      </li>
      <li className="nav-item px-4 nav-click">
        <a className="nav-link" href="#trailers">Trailers</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Nav
