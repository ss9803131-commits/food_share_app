import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Food<span className="text-primary">Share</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/donate" className="nav-link">Donate Food</Link>
          <Link to="/request" className="nav-link">Request Food</Link>
          <Link to="/volunteer" className="nav-link">Volunteer</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          
          <div className="nav-actions" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--color-border)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Demos:</span>
            <Link to="/dashboard/user" className="nav-link" style={{ fontSize: '0.9rem' }}>User</Link>
            <Link to="/dashboard/volunteer" className="nav-link" style={{ fontSize: '0.9rem' }}>Driver</Link>
            <Link to="/dashboard/admin" className="nav-link" style={{ fontSize: '0.9rem' }}>Admin</Link>
          </div>

          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline">Log in</Link>
            <Link to="/signup" className="btn btn-primary">Sign up</Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/donate" className="mobile-nav-link" onClick={toggleMenu}>Donate Food</Link>
          <Link to="/request" className="mobile-nav-link" onClick={toggleMenu}>Request Food</Link>
          <Link to="/volunteer" className="mobile-nav-link" onClick={toggleMenu}>Volunteer</Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About Us</Link>
          <div className="mobile-nav-actions">
            <Link to="/login" className="btn btn-outline full-width" onClick={toggleMenu}>Log in</Link>
            <Link to="/signup" className="btn btn-primary full-width" onClick={toggleMenu}>Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
