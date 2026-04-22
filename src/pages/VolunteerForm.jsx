import { Truck, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import './Forms.css';

const VolunteerForm = () => {
  return (
    <div className="form-page bg-mesh-pattern animate-fade-in">
      <div className="form-container">
        <Card className="form-card">
          <div className="form-header">
            <h1>Become a Volunteer Driver</h1>
            <p>Join our fleet of heroes delivering surplus food to those in need.</p>
          </div>
          
          <form className="action-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="input-split">
              <Input label="First Name" id="vFirstName" placeholder="John" required />
              <Input label="Last Name" id="vLastName" placeholder="Doe" required />
            </div>

            <Input label="Email Address" id="vEmail" type="email" placeholder="john@example.com" required />
            <Input label="Phone Number" id="vPhone" type="tel" placeholder="(555) 987-6543" required />
            
            <div className="input-split">
              <div className="input-group">
                <label className="input-label" htmlFor="vehicleType">Vehicle Type</label>
                <select id="vehicleType" className="input-field" required>
                  <option value="" disabled selected>Select vehicle</option>
                  <option value="sedan">Car / Sedan</option>
                  <option value="suv">SUV / Minivan</option>
                  <option value="truck">Pickup Truck</option>
                  <option value="bike">Bicycle / Scooter</option>
                </select>
              </div>
              <Input label="Zip / Postal Code" id="zipCode" placeholder="94103" required />
            </div>

            <div className="input-group" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" required style={{ marginTop: '0.25rem' }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  I agree to a background check and acknowledge that I have a valid driver's license and auto insurance. I understand this is a volunteer position.
                </span>
              </label>
            </div>

            <Button type="submit" className="action-btn" size="lg" fullWidth>
              Submit Application <Truck size={18} style={{ marginLeft: '0.5rem' }}/>
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerForm;
