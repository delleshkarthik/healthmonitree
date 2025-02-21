
import NavBar from '@/components/NavBar';
import HealthDataForm from '@/components/HealthDataForm';
import { Toaster } from '@/components/ui/toaster';

const HealthDataEntry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <NavBar />
      <div className="container mx-auto px-4 py-20">
        <HealthDataForm />
      </div>
      <Toaster />
    </div>
  );
};

export default HealthDataEntry;
