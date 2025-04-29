
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import AuthForm from '@/components/AuthForm';
import FeatureShowcase from '@/components/FeatureShowcase';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = (data: any) => {
    console.log('Signup data:', data);
    toast({
      title: "Account Creation",
      description: "This is a demo. Account creation would happen here.",
    });
    // In a real app, this would create a new user account
    // navigate('/dashboard');
  };

  return (
    <main className="animated-gradient-bg">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="flex items-center justify-center mb-8">
            <Leaf className="h-8 w-8 text-farm-green mr-2" />
            <h1 className="text-2xl font-bold text-farm-dark-green">AgroVerse</h1>
          </div>
          <AuthForm isSignUp onSubmit={handleSignup} />
        </div>
        <FeatureShowcase />
      </div>
    </main>
  );
};

export default Signup;
