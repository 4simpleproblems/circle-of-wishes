
import { useAuth } from '../hooks/useAuth';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Users, Heart, List, Calendar, Edit, Star, Gift } from 'lucide-react';

interface ProfileProps {
  onNavigate: (page: string) => void;
  onAuthModal: () => void;
}

const Profile = ({ onNavigate, onAuthModal }: ProfileProps) => {
  const { user } = useAuth();

  const stats = [
    { icon: Users, label: 'Groups', value: '3' },
    { icon: Heart, label: 'Wishlists', value: '12' },
    { icon: List, label: 'Items', value: '45' },
    { icon: Gift, label: 'Received', value: '18' }
  ];

  const recentWishlists = [
    { name: 'Birthday 2024', items: 8, group: 'Family', shared: true },
    { name: 'Holiday Gifts', items: 12, group: 'Friends', shared: true },
    { name: 'Home Improvement', items: 6, group: 'Personal', shared: false }
  ];

  const achievements = [
    { name: 'First Wishlist', description: 'Created your first wishlist', earned: true },
    { name: 'Group Creator', description: 'Created 3 groups', earned: true },
    { name: 'Gift Giver', description: 'Marked 10 items as purchased', earned: false },
    { name: 'Social Butterfly', description: 'Joined 5 groups', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cream-100">
      <Navigation onNavigate={onNavigate} onAuthModal={onAuthModal} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <Card className="p-8 bg-white/80 backdrop-blur mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Avatar className="w-32 h-32">
              <AvatarImage src={user?.photoURL || undefined} />
              <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-3xl">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-orange-700 mb-2">
                {user?.displayName || 'User'}
              </h1>
              <p className="text-orange-600 mb-4">{user?.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge className="bg-orange-100 text-orange-700">
                  <Calendar className="w-3 h-3 mr-1" />
                  Joined March 2024
                </Badge>
                <Badge className="bg-green-100 text-green-700">
                  <Star className="w-3 h-3 mr-1" />
                  Active Member
                </Badge>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/80 backdrop-blur mb-6">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Your Stats</h2>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className="w-5 h-5 text-orange-500" />
                      <span className="text-orange-700">{stat.label}</span>
                    </div>
                    <span className="font-bold text-orange-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6 bg-white/80 backdrop-blur">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg ${achievement.earned ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50 border border-gray-200'}`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-orange-500' : 'bg-gray-400'}`}>
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-medium ${achievement.earned ? 'text-orange-700' : 'text-gray-500'}`}>
                          {achievement.name}
                        </h3>
                        <p className={`text-sm ${achievement.earned ? 'text-orange-600' : 'text-gray-400'}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/80 backdrop-blur mb-6">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Recent Wishlists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentWishlists.map((wishlist, index) => (
                  <div key={index} className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-orange-700">{wishlist.name}</h3>
                      <Badge variant={wishlist.shared ? "default" : "secondary"} className="text-xs">
                        {wishlist.shared ? 'Shared' : 'Private'}
                      </Badge>
                    </div>
                    <p className="text-sm text-orange-600 mb-2">{wishlist.group}</p>
                    <div className="flex items-center space-x-2 text-xs text-orange-500">
                      <List className="w-3 h-3" />
                      <span>{wishlist.items} items</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => onNavigate('wishlists')}
                variant="outline" 
                className="w-full mt-4 border-orange-300 text-orange-700 hover:bg-orange-50"
              >
                View All Wishlists
              </Button>
            </Card>

            {/* Activity Feed */}
            <Card className="p-6 bg-white/80 backdrop-blur">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Activity Feed</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-orange-700">You added "Wireless Headphones" to your Birthday wishlist</p>
                    <p className="text-sm text-orange-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-orange-700">You joined the "Work Friends" group</p>
                    <p className="text-sm text-orange-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Gift className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-orange-700">Sarah marked your "Coffee Maker" as purchased</p>
                    <p className="text-sm text-orange-500">2 days ago</p>
                  </div>
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

export default Profile;
