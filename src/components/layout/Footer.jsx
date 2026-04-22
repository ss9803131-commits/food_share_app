import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Food<span className="text-primary">Share</span>
            </Link>
            <p className="footer-description">
              Connecting surplus food with those who need it most. Together we can end hunger and reduce food waste.
            </p>
            <div className="footer-socials">
              {/* Add social icons here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Platform</h3>
            <ul className="footer-links">
              <li><Link to="/donate">Donate Food</Link></li>
              <li><Link to="/request">Request Food</Link></li>
              <li><Link to="/volunteer">Volunteer Jobs</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Legal / Help */}
          <div className="footer-col">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ & Help Center</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li><MapPin size={18} /> 123 Impact Way, CA 94103</li>
              <li><Phone size={18} /> +1 (555) 123-4567</li>
              <li><Mail size={18} /> hello@foodshare.org</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FoodShare. Built with <Heart size={14} className="text-secondary" /> for the community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
