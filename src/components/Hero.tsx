
import { Button } from '@/components/ui/button';
import { Heart, Users, List, Circle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cream-300/30 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/15 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-orange-700 leading-tight">
              Share Wishes,
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                Spread Joy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-600 max-w-3xl mx-auto leading-relaxed">
              Create beautiful wishlists and share them with your loved ones. 
              Build your circle of wishes with family and friends.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="wishcircle-gradient text-white font-semibold px-8 py-6 text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Create Your First Wishlist
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all duration-300">
              Learn More
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-gradient-to-br from-primary to-orange-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Users className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-700">Family Groups</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-gradient-to-br from-primary to-orange-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <List className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-700">Shared Lists</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-gradient-to-br from-primary to-orange-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-700">Wish Together</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
