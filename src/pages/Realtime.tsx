import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion';

const Realtime = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold mb-6">Real-time Monitoring</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Patient Vitals</h2>
          {/* Add your real-time monitoring content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Heart Rate</h3>
              <p className="text-2xl text-blue-600">75 BPM</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Blood Pressure</h3>
              <p className="text-2xl text-blue-600">120/80 mmHg</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Temperature</h3>
              <p className="text-2xl text-blue-600">98.6°F</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Realtime;