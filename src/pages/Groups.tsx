
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Heart, List, Circle } from 'lucide-react';

const Groups = () => {
  const groups = [
    {
      id: 1,
      name: "Johnson Family",
      type: "Family",
      members: 8,
      wishlists: 12,
      color: "from-primary to-orange-600"
    },
    {
      id: 2,
      name: "College Friends",
      type: "Friends",
      members: 6,
      wishlists: 8,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 3,
      name: "Work Buddies",
      type: "Friends",
      members: 4,
      wishlists: 5,
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-orange-700 mb-4">
            Your <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Groups</span>
          </h1>
          <p className="text-xl text-orange-600 mb-8">
            Manage your family and friend groups, create new circles of wishes.
          </p>
          
          <Button className="wishcircle-gradient text-white font-medium px-6 hover:shadow-lg transition-all duration-300">
            Create New Group
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.id} className="p-6 wishcircle-card hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${group.color} rounded-xl`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                  {group.type}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-orange-700 mb-2">
                {group.name}
              </h3>
              
              <div className="flex items-center justify-between text-sm text-orange-600">
                <div className="flex items-center space-x-1">
                  <Circle className="w-4 h-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <List className="w-4 h-4" />
                  <span>{group.wishlists} lists</span>
                </div>
              </div>
            </Card>
          ))}
          
          {/* Create New Group Card */}
          <Card className="p-6 wishcircle-card border-2 border-dashed border-orange-300 hover:border-primary transition-all duration-300 cursor-pointer flex items-center justify-center">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl mb-4 mx-auto w-fit">
                <Circle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-display font-semibold text-orange-700">
                Create New Group
              </h3>
              <p className="text-sm text-orange-600 mt-2">
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
