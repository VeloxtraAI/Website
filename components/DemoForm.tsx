
import React, { useState } from 'react';
import { Send, PhoneCall, CheckCircle2 } from 'lucide-react';

const DemoForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    email: '',
    revenue: '$100K-$500K',
    agreed: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call/Webhook
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form Submitted:", formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="demo-section" className="py-24 bg-[#05070a]">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="navy-card p-12 rounded-3xl border border-yellow-600/30 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Perfect!</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Keep your phone nearby. <span className="text-yellow-500 font-bold">Sofia will call you in the next 15 minutes</span> to demonstrate how she handles luxury car inquiries live.
            </p>
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-sm text-gray-500">
                While you wait, check your email for our Luxury Automotive AI Implementation Guide.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo-section" className="py-24 bg-[#05070a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Experience Sofia Live — <br />
              <span className="gold-gradient italic">In 15 Minutes</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Enter your details below. Our AI agent, Sofia, will initiate a live demonstration call to your number within 15 minutes.
            </p>
            
            <ul className="space-y-6">
              {[
                "Instant live voice demo",
                "Full CRM integration walkthrough",
                "Custom ROI report for your dealership",
                "Scalability roadmap"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-gray-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-yellow-500" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="navy-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 gold-gradient"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600/50 transition-colors"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600/50 transition-colors"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600/50 transition-colors"
                    placeholder="EuroLuxury Motors"
                    value={formData.companyName}
                    onChange={e => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600/50 transition-colors"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600/50 transition-colors"
                    placeholder="john@dealership.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Monthly Revenue</label>
                  <select 
                    className="w-full bg-[#0a0e17] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600/50 transition-colors appearance-none"
                    value={formData.revenue}
                    onChange={e => setFormData({...formData, revenue: e.target.value})}
                  >
                    <option value="$100K-$500K">$100K - $500K</option>
                    <option value="$500K-$1M">$500K - $1M</option>
                    <option value="$1M-$5M">$1M - $5M</option>
                    <option value="$5M+">$5M+</option>
                  </select>
                </div>

                <div className="flex items-start space-x-3 pt-4">
                  <input 
                    id="agreed"
                    required
                    type="checkbox" 
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                    checked={formData.agreed}
                    onChange={e => setFormData({...formData, agreed: e.target.checked})}
                  />
                  <label htmlFor="agreed" className="text-xs text-gray-400 leading-relaxed">
                    I agree to receive a demo call and marketing communications from Veloxtra. Standard call rates may apply.
                  </label>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full gold-button py-4 rounded-xl text-black font-bold text-lg flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Call Me Now
                      <PhoneCall className="ml-2 group-hover:shake transition-all" size={20} />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-500">
                  Sofia will call you shortly after submission.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
