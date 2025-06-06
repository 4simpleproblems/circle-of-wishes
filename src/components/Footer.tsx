
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-700 to-orange-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/20 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">WishCircle</span>
            </div>
            <p className="text-orange-100 leading-relaxed max-w-md">
              Bringing families and friends together through the joy of shared wishes. 
              Create, share, and celebrate the things that matter most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/groups" className="text-orange-100 hover:text-white transition-colors">
                  My Groups
                </Link>
              </li>
              <li>
                <Link to="/wishlists" className="text-orange-100 hover:text-white transition-colors">
                  Wishlists
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-orange-100 hover:text-white transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-orange-100 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-100 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-600 mt-12 pt-8 text-center">
          <p className="text-orange-100">
            Made with <Heart className="w-4 h-4 inline text-orange-300" /> for families and friends everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
