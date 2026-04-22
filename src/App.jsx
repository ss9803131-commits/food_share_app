import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DonateForm from './pages/DonateForm';
import RequestForm from './pages/RequestForm';
import VolunteerForm from './pages/VolunteerForm';
import UserDashboard from './pages/UserDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// Placeholder Pages (To be created)
const Placeholder = ({ title }) => (
  <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<DonateForm />} />
            <Route path="/request" element={<RequestForm />} />
            <Route path="/volunteer" element={<VolunteerForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dashboards */}
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/volunteer" element={<VolunteerDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
