
import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Groups from "./pages/Groups";
import Wishlists from "./pages/Wishlists";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { AuthModal } from "./components/AuthModal";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleAuthModal = (mode: 'login' | 'signup' = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Index onNavigate={handleNavigate} onAuthModal={handleAuthModal} />;
      case 'dashboard':
        return (
          <ProtectedRoute onAuthRequired={() => handleAuthModal('login')}>
            <Dashboard onNavigate={handleNavigate} onAuthModal={handleAuthModal} />
          </ProtectedRoute>
        );
      case 'groups':
        return (
          <ProtectedRoute onAuthRequired={() => handleAuthModal('login')}>
            <Groups onNavigate={handleNavigate} onAuthModal={handleAuthModal} />
          </ProtectedRoute>
        );
      case 'wishlists':
        return (
          <ProtectedRoute onAuthRequired={() => handleAuthModal('login')}>
            <Wishlists onNavigate={handleNavigate} onAuthModal={handleAuthModal} />
          </ProtectedRoute>
        );
      case 'profile':
        return (
          <ProtectedRoute onAuthRequired={() => handleAuthModal('login')}>
            <Profile onNavigate={handleNavigate} onAuthModal={handleAuthModal} />
          </ProtectedRoute>
        );
      case 'settings':
        return (
          <ProtectedRoute onAuthRequired={() => handleAuthModal('login')}>
            <Settings onNavigate={handleNavigate} onAuthModal={handleAuthModal} />
          </ProtectedRoute>
        );
      default:
        return <Index onNavigate={handleNavigate} onAuthModal={handleAuthModal} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen">
          {renderPage()}
          <AuthModal 
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            mode={authMode}
            setMode={setAuthMode}
          />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
