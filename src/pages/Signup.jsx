import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-page bg-mesh-pattern animate-fade-in">
      <div className="auth-container">
        <Card className="auth-card">
          <div className="auth-header">
            <h1>Create an Account</h1>
            <p>Join FoodShare and start making a difference today.</p>
          </div>
          
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="input-split">
              <Input label="First Name" id="firstName" placeholder="Jane" required />
              <Input label="Last Name" id="lastName" placeholder="Doe" required />
            </div>

            <Input 
              label="Email Address" 
              id="email" 
              type="email" 
              placeholder="jane@example.com" 
              required 
            />
            
            <div className="input-group" style={{ marginBottom: '1rem' }}>
              <label className="input-label" htmlFor="role">I want to...</label>
              <select id="role" className="input-field" required>
                <option value="" disabled selected>Select an option</option>
                <option value="donor">Donate Food</option>
                <option value="requester">Request Food</option>
                <option value="volunteer">Volunteer to Deliver</option>
              </select>
            </div>

            <Input 
              label="Password" 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              required 
            />

            <Button type="submit" className="auth-btn" size="lg" fullWidth>
              Create Account
            </Button>
          </form>

          <div className="auth-footer">
            Already have an account? 
            <Link to="/login">Log in</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
