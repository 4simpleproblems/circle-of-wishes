
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

interface IndexProps {
  onNavigate: (page: string) => void;
  onAuthModal: (mode?: 'login' | 'signup') => void;
}

const Index = ({ onNavigate, onAuthModal }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} onAuthModal={onAuthModal} />
      <Hero onNavigate={onNavigate} onAuthModal={onAuthModal} />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
