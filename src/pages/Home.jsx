import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, HeartHandshake, Truck, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero bg-mesh-pattern">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Share Food.<br />
              <span className="text-primary">Feed Hope Reduce Waste.</span>
            </h1>
            <p className="hero-subtitle">
              Join the movement to end food waste. Whether you're a restaurant with surplus food or someone in need, we connect you instantly.
            </p>
            <div className="hero-actions">
              <Link to="/donate">
                <Button size="lg" className="hero-btn">Donate Food</Button>
              </Link>
              <Link to="/request">
                <Button size="lg" variant="outline" className="hero-btn">Request Food</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper animate-float">
            {/* Mockup for Hero Image (Orange + Green abstract or illustration) */}
            <div className="hero-image-placeholder">
              <div className="blob blob-1 animate-float"></div>
              <div className="blob blob-2 animate-float" style={{ animationDelay: '1s' }}></div>
              <img
                src="https://loremflickr.com/1000/600/charity,kitchen"
                alt="Volunteers packing food boxes"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works bg-alt">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to make a huge impact in your community.</p>
          </div>

          <div className="steps-grid">
            <Link to="/donate" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <Card className="step-card" hover style={{ padding: '1.5rem', height: '100%' }}>
                <div style={{ position: 'relative' }}>
                  <div className="step-image-wrapper">
                    <img src="https://loremflickr.com/600/400/vegetables,market" alt="Fresh produce" className="step-photo" />
                  </div>
                  <div className="step-icon-overlay">
                    <Utensils size={24} />
                  </div>
                </div>
                <h3 style={{ marginTop: '1rem' }}>1. Have Surplus Food?</h3>
                <p>Restaurants, events, or individuals list their extra edible food on our platform.</p>
              </Card>
            </Link>

            <Link to="/request" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transform: 'translateY(1rem)' }}>
              <Card className="step-card" hover style={{ padding: '1.5rem', height: '100%' }}>
                <div style={{ position: 'relative' }}>
                  <div className="step-image-wrapper">
                    <img src="https://loremflickr.com/600/400/shelter,donation" alt="Hands holding food box" className="step-photo" />
                  </div>
                  <div className="step-icon-overlay">
                    <HeartHandshake size={24} />
                  </div>
                </div>
                <h3 style={{ marginTop: '1rem' }}>2. Claim or Request</h3>
                <p>NGOs, shelters, or individuals in need can locate and claim the food nearby.</p>
              </Card>
            </Link>

            <Link to="/volunteer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transform: 'translateY(2rem)' }}>
              <Card className="step-card" hover style={{ padding: '1.5rem', height: '100%' }}>
                <div style={{ position: 'relative' }}>
                  <div className="step-image-wrapper">
                    <img src="https://loremflickr.com/600/400/delivery,truck" alt="Driver steering wheel" className="step-photo" />
                  </div>
                  <div className="step-icon-overlay">
                    <Truck size={24} />
                  </div>
                </div>
                <h3 style={{ marginTop: '1rem' }}>3. We Deliver</h3>
                <p>Our network of approved volunteers picks up the food and delivers it safely.</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Global Impact</h2>
            <p>See the community coming together to share meals and stop hunger.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item animate-float" style={{ animationDelay: '0s' }}>
              <img src="https://loremflickr.com/600/600/volunteer,sharing" alt="Authentic food donation" className="gallery-img" />
            </div>
            <div className="gallery-item animate-float" style={{ animationDelay: '0.5s' }}>
              <img src="https://loremflickr.com/600/600/foodbank,boxes" alt="Volunteers stacking boxes" className="gallery-img" />
            </div>
            <div className="gallery-item animate-float" style={{ animationDelay: '1s' }}>
              <img src="https://loremflickr.com/600/600/cooking,group" alt="Sorting goods in warehouse" className="gallery-img" />
            </div>
            <div className="gallery-item animate-float" style={{ animationDelay: '1.5s' }}>
              <img src="https://loremflickr.com/600/600/community,meal" alt="Community sharing" className="gallery-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Local Feature Teaser */}
      <section className="local-impact">
        <div className="container local-container">
          <div className="local-content">
            <h2>Find Food Near You</h2>
            <p>Our real-time map shows available donations and requests in your immediate area. Connect locally to reduce transit time and ensure fresh food delivery.</p>
            <ul className="feature-list">
              <li><MapPin className="text-secondary" size={20} /> Real-time location tracking</li>
              <li><MapPin className="text-secondary" size={20} /> Status updates for pickup</li>
              <li><MapPin className="text-secondary" size={20} /> Verified NGOs and Donors</li>
            </ul>
            <Link to="/about">
              <Button style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }} variant="outline" className="learn-more-btn">
                Learn more about our technology <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="local-map">
            <div className="map-placeholder">
              <div className="map-pin pin-1"></div>
              <div className="map-pin pin-2 delay-1"></div>
              <div className="map-pin pin-3 delay-2"></div>
              <span>Interactive Map View</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>Ready to make a difference?</h2>
            <p>Join thousands of users who are combating hunger and food waste daily.</p>
            <div className="cta-buttons">
              <Link to="/volunteer">
                <Button size="lg" variant="secondary">Become a Volunteer</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
