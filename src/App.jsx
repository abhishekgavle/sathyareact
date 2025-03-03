import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Home from "./Home";

import NONveg from "./NONveg";
import Cart from "./Cart";
import Orders from "./Orders";
import Contact from "./Contact";
import About from "./Aboutus";
import Milk from "./Milk";
import Notfound from "./Notfound";
import FastFood from "./FastFood";
import Snack from "./Snack";
import Bakery from "./Bakery";



import { logout } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Veg from "./Veg";
import Login from "./Login";





function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg">
        <div className="container">
          <Link to="/Home" className="navbar-brand fw-bold text-warning">
            🍴 FoodCart
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
  <li className="nav-item ms-3">
    <Link to="/Home" className="nav-link text-light">
      Home
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Veg" className="nav-link text-light">
      Veg
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/NONveg" className="nav-link text-light">
      Non-Veg
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/FastFood" className="nav-link text-light">
      Fast Food
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Milk" className="nav-link text-light">
      Milk
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Snack" className="nav-link text-light">
      Snack
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Bakery" className="nav-link text-light">
      Bakery
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Orders" className="nav-link text-light">
      Orders
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Aboutus" className="nav-link text-light">
      About
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Contact" className="nav-link text-light">
      Contact
    </Link>
  </li>
  <li className="nav-item ms-3">
    <Link to="/Cart" className="nav-link text-light">
      Cart
      <span className="badge bg-warning text-dark ms-2">
        {totalItem}
      </span>
    </Link>
  </li>
</ul>


            <div className="d-flex align-items-center ms-3">
            
              {isAuthenticated ? (
                <>
                  <span className="text-white me-3">Hi, {user}!</span>
                  <button
                    onClick={() => dispatch(logout())}
                    className="btn btn-warning btn-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-outline-warning btn-sm">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/Home" element={<Home searchQuery={searchQuery} />} />
        <Route path="/Veg" element={<Veg searchQuery={searchQuery} />} />
        <Route path="/NONveg" element={<NONveg searchQuery={searchQuery} />} />
        <Route path="/FastFood" element={<FastFood searchQuery={searchQuery} />} />
        <Route path="/Snack" element={<Snack searchQuery={searchQuery} />} />
        <Route path="/Bakery" element={<Bakery searchQuery={searchQuery} />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Milk" element={<Milk />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
