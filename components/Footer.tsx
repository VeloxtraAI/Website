
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <span className="text-2xl font-bold tracking-tighter gold-gradient">VELOXTRA</span>
            <p className="text-gray-500 mt-2 max-w-xs text-sm">
              Premium Voice AI solutions for the world's most prestigious automotive brands.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:admin@veloxtra-ai.com" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-600 text-xs">
              © 2026 Veloxtra AI Automation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
