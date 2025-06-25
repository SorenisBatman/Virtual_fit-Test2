
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useMeasurements } from "@/contexts/MeasurementContext";

export const MeasurementForm = () => {
  const { measurements, setMeasurements } = useMeasurements();

  const handleChange = (key: string, value: string) => {
    setMeasurements({ ...measurements, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Measurements saved successfully!");
  };

  const sections = {
    "General": ["height", "weight"],
    "Upper Body": ["neck", "shoulderWidth", "chest", "bicep", "forearm"],
    "Mid Body": ["waist", "hips"],
    "Lower Body": ["thigh", "calf", "inseam"]
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Measurements</h2>

      {Object.entries(sections).map(([sectionTitle, keys]) => (
        <div key={sectionTitle} className="space-y-4 border-b pb-4">
          <h3 className="text-xl font-semibold">{sectionTitle}</h3>
          {keys.map((key) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="capitalize">{key} (cm)</Label>
              <Input
                id={key}
                type="number"
                placeholder={`Enter your ${key}`}
                value={measurements[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}

      <Button type="submit" className="w-full">Save Measurements</Button>
    </form>
  );
};
