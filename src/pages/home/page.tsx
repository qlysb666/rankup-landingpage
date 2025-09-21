
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [currentRank, setCurrentRank] = useState('Gold');
  const [mainAgent, setMainAgent] = useState('');
  const [consent, setConsent] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const email = formData.get('email') as string;
    const rank = formData.get('rank') as string;
    const agent = formData.get('agent') as string;
    const consent = formData.get('consent') === 'yes';

    // 自定义英文验证
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      alert('You must agree to the terms to continue.');
      return;
    }

    try {
      const payload = {
        email: email.trim().toLowerCase(),
        rank: rank || null,
        agent: agent || null,
        consent: consent,
        source: 'hero_form'
      };

      console.log('Submitting payload:', payload);

      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log('API response:', data);

      if (data.ok) {
        alert('Successfully joined the waitlist! 🎉 We\'ll be in touch soon.');
        form.reset();
        // Reset state
        setEmail('');
        setCurrentRank('Gold');
        setMainAgent('');
        setConsent(false);
      } else {
        alert(`Failed to join: ${data.error || 'Please try again'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network error. Please try again.');
    }
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="px-8 py-4">
          <div className="bg-black/80 backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between max-w-7xl mx-auto border border-red-500/30">
            <div className="text-2xl font-bold text-red-500 font-sans">RankUp</div>
            <nav className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-base text-gray-300 hover:text-red-400 transition-colors cursor-pointer">Features</a>
              <a href="#how-it-works" className="text-base text-gray-300 hover:text-red-400 transition-colors cursor-pointer">How it works</a>
              <div className="flex items-center gap-6">
                <a href="#faq-section" className="text-base text-gray-300 hover:text-red-400 transition-colors cursor-pointer">FAQ</a>
                <a href="#join-waitlist" className="bg-gradient-to-r from-red-500 to-red-600 text-base text-white px-6 py-2.5 rounded-full hover:from-red-600 hover:to-red-700 transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-red-500/50 border border-red-400/50">Get Started</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative py-32 bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-1">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20esports%20arena%20with%20neon%20lighting%20effects%2C%20futuristic%20gaming%20environment%20with%20red%20and%20blue%20accent%20lights%2C%20competitive%20gaming%20setup%20with%20multiple%20monitors%2C%20dark%20atmospheric%20background%20perfect%20for%20overlaying%20text%2C%20clean%20minimalist%20design%20without%20any%20text%20or%20logos&width=1920&height=1080&seq=heroesports001&orientation=landscape"
            alt="Esports Arena Background"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-red-900/20"></div>
        </div>
        
        {/* Floating Gaming Icons */}
        <div className="absolute inset-0 z-2 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-bounce delay-100">
            <div className="w-8 h-8 text-red-400 opacity-60">
              <i className="ri-gamepad-line text-2xl"></i>
            </div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce delay-500">
            <div className="w-8 h-8 text-blue-400 opacity-60">
              <i className="ri-mouse-line text-2xl"></i>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-bounce delay-700">
            <div className="w-8 h-8 text-purple-400 opacity-60">
              <i className="ri-keyboard-line text-2xl"></i>
            </div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-300">
            <div className="w-8 h-8 text-cyan-400 opacity-60">
              <i className="ri-headphone-line text-2xl"></i>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm border border-red-500/30 rounded-full">
              <i className="ri-trophy-line text-red-400 mr-2"></i>
              <span className="text-sm text-red-400 tracking-tight font-medium">Elite VALORANT Training Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight font-bold max-w-5xl mx-auto">
              Upload, know and <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Rank Up</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Upload a scoreboard screenshot to get specific fixes and weekly goals—fast and repeatable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="#join-waitlist" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-base font-medium hover:from-red-600 hover:to-red-700 transition-all text-center whitespace-nowrap inline-flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-red-500/50 border border-red-400/50">
                <i className="ri-sword-line text-base"></i>
                Get Started for Free
                <i className="ri-arrow-right-line text-base"></i>
              </a>
              <a href="#features" className="bg-black/50 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-medium hover:bg-black/70 transition-colors text-center whitespace-nowrap cursor-pointer border border-red-500/30">
                <i className="ri-focus-3-line mr-2"></i>
                View Features
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="ri-shield-check-line text-red-400"></i>
                <span>Pro-Level Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="ri-flashlight-line text-blue-400"></i>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="ri-trophy-line text-purple-400"></i>
                <span>Rank Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed whitespace-nowrap">
                Using Rankup, you can Make these problems clear and Make the level up!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-trophy-line text-white text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">What's your true rank?</h4>
                      <p className="text-gray-400 leading-relaxed">Discover your true skill level and potential ranking with detailed performance metrics</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-question-line text-white text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">Why are you stuck at your current rank?</h4>
                      <p className="text-gray-400 leading-relaxed">Identify critical gameplay flaws preventing you from climbing to higher ranks</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-flag-line text-white text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">What should you do next?</h4>
                      <p className="text-gray-400 leading-relaxed">Get personalized training recommendations to improve your gameplay systematically</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use RankUp Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">RankUp</span>?
            </h2>
            <div className="max-w-4xl mx-auto">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20esports%20training%20facility%20with%20multiple%20gaming%20stations%2C%20competitive%20VALORANT%20players%20analyzing%20gameplay%20on%20ultra-wide%20monitors%2C%20neon%20lighting%20with%20red%20and%20blue%20accents%2C%20modern%20gaming%20environment%20with%20tactical%20displays%20and%20performance%20metrics&width=1200&height=400&seq=whyuseesports001&orientation=landscape"
                alt="Professional Esports Training Environment"
                className="rounded-2xl w-full object-cover shadow-2xl border border-red-500/20"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-red-900/20 backdrop-blur-sm border border-red-500/30 p-6 rounded-2xl hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-xl mb-4 border border-red-500/40">
                <i className="ri-search-eye-line text-red-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-red-300">Professional Diagnosis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Quickly identify the exact reasons holding back your rank progression with AI-powered analysis.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl mb-4 border border-blue-500/40">
                <i className="ri-lightbulb-line text-blue-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-300">Actionable Advice</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Get practical, personalized recommendations you can implement in your very next match.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 p-6 rounded-2xl hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl mb-4 border border-purple-500/40">
                <i className="ri-timer-flash-line text-purple-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">20s Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Receive comprehensive performance insights in just 20 seconds - faster than a round reset.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-xl mb-4 border border-cyan-500/40">
                <i className="ri-money-dollar-circle-line text-cyan-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-cyan-300">Cost-Effective</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Access professional-level coaching without the high costs of personal trainers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black relative overflow-hidden">
        {/* Background Gaming Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-red-500">
            <i className="ri-crosshair-line text-6xl"></i>
          </div>
          <div className="absolute top-20 right-20 text-blue-500">
            <i className="ri-focus-3-line text-4xl"></i>
          </div>
          <div className="absolute bottom-20 left-20 text-purple-500">
            <i className="ri-radar-line text-5xl"></i>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              What you'll get from <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">RankUp</span>?
            </h2>
            <div className="max-w-5xl mx-auto">
              <img
                src="/images/features-bg.png"
                alt="Complete Tactical Analysis Interface"
                className="rounded-2xl w-full object-cover shadow-2xl border border-red-500/20"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-red-900/20 backdrop-blur-sm border border-red-500/30 p-6 rounded-2xl hover:border-red-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-xl mb-4 border border-red-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-bar-chart-line text-red-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-red-300">Performance Summary</h3>
              <p className="text-gray-400 text-sm leading-relaxed">One-line overview of your match performance with key metrics highlighted for quick understanding.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl mb-4 border border-blue-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-star-line text-blue-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-300">Key Highlights</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Standout moments and strengths identified from your gameplay to build upon in future matches.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 p-6 rounded-2xl hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl mb-4 border border-purple-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-search-line text-purple-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Root Cause Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Biggest problem identified with detailed analysis of underlying causes affecting your performance.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-xl mb-4 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-flag-line text-cyan-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-cyan-300">Action Plan</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Specific fixes and weekly goals tailored to your role, map, and agent for measurable improvement.</p>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-br from-gray-900/60 to-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Rapid Rank Improvement</span>
                </h3>
                <p className="text-gray-400 mb-6 text-base leading-relaxed">Our users typically see significant rank improvements within weeks, not months. The key is our targeted approach to identifying and fixing crucial gameplay elements.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-red-500 text-lg"></i>
                    <span className="text-gray-300 text-base">Average 2-3 rank increase in 30 days</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-red-500 text-lg"></i>
                    <span className="text-gray-300 text-base">Personalized improvement roadmap</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-red-500 text-lg"></i>
                    <span className="text-gray-300 text-base">Weekly progress tracking</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/images/success-bg.png"
                  alt="Championship Achievement"
                  className="rounded-xl w-full object-cover border border-red-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Three steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">rank up</span> now
            </h2>
            <div className="max-w-4xl mx-auto">
              <img
                src="/images/how it works.png"
                alt="Professional Gaming Development Process"
                className="rounded-2xl w-full object-cover shadow-2xl border border-red-500/20"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 border-2 border-red-400/50 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/50">
                <i className="ri-upload-cloud-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-300">1. Upload</h3>
              <p className="text-gray-400 text-base leading-relaxed">Drop your VALORANT scoreboard or Tracker.gg screenshot into our secure analysis system.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 border-2 border-blue-400/50 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                <i className="ri-cpu-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">2. Analyze</h3>
              <p className="text-gray-400 text-base leading-relaxed">AI parses your stats, map context, agent performance, and team dynamics for comprehensive insights.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 border-2 border-purple-400/50 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                <i className="ri-medal-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">3. Improve</h3>
              <p className="text-gray-400 text-base leading-relaxed">Receive actionable fixes and structured weekly goals to systematically rank up your gameplay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="join-waitlist" className="py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-base text-gray-400">Be among the first to get AI-powered VALORANT coaching</p>
          </div>

          <form id="waitlist" onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl space-y-6">
            <div>
              <label className="block text-base mb-2 font-medium">Email Address *</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-base focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-base mb-2 font-medium">Current Rank</label>
              <select
                name="rank"
                value={currentRank}
                onChange={(e) => setCurrentRank(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-base focus:border-red-500 focus:outline-none pr-8"
              >
                <option value="">Select your rank</option>
                <option value="Iron">Iron</option>
                <option value="Bronze">Bronze</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
                <option value="Diamond">Diamond</option>
                <option value="Ascendant">Ascendant</option>
                <option value="Immortal">Immortal</option>
                <option value="Radiant">Radiant</option>
              </select>
            </div>

            <div>
              <label className="block text-base mb-2 font-medium">Main Agent (Optional)</label>
              <input
                name="agent"
                placeholder="e.g., Jett, Sage, Sova"
                value={mainAgent}
                onChange={(e) => setMainAgent(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-base focus:border-red-500 focus:outline-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                name="consent"
                type="checkbox"
                value="yes"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-red-500 bg-gray-900 border-gray-700 rounded focus:ring-red-500"
              />
              <label htmlFor="consent" className="text-gray-400 text-base leading-relaxed">
                I agree to receive updates about RankUp and understand that my email will be used solely for waitlist communications.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-4 rounded-xl text-base font-medium hover:bg-red-600 transition-colors whitespace-nowrap cursor-pointer shadow-lg shadow-red-500/25"
            >
              Get Early Access
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How accurate is the AI analysis?",
                answer: "Our AI has been trained on millions of matches across all ranks, achieving a 95% accuracy rate in identifying key improvement areas. The analysis is continuously refined based on user feedback and results."
              },
              {
                question: "How often can I use RankUp?",
                answer: "You can analyze as many matches as you want. We recommend reviewing at least 2-3 matches per week to track your progress effectively and adjust your training focus."
              },
              {
                question: "What information do I need to provide?",
                answer: "Just upload a screenshot of your match scoreboard or Tracker.gg profile. The AI will analyze your performance metrics, playstyle patterns, and match context to provide personalized insights."
              },
              {
                question: "Can I use RankUp for any agent?",
                answer: "Yes! RankUp provides agent-specific advice for all VALORANT agents, helping you master their unique abilities and optimal playstyles."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <i className={`ri-arrow-${expandedFAQ === index ? 'up' : 'down'}-s-line text-red-500 text-lg`}></i>
                </button>
                {expandedFAQ === index && (
                  <p className="text-gray-400 mt-4 text-base leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-red-500/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">RankUp</div>
                <div className="flex items-center gap-3">
                  <a href="https://www.reddit.com/r/ValorantRankup/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-800 to-red-900/30 hover:from-red-600 hover:to-red-700 rounded-full transition-all cursor-pointer border border-red-500/30">
                    <i className="ri-reddit-line text-red-400 text-lg"></i>
                  </a>
                  <a href="https://discord.gg/jRTf8PdA" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-800 to-blue-900/30 hover:from-blue-600 hover:to-blue-700 rounded-full transition-all cursor-pointer border border-blue-500/30">
                    <i className="ri-discord-line text-blue-400 text-lg"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-400 max-w-md text-base leading-relaxed">Elite VALORANT training platform powered by AI. Transform your gameplay with professional-grade tactical analysis.</p>
            </div>

            <div className="flex justify-end">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-red-300">Legal</h3>
                <div className="flex flex-col space-y-2">
                  <a href="https://www.notion.so/Terms-of-Service-268e276b235a80f4a850e272dcce04be" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer text-sm">Terms of Use</a>
                  <a href="https://www.notion.so/Privacy-Policy-268e276b235a80fa92aaf163abd870ee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer text-sm">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-red-500/30">
            <p className="text-gray-500 text-sm">© 2025 RankUp. All rights reserved. Built for champions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
