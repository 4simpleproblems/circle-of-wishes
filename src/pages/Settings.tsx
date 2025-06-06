
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, Bell, Users, Heart, Circle, Shield, Download, Trash2, Moon, Globe } from 'lucide-react';

interface SettingsProps {
  onNavigate: (page: string) => void;
  onAuthModal: () => void;
}

const Settings = ({ onNavigate, onAuthModal }: SettingsProps) => {
  const settingsCategories = [
    {
      title: "Profile Settings",
      description: "Manage your personal information and profile preferences.",
      icon: Circle,
      color: "from-orange-400 to-orange-600",
      actions: ["Edit Profile", "Change Avatar"],
      badge: null
    },
    {
      title: "Notifications",
      description: "Control how and when you receive notifications about group activities.",
      icon: Bell,
      color: "from-orange-500 to-orange-700",
      actions: ["Email Notifications", "Push Notifications", "Group Updates"],
      badge: { text: "7 Active", variant: "default" as const }
    },
    {
      title: "Privacy & Groups",
      description: "Set your privacy preferences and manage group access controls.",
      icon: Shield,
      color: "from-orange-600 to-orange-800",
      actions: ["Privacy Settings", "Group Permissions", "Visibility Controls"],
      badge: null
    },
    {
      title: "Account Security",
      description: "Manage your account settings, password, and security options.",
      icon: SettingsIcon,
      color: "from-orange-300 to-orange-500",
      actions: ["Change Password", "Two-Factor Auth", "Login History"],
      badge: { text: "Secure", variant: "secondary" as const }
    },
    {
      title: "App Preferences",
      description: "Customize your app experience and interface settings.",
      icon: Moon,
      color: "from-orange-700 to-orange-900",
      actions: ["Dark Mode", "Language", "Time Zone"],
      badge: null
    },
    {
      title: "Data & Export",
      description: "Download your data or manage your account information.",
      icon: Download,
      color: "from-orange-200 to-orange-400",
      actions: ["Export Data", "Download Archive"],
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cream-100">
      <Navigation onNavigate={onNavigate} onAuthModal={onAuthModal} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Settings</span>
          </h1>
          <p className="text-xl text-orange-600">
            Customize your Optana experience and manage your preferences.
          </p>
        </div>

        <div className="space-y-6">
          {settingsCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-xl font-bold text-orange-700">{category.title}</h2>
                      {category.badge && (
                        <Badge variant={category.badge.variant}>
                          {category.badge.text}
                        </Badge>
                      )}
                    </div>
                    <p className="text-orange-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.actions.map((action, actionIndex) => (
                  <Button 
                    key={actionIndex}
                    variant="outline" 
                    size="sm"
                    className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </Card>
          ))}

          {/* Danger Zone */}
          <Card className="p-6 bg-red-50/80 backdrop-blur border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-red-500 rounded-lg">
                <Trash2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-red-700">Danger Zone</h2>
            </div>
            <p className="text-red-600 mb-4">
              These actions are permanent and cannot be undone.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Delete All Data
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Delete Account
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
