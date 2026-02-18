
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-yellow-600/30 bg-yellow-600/10 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span>Next-Gen Voice AI for Dealerships</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Never Miss a <br />
            <span className="gold-gradient">Luxury Lead</span> Again
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            AI Voice Agents that sound human, work 24/7, and seamlessly convert inbound calls into high-value showroom visits. Alex handles the traffic; your team closes the sales.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onCtaClick}
              className="gold-button px-8 py-4 rounded-full text-black font-bold text-lg flex items-center group"
            >
              See Alex in Action
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-[#05070a]"
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Trusted by 50+ Premium Dealers
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
