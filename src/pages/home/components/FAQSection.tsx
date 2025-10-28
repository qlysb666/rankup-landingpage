
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can I upload screenshots in different formats?',
      answer: 'Yes! Our AI supports screenshots from all major tracker platforms including Tracker.gg, Blitz.gg, and in-game screenshots. The AI automatically recognizes and processes different formats and layouts.'
    },
    {
      question: 'How does the system analyze my stats?',
      answer: 'Our advanced AI uses computer vision to extract data from your screenshots, then applies machine learning algorithms trained on thousands of high-rank player patterns to identify weaknesses in aim, positioning, game sense, and decision-making.'
    },
    {
      question: 'Will the practice questions repeat?',
      answer: 'No! Our system generates fresh questions each time based on your specific weaknesses. With thousands of scenarios in our database, you\'ll always get relevant, non-repetitive practice that adapts to your improvement.'
    },
    {
      question: 'Is there a free version available?',
      answer: 'Yes! You can try our basic analysis for free to see how it works. The free version includes a sample report and 3 practice questions. Upgrade for full detailed analysis and unlimited practice sessions.'
    },
    {
      question: 'How accurate is the AI analysis?',
      answer: 'Our AI has been trained on data from over 100,000 players across all ranks. It maintains 98% accuracy in identifying key improvement areas and has helped 93% of users rank up within their first month.'
    },
    {
      question: 'What if I\'m already a high-rank player?',
      answer: 'RankUp works for all skill levels! Even Diamond and Immortal players discover subtle mistakes they never noticed. Our AI analyzes micro-decisions and positioning errors that become crucial at higher ranks.'
    },
    {
      question: 'How long does the analysis take?',
      answer: 'The AI analysis is instant! Upload your screenshot and get your personalized report within 30 seconds. Practice questions are generated immediately based on your identified weaknesses.'
    },
    {
      question: 'Can I track my improvement over time?',
      answer: 'Absolutely! Premium users get access to progress tracking, improvement graphs, and the ability to re-analyze stats to see how their weaknesses change as they improve.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about RankUp
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 px-4 rounded-lg transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-red-600 text-xl flex-shrink-0`}></i>
              </button>
              {openIndex === index && (
                <div className="pb-6 px-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of RankUp.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
                if (element) element.click();
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-customer-service-2-line mr-2"></i>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
