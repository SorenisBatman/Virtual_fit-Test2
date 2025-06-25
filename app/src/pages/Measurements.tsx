
import { useMeasurements } from "@/contexts/MeasurementContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Ruler, Sparkles, Heart } from "lucide-react";

export const Measurements = () => {
  const { measurements, setMeasurements } = useMeasurements();

  const handleChange = (key: string, value: string) => {
    setMeasurements({ ...measurements, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your measurements have been saved beautifully!");
  };

  const measurementSections = [
    {
      title: "Essential Details",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      fields: [
        { key: "height", label: "Height", unit: "cm", placeholder: "Enter your height" },
        { key: "weight", label: "Weight", unit: "kg", placeholder: "Enter your weight" },
      ]
    },
    {
      title: "Upper Silhouette",
      icon: <Ruler className="w-5 h-5 text-primary" />,
      fields: [
        { key: "neck", label: "Neck", unit: "cm", placeholder: "Neck circumference" },
        { key: "shoulderWidth", label: "Shoulder Width", unit: "cm", placeholder: "Shoulder to shoulder" },
        { key: "chest", label: "Chest/Bust", unit: "cm", placeholder: "Fullest part of chest" },
        { key: "bicep", label: "Bicep", unit: "cm", placeholder: "Upper arm circumference" },
        { key: "forearm", label: "Forearm", unit: "cm", placeholder: "Forearm circumference" },
      ]
    },
    {
      title: "Core & Lower Form",
      icon: <Heart className="w-5 h-5 text-primary" />,
      fields: [
        { key: "waist", label: "Waist", unit: "cm", placeholder: "Natural waistline" },
        { key: "hips", label: "Hips", unit: "cm", placeholder: "Fullest part of hips" },
        { key: "thigh", label: "Thigh", unit: "cm", placeholder: "Upper thigh circumference" },
        { key: "calf", label: "Calf", unit: "cm", placeholder: "Largest part of calf" },
        { key: "inseam", label: "Inseam", unit: "cm", placeholder: "Inner leg length" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-white to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-script font-bold text-primary mb-6">
            Your Personal Atelier
          </h1>
          <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed font-sans">
            Provide your precise measurements to create your bespoke virtual fitting experience. 
            Each detail crafts your perfect digital silhouette.
          </p>
        </div>

        {/* Measurement Form */}
        <Card className="card-elegant border-0 shadow-2xl animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-t-2xl">
            <CardTitle className="text-3xl font-script text-center flex items-center justify-center gap-3 text-primary">
              <Ruler className="w-8 h-8" />
              Measurement Sanctuary
            </CardTitle>
          </CardHeader>
          <CardContent className="p-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              {measurementSections.map((section, sectionIndex) => (
                <div key={section.title} className="animate-slide-in" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 elegant-gradient rounded-xl flex items-center justify-center shadow-md">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-script font-semibold text-primary">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.fields.map((field) => (
                      <div key={field.key} className="space-y-3 group">
                        <Label 
                          htmlFor={field.key} 
                          className="text-sm font-medium text-text/80 font-sans group-focus-within:text-primary transition-colors"
                        >
                          {field.label} ({field.unit})
                        </Label>
                        <Input
                          id={field.key}
                          type="number"
                          placeholder={field.placeholder}
                          value={measurements[field.key] || ""}
                          onChange={(e) => handleChange(field.key, e.target.value)}
                          className="h-14 border-2 border-primary/20 focus:border-primary rounded-xl bg-white/50 backdrop-blur-sm font-sans transition-all duration-300 hover:border-primary/40"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {sectionIndex < measurementSections.length - 1 && (
                    <Separator className="mt-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  )}
                </div>
              ))}

              <div className="pt-8 text-center">
                <Button 
                  type="submit" 
                  className="elegant-gradient hover:shadow-2xl text-lg px-16 py-4 rounded-2xl font-sans transform hover:scale-105 transition-all duration-300"
                >
                  Save My Measurements
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="mt-12 card-elegant border-0 bg-gradient-to-r from-accent/10 to-secondary/10 animate-fade-in">
          <CardContent className="p-8">
            <h4 className="font-script font-semibold text-primary text-xl mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Measurement Artistry Tips
            </h4>
            <ul className="text-sm text-text/70 space-y-2 font-sans">
              <li>• Wear form-fitting garments or undergarments for accuracy</li>
              <li>• Keep measuring tape parallel to the floor for consistency</li>
              <li>• Maintain a comfortable, natural posture during measurement</li>
              <li>• Enlist a friend's assistance for the most precise results</li>
              <li>• Take measurements at the same time of day for consistency</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
