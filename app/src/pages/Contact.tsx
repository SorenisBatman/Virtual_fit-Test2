
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Heart, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent with love! We'll respond shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Send Us Love",
      details: "hello@virtualfittrove.com",
      description: "We cherish every message"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Our Studio",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am to 6pm PST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Visit Our Atelier",
      details: "San Francisco, CA",
      description: "123 Couture Boulevard"
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Studio Hours",
      details: "Mon - Fri: 9am - 6pm",
      description: "Saturday: 10am - 4pm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-white to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-script font-bold text-primary mb-6">
            Connect With Us
          </h1>
          <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed font-sans">
            We'd love to hear from you. Whether you have questions about our virtual fitting experience 
            or simply want to share your style journey, we're here with open arms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-script font-semibold text-primary mb-8">
              Reach Our Hearts
            </h2>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant border-0 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 elegant-gradient rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-script font-semibold text-primary text-lg mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1 font-sans">
                        {info.details}
                      </p>
                      <p className="text-sm text-text/60 font-sans">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elegant border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-t-2xl">
                <CardTitle className="text-3xl font-script text-center text-primary flex items-center justify-center gap-3">
                  <Heart className="w-8 h-8" />
                  Share Your Thoughts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                      <Label htmlFor="name" className="text-sm font-medium text-text/80 font-sans group-focus-within:text-primary transition-colors">
                        Your Beautiful Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tell us your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-14 border-2 border-primary/20 focus:border-primary rounded-xl bg-white/50 backdrop-blur-sm font-sans transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-3 group">
                      <Label htmlFor="email" className="text-sm font-medium text-text/80 font-sans group-focus-within:text-primary transition-colors">
                        Your Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-14 border-2 border-primary/20 focus:border-primary rounded-xl bg-white/50 backdrop-blur-sm font-sans transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="subject" className="text-sm font-medium text-text/80 font-sans group-focus-within:text-primary transition-colors">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-14 border-2 border-primary/20 focus:border-primary rounded-xl bg-white/50 backdrop-blur-sm font-sans transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="message" className="text-sm font-medium text-text/80 font-sans group-focus-within:text-primary transition-colors">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Share your thoughts, questions, or dreams with us..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-2 border-primary/20 focus:border-primary rounded-xl bg-white/50 backdrop-blur-sm font-sans transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <Button 
                      type="submit" 
                      className="elegant-gradient hover:shadow-2xl text-lg px-12 py-4 rounded-2xl font-sans transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send with Love
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Elegant Map Placeholder */}
        <div className="mt-16">
          <Card className="card-elegant border-0 shadow-2xl overflow-hidden">
            <div className="h-80 elegant-gradient flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="text-center text-white relative z-10">
                <MapPin className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-script font-bold mb-2">Our Atelier Location</h3>
                <p className="font-sans opacity-90">123 Couture Boulevard, San Francisco, CA 94102</p>
                <p className="text-sm font-sans opacity-75 mt-2">Where fashion dreams come to life</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
