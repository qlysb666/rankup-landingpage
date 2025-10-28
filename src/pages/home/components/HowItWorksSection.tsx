
export default function HowItWorksSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: 1,
      icon: 'ri-upload-2-line',
      title: 'Upload Your Stats Screenshot',
      description: 'Simply upload a screenshot of your overall game statistics from any tracker platform.',
      image: 'https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/fb96217855d507ac3347ff29145c828b.png'
    },
    {
      number: 2,
      icon: 'ri-ai-generate',
      title: 'AI Instant Recognition & Analysis',
      description: 'Our advanced AI instantly recognizes your data and generates a comprehensive performance report.',
      image: 'https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/54c74cecd984ce63292e15c5f96bdfe6.png'
    },
    {
      number: 3,
      icon: 'ri-search-eye-line',
      title: 'Identify Problems & Get Practice',
      description: 'Review your weaknesses and dive into 8 targeted practice questions designed for your specific needs.',
      image: 'https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/98d564e5e5adc89ce4974fcdf4e8e6fb.png'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your personalized rank-up analysis in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-black mb-4">
            Ready to Rank Up?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of players who have already improved their gameplay with our AI-powered analysis platform.
          </p>
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
