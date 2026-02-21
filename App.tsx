
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  MessageSquare,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Departments from './components/Departments'; 
import HowItWorks from './components/HowItWorks';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('demo-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-600/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05070a]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter gold-gradient">VELOXTRA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#problem" className="text-gray-400 hover:text-white transition-colors">Challenges</a>
            <a href="#solution" className="text-gray-400 hover:text-white transition-colors">Alex AI</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Process</a>
            <button 
              onClick={scrollToDemo}
              className="gold-button px-6 py-2.5 rounded-full text-black font-semibold text-sm hover:scale-105 transition-transform"
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#05070a] border-b border-white/10 py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white">Challenges</a>
            <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white">Alex AI</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white">Process</a>
            <button 
              onClick={scrollToDemo}
              className="gold-button px-6 py-3 rounded-full text-black font-semibold text-center"
            >
              Get a Demo
            </button>
          </div>
        )}
      </nav>

      <main>
        <Hero onCtaClick={scrollToDemo} />
        <Problem />
        <Solution />
        <Departments />
        <HowItWorks />
        <DemoForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
