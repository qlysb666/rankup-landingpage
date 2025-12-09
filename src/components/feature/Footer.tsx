
export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block mb-4">
              <img 
                src="https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/edd92e43bd038563d085dcdc98b1d041.png"
                alt="RankUp Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              RankUp – Let AI become your personal rank-up coach. Upload your Valorant stats and get instant AI analysis to improve your gameplay.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@rankup_offical" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-tiktok-fill"></i>
              </a>
              <a href="https://discord.com/invite/BdnrDQZJ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-discord-fill"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('comparison')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Why RankUp
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              
              <li>
                <a href="https://www.notion.so/Privacy-Policy-268e276b235a80fa92aaf163abd870ee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.notion.so/Terms-of-Service-268e276b235a80f4a850e272dcce04be" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RankUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
