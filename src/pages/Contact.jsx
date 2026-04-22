import { Send, MapPin, Phone, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact animate-fade-in">
      <div className="container contact-container">
        
        <div className="contact-info">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle" style={{ textAlign: 'left', margin: '0 0 3rem 0', maxWidth: '100%' }}>
            Have questions about donating, requesting food, or volunteering? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className="info-cards">
            <Card className="info-card">
              <Mail className="text-secondary" size={24} />
              <div>
                <h3>Email Us</h3>
                <p>hello@foodshare.org</p>
              </div>
            </Card>
            <Card className="info-card">
              <Phone className="text-secondary" size={24} />
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </Card>
            <Card className="info-card">
              <MapPin className="text-secondary" size={24} />
              <div>
                <h3>Headquarters</h3>
                <p>123 Impact Way, CA 94103</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <Card className="contact-form-card">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <Input label="First Name" id="firstName" placeholder="Jane" />
                <Input label="Last Name" id="lastName" placeholder="Doe" />
              </div>
              <Input label="Email Address" id="email" type="email" placeholder="jane@example.com" />
              <Input label="Subject" id="subject" placeholder="How can we help?" />
              
              <div className="input-group">
                <label className="input-label" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="input-field textarea-field" 
                  rows="5" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" fullWidth>
                Send Message <Send size={18} style={{ marginLeft: '0.5rem' }}/>
              </Button>
            </form>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Contact;
