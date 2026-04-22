import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-page bg-mesh-pattern animate-fade-in">
      <div className="auth-container">
        <Card className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Log in to manage your donations and requests.</p>
          </div>
          
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <Input 
              label="Email Address" 
              id="email" 
              type="email" 
              placeholder="jane@example.com" 
              required 
            />
            <Input 
              label="Password" 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              required 
            />
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
              <a href="#" style={{ fontSize: '0.875rem', color: 'var(--color-secondary)', fontWeight: 500 }}>
                Forgot Password?
              </a>
            </div>

            <Button type="submit" className="auth-btn" size="lg" fullWidth>
              Log In
            </Button>
          </form>

          <div className="auth-footer">
            Don't have an account? 
            <Link to="/signup">Sign up</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
