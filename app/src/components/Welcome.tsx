
import { Button } from "@/components/ui/button";
import { User, Shirt, Ruler, Eye } from "lucide-react";

interface WelcomeProps {
  onGetStarted: () => void;
}

export const Welcome = ({ onGetStarted }: WelcomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center max-w-4xl mx-auto px-6">
          <User className="w-32 h-32 mx-auto text-primary mb-8" />
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to VirtualFit
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the future of online shopping with our advanced 3D avatar technology. 
            See how clothes fit before you buy them.
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="text-xl px-12 py-4"
          >
            View Yourself
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <User className="w-16 h-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Create Your Avatar</h3>
              <p className="text-gray-600 text-lg">
                Build a personalized 3D avatar that matches your body proportions perfectly.
              </p>
            </div>
            <div className="text-center">
              <Ruler className="w-16 h-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Input Measurements</h3>
              <p className="text-gray-600 text-lg">
                Enter your body measurements to ensure accurate fit predictions.
              </p>
            </div>
            <div className="text-center">
              <Shirt className="w-16 h-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Try On Clothes</h3>
              <p className="text-gray-600 text-lg">
                Virtually try on clothing items and see how they fit on your avatar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose VirtualFit?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Perfect Fit, Every Time</h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Reduce returns by up to 70% with accurate fit predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Save time and money on shopping trips</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Shop with confidence knowing how items will fit</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Discover your perfect size across different brands</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="w-20 h-20 text-primary mb-6" />
              <h4 className="text-2xl font-semibold mb-4">See Before You Buy</h4>
              <p className="text-gray-600 text-lg">
                Our advanced 3D technology shows you exactly how clothes will look and fit 
                on your unique body shape, giving you the confidence to purchase online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized the way they shop online.
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            variant="secondary"
            className="text-xl px-12 py-4"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};
