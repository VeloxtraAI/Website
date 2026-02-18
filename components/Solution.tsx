
import React from 'react';
import { ShieldCheck, Zap, Calendar, Database } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-yellow-500" />,
      title: "24/7 Availability",
      text: "Alex never sleeps. He handles holiday inquiries, late-night browsing calls, and early morning follow-ups."
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Instant Response",
      text: "Zero hold times. Alex answers on the first ring with the tone and sophistication your brand demands."
    },
    {
      icon: <Calendar className="text-yellow-500" />,
      title: "Smart Booking",
      text: "Directly integrated with your sales team's calendars to book test drives and showroom visits automatically."
    },
    {
      icon: <Database className="text-yellow-500" />,
      title: "CRM Integration",
      text: "Syncs instantly with VinSolutions, DealerSocket, or Salesforce. No manual data entry required."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-[#05070a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-yellow-600/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Interface" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 navy-card rounded-2xl border border-yellow-600/20">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold tracking-widest text-gray-300">ALEX AI: ACTIVE</span>
                </div>
                <p className="text-sm text-gray-400 italic">"Certainly, Mr. Sterling. I see the 2026 911 Turbo S is available for a viewing this Saturday at 11 AM. Shall I reserve that for you?"</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet Alex — <br />
              <span className="gold-gradient">Your AI Receptionist</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Alex isn't just a chatbot on a phone line. He is a highly-trained, voice-optimized AI agent designed specifically for the nuance and luxury of high-end automotive sales.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-lg">{f.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
