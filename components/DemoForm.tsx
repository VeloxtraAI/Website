import React, { useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
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
  
  try {
    console.log('Step 1: Requesting web call from n8n...');
    
    // 1. Send data to n8n and GET the access token back
    const response = await fetch('https://n8n.veloxtra-ai.com/webhook/veloxtra-demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        phone_number: formData.phone,
        email: formData.email,
        monthly_revenue: formData.revenue
      })
    });

    const data = await response.json();
    console.log('Received access token from n8n:', data);

    if (!data.access_token) {
      throw new Error('No access token received from server');
    }

    console.log('Step 2: Starting web call with access token...');
    
    // 2. Initialize Retell Web Call
    const retellWeb = new RetellWebClient();

    // 3. Start call with the access token
    await retellWeb.startCall({
      accessToken: data.access_token,
      sampleRate: 24000,
      enableUpdate: true,
      // Pass dynamic variables here
      metadata: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        monthly_revenue: formData.revenue
      }
    });

    console.log('Step 3: Call started successfully!');
    setSubmitted(true);

  } catch (error) {
    console.error('Error:', error);
    alert(`Error: ${error instanceof Error ? error.message : 'Could not start call'}`);
  } finally {
    setLoading(false);
  }
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
              <span className="text-yellow-500 font-bold">Alex is now talking to you!</span> You should hear him through your browser. Experience how he handles luxury car inquiries live.
            </p>
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-sm text-gray-500">
                If you don't hear anything, check your browser's audio permissions and make sure your volume is up.
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
              Experience Alex Live — <br />
              <span className="gold-gradient italic">Right Now</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Enter your details below. Our AI agent, Alex, will start talking to you immediately through your browser.
            </p>
            
            <ul className="space-y-6">
              {[
                "Instant live voice demo in browser",
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
                      Start Demo Now
                      <PhoneCall className="ml-2 group-hover:shake transition-all" size={20} />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-500">
                  Alex will start talking immediately in your browser.
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
