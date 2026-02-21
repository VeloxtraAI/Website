import React from 'react';
import { Car, Wrench, Cog } from 'lucide-react';

const Departments: React.FC = () => {
  const departments = [
    {
      icon: <Car className="text-yellow-500" size={40} />,
      title: "Sales",
      description: "Convert more prospects into buyers",
      features: [
        "Qualify leads and budget",
        "Schedule test drives instantly",
        "Answer inventory questions",
        "Book showroom appointments",
        "Follow up on trade-in inquiries"
      ]
    },
    {
      icon: <Wrench className="text-yellow-500" size={40} />,
      title: "Service & Maintenance",
      description: "Keep your service bays full",
      features: [
        "Book service appointments 24/7",
        "Answer recall questions",
        "Provide wait time estimates",
        "Schedule routine maintenance",
        "Handle warranty inquiries"
      ]
    },
    {
      icon: <Cog className="text-yellow-500" size={40} />,
      title: "Parts",
      description: "Never miss a parts sale",
      features: [
        "Check parts availability instantly",
        "Provide accurate pricing",
        "Place parts orders",
        "Schedule parts pickup",
        "Answer compatibility questions"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#05070a] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            One AI Agent. <br />
            <span className="gold-gradient">Every Department.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alex seamlessly handles inquiries across your entire dealership, routing calls to the right team and capturing revenue opportunities that would otherwise be lost.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <div key={idx} className="navy-card p-8 rounded-2xl border border-white/5 hover:border-yellow-600/30 transition-all duration-500 group">
              <div className="mb-6 p-4 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">
                {dept.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{dept.title}</h3>
              <p className="text-yellow-500 text-sm mb-6 font-medium">{dept.description}</p>
              
              <ul className="space-y-3">
                {dept.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-400 text-sm">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block navy-card p-8 rounded-2xl border border-yellow-600/30">
            <p className="text-lg text-gray-300 mb-2">
              <span className="text-yellow-500 font-bold">Pro Tip:</span> Alex intelligently routes calls based on intent.
            </p>
            <p className="text-sm text-gray-500">
              A customer calling about an oil change never gets transferred to Sales. A buyer asking about inventory never gets sent to Parts. Perfect routing, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
