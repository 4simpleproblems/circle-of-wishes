
import { Users, Heart, Bell, Circle, List, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Family & Friend Groups",
      description: "Organize your loved ones into meaningful groups and share wishlists that matter to everyone.",
      color: "from-primary to-orange-600"
    },
    {
      icon: Heart,
      title: "Beautiful Wishlists",
      description: "Create stunning wishlists with photos, descriptions, and links. Make every wish come alive.",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay connected with real-time updates when someone adds to a list or marks items as purchased.",
      color: "from-orange-600 to-orange-800"
    },
    {
      icon: List,
      title: "Easy Organization",
      description: "Keep track of all your wishes with intuitive organization tools and privacy controls.",
      color: "from-primary to-orange-500"
    },
    {
      icon: Circle,
      title: "Privacy Controls",
      description: "Choose what to share and with whom. Keep some wishes private or open to your circles.",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Settings,
      title: "Seamless Experience",
      description: "Enjoy a smooth, responsive experience across all your devices with automatic syncing.",
      color: "from-orange-500 to-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-orange-700 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent"> Share Wishes</span>
          </h2>
          <p className="text-xl text-orange-600 max-w-3xl mx-auto">
            WishCircle brings families and friends together through the joy of giving and receiving. 
            Create meaningful connections around the things that matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 wishcircle-card rounded-3xl hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-orange-700 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-orange-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
