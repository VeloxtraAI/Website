import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Customer Calls",
      description: "A customer calls your dealership for Sales, Service, or Parts—after hours or when your team is busy."
    },
    {
      number: "02",
      title: "Alex Engages",
      description: "Alex answers instantly, qualifies their needs (whether Sales, Service, or Parts), and books the appropriate appointment."
    },
    {
      number: "03",
      title: "You Close",
      description: "Your team receives a qualified appointment notification and focuses on delivering exceptional service."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0e17] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Seamless Execution</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Integrating Veloxtra into your dealership takes less than 72 hours. Our white-glove setup ensures zero downtime for your existing lines.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-[#05070a] border border-yellow-600/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-yellow-600/10 transition-all duration-500">
                  <span className="text-2xl font-bold gold-gradient">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
