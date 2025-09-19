
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
    
    // 自定义验证
    const emailValue = formData.get('email') as string;
    if (!emailValue || !emailValue.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (!consent) {
      alert('Please agree to the terms to continue.');
      return;
    }
    
    const payload = {
      email: emailValue,
      rank: formData.get('rank'),
      agent: formData.get('agent'),
      consent: !!formData.get('consent'),
      source: 'hero_form'
    };

    console.log('Submitting payload:', payload); // 调试日志

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      console.log('Response status:', response.status); // 调试日志
      const data = await response.json();
      console.log('Response data:', data); // 调试日志
      
      if (data.ok) {
        alert('Successfully joined the waitlist! 🎉 We\'ll be in touch soon.');
        // 重置表单
        setEmail('');
        setCurrentRank('Gold');
        setMainAgent('');
        setConsent(false);
      } else {
        alert(`Failed to join: ${data.error || 'Please try again'}`);
        console.error('API Error:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
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
              Professional esports coaching powered by AI. Upload your match data and receive tactical insights that pro players use to climb the ranks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="#join-waitlist" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-base font-medium hover:from-red-600 hover:to-red-700 transition-all text-center whitespace-nowrap inline-flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-red-500/50 border border-red-400/50">
                <i className="ri-sword-line text-base"></i>
                Enter the Arena
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

          <div className="mt-12">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-red-500/30 p-6 rounded-2xl shadow-2xl shadow-red-500/20">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20VALORANT%20coaching%20dashboard%20interface%20with%20esports%20styling%2C%20performance%20analytics%20with%20neon%20accent%20colors%2C%20tactical%20gaming%20statistics%2C%20dark%20futuristic%20UI%20design%20with%20red%20and%20blue%20highlights%2C%20competitive%20gaming%20analysis%20tools&width=1200&height=800&seq=dashboardesports001&orientation=landscape"
                alt="Elite Gaming Dashboard"
                className="rounded-xl w-full object-cover"
              />
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
              <h3 className="text-lg font-semibold mb-3 text-red-300">Pro-Level Diagnosis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Advanced tactical analysis using the same methods professional esports teams employ for match preparation.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl mb-4 border border-blue-500/40">
                <i className="ri-lightbulb-line text-blue-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-300">Tactical Mastery</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Strategic insights and positioning improvements that separate amateur players from professionals.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 p-6 rounded-2xl hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl mb-4 border border-purple-500/40">
                <i className="ri-timer-flash-line text-purple-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Lightning Speed</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Get comprehensive match analysis faster than a Jett dash - perfect for competitive players.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-xl mb-4 border border-cyan-500/40">
                <i className="ri-money-dollar-circle-line text-cyan-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-cyan-300">Tournament Ready</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Professional coaching at a fraction of the cost of hiring a dedicated esports coach.</p>
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
                src="https://readdy.ai/api/search-image?query=detailed%20VALORANT%20esports%20performance%20analysis%20interface%20showing%20comprehensive%20statistics%20with%20gaming%20aesthetics%2C%20tactical%20breakdown%20with%20neon%20highlights%2C%20professional%20gaming%20analytics%20dashboard%20with%20red%20and%20blue%20accent%20colors%2C%20competitive%20gaming%20metrics%20display&width=1200&height=500&seq=featuresgaming001&orientation=landscape"
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
              <h3 className="text-lg font-semibold mb-3 text-red-300">Combat Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Deep dive into your fragging performance with professional-grade statistical breakdown.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl mb-4 border border-blue-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-star-line text-blue-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-blue-300">MVP Moments</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Highlight your clutch plays and game-changing moments that define elite gameplay.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 p-6 rounded-2xl hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl mb-4 border border-purple-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-search-line text-purple-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Weakness Exposure</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Identify critical gameplay flaws that prevent you from reaching the next competitive tier.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-xl mb-4 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                <i className="ri-target-line text-cyan-400 text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-cyan-300">Training Protocol</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Structured improvement plan designed like professional esports training regimens.</p>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-br from-gray-900/60 to-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Championship</span> Mindset
                </h3>
                <p className="text-gray-400 mb-6 text-base leading-relaxed">Transform from casual player to competitive warrior. Our analysis reveals the mental game and tactical decision-making that separates champions from the crowd.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <i className="ri-trophy-line text-red-500 text-lg"></i>
                    <span className="text-gray-300 text-base">Tournament-level strategic thinking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-crosshair-line text-blue-500 text-lg"></i>
                    <span className="text-gray-300 text-base">Precision aim training protocols</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-team-line text-purple-500 text-lg"></i>
                    <span className="text-gray-300 text-base">Team coordination mastery</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=VALORANT%20championship%20trophy%20and%20rank%20progression%20visualization%20with%20esports%20tournament%20atmosphere%2C%20professional%20gaming%20achievement%20display%20with%20neon%20lighting%20effects%2C%20competitive%20gaming%20success%20metrics%20with%20red%20and%20gold%20accents&width=600&height=400&seq=championshiprank001&orientation=landscape"
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
                src="https://readdy.ai/api/search-image?query=step-by-step%20esports%20training%20process%20with%20gaming%20aesthetics%2C%20VALORANT%20improvement%20workflow%20with%20neon%20highlights%2C%20professional%20gaming%20development%20journey%20with%20tactical%20elements%2C%20dark%20futuristic%20interface%20with%20red%20and%20blue%20accent%20colors&width=1200&height=400&seq=howitworksesports001&orientation=landscape"
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
              <h3 className="text-xl font-bold mb-4 text-red-300">1. Deploy Intel</h3>
              <p className="text-gray-400 text-base leading-relaxed">Upload your match screenshots to our secure tactical analysis system for professional review.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 border-2 border-blue-400/50 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                <i className="ri-cpu-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">2. AI Processing</h3>
              <p className="text-gray-400 text-base leading-relaxed">Advanced algorithms analyze your gameplay patterns, tactical decisions, and competitive positioning.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 border-2 border-purple-400/50 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                <i className="ri-medal-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">3. Dominate</h3>
              <p className="text-gray-400 text-base leading-relaxed">Execute your personalized training protocol and watch your rank climb with precision improvements.</p>
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
                placeholder="Email Address *"
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
                id="consent"
                value="yes"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-red-500 bg-gray-900 border border-gray-700 rounded focus:ring-red-500"
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
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer text-sm">Terms of Use</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer text-sm">Privacy Policy</a>
                  <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer text-sm">Made with Readdy</a>
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
