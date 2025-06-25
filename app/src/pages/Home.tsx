
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Eye, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Home = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Precision Measurements",
      description: "Upload your precise body measurements for a tailored virtual experience that matches real-world accuracy.",
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Visual Excellence",
      description: "See how garments drape, fit, and move on your personalized 3D avatar with stunning visual fidelity.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Perfect Fit Promise",
      description: "Revolutionary AI technology ensures every purchase fits perfectly, eliminating returns and disappointment.",
    },
  ];

  const testimonials = [
    {
      name: "Isabella Chen",
      role: "Fashion Designer",
      content: "Virtual Fit Trove transformed how I design and preview collections. The accuracy is absolutely incredible.",
      rating: 5,
      avatar: "👩🏻‍🎨"
    },
    {
      name: "Marcus Rodriguez",
      role: "Style Enthusiast",
      content: "I've never been more confident in my online purchases. This technology is truly revolutionary.",
      rating: 5,
      avatar: "🕺🏽"
    },
    {
      name: "Sophie Laurent",
      role: "Busy Executive",
      content: "Saves me countless hours and returns. The virtual fitting is more accurate than trying on in stores.",
      rating: 5,
      avatar: "👩🏼‍💼"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 elegant-gradient opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-script font-bold mb-8 text-primary leading-tight">
              Virtual Fit
              <span className="block text-secondary">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl text-text/80 mb-12 max-w-4xl mx-auto leading-relaxed font-sans">
              Experience the extraordinary fusion of haute couture and cutting-edge technology. 
              Discover your perfect fit in our luxurious virtual fitting sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/measurements">
                <Button size="lg" className="elegant-gradient hover:shadow-2xl text-lg px-12 py-4 rounded-2xl font-sans transform hover:scale-105 transition-all duration-300">
                  Begin Your Journey
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-12 py-4 rounded-2xl border-primary/30 hover:bg-primary/5 font-sans">
                Watch the Magic
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-script font-bold text-primary mb-6">
              Why Choose Our Atelier?
            </h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto font-sans leading-relaxed">
              Our revolutionary platform combines artisanal attention to detail with 
              state-of-the-art technology to deliver an unparalleled fitting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant hover-lift border-0 p-8 text-center group">
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 elegant-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-script font-semibold mb-4 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-text/70 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-script font-bold text-primary mb-6">
              Beloved by Connoisseurs
            </h2>
            <p className="text-xl text-text/70 font-sans">
              Join thousands who've discovered their perfect style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant hover-lift border-0 p-8">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-text/80 mb-6 italic font-sans leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-script font-semibold text-primary text-lg">{testimonial.name}</p>
                      <p className="text-sm text-text/60 font-sans">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 elegant-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="w-16 h-16 mx-auto mb-8 text-accent" />
          <h2 className="text-5xl font-script font-bold mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-white/90 mb-12 font-sans leading-relaxed">
            Join the revolution in fashion technology and never worry about fit again. 
            Your perfect wardrobe awaits.
          </p>
          <Link to="/measurements">
            <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white text-lg px-12 py-4 rounded-2xl font-sans transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Your Experience
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
