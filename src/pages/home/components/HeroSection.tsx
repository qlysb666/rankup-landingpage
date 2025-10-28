
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight">
              Your Valorant 
              <span className="block text-black">
                Rank-Up Coach
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-gray-600 leading-relaxed max-w-2xl">
              Stuck in Your Rank? Upload one stats screenshot, get instant AI coaching. Pinpoint weaknesses and receive personalized drills to rank up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('booking')}
              >
                Reserve Your Spot
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('how-it-works')}
              >
                See How It Works
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="ri-check-line text-red-600 mr-2"></i>
                Instant AI Analysis
              </div>
              <div className="flex items-center">
                <i className="ri-check-line text-red-600 mr-2"></i>
                Personalized Practice
              </div>
              <div className="flex items-center">
                <i className="ri-check-line text-red-600 mr-2"></i>
                Zero Learning Curve
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200 transform scale-110 max-w-lg mx-auto">
              <img 
                src="https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/e668ab213ef8b6534b01d6fdadd663dd.png"
                alt="AI Analysis Report Preview"
                className="w-full h-80 rounded-2xl shadow-lg object-cover"
              />
              <div className="mt-6 text-center">
                <p className="text-base text-gray-600 font-medium">Your AI-Generated Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
