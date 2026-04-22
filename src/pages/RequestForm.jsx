import { Search } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import './Forms.css';

const RequestForm = () => {
  return (
    <div className="form-page bg-alt animate-fade-in">
      <div className="form-container">
        <Card className="form-card">
          <div className="form-header">
            <h1 style={{ color: 'var(--color-secondary)' }}>Request Food</h1>
            <p>Are you an NGO, shelter, or community kitchen? Request food deliveries here.</p>
          </div>
          
          <form className="action-form" onSubmit={(e) => e.preventDefault()}>
            <Input label="Organization / Contact Name" id="orgName" placeholder="Hope Shelter" required />
            
            <div className="input-split">
              <div className="input-group">
                <label className="input-label" htmlFor="urgency">Urgency Level</label>
                <select id="urgency" className="input-field" required>
                  <option value="today">Needed Today</option>
                  <option value="tomorrow">Needed Tomorrow</option>
                  <option value="this-week">Needed This Week</option>
                </select>
              </div>
              <Input label="People to Feed" id="feedCount" type="number" placeholder="100" required />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="foodType">Preferred Food Types</label>
              <Input id="foodType" placeholder="E.g., Prepared meals, fresh produce, etc." />
            </div>

            <Input label="Delivery / Drop-off Address" id="address" placeholder="456 Shelter Blvd, Springfield" required />
            
            <div className="input-group">
              <label className="input-label" htmlFor="details">Additional Details or Dietary Needs</label>
              <textarea 
                id="details" 
                className="input-field" 
                rows="4" 
                placeholder="E.g., We have a vegetarian preference, need food by 6 PM..."
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>

            <Button type="submit" variant="secondary" className="action-btn" size="lg" fullWidth>
              Submit Request <Search size={18} style={{ marginLeft: '0.5rem' }}/>
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RequestForm;
