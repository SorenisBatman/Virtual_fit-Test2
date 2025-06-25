
import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";

export interface ClothingMeasurements {
  chest: number;
  waist: number;
  hips: number;
  length: number;
}

export interface ClothingSize {
  name: string;
  measurements: ClothingMeasurements;
}

export interface ClothingItem {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  type: 'shirt' | 'pants';
  color: string;
  sizes: ClothingSize[];
}

export interface SelectedClothing {
  item: ClothingItem | null;
  size: ClothingSize | null;
  tucked: boolean;
}

interface ClothingContextType {
  availableClothing: ClothingItem[];
  selectedTop: SelectedClothing;
  selectedBottom: SelectedClothing;
  selectClothing: (item: ClothingItem, size: ClothingSize) => void;
  toggleTucked: (type: 'shirt' | 'pants') => void;
  fitStatus: {
    top: 'perfect' | 'tight' | 'tooSmall' | null;
    bottom: 'perfect' | 'tight' | 'tooSmall' | null;
  };
}

const sampleClothes: ClothingItem[] = [
  {
    id: 1,
    name: "Classic White Shirt",
    brand: "Fashion Brand",
    price: "$59.99",
    image: "/placeholder.svg",
    type: 'shirt',
    color: "#ffffff",
    sizes: [
      {
        name: "S",
        measurements: { chest: 90, waist: 80, hips: 90, length: 70 }
      },
      {
        name: "M",
        measurements: { chest: 95, waist: 85, hips: 95, length: 72 }
      },
      {
        name: "L",
        measurements: { chest: 100, waist: 90, hips: 100, length: 74 }
      },
      {
        name: "XL",
        measurements: { chest: 110, waist: 100, hips: 110, length: 76 }
      }
    ]
  },
  {
    id: 2,
    name: "Black Dress Pants",
    brand: "Style Co",
    price: "$89.99",
    image: "/placeholder.svg",
    type: 'pants',
    color: "#202020",
    sizes: [
      {
        name: "S",
        measurements: { waist: 75, hips: 90, length: 95, chest: 0 }
      },
      {
        name: "M",
        measurements: { waist: 80, hips: 95, length: 97, chest: 0 }
      },
      {
        name: "L",
        measurements: { waist: 85, hips: 100, length: 99, chest: 0 }
      },
      {
        name: "XL",
        measurements: { waist: 95, hips: 110, length: 101, chest: 0 }
      }
    ]
  },
  {
    id: 3,
    name: "Navy Blazer",
    brand: "Luxury Fashion",
    price: "$199.99",
    image: "/placeholder.svg",
    type: 'shirt',
    color: "#1a2456",
    sizes: [
      {
        name: "S",
        measurements: { chest: 92, waist: 82, hips: 92, length: 72 }
      },
      {
        name: "M",
        measurements: { chest: 97, waist: 87, hips: 97, length: 74 }
      },
      {
        name: "L",
        measurements: { chest: 102, waist: 92, hips: 102, length: 76 }
      },
      {
        name: "XL",
        measurements: { chest: 112, waist: 102, hips: 112, length: 78 }
      }
    ]
  },
];

const ClothingContext = createContext<ClothingContextType | undefined>(undefined);

export const ClothingProvider = ({ children }: { children: React.ReactNode }) => {
  const [availableClothing] = useState<ClothingItem[]>(sampleClothes);
  const [selectedTop, setSelectedTop] = useState<SelectedClothing>({ 
    item: null, 
    size: null,
    tucked: true
  });
  const [selectedBottom, setSelectedBottom] = useState<SelectedClothing>({ 
    item: null, 
    size: null,
    tucked: false
  });
  
  const [fitStatus, setFitStatus] = useState<{
    top: 'perfect' | 'tight' | 'tooSmall' | null;
    bottom: 'perfect' | 'tight' | 'tooSmall' | null;
  }>({
    top: null,
    bottom: null
  });

  const selectClothing = (item: ClothingItem, size: ClothingSize) => {
    if (item.type === 'shirt') {
      setSelectedTop({
        item,
        size,
        tucked: selectedTop.tucked
      });
      toast.success(`${item.name} (${size.name}) selected`);
    } else if (item.type === 'pants') {
      setSelectedBottom({
        item,
        size,
        tucked: selectedBottom.tucked
      });
      toast.success(`${item.name} (${size.name}) selected`);
    }
  };

  const toggleTucked = (type: 'shirt' | 'pants') => {
    if (type === 'shirt') {
      setSelectedTop({
        ...selectedTop,
        tucked: !selectedTop.tucked
      });
      toast.info(selectedTop.tucked ? "Shirt untucked" : "Shirt tucked in");
    } else {
      setSelectedBottom({
        ...selectedBottom,
        tucked: !selectedBottom.tucked
      });
    }
  };

  return (
    <ClothingContext.Provider 
      value={{ 
        availableClothing, 
        selectedTop, 
        selectedBottom, 
        selectClothing, 
        toggleTucked,
        fitStatus
      }}>
      {children}
    </ClothingContext.Provider>
  );
};

export const useClothing = () => {
  const context = useContext(ClothingContext);
  if (context === undefined) {
    throw new Error('useClothing must be used within a ClothingProvider');
  }
  return context;
};
