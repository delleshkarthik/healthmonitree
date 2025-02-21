
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import EmergencySection from '@/components/EmergencySection';
import { motion } from 'framer-motion';

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
        className="bg-white py-8 border-t"
      >
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 HealthMoniTree. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
