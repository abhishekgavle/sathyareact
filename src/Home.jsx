import { Link } from "react-router-dom";
import "./Home.css";
import vegImage from "./assets/veg.png"; // Import image from assets folder

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Food Lovers</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/veg">Veg Items</Link>
        <Link to="/NONveg">NON Veg Items</Link>
      </nav>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Food Lovers. All Rights Reserved.</p>

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

      <p>Follow us on social media for the latest updates and offers!</p>
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
          <img src="https://th.bing.com/th/id/OIP.fi3MbrqZKpcueVW8Z6ZxjQHaE8?w=348&h=190&c=7&r=0&o=5&pid=1.7" alt="Navigate to NON Veg" className="veg-image" />
          <h5>NON Veg Items</h5>
        </Link>
        <Link to="/milk" className="veg-item">
          <img src="https://th.bing.com/th/id/OIP.mozs5F8l_QuJFbFXw98mRAHaHZ?w=195&h=195&c=7&r=0&o=5&pid=1.7" alt="Navigate to Desserts" className="veg-image" />
          <h5>Milk Items</h5>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
