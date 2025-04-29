
import React from 'react';
import { Leaf, Sprout, CloudSun, Users, Wheat } from 'lucide-react';

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
    className="feature-card mb-4 hover:scale-105 transition-transform duration-300"
    style={{ 
      animation: `pulse 4s infinite ${delay}ms ease-in-out, float 6s infinite ${delay * 1.5}ms ease-in-out` 
    }}
  >
    <div className="flex items-start gap-4">
      <div className="mt-1 p-2 bg-white/20 rounded-lg" 
           style={{ animation: `glow 3s infinite ${delay * 0.5}ms alternate` }}>
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
  const circles = Array.from({ length: 8 }).map((_, i) => (
    <div 
      key={i}
      className="floating-circle" 
      style={{
        width: `${Math.random() * 15 + 5}rem`,
        height: `${Math.random() * 15 + 5}rem`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        animationIterationCount: 'infinite',
        backgroundColor: i % 2 === 0 ? 'rgba(245, 193, 61, 0.15)' : 'rgba(255, 255, 255, 0.1)',
      }}
    />
  ));

  // Features data
  const features = [
    {
      icon: <Sprout className="h-5 w-5 text-farm-gold" />,
      title: "AI Personal Farming Assistant",
      description: "Get personalized answers to farming questions and learn organic methods",
      delay: 100
    },
    {
      icon: <Leaf className="h-5 w-5 text-farm-gold" />,
      title: "Plant Disease Detection",
      description: "Identify plant diseases with AI and receive prevention recommendations",
      delay: 200
    },
    {
      icon: <CloudSun className="h-5 w-5 text-farm-gold" />,
      title: "Crop Recommendation",
      description: "Analyze soil and weather to determine the best crops for your area",
      delay: 300
    },
    {
      icon: <Wheat className="h-5 w-5 text-farm-gold" />,
      title: "Price Prediction",
      description: "AI forecasting of crop and farming commodity future prices",
      delay: 400
    },
    {
      icon: <Leaf className="h-5 w-5 text-farm-gold" />,
      title: "Fertilizer Recommendation",
      description: "Get AI recommendations for the best fertilizers based on your soil",
      delay: 500
    },
    {
      icon: <Users className="h-5 w-5 text-farm-gold" />,
      title: "Farmers Community",
      description: "Connect with other farmers to share knowledge and experiences",
      delay: 600
    }
  ];

  return (
    <div className="features-container dark-green-gradient">
      {circles}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-10">
        <h1 className="text-4xl font-bold mb-2 text-farm-gold font-display animate-pulse">AgroVerse</h1>
        <p className="text-white/80 mb-8">Your intelligent farming assistant powered by AI</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-xs text-white/60">
        Powered by advanced agricultural AI
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          from { box-shadow: 0 0 5px rgba(245, 193, 61, 0.5); }
          to { box-shadow: 0 0 15px rgba(245, 193, 61, 0.8); }
        }
        .dark-green-gradient {
          background: linear-gradient(-45deg, #1a3a1a, #2D5F2D, #1f4d1f, #22502a);
          background-size: 400% 400%;
          animation: gradientFlow 15s ease infinite;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default FeatureShowcase;
