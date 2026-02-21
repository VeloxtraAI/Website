import React from 'react';
import { Clock, Users, BarChart3 } from 'lucide-react';

const Problem: React.FC = () => {
  const painPoints = [
    {
      icon: <Clock className="text-yellow-500" size={32} />,
      title: "After-Hours Silence",
      description: "Buyers research cars at all hours. If you don't answer, they call your competitor next—whether it's for Sales, Service, or Parts."
    },
    {
      icon: <Users className="text-yellow-500" size={32} />,
      title: "Overwhelmed Staff",
      description: "During peak hours, your best team members are answering basic routing calls instead of serving customers on the floor."
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={32} />,
      title: "Inconsistent Experience",
      description: "Manual call handling varies by staff member. Alex ensures every caller gets the same professional experience, every time."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-[#0a0e17] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-600/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every Missed Call is a <br />
            <span className="text-red-500/80 italic">Lost Opportunity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            In automotive sales, the first impression is everything. Yet, dealerships continue to lose revenue due to missed calls across Sales, Service, and Parts departments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div key={idx} className="navy-card p-10 rounded-2xl border border-white/5 hover:border-yellow-600/30 transition-all duration-500 group">
              <div className="mb-6 p-4 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
