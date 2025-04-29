
import React from 'react';
import { Leaf, Sprout, CloudSun, Users, Wheat, Soil } from 'lucide-react';

const FeatureItem = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay?: number 
}) => (
  <div 
    className="feature-card mb-4 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="mt-1 p-2 bg-white/20 rounded-lg animate-pulse-subtle">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
    <div className="floating-circle w-20 h-20 -right-5 -bottom-5 bg-white/5"></div>
  </div>
);

const FeatureShowcase = () => {
  // Create decorative background elements
  const circles = Array.from({ length: 6 }).map((_, i) => (
    <div 
      key={i}
      className="floating-circle" 
      style={{
        width: `${Math.random() * 15 + 5}rem`,
        height: `${Math.random() * 15 + 5}rem`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: i % 2 === 0 ? 'rgba(245, 193, 61, 0.15)' : 'rgba(255, 255, 255, 0.1)',
      }}
    />
  ));

  return (
    <div className="features-container">
      {circles}
      <div className="relative z-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-2 text-farm-gold">Farm Smart AI</h2>
        <p className="text-white/80 mb-8">Your intelligent farming assistant powered by AI</p>

        <div className="space-y-5">
          <FeatureItem 
            icon={<Sprout className="h-5 w-5 text-farm-gold" />} 
            title="AI Personal Farming Assistant" 
            description="Get personalized answers to farming questions and learn organic methods"
            delay={100}
          />
          
          <FeatureItem 
            icon={<Leaf className="h-5 w-5 text-farm-gold" />} 
            title="Plant Disease Detection" 
            description="Identify plant diseases with AI and receive prevention recommendations"
            delay={200}
          />
          
          <FeatureItem 
            icon={<CloudSun className="h-5 w-5 text-farm-gold" />} 
            title="Crop Recommendation" 
            description="Analyze soil and weather to determine the best crops for your area"
            delay={300}
          />
          
          <FeatureItem 
            icon={<Wheat className="h-5 w-5 text-farm-gold" />} 
            title="Price Prediction" 
            description="AI forecasting of crop and farming commodity future prices"
            delay={400}
          />
          
          <FeatureItem 
            icon={<Soil className="h-5 w-5 text-farm-gold" />} 
            title="Fertilizer Recommendation" 
            description="Get AI recommendations for the best fertilizers based on your soil"
            delay={500}
          />
          
          <FeatureItem 
            icon={<Users className="h-5 w-5 text-farm-gold" />} 
            title="Farmers Community" 
            description="Connect with other farmers to share knowledge and experiences"
            delay={600}
          />
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-xs text-white/60">
        Powered by advanced agricultural AI
      </div>
    </div>
  );
};

export default FeatureShowcase;
