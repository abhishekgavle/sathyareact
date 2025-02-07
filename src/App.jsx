import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import Veg from "./veg";
import NONveg from "./NONveg";
import Cart from "./Cart";
import Orders from "./Orders";
import Contact from "./Contact";
import About from "./Aboutus";
import Milk from "./Milk";
import Notfound from "./Notfound";
import Login from "./login";
import { logout } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm py-2">
        <div className="container-fluid">
          <Link to="/Home" className="navbar-brand d-flex align-items-center">
            <h1 className="heading">QuickCart</h1>
            <img src="/public/aaaaa.gif" alt="Cart Icon" className="cart-icon ms-2" width={40} height={40} />
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
            <div className="navbar-nav ms-auto">
              <Link to="/Home" className="nav-link">
                Home
                <img src="public/house.gif" alt="Home Icon" className="cart-icon ms-1" width={25} height={25} />
              </Link>
              <Link to="/veg" className="nav-link">
                Veg
                <img src="public/healthy-food.gif" alt="Veg Icon" className="cart-icon ms-1" width={25} height={25} />
              </Link>
              <Link to="/NONveg" className="nav-link">
                Non-Veg
                <img src="public/restaurant.png" alt="Non-Veg Icon" className="cart-icon ms-1" width={25} height={25} />
              </Link>
              <Link to="/Orders" className="nav-link">Orders</Link>
              <Link to="/Aboutus" className="nav-link">About</Link>
              <Link to="/Contact" className="nav-link">Contact</Link>
              <Link to="/Milk" className="nav-link">Milk</Link>
              <Link to="/cart" className="nav-link">
                Cart
                <span className="badge bg-warning text-dark ms-2">{totalItem}</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="d-flex ms-auto" style={{ maxWidth: '300px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <div className="d-flex align-items-center ms-3">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-dark me-3">
                    Welcome, {user}!
                  </span>
                  <button
                    onClick={() => dispatch(logout())}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-light btn-sm">
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
