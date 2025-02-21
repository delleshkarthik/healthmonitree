import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import EmergencySection from '@/components/EmergencySection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <Features />
      <EmergencySection />
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-12 mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HealthMoniTree</h3>
              <p className="text-gray-400">
                Advanced AI-powered health monitoring for better care and early detection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/health-data" className="hover:text-white transition-colors">Health Data</Link></li>
                <li><Link to="/patient-records" className="hover:text-white transition-colors">Patient Records</Link></li>
                <li><Link to="/real-time" className="hover:text-white transition-colors">Real-time Monitoring</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@healthmonitree.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Health Street, Medical City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 HealthMoniTree. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
