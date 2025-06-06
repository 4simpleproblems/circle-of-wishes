
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Users, List, Settings } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-cream-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-primary to-orange-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-orange-700">
              WishCircle
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/groups" 
              className="flex items-center space-x-2 text-orange-700 hover:text-primary transition-colors"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Groups</span>
            </Link>
            <Link 
              to="/wishlists" 
              className="flex items-center space-x-2 text-orange-700 hover:text-primary transition-colors"
            >
              <List className="w-5 h-5" />
              <span className="font-medium">Wishlists</span>
            </Link>
            <Link 
              to="/settings" 
              className="flex items-center space-x-2 text-orange-700 hover:text-primary transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
            <Button className="wishcircle-gradient text-white font-medium px-6 hover:shadow-lg transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-cream-200 bg-white/95 backdrop-blur-sm">
            <Link 
              to="/groups" 
              className="flex items-center space-x-2 text-orange-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Groups</span>
            </Link>
            <Link 
              to="/wishlists" 
              className="flex items-center space-x-2 text-orange-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <List className="w-5 h-5" />
              <span className="font-medium">Wishlists</span>
            </Link>
            <Link 
              to="/settings" 
              className="flex items-center space-x-2 text-orange-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
            <Button className="wishcircle-gradient text-white font-medium w-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
