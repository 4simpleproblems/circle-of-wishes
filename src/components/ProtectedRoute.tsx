
import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';

interface ProtectedRouteProps {
  children: ReactNode;
  onAuthRequired: () => void;
}

export const ProtectedRoute = ({ children, onAuthRequired }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-orange-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-cream-100">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">O</span>
            </div>
            <h1 className="text-3xl font-bold text-orange-700 mb-2">Access Required</h1>
            <p className="text-orange-600">Please sign in to access this page</p>
          </div>
          <Button 
            onClick={onAuthRequired}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
