
import { useState } from "react";
import { Header } from "@/components/Header";
import { Welcome } from "@/components/Welcome";
import { AvatarViewer } from "@/components/AvatarViewer";
import { MeasurementForm } from "@/components/MeasurementForm";
import { ClothingLibrary } from "@/components/ClothingLibrary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Welcome onGetStarted={handleGetStarted} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Virtual Try-On Experience
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Your 3D Avatar</h2>
            <AvatarViewer />
          </div>
          <div>
            <Tabs defaultValue="measurements">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="measurements" className="flex-1">Your Measurements</TabsTrigger>
                <TabsTrigger value="clothing" className="flex-1">Try On Clothing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="measurements">
                <MeasurementForm />
              </TabsContent>
              
              <TabsContent value="clothing">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-medium mb-4">Select Items to Try On</h3>
                  <p className="text-muted-foreground mb-4">
                    Select clothing items to see how they would fit on your avatar.
                    The fit will be color-coded:
                  </p>
                  <div className="flex gap-4 mb-4">
                    <span className="flex items-center">
                      <span className="h-3 w-3 bg-green-400 rounded-full mr-1"></span>
                      <span className="text-sm">Perfect fit</span>
                    </span>
                    <span className="flex items-center">
                      <span className="h-3 w-3 bg-yellow-400 rounded-full mr-1"></span>
                      <span className="text-sm">Tight</span>
                    </span>
                    <span className="flex items-center">
                      <span className="h-3 w-3 bg-red-400 rounded-full mr-1"></span>
                      <span className="text-sm">Too small</span>
                    </span>
                  </div>
                  <ClothingLibrary />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
