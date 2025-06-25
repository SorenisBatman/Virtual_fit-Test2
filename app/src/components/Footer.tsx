
import { Link } from "react-router-dom";
import { Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="elegant-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-script font-bold">Virtual Fit Trove</h3>
                <p className="text-white/80 text-sm font-sans">Where fashion meets technology</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed font-sans">
              Experience the future of fashion with our revolutionary virtual fitting technology. 
              Discover your perfect fit and style with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-script font-semibold mb-6">Navigate</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/measurements" className="text-white/80 hover:text-accent transition-colors">
                  Measurements
                </Link>
              </li>
              <li>
                <Link to="/try-on" className="text-white/80 hover:text-accent transition-colors">
                  Try On
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-script font-semibold mb-6">Connect</h4>
            <ul className="space-y-3 text-white/80 font-sans">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@virtualfittrove.com</span>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 font-sans">
          <p>&copy; 2024 Virtual Fit Trove. Crafted with love for fashion enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};
