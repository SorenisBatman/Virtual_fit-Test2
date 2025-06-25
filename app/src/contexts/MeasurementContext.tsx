
import React, { createContext, useContext, useState } from 'react';

export interface Measurements {
  height: string;
  weight: string;
  chest: string;
  waist: string;
  hips: string;
  neck: string;
  shoulderWidth: string;
  bicep: string;
  forearm: string;
  thigh: string;
  calf: string;
  inseam: string;
}

interface MeasurementContextType {
  measurements: Measurements;
  setMeasurements: (measurements: Measurements) => void;
}

const MeasurementContext = createContext<MeasurementContextType | undefined>(undefined);

export const MeasurementProvider = ({ children }: { children: React.ReactNode }) => {
  const [measurements, setMeasurements] = useState<Measurements>({
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    neck: "",
    shoulderWidth: "",
    bicep: "",
    forearm: "",
    thigh: "",
    calf: "",
    inseam: "",
  });

  return (
    <MeasurementContext.Provider value={{ measurements, setMeasurements }}>
      {children}
    </MeasurementContext.Provider>
  );
};

export const useMeasurements = () => {
  const context = useContext(MeasurementContext);
  if (context === undefined) {
    throw new Error('useMeasurements must be used within a MeasurementProvider');
  }
  return context;
};
