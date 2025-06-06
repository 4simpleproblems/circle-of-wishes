
import { Button } from "@/components/ui/button";
import { Heart, Users, Gift, Star, ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from '../hooks/useAuth';

interface HeroProps {
  onNavigate: (page: string) => void;
  onAuthModal: (mode?: 'login' | 'signup') => void;
}

const Hero = ({ onNavigate, onAuthModal }: HeroProps) => {
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      onNavigate('wishlists');
    } else {
      onAuthModal('signup');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-cream-50 to-orange-100 overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-300 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-orange-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-orange-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-orange-200">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Connect, Share, Celebrate</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Share Wishes,<br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Spread Joy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-orange-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create beautiful wishlists and share them with your loved ones. 
            Build your circle of wishes with family and friends in the most elegant way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {user ? 'Go to Wishlists' : 'Create Your First Wishlist'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl hover:border-orange-400 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Family Groups</h3>
              <p className="text-orange-600">Create circles with your loved ones</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Beautiful Lists</h3>
              <p className="text-orange-600">Create stunning, shareable wishlists</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Gift className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Gift Together</h3>
              <p className="text-orange-600">Coordinate gifts and avoid duplicates</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{i}</span>
                  </div>
                ))}
              </div>
              <span className="text-orange-600 font-medium">Join 10,000+ happy families</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
              ))}
              <span className="text-orange-600 font-medium ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
