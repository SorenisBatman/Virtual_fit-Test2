
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { ShirtIcon } from "@/components/clothes/ShirtIcon";
import { PantsIcon } from "@/components/clothes/PantsIcon";
import { useClothing, ClothingItem, ClothingSize } from "@/contexts/ClothingContext";

export const ClothingLibrary = () => {
  const { availableClothing, selectClothing, selectedTop, selectedBottom, toggleTucked } = useClothing();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);

  const handleTryOn = () => {
    if (selectedItem && selectedSize) {
      const size = selectedItem.sizes.find(size => size.name === selectedSize);
      if (size) {
        selectClothing(selectedItem, size);
      }
    }
  };

  const isSelected = (item: ClothingItem) => {
    if (item.type === 'shirt') {
      return selectedTop.item?.id === item.id;
    } else {
      return selectedBottom.item?.id === item.id;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {availableClothing.map((item) => (
        <Card key={item.id} className={`overflow-hidden animate-fade ${isSelected(item) ? 'ring-2 ring-primary' : ''}`}>
          <div className="h-64 w-full flex items-center justify-center" style={{backgroundColor: item.color + "22"}}>
            {item.type === 'shirt' ? (
              <ShirtIcon size={100} color={item.color} />
            ) : (
              <PantsIcon size={100} color={item.color} />
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-600">{item.brand}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-primary font-semibold">{item.price}</p>
              <p className="text-sm text-gray-500">{item.type === 'shirt' ? 'Top' : 'Bottom'}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full mt-4"
                  onClick={() => setSelectedItem(item)}
                >
                  Try On
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select Size and Options</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="mb-4">
                    <label className="text-sm font-medium mb-1 block">Size:</label>
                    <Select onValueChange={setSelectedSize} defaultValue={selectedSize}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {item?.sizes.map(size => (
                          <SelectItem key={size.name} value={size.name}>
                            {size.name} - Chest: {size.measurements.chest}cm, 
                            Waist: {size.measurements.waist}cm,
                            {item.type === 'shirt' && ` Length: ${size.measurements.length}cm`}
                            {item.type === 'pants' && ` Hips: ${size.measurements.hips}cm`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {item.type === 'shirt' && (
                    <div className="flex items-center space-x-2 mb-4">
                      <label className="text-sm font-medium">Tucked in:</label>
                      <Toggle 
                        pressed={selectedTop.tucked} 
                        onPressedChange={() => toggleTucked('shirt')}
                      >
                        {selectedTop.tucked ? 'Yes' : 'No'}
                      </Toggle>
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <Button onClick={handleTryOn}>Apply to Avatar</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      ))}
    </div>
  );
};
