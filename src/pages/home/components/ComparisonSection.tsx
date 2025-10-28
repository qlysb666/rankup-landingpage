
export default function ComparisonSection() {
  const comparisons = [
    {
      aspect: '💰 Cost of money',
      readdy: 'Low',
      traditional: 'High (¥200+ per session)',
      selfStudy: 'Free but inefficient'
    },
    {
      aspect: '⏱️ Time Cost',
      readdy: 'Instant generation',
      traditional: 'Need appointment & coaching time',
      selfStudy: 'Hours of video screening'
    },
    {
      aspect: '⚙️ Feasibility',
      readdy: 'Automatic analysis',
      traditional: 'Limited coach availability',
      selfStudy: 'Lack of feedback mechanism'
    },
    {
      aspect: '🎯 Effectiveness',
      readdy: 'Level up quickly with precise identification and targeted practice',
      traditional: 'Depends on personal comprehension',
      selfStudy: 'Slow improvement, easy to give up'
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            RankUp vs Traditional Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Say goodbye to expensive one-on-one coaching and inefficient video self-learning. RankUp uses AI analysis to make your improvement more precise and efficient.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-gray-200">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-lg font-semibold text-black">Comparison</h3>
            </div>
            <div className="bg-red-600 p-6 text-center">
              <div className="text-white">
                <h3 className="text-lg font-semibold">RankUp</h3>
              </div>
            </div>
            <div className="bg-black p-6 text-center">
              <h3 className="text-lg font-semibold text-white">1v1 Coaching</h3>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <h3 className="text-lg font-semibold text-white">Video Self-Learning</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid grid-cols-4 border-b border-gray-100 last:border-b-0">
              <div className="p-6 bg-gray-50 flex items-center justify-center">
                <h4 className="font-semibold text-black text-center">{comparison.aspect}</h4>
              </div>
              <div className="p-6 bg-red-50 flex items-center justify-center">
                <p className="text-red-800 font-medium text-center">{comparison.readdy}</p>
              </div>
              <div className="p-6 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-700 text-center">{comparison.traditional}</p>
              </div>
              <div className="p-6 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-700 text-center">{comparison.selfStudy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white border border-gray-200 rounded-lg p-2 max-w-4xl mx-auto shadow-lg">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-black">
                No More Waiting, No More Expensive, No More Trial and Error
              </h3>
              <p className="text-lg mb-6 text-gray-600">
                RankUp makes "professional game analysis" an instant tool that everyone can use.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Reserve Free Spot Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
