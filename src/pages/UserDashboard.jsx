import { Package, Clock, MapPin, CheckCircle, Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-page animate-fade-in">
      <div className="container">
        <div className="dashboard-header">
          <h1>User Dashboard</h1>
          <p>Welcome back, Jane. Here's an overview of your activity.</p>
        </div>

        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-icon primary"><Package size={24} /></div>
            <div className="stat-content">
              <h3>Total Donations</h3>
              <p>42</p>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon secondary"><CheckCircle size={24} /></div>
            <div className="stat-content">
              <h3>Meals Rescued</h3>
              <p>2,150</p>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon warning"><Clock size={24} /></div>
            <div className="stat-content">
              <h3>Active Requests</h3>
              <p>1</p>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon info"><MapPin size={24} /></div>
            <div className="stat-content">
              <h3>Local NGOs Near You</h3>
              <p>8</p>
            </div>
          </Card>
        </div>

        <div className="dashboard-content">
          <Card className="panel">
            <div className="panel-header">
              <h2>Recent Activity</h2>
              <Link to="/donate">
                <Button size="sm"><Plus size={16} style={{ marginRight: '0.25rem' }}/> New Donation</Button>
              </Link>
            </div>

            <div className="item-list">
              <div className="list-item">
                <div className="item-main">
                  <h4>50 Servings of Pasta & Veggies</h4>
                  <div className="item-meta">
                    <Clock size={14} /> Listed 2 hours ago
                  </div>
                </div>
                <div className="item-status">
                  <span className="badge badge-active">In Transit</span>
                </div>
              </div>
              
              <div className="list-item">
                <div className="item-main">
                  <h4>Box of Fresh Produce</h4>
                  <div className="item-meta">
                    <Clock size={14} /> Yesterday
                  </div>
                </div>
                <div className="item-status">
                  <span className="badge badge-completed">Completed</span>
                </div>
              </div>

              <div className="list-item">
                <div className="item-main">
                  <h4>Request: 100 Meals for Shelter</h4>
                  <div className="item-meta">
                    <Clock size={14} /> 3 days ago
                  </div>
                </div>
                <div className="item-status">
                  <span className="badge badge-completed">Fulfilled</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="panel">
            <div className="panel-header">
              <h2>Local Food Map</h2>
            </div>
            <div className="dashboard-map">
              <div className="map-pin pin-1" style={{ top: '40%', left: '50%' }}></div>
              <p style={{ zIndex: 10, background: 'rgba(255,255,255,0.8)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                Map Integration
              </p>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Showing active donations and verified NGOs within a 5-mile radius.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
