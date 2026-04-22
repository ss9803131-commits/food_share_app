import { UploadCloud, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import './Forms.css';

const DonateForm = () => {
  return (
    <div className="form-page bg-mesh-pattern animate-fade-in">
      <div className="form-container">
        <Card className="form-card">
          <div className="form-header">
            <h1>Donate Food</h1>
            <p>List your surplus food so a nearby NGO can claim it quickly.</p>
          </div>
          
          <form className="action-form" onSubmit={(e) => e.preventDefault()}>
            <Input label="Food Title" id="title" placeholder="E.g., 50 Servings of Pasta & Veggies" required />
            
            <div className="input-split">
              <div className="input-group">
                <label className="input-label" htmlFor="type">Food Type</label>
                <select id="type" className="input-field" required>
                  <option value="" disabled selected>Select category</option>
                  <option value="prepared">Prepared Meals</option>
                  <option value="produce">Fresh Produce</option>
                  <option value="packaged">Packaged / Canned</option>
                  <option value="bakery">Bakery / Bread</option>
                </select>
              </div>
              <Input label="Quantity / Servings" id="qty" type="number" placeholder="50" required />
            </div>

            <Input label="Pickup Address" id="address" placeholder="123 Main St, Springfield" required />
            
            <div className="input-split">
              <Input label="Available Until" id="time" type="time" required />
              <Input label="Contact Phone" id="phone" type="tel" placeholder="(555) 123-4567" required />
            </div>

            <div className="input-group">
              <label className="input-label">Upload Photo (Optional)</label>
              <div className="file-upload-zone">
                <UploadCloud size={32} className="text-muted" style={{ margin: '0 auto' }}/>
                <p>Click to upload or drag & drop</p>
                <span style={{ fontSize: '0.75rem' }}>JPEG, PNG up to 5MB</span>
              </div>
            </div>

            <Button type="submit" className="action-btn" size="lg" fullWidth>
              List Donation <CheckCircle size={18} style={{ marginLeft: '0.5rem' }}/>
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default DonateForm;
