
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Users, List, Settings, BarChart3, User } from "lucide-react";
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from './UserMenu';

interface NavigationProps {
  onNavigate: (page: string) => void;
  onAuthModal: (mode?: 'login' | 'signup') => void;
}

const Navigation = ({ onNavigate, onAuthModal }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const navItems = user ? [
    { name: 'Dashboard', icon: BarChart3, page: 'dashboard' },
    { name: 'Groups', icon: Users, page: 'groups' },
    { name: 'Wishlists', icon: Heart, page: 'wishlists' },
    { name: 'Profile', icon: User, page: 'profile' },
    { name: 'Settings', icon: Settings, page: 'settings' },
  ] : [];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate(user ? 'dashboard' : 'home')}
            className="flex items-center space-x-3 group"
          >
            <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl group-hover:shadow-lg transition-all duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Optana
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.page)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-orange-700 hover:bg-orange-50 hover:text-orange-800 transition-all duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <UserMenu onNavigate={onNavigate} />
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => onAuthModal('login')}
                  className="text-orange-700 hover:text-orange-800 hover:bg-orange-50"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => onAuthModal('signup')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-orange-700 hover:bg-orange-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100 py-4 bg-white/95 backdrop-blur-sm">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left text-orange-700 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
              
              {!user && (
                <div className="pt-4 border-t border-orange-100 space-y-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onAuthModal('login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start text-orange-700 hover:bg-orange-50"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                      onAuthModal('signup');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
