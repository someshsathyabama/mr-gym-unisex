import React from 'react';
import { Users, Sparkles, Activity, Award, CheckCircle2, Star } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function WhyChooseUs() {
  const icons = [Users, Sparkles, Activity, Award];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0a0a0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            Verified Feedback Summary
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight mb-4">
            Why Members Recommend Us
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Based on the authentic Google review summary from members training at MR GYM UNISEX.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GYM_DATA.whyRecommend.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.title}
                className="bg-[#121217] rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/25 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-red-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Google Feedback Theme</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rating Trust Bar */}
        <div className="rounded-2xl bg-[#14141c] border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex flex-col items-center justify-center text-black font-black shadow-lg shadow-amber-500/20 shrink-0">
              <span className="text-2xl leading-none font-display">4.9</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">out of 5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-white text-xs font-bold ml-1.5">5.0 Star Feedback</span>
              </div>
              <h4 className="text-white font-bold text-base font-display">
                53 Genuine Google Reviews on Record
              </h4>
              <p className="text-gray-400 text-xs">
                As reported on the official Google Maps business profile in Avilali, Tirupati.
              </p>
            </div>
          </div>

          <a
            href={GYM_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase border border-white/15 transition-all text-center"
          >
            Verify on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
