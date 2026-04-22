import { Users, AlertTriangle, Activity, BarChart3, CheckSquare, XSquare } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-page animate-fade-in" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Control Center</h1>
          <p>System overview, approvals, and platform analytics.</p>
        </div>

        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-icon primary"><Activity size={24} /></div>
            <div className="stat-content">
              <h3>Active Deliveries</h3>
              <p>142</p>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon info"><Users size={24} /></div>
            <div className="stat-content">
              <h3>Total Users / NGOs</h3>
              <p>5,483</p>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon secondary"><BarChart3 size={24} /></div>
            <div className="stat-content">
              <h3>Lbs Rescued (Mtd)</h3>
              <p>12,500</p>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-icon warning"><AlertTriangle size={24} /></div>
            <div className="stat-content">
              <h3>Pending Approvals</h3>
              <p>28</p>
            </div>
          </Card>
        </div>

        <div className="dashboard-content" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
          {/* Moderation Queue */}
          <Card className="panel">
            <div className="panel-header">
              <h2>NGO / User Moderation Queue</h2>
            </div>
            
            <div className="table-responsive" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                    <th style={{ padding: '1rem' }}>User / Organization</th>
                    <th style={{ padding: '1rem' }}>Type</th>
                    <th style={{ padding: '1rem' }}>Submitted</th>
                    <th style={{ padding: '1rem' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>City Hope Shelter</td>
                    <td style={{ padding: '1rem' }}>Receiving NGO</td>
                    <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>2 hours ago</td>
                    <td style={{ padding: '1rem' }}><span className="badge badge-pending">Pending Review</span></td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                       <Button size="sm" variant="ghost" style={{ color: 'var(--color-primary)' }}><CheckSquare size={18} /></Button>
                       <Button size="sm" variant="ghost" style={{ color: '#EF4444' }}><XSquare size={18} /></Button>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>Jimmy's Food Truck</td>
                    <td style={{ padding: '1rem' }}>Donor</td>
                    <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>5 hours ago</td>
                    <td style={{ padding: '1rem' }}><span className="badge badge-pending">Pending Review</span></td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                       <Button size="sm" variant="ghost" style={{ color: 'var(--color-primary)' }}><CheckSquare size={18} /></Button>
                       <Button size="sm" variant="ghost" style={{ color: '#EF4444' }}><XSquare size={18} /></Button>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>Sarah Jenkins</td>
                    <td style={{ padding: '1rem' }}>Volunteer Driver</td>
                    <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>1 day ago</td>
                    <td style={{ padding: '1rem' }}><span className="badge badge-pending">Awaiting Background Check</span></td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                       <Button size="sm" variant="ghost" style={{ color: 'var(--color-primary)' }}><CheckSquare size={18} /></Button>
                       <Button size="sm" variant="ghost" style={{ color: '#EF4444' }}><XSquare size={18} /></Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Issue Reports / Complaints */}
          <Card className="panel">
            <div className="panel-header">
              <h2>Recent Spam / Complaints</h2>
            </div>
            <div className="item-list">
              <div className="list-item">
                <div className="item-main">
                  <h4>Reported Post: "Selling 10 Pizzas"</h4>
                  <div className="item-meta">
                    Flagged by user: "Platform is for donations, not sales"
                  </div>
                </div>
                <div className="item-status">
                  <Button size="sm" variant="outline" style={{ color: '#EF4444', borderColor: '#EF4444' }}>Remove Post</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
