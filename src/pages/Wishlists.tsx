
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, List, Users, Circle, Plus, Eye, Share, Lock } from 'lucide-react';

interface WishlistsProps {
  onNavigate: (page: string) => void;
  onAuthModal: () => void;
}

const Wishlists = ({ onNavigate, onAuthModal }: WishlistsProps) => {
  const wishlists = [
    {
      id: 1,
      title: "Birthday Wishlist 2024",
      group: "Johnson Family",
      items: 8,
      shared: true,
      color: "from-orange-400 to-orange-600",
      emoji: "🎂",
      lastUpdated: "2 hours ago",
      views: 12
    },
    {
      id: 2,
      title: "Holiday Gift Ideas",
      group: "College Friends",
      items: 12,
      shared: true,
      color: "from-orange-500 to-orange-700",
      emoji: "🎁",
      lastUpdated: "1 day ago",
      views: 8
    },
    {
      id: 3,
      title: "Home Improvement",
      group: "Personal",
      items: 6,
      shared: false,
      color: "from-orange-600 to-orange-800",
      emoji: "🏠",
      lastUpdated: "3 days ago",
      views: 0
    },
    {
      id: 4,
      title: "Wedding Registry",
      group: "Johnson Family",
      items: 25,
      shared: true,
      color: "from-orange-300 to-orange-500",
      emoji: "💒",
      lastUpdated: "1 week ago",
      views: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-cream-100">
      <Navigation onNavigate={onNavigate} onAuthModal={onAuthModal} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
            Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Wishlists</span>
          </h1>
          <p className="text-xl text-orange-600 mb-8">
            Create and manage your personal and shared wishlists.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-6 hover:shadow-lg transition-all duration-300">
              <Plus className="w-4 h-4 mr-2" />
              Create New Wishlist
            </Button>
            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
              <Share className="w-4 h-4 mr-2" />
              Browse Shared Lists
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlists.map((wishlist) => (
            <Card key={wishlist.id} className="p-6 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${wishlist.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{wishlist.emoji}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {wishlist.shared ? (
                    <Badge className="bg-green-100 text-green-700">
                      <Users className="w-3 h-3 mr-1" />
                      Shared
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                      <Lock className="w-3 h-3 mr-1" />
                      Private
                    </Badge>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-orange-700 mb-2 group-hover:text-orange-800 transition-colors">
                {wishlist.title}
              </h3>
              
              <p className="text-sm text-orange-600 mb-4">
                {wishlist.group}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm text-orange-600">
                  <div className="flex items-center space-x-1">
                    <List className="w-4 h-4" />
                    <span>{wishlist.items} items</span>
                  </div>
                  {wishlist.shared && (
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{wishlist.views} views</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-orange-500">Updated {wishlist.lastUpdated}</p>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex-1 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                >
                  View Details
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                >
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
          
          {/* Create New Wishlist Card */}
          <Card className="p-6 bg-white/60 backdrop-blur border-2 border-dashed border-orange-300 hover:border-orange-400 hover:bg-white/80 transition-all duration-300 cursor-pointer flex items-center justify-center group">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Create New Wishlist
              </h3>
              <p className="text-sm text-orange-600">
                Start adding your wishes
              </p>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlists;
