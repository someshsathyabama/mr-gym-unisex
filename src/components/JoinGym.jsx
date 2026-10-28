import React, { useState } from 'react';
import { Phone, MessageSquare, Navigation, CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function JoinGym() {
  const [selectedGoal, setSelectedGoal] = useState('General Fitness & Membership');
  const [preferredTime, setPreferredTime] = useState('Flexible / Either');
  const [visitorName, setVisitorName] = useState('');

  const goals = [
    'General Fitness & Membership',
    'Strength & Muscle Training',
    'Weight Management',
    'Free Weights & Workout Guidance'
  ];

  const times = ['Morning Batch', 'Evening Batch', 'Flexible / Either'];

  const handleCustomWhatsApp = (e) => {
    e.preventDefault();
    const namePart = visitorName.trim() ? ` My name is ${encodeURIComponent(visitorName.trim())}.` : '';
    const message = `Hi MR GYM UNISEX,${namePart} I would like to know about gym membership options for ${encodeURIComponent(selectedGoal)} (Preferred timing: ${encodeURIComponent(preferredTime)}).`;
    const url = `https://wa.me/${GYM_DATA.rawPhone}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0b0b0f] relative border-t border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Hero Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#15151c] via-[#101015] to-[#15151c] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Membership & Enquiry
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-display tracking-tight leading-tight mb-6">
              READY TO START YOUR FITNESS JOURNEY?
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed">
              Take the first step. Contact <strong className="text-white">MR GYM UNISEX</strong> to learn about membership options and visit the gym.
            </p>
          </div>

          {/* Core Action Buttons Trio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {/* 1. Call Now */}
            <a
              href={GYM_DATA.phoneUrl}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-sm tracking-wide transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Direct Line</p>
                <p className="text-sm font-bold text-white">Call Now</p>
              </div>
            </a>

            {/* 2. WhatsApp Enquiry */}
            <a
              href={GYM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-950/60 hover:shadow-red-900/60 transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-red-200 uppercase tracking-wider font-medium">Instant Response</p>
                <p className="text-sm font-bold text-white">WhatsApp Enquiry</p>
              </div>
            </a>

            {/* 3. Get Directions */}
            <a
              href={GYM_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-sm tracking-wide transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Navigation className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Google Maps</p>
                <p className="text-sm font-bold text-white">Get Directions</p>
              </div>
            </a>
          </div>

          {/* Interactive Quick WhatsApp Enquiry Form */}
          <div className="bg-[#0e0e13] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight flex items-center gap-2">
                <span>Personalize Your Membership Enquiry</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Select your fitness interest below to auto-format your enquiry directly to the gym's official WhatsApp.
              </p>
            </div>

            <form onSubmit={handleCustomWhatsApp} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#16161d] border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Timing Preference */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Preferred Workout Timing
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#16161d] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                  >
                    {times.map((t) => (
                      <option key={t} value={t} className="bg-[#16161d] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Goal Selection Pills */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2.5">
                  Select Primary Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {goals.map((goal) => {
                    const isSelected = selectedGoal === goal;
                    return (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => setSelectedGoal(goal)}
                        className={`text-left px-3.5 py-3 rounded-xl text-xs font-semibold transition-all border ${
                          isSelected
                            ? 'bg-red-600/20 border-red-500 text-white'
                            : 'bg-[#14141a] border-white/10 text-gray-300 hover:border-white/25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{goal}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 ml-1.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit to WhatsApp */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <AlertCircle className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>No fabricated prices or hidden fees. Real details sent directly by the gym.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Customized WhatsApp Enquiry</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
