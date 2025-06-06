
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useToast } from './ui/use-toast';
import { LogOut, User, Settings } from 'lucide-react';

interface UserMenuProps {
  onNavigate: (page: string) => void;
}

export const UserMenu = ({ onNavigate }: UserMenuProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({ title: "Signed out successfully" });
      onNavigate('home');
    } catch (error: any) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 transition-colors"
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src={user.photoURL || undefined} />
          <AvatarFallback className="bg-orange-500 text-white">
            {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-orange-700 hidden md:block">
          {user.displayName || user.email?.split('@')[0] || 'User'}
        </span>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-orange-100 py-2 z-50">
          <button
            onClick={() => {
              onNavigate('profile');
              setShowDropdown(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-orange-50 flex items-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span>Profile</span>
          </button>
          <button
            onClick={() => {
              onNavigate('settings');
              setShowDropdown(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-orange-50 flex items-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          <hr className="my-2 border-orange-100" />
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-orange-50 flex items-center space-x-2 text-red-600"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};
