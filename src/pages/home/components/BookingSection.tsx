
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import Button from '../../../components/base/Button';

export default function BookingSection() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'paid'>('free');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentRank: '',
    targetRank: '',
    playStyle: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase table `booking_requests`
      // Insert into Supabase table according to your schema
      const { error } = await supabase
        .from('Landingpage v2')
        .insert([{
          full_name: formData.name,
          email: formData.email,
          current_rank: formData.currentRank,
          target_rank: formData.targetRank,
          role: formData.playStyle,
          feature_request: formData.experience,
          created_at: new Date().toISOString()
        }]);

      if (!error) {
        setSubmitStatus('success');
        setSubmitError('');
        setFormData({
          name: '',
          email: '',
          currentRank: '',
          targetRank: '',
          playStyle: '',
          experience: ''
        });
        
        // Redirect to Gumroad for paid plan
        if (selectedPlan === 'paid') {
          setTimeout(() => {
            window.location.href = 'https://howler21686.gumroad.com/l/xtzzu';
          }, 1500); // Give user a moment to see success message
        }
      } else {
        console.error('Supabase insert error:', error);
        setSubmitError(error.message || 'Unknown error');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError(error instanceof Error ? error.message : String(error));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience AI-Powered Improvement?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path to ranking up. Get early access to the future of Valorant improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Free Plan */}
          <div 
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
              selectedPlan === 'free' ? 'ring-2 ring-red-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
            }`}
            onClick={() => setSelectedPlan('free')}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Free Preview</h3>
              <div className={`w-6 h-6 rounded-full border-2 ${
                selectedPlan === 'free' ? 'bg-red-600 border-red-600' : 'border-gray-300'
              } flex items-center justify-center`}>
                {selectedPlan === 'free' && <i className="ri-check-line text-white text-sm"></i>}
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">Free</div>
            <p className="text-gray-600 mb-6">Get notified when we launch</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">One free practice session</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Sample AI analysis report (No recommendations)</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Community access</span>
              </li>
            </ul>
          </div>

          {/* Paid Plan */}
          <div 
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 relative ${
              selectedPlan === 'paid' ? 'ring-2 ring-red-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
            }`}
            onClick={() => setSelectedPlan('paid')}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Premium Early Access</h3>
              <div className={`w-6 h-6 rounded-full border-2 ${
                selectedPlan === 'paid' ? 'bg-red-600 border-red-600' : 'border-gray-300'
              } flex items-center justify-center`}>
                {selectedPlan === 'paid' && <i className="ri-check-line text-white text-sm"></i>}
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">$10</div>
            <p className="text-gray-600 mb-6">One-time early access fee</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Priority Platform Access</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Full AI analysis reports</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Unlimited practice questions</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Growth Tracking Center</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Priority support</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-red-600 mr-3"></i>
                <span className="text-gray-700">Exclusive beta tester badge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-red-600 rounded-lg p-2 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {selectedPlan === 'free' ? 'Reserve Your Free Spot' : 'Get Premium Early Access'}
            </h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-full mb-6">
                <div className="flex items-center">
                  <i className="ri-check-circle-line mr-2"></i>
                  <span>Successfully submitted! We'll contact you soon.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-full mb-6">
                <div className="flex items-center">
                  <i className="ri-error-warning-line mr-2"></i>
                  <span>Something went wrong. {submitError ? `Details: ${submitError}` : 'Please try again.'}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} data-readdy-form id={selectedPlan === 'free' ? 'free_booking' : 'paid_booking'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="currentRank" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Rank *
                  </label>
                  <select
                    id="currentRank"
                    name="currentRank"
                    value={formData.currentRank}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm pr-12"
                  >
                    <option value="">Select your current rank</option>
                    <option value="Iron">Iron</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Immortal">Immortal</option>
                    <option value="Radiant">Radiant</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="targetRank" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Rank *
                  </label>
                  <select
                    id="targetRank"
                    name="targetRank"
                    value={formData.targetRank}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm pr-12"
                  >
                    <option value="">Select your target rank</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Immortal">Immortal</option>
                    <option value="Radiant">Radiant</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="playStyle" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Role/Play Style
                </label>
                <select
                  id="playStyle"
                  name="playStyle"
                  value={formData.playStyle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm pr-12"
                >
                  <option value="">Select your main role</option>
                  <option value="Duelist">Duelist (Entry Fragger)</option>
                  <option value="Controller">Controller (Smoker)</option>
                  <option value="Initiator">Initiator (Support)</option>
                  <option value="Sentinel">Sentinel (Anchor)</option>
                  <option value="Flex">Flex (Multiple Roles)</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  What feature would you like to see added to Rank Up? (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm resize-none"
                  placeholder="e.g. Analysis of issues in each match, Chat with AI coach..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.experience.length}/500 characters
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="text-lg py-4 px-12"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="ri-rocket-line mr-2"></i>
                      {selectedPlan === 'free' ? 'Reserve Free Spot' : 'Submit & Proceed to Payment'}
                    </>
                  )}
                </Button>
                {selectedPlan === 'paid' && (
                  <p className="text-gray-500 text-sm mt-3">
                    Full refund available at any time.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
