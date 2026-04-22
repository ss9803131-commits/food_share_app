import { Route, Navigation, Timer, PackageCheck, AlertCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import './Dashboard.css';

const VolunteerDashboard = () => {
  return (
    <div className="dashboard-page animate-fade-in">
      <div className="container">
        <div className="dashboard-header">
          <h1>Volunteer Portal</h1>
          <p>Find available pickups and track your active deliveries.</p>
        </div>

        <div className="dashboard-content" style={{ gridTemplateColumns: '1fr 1fr' }}>
          
          {/* Active Job / Map */}
          <Card className="panel" style={{ gridColumn: '1 / -1' }}>
            <div className="panel-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} className="animate-float"></div>
                <h2>Live Delivery Tracking</h2>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
              <div className="delivery-details">
                <span className="badge badge-active" style={{ marginBottom: '1rem', display: 'inline-block' }}>Active Job</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Pickup: Downtown Bakery</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>123 Main St. &rarr; Hope Shelter (4.2 mi)</p>
                
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Contents:</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>4 Boxes of Day-Old Pastries & Bread</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Button fullWidth><Navigation size={16} style={{ marginRight: '0.5rem' }}/> Open Maps</Button>
                  <Button variant="outline"><PackageCheck size={16} /> </Button>
                </div>
              </div>

              <div className="dashboard-map" style={{ height: '250px' }}>
                <p style={{ zIndex: 10, background: 'rgba(255,255,255,0.8)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                  Live Route Simulation
                </p>
              </div>
            </div>
          </Card>

          {/* Job Board */}
          <Card className="panel" style={{ gridColumn: '1 / -1' }}>
            <div className="panel-header">
              <h2>Available Pickup Jobs Near You</h2>
              <Button variant="outline" size="sm">Refresh List</Button>
            </div>

            <div className="item-list">
              <div className="list-item">
                <div className="item-main">
                  <h4>50 Servings Pasta</h4>
                  <div className="item-meta">
                    <Route size={14} /> 2.1 miles away &nbsp;|&nbsp; <Timer size={14} /> Pickup by 4:00 PM
                  </div>
                </div>
                <div className="item-status">
                  <Button size="sm">Accept Job</Button>
                </div>
              </div>

              <div className="list-item">
                <div className="item-main">
                  <h4>Fresh Produce Box</h4>
                  <div className="item-meta">
                    <Route size={14} /> 3.5 miles away &nbsp;|&nbsp; <Timer size={14} /> Pickup by 5:30 PM
                  </div>
                </div>
                <div className="item-status">
                  <Button size="sm">Accept Job</Button>
                </div>
              </div>
              
              <div className="list-item" style={{ opacity: 0.6 }}>
                <div className="item-main">
                  <h4>Catered Event Leftovers (Large vehicle needed)</h4>
                  <div className="item-meta">
                    <AlertCircle size={14} className="text-secondary" /> Urgency: High &nbsp;|&nbsp; 8.0 miles away
                  </div>
                </div>
                <div className="item-status">
                  <Button size="sm" variant="outline">Accept Job</Button>
                </div>
              </div>

            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
