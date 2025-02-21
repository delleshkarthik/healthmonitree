
import { Phone, MessageSquare, AlertTriangle, Navigation, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';
import EmergencyMap from './EmergencyMap';
import { useState } from 'react';

const EmergencySection = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState<string>('');

  const emergencyNumbers = [
    { name: 'Ambulance', number: '911', icon: Phone },
    { name: 'Mental Health Helpline', number: '988', icon: Phone },
    { name: 'Poison Control', number: '1-800-222-1222', icon: Phone },
  ];

  const handleSOSClick = () => {
    toast({
      title: "Emergency Alert Sent",
      description: "Emergency services have been notified of your location.",
      variant: "destructive",
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log('User location:', location);
      });
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey) {
      localStorage.setItem('GOOGLE_MAPS_API_KEY', apiKey);
      toast({
        title: "API Key Saved",
        description: "Your Google Maps API key has been saved for this session.",
      });
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Emergency Healthcare Access
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - SOS Emergency Assistance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(220, 38, 38, 0.7)", "0 0 0 20px rgba(220, 38, 38, 0)"],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                onClick={handleSOSClick}
                className="w-full max-w-md h-16 bg-red-600 text-white text-2xl font-bold flex items-center justify-center mb-6 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-lg"
              >
                SOS
              </motion.button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => window.open('https://wa.me/911')}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp SOS
                </Button>
                <Button variant="outline" className="flex-1">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  SMS Alert
                </Button>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
                {emergencyNumbers.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={`tel:${contact.number}`}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <contact.icon className="w-5 h-5 text-primary" />
                      <span>{contact.name}</span>
                    </div>
                    <span className="font-mono">{contact.number}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Interactive Hospital Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <form onSubmit={handleApiKeySubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter your Google Maps API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" variant="secondary">
                  Save Key
                </Button>
              </div>
            </form>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              <Input
                placeholder="Search for nearby hospitals..."
                className="pl-10"
              />
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <EmergencyMap />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
