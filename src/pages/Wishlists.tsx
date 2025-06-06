
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, List, Users, Circle } from 'lucide-react';

const Wishlists = () => {
  const wishlists = [
    {
      id: 1,
      title: "Birthday Wishlist 2024",
      group: "Johnson Family",
      items: 8,
      shared: true,
      color: "from-primary to-orange-600"
    },
    {
      id: 2,
      title: "Holiday Gift Ideas",
      group: "College Friends",
      items: 12,
      shared: true,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 3,
      title: "Home Improvement",
      group: "Personal",
      items: 6,
      shared: false,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "Wedding Registry",
      group: "Johnson Family",
      items: 25,
      shared: true,
      color: "from-orange-600 to-orange-800"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-orange-700 mb-4">
            Your <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Wishlists</span>
          </h1>
          <p className="text-xl text-orange-600 mb-8">
            Create and manage your personal and shared wishlists.
          </p>
          
          <Button className="wishcircle-gradient text-white font-medium px-6 hover:shadow-lg transition-all duration-300">
            Create New Wishlist
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlists.map((wishlist) => (
            <Card key={wishlist.id} className="p-6 wishcircle-card hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${wishlist.color} rounded-xl`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  {wishlist.shared ? (
                    <Users className="w-4 h-4 text-orange-500" />
                  ) : (
                    <Circle className="w-4 h-4 text-orange-400" />
                  )}
                  <span className="text-sm text-orange-500">
                    {wishlist.shared ? 'Shared' : 'Private'}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-orange-700 mb-2">
                {wishlist.title}
              </h3>
              
              <p className="text-sm text-orange-600 mb-4">
                {wishlist.group}
              </p>
              
              <div className="flex items-center justify-between text-sm text-orange-600">
                <div className="flex items-center space-x-1">
                  <List className="w-4 h-4" />
                  <span>{wishlist.items} items</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-orange-700">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
          
          {/* Create New Wishlist Card */}
          <Card className="p-6 wishcircle-card border-2 border-dashed border-orange-300 hover:border-primary transition-all duration-300 cursor-pointer flex items-center justify-center">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl mb-4 mx-auto w-fit">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-display font-semibold text-orange-700">
                Create New Wishlist
              </h3>
              <p className="text-sm text-orange-600 mt-2">
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
