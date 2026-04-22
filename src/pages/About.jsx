import { Users, Target, Shield, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  return (
    <div className="about animate-fade-in">
      {/* Header */}
      <section className="about-header bg-mesh-pattern">
        <div className="container about-container text-center">
          <h1 className="page-title">Our Mission</h1>
          <p className="page-subtitle">
            We are dedicated to bridging the gap between excess food and empty plates, ensuring no good food goes to waste while fighting hunger in our communities.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide our work every single day.</p>
          </div>
          
          <div className="values-grid">
            <Card className="value-card animate-float" style={{ animationDelay: '0s' }}>
              <Heart className="value-icon text-primary" size={40} />
              <h3>Compassion</h3>
              <p>We believe everyone deserves access to fresh, healthy meals.</p>
            </Card>
            <Card className="value-card animate-float" style={{ animationDelay: '0.4s' }}>
              <Target className="value-icon text-primary" size={40} />
              <h3>Efficiency</h3>
              <p>Using technology to distribute resources exactly where they are needed.</p>
            </Card>
            <Card className="value-card animate-float" style={{ animationDelay: '0.8s' }}>
              <Shield className="value-icon text-primary" size={40} />
              <h3>Trust</h3>
              <p>All our partners and volunteers are vetted to ensure food safety and reliability.</p>
            </Card>
            <Card className="value-card animate-float" style={{ animationDelay: '1.2s' }}>
              <Users className="value-icon text-primary" size={40} />
              <h3>Community</h3>
              <p>Fostering local connections that strengthen neighborhoods.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section bg-alt">
        <div className="container story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              FoodShare started in 2024 when a group of restaurant owners and software engineers 
              realized how much perfectly good food was being thrown away at the end of the day, 
              while local shelters struggled to feed their residents. 
            </p>
            <p>
              By combining logistics technology with community spirit, we built an platform that 
              makes food rescue as easy as ordering a ride-share. Today, we're proud to facilitate thousands 
              of meals every month.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://loremflickr.com/800/600/volunteers,kitchen" 
              alt="Community cooking together" 
              className="story-img-main"
            />
            <img 
              src="https://loremflickr.com/400/600/food,delivery" 
              alt="Fresh produce delivery" 
              className="story-img-sub animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
