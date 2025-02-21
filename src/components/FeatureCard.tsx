
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard = ({ icon: Icon, title, description, link }: FeatureCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, cursor: 'pointer' }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="p-6 rounded-xl bg-white shadow-lg border border-gray-100 transition-shadow hover:shadow-xl"
    >
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
