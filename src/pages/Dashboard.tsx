
import { useAuth } from '../hooks/useAuth';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, Heart, List, Bell, Plus, TrendingUp } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
  onAuthModal: () => void;
}

const Dashboard = ({ onNavigate, onAuthModal }: DashboardProps) => {
  const { user } = useAuth();

  const stats = [
    { icon: Users, label: 'Groups', value: '3', color: 'from-orange-400 to-orange-600' },
    { icon: Heart, label: 'Wishlists', value: '12', color: 'from-orange-500 to-orange-700' },
    { icon: List, label: 'Items', value: '45', color: 'from-orange-600 to-orange-800' },
    { icon: Bell, label: 'Updates', value: '7', color: 'from-orange-300 to-orange-500' }
  ];

  const recentActivity = [
    { user: 'Sarah', action: 'added "Wireless Headphones" to Birthday Wishlist', time: '2 hours ago', type: 'add' },
    { user: 'Mike', action: 'joined the Johnson Family group', time: '1 day ago', type: 'join' },
    { user: 'Emma', action: 'marked "Coffee Maker" as purchased', time: '2 days ago', type: 'purchase' },
    { user: 'Dad', action: 'created a new wishlist "Vacation Gear"', time: '3 days ago', type: 'create' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cream-100">
      <Navigation onNavigate={onNavigate} onAuthModal={onAuthModal} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-700 mb-2">
            Welcome back, {user?.displayName || 'Friend'}! 👋
          </h1>
          <p className="text-xl text-orange-600">
            Here's what's happening in your circles
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-orange-700">{stat.value}</p>
                </div>
                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/80 backdrop-blur">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-orange-700">Recent Activity</h2>
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'add' ? 'bg-green-100 text-green-600' :
                      activity.type === 'join' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'purchase' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {activity.type === 'add' && <Plus className="w-4 h-4" />}
                      {activity.type === 'join' && <Users className="w-4 h-4" />}
                      {activity.type === 'purchase' && <Heart className="w-4 h-4" />}
                      {activity.type === 'create' && <List className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-orange-700">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-orange-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="p-6 bg-white/80 backdrop-blur">
              <h2 className="text-2xl font-bold text-orange-700 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Button 
                  onClick={() => onNavigate('wishlists')}
                  className="w-full justify-start bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Create Wishlist
                </Button>
                <Button 
                  onClick={() => onNavigate('groups')}
                  variant="outline" 
                  className="w-full justify-start border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Create Group
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Invite Friends
                </Button>
              </div>
            </Card>

            {/* Trending */}
            <Card className="p-6 bg-white/80 backdrop-blur mt-6">
              <h3 className="text-lg font-bold text-orange-700 mb-4">Trending Items</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-orange-600">Wireless Earbuds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-orange-600">Coffee Makers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                  <span className="text-sm text-orange-600">Smart Watches</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
