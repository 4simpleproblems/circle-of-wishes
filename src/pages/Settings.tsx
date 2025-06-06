
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Bell, Users, Heart, Circle } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-orange-700 mb-4">
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Settings</span>
          </h1>
          <p className="text-xl text-orange-600">
            Customize your WishCircle experience and manage your preferences.
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="p-6 wishcircle-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary to-orange-600 rounded-lg">
                <Circle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-display font-semibold text-orange-700">Profile Settings</h2>
            </div>
            <p className="text-orange-600 mb-4">
              Manage your personal information and profile preferences.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Edit Profile
            </Button>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 wishcircle-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-display font-semibold text-orange-700">Notifications</h2>
            </div>
            <p className="text-orange-600 mb-4">
              Control how and when you receive notifications about group activities.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Manage Notifications
            </Button>
          </Card>

          {/* Privacy Settings */}
          <Card className="p-6 wishcircle-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-display font-semibold text-orange-700">Privacy & Groups</h2>
            </div>
            <p className="text-orange-600 mb-4">
              Set your privacy preferences and manage group access controls.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Privacy Settings
            </Button>
          </Card>

          {/* Account Settings */}
          <Card className="p-6 wishcircle-card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg">
                <SettingsIcon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-display font-semibold text-orange-700">Account</h2>
            </div>
            <p className="text-orange-600 mb-4">
              Manage your account settings, password, and data preferences.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Account Settings
              </Button>
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                Export Data
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Settings;
