
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import HealthDataForm from '@/components/HealthDataForm';
import HealthDashboard from '@/components/HealthDashboard';
import { Toaster } from '@/components/ui/toaster';

const HealthDataEntry = () => {
  const [submittedData, setSubmittedData] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <NavBar />
      <div className="container mx-auto px-4 py-20">
        {!submittedData ? (
          <HealthDataForm onSubmit={setSubmittedData} />
        ) : (
          <HealthDashboard patientData={submittedData} />
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default HealthDataEntry;
