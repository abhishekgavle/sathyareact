import { Link } from "react-router-dom";
import "./Home.css";


// Header Component
function Header() {
  return (
    <header className="bg-dark text-white py-3 shadow-sm">
  <div className="container d-flex justify-content-center align-items-center">
    <h1 className="h4 mb-0 d-flex align-items-center">
      <span role="img" aria-label="food-icon" className="me-2">🍴</span> 
      <span className="fw-bold">Food Loverss</span>
    </h1>
  </div>
</header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Food Lovers. All Rights Reserved.
        @abhi
      </p>

      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>

      <div className="social-icons">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-instagram-square"></i>
      </div>

    </footer>
  );
}

function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="veg-items-container">
        <Link to="/veg" className="veg-item">
          <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D" alt="Navigate to Veg" className="veg-image" />
          <h5>Veg Items</h5>
        </Link>
        <Link to="/NONveg" className="veg-item">
          <img src="https://th.bing.com/th/id/R.e0a2641ebe0391da31ae49f16c2aa4fb?rik=jGoo4326dNLPZA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fMeat-Dishes-Wallpaper-03833.jpg&ehk=wJia%2bpXdj4x272Dnp1usdg6%2fLtacuz8HEuSsrEM%2fTdk%3d&risl=&pid=ImgRaw&r=0" alt="Navigate to NON Veg" className="veg-image" />
          <h5>NON Veg Items</h5>
        </Link>
        <Link to="/milk" className="veg-item">
          <img src="https://th.bing.com/th/id/OIP.mozs5F8l_QuJFbFXw98mRAHaHZ?w=195&h=195&c=7&r=0&o=5&pid=1.7" alt="Navigate to Desserts" className="veg-image" />
          <h5>Milk Items</h5>
        </Link>
        <Link to="/Fastfood" className="veg-item">
          <img src="https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Navigate to Desserts" className="veg-image" />
          <h5>Fast Food </h5>
        </Link>
        <Link to="/Snack" className="veg-item">
          <img src="https://images.unsplash.com/photo-1571865402713-98ba5a56f12b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Navigate to Desserts" className="veg-image" />
          <h5>Snack </h5>
        </Link>
        <Link to="/Bakery" className="veg-item">
          <img src="https://images.unsplash.com/photo-1583338917451-face2751d8d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Navigate to Desserts" className="veg-image" />
          <h5>Bakery </h5>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
