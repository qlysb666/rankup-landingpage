
import { useState } from 'react';

export default function FeaturesSection() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Feature 1: Smart Diagnosis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-[3.5]">
              Your True Rank, 
              <span className="block text-black">
                AI Knows Better
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Through deep recognition of your match data, AI identifies your critical weaknesses in aim, positioning, and decision-making, then generates a visual analysis report that reveals exactly what's holding you back.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">Instant weakness identification across all game aspects</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">Visual radar charts and detailed performance breakdowns</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">Personalized improvement roadmap based on your playstyle</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <img
                src="https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/98d564e5e5adc89ce4974fcdf4e8e6fb.png"
                alt="AI Analysis Dashboard"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Targeted Practice */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              {/* Interactive Quiz Component */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">Question 1/8</span>
                    <span className="text-sm font-medium text-red-600">Game Sense</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    You're Fade, attacking Pearl's B Long against an enemy Eco Round. You suspect shotguns or a site stack. With a Prowler available, what's your best move?
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'A', text: 'Save Prowler until an enemy is visible.', correct: false },
                    { id: 'B', text: 'Deploy Prowler to clear B Long\'s close corners for info before entering.', correct: true },
                    { id: 'C', text: 'Group up with teammates and rush B Long, relying on numbers.', correct: false },
                    { id: 'D', text: 'Push B Long alone, attempting to ambush.', correct: false }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(option.id)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedAnswer === option.id
                          ? option.correct
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : showFeedback && option.correct
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      } ${showFeedback ? 'cursor-default' : 'hover:bg-gray-50'}`}
                    >
                      <div className="flex items-start">
                        <span className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium flex-shrink-0">
                          {option.id}
                        </span>
                        <span className="text-gray-900 leading-relaxed">{option.text}</span>
                        {showFeedback && selectedAnswer === option.id && (
                          <span className="ml-auto flex-shrink-0">
                            {option.correct ? (
                              <i className="ri-check-line text-green-600"></i>
                            ) : (
                              <i className="ri-close-line text-red-600"></i>
                            )}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {showFeedback && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <i className="ri-lightbulb-line text-blue-600 mr-2 mt-1"></i>
                      <div>
                        <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Against Eco rounds, use Initiator utility (like Prowler, Owl Drone) to clear entry points before dry peeking. Because 1. Eco teams often use shotguns in close corners 2. Eco teams frequently stack sites.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={resetQuiz}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Got It
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-[3.5]">
              Targeted Practice,
              <span className="block text-black">
                Not Blind Grinding
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Based on your identified weaknesses, our system generates targeted practice questions. Get instant feedback after each answer and review detailed explanations for wrong answers to steadily improve your game understanding.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-question-mark text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">8 questions per session, refreshable for continuous learning</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-lightbulb-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">Covers Aiming skill , Movement, Game Sense, Map Awareness, Positioning, Utility Usage, Economy Management</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-feedback-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">Instant feedback with detailed explanations for improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
