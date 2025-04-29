
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, Facebook, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  isSignUp?: boolean;
  onSubmit: (data: any) => void;
}

const AuthForm = ({ isSignUp = false, onSubmit }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (isSignUp) {
      setPasswordMatch(
        !formData.confirmPassword || 
        formData.password === formData.confirmPassword
      );
    }
  }, [formData.password, formData.confirmPassword, isSignUp]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp && formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className="auth-card animate-grow">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-farm-dark-green">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-gray-600 mt-1">
          {isSignUp 
            ? 'Join the AgroVerse farming revolution' 
            : 'Login to access your farming assistant'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="input-field pl-10"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              className="input-field pl-10"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            {!isSignUp && (
              <Link to="/forgot-password" className="text-xs text-farm-green hover:underline">
                Forgot password?
              </Link>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={isSignUp ? 'Create a password' : 'Enter your password'}
              required
              className="input-field pl-10 pr-10"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isSignUp && (
          <div className="space-y-2">
            <Label 
              htmlFor="confirmPassword" 
              className="text-sm font-medium"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                required
                className={`input-field pl-10 pr-10 ${!passwordMatch ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {!passwordMatch && (
              <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
            )}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-farm-green hover:bg-farm-dark-green text-white py-2.5"
        >
          {isSignUp ? 'Create Account' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <button
            type="button"
            className="social-login-button bg-white hover:bg-gray-50 border-gray-300"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934C20.485,11.453,20.404,10.884,20.283,10.356z"
                fill="#4285F4"
              />
              <path
                d="M5.605,14.678l-2.973,2.453C3.673,19.025,5.829,21,8.673,21c2.884,0,5.302-1.829,6.436-4.208l-2.749-2.093C11.729,16.045,10.265,16.839,8.673,16.839c-1.489,0-2.767-0.658-3.599-1.646L5.605,14.678z"
                fill="#34A853"
              />
              <path
                d="M8.675,10.695c-0.881,0-1.703,0.307-2.357,0.906l-2.729-2.111C4.904,8.341,6.681,7.618,8.675,7.618c1.587,0,3.068,0.559,4.224,1.501l2.629-2.629c-1.876-1.612-4.273-2.604-6.853-2.604c-2.843,0-5.407,1.187-7.247,3.081l2.729,2.111c0.726-2.392,2.922-4.142,5.518-4.142c2.596,0,4.791,1.75,5.518,4.142l2.729-2.111c-1.84-1.894-4.404-3.081-7.247-3.081c-2.843,0-5.407,1.187-7.247,3.081l2.729,2.111C6.201,10.474,7.129,10.695,8.675,10.695z"
                fill="#FBBC05"
              />
            </svg>
            <span className="sr-only">Google</span>
          </button>
          <button
            type="button"
            className="social-login-button bg-[#1877F2] hover:bg-[#166FE5] text-white"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </button>
          <button
            type="button"
            className="social-login-button bg-white hover:bg-gray-50 border-gray-300"
          >
            <Mail className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Email</span>
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <Link
          to={isSignUp ? '/login' : '/signup'}
          className="font-medium text-farm-green hover:text-farm-dark-green"
        >
          {isSignUp ? 'Sign in' : 'Sign up'}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
