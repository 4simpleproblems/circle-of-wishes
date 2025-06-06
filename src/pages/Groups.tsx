
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Heart, List, Circle, Plus, Crown, UserPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface GroupsProps {
  onNavigate: (page: string) => void;
  onAuthModal: () => void;
}

const Groups = ({ onNavigate, onAuthModal }: GroupsProps) => {
  const groups = [
    {
      id: 1,
      name: "Johnson Family",
      type: "Family",
      members: 8,
      wishlists: 12,
      color: "from-orange-400 to-orange-600",
      role: "admin",
      avatar: "👨‍👩‍👧‍👦",
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      name: "College Friends",
      type: "Friends",
      members: 6,
      wishlists: 8,
      color: "from-orange-500 to-orange-700",
      role: "member",
      avatar: "🎓",
      lastActivity: "1 day ago"
    },
    {
      id: 3,
      name: "Work Buddies",
      type: "Work",
      members: 4,
      wishlists: 5,
      color: "from-orange-600 to-orange-800",
      role: "member",
      avatar: "💼",
      lastActivity: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cream-100">
      <Navigation onNavigate={onNavigate} onAuthModal={onAuthModal} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
            Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Groups</span>
          </h1>
          <p className="text-xl text-orange-600 mb-8">
            Manage your family and friend groups, create new circles of wishes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-6 hover:shadow-lg transition-all duration-300">
              <Plus className="w-4 h-4 mr-2" />
              Create New Group
            </Button>
            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
              <UserPlus className="w-4 h-4 mr-2" />
              Join Group
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.id} className="p-6 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${group.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{group.avatar}</span>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge variant={group.type === "Family" ? "default" : "secondary"} className="text-xs">
                    {group.type}
                  </Badge>
                  {group.role === "admin" && (
                    <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                      <Crown className="w-3 h-3 mr-1" />
                      Admin
                    </Badge>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-orange-700 mb-2 group-hover:text-orange-800 transition-colors">
                {group.name}
              </h3>
              
              <p className="text-sm text-orange-500 mb-4">Last activity: {group.lastActivity}</p>
              
              <div className="flex items-center justify-between text-sm text-orange-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{group.wishlists} lists</span>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50"
              >
                View Group
              </Button>
            </Card>
          ))}
          
          {/* Create New Group Card */}
          <Card className="p-6 bg-white/60 backdrop-blur border-2 border-dashed border-orange-300 hover:border-orange-400 hover:bg-white/80 transition-all duration-300 cursor-pointer flex items-center justify-center group">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                <Plus className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Create New Group
              </h3>
              <p className="text-sm text-orange-600">
                Start a new circle of wishes
              </p>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Groups;
