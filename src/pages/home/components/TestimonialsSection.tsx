
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Reyansh',
      rank: 'Gold → Platinum',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20young%20male%20gamer%20headshot%2C%20confident%20expression%2C%20gaming%20headset%20around%20neck%2C%20modern%20esports%20player%20portrait%2C%20clean%20background%2C%20realistic%20photo%20style&width=100&height=100&seq=avatar1&orientation=squarish',
      content: 'After using RankUp, I went straight from Gold to Plat! The AI found issues I never noticed in my positioning.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      rank: 'Silver → Gold',
      avatar: 'https://readdy.ai/api/search-image?query=beautiful%20anime%20girl%20character%20portrait%2C%20colorful%20hair%2C%20bright%20eyes%2C%20digital%20art%20style%2C%20vibrant%20colors%2C%20clean%20background&width=100&height=100&seq=avatar2&orientation=squarish',
      content: 'The practice questions were spot-on for my weaknesses. Finally understand why I was stuck in Silver for months.',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      rank: 'Plat → Diamond',
      avatar: 'https://readdy.ai/api/search-image?query=stunning%20mountain%20landscape%20sunset%2C%20golden%20hour%20lighting%2C%20peaceful%20nature%20scenery%2C%20beautiful%20vista%2C%20serene%20atmosphere&width=100&height=100&seq=avatar3&orientation=squarish',
      content: 'Best investment for my Valorant improvement. The AI analysis is incredibly detailed and actionable.',
      rating: 5
    },
    {
      name: '박지영',
      rank: 'Bronze → Gold',
      avatar: 'https://readdy.ai/api/search-image?query=cute%20anime%20character%20portrait%2C%20kawaii%20style%2C%20pastel%20colors%2C%20cheerful%20expression%2C%20digital%20illustration%20art&width=100&height=100&seq=avatar5&orientation=squarish',
      content: '다이아몬드에서 임모탈까지 올라갈 수 있었던 건 RankUp 덕분이에요. 정말 추천합니다!',
      rating: 4.5
    },
    {
      name: '김민수',
      rank: 'Diamond→Immortal',
      avatar: 'https://static.readdy.ai/image/8adaa65a86ae7a03e22c824bd9473770/8a05b8fa4857224d03d39a73c011876e.jpeg',
      content: 'RankUp을 사용한 후 실력이 정말 많이 늘었어요. AI 분석이 정확하고 도움이 됩니다.',
      rating: 4.5
    },
    {
      name: '田中太郎',
      rank: 'Gold → Diamond',
      avatar: 'https://readdy.ai/api/search-image?query=traditional%20japanese%20garden%20with%20cherry%20blossoms%2C%20peaceful%20zen%20atmosphere%2C%20beautiful%20nature%20scene%2C%20spring%20season&width=100&height=100&seq=avatar6&orientation=squarish',
      content: 'AIの分析は本当に素晴らしいです。自分では気づかなかった弱点を見つけてくれました。',
      rating: 4
    }
  ];

  const stats = [
    { number: '2,000+', label: 'Players Improved' },
    { number: '93%', label: 'Rank Up Rate' },
    { number: '4.9/5', label: 'User Rating' },
    { number: '24/7', label: 'AI Availability' }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="ri-star-fill text-yellow-400"></i>
        ))}
        {hasHalfStar && <i className="ri-star-half-fill text-yellow-400"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="ri-star-line text-yellow-400"></i>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their online presence
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="text-sm text-black font-medium">{testimonial.rank}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
