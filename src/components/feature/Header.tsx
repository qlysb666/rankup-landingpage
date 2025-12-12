
import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/edd92e43bd038563d085dcdc98b1d041.png"
              alt="RankUp Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">
              How It Works
            </a>
            <a href="#demo" className="text-gray-700 hover:text-red-600 transition-colors">
              Demo
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              size="md"
              onClick={() => scrollToSection('booking')}
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black hover:text-red-600 transition-colors"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-600 hover:text-red-600 transition-colors cursor-pointer font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-left text-gray-600 hover:text-red-600 transition-colors cursor-pointer font-medium">
                Demo
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-600 hover:text-red-600 transition-colors cursor-pointer font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('comparison')} className="text-left text-gray-600 hover:text-red-600 transition-colors cursor-pointer font-medium">
                Why RankUp
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-600 hover:text-red-600 transition-colors cursor-pointer font-medium">
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-600 hover:text-red-600 transition-colors cursor-pointer font-medium">
                FAQ
              </button>
              <Button onClick={() => scrollToSection('booking')} fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
