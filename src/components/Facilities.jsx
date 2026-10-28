import React from 'react';
import { Dumbbell, Zap, Cpu, Target, Flame, AlertCircle } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function Facilities() {
  const iconMap = {
    Dumbbell: Dumbbell,
    Zap: Zap,
    Cpu: Cpu,
    Target: Target,
    Flame: Flame
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#08080a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            Training Focus & Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight mb-4">
            Facilities & Training Categories
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Explore the key visual fitness disciplines and workout styles catered for at MR GYM UNISEX in Avilali, Tirupati.
          </p>
        </div>

        {/* Mandatory Transparency Notice */}
        <div className="mb-10 p-4 rounded-xl bg-[#14141a] border border-amber-500/20 text-gray-300 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Note on facilities:</strong> The categories below illustrate general fitness and training focus areas. In keeping with our verified business policy, they are presented as visual fitness categories rather than a specific itemized inventory. Feel free to visit the gym to inspect our exact equipment setups.
          </p>
        </div>

        {/* 5 Visual Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GYM_DATA.categories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Dumbbell;
            return (
              <div
                key={category.title}
                className={`group relative rounded-2xl overflow-hidden bg-[#111116] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Background Image Container */}
                <div className={`relative overflow-hidden ${idx === 0 ? 'h-64 sm:h-72' : 'h-52'}`}>
                  <img
                    src={category.image}
                    alt={`${category.title} at MR GYM UNISEX`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-75"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                    <Icon className="w-3.5 h-3.5 text-red-500" />
                    <span>Focus Area 0{idx + 1}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-display uppercase tracking-tight flex items-center justify-between">
                    <span>{category.title}</span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span>Unisex Gym Category</span>
                    <span className="text-red-400 font-medium group-hover:translate-x-1 transition-transform">
                      Avilali, Tirupati &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-[#14141c] to-[#14141c] border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-bold text-lg mb-1 font-display">
              Want to see the gym in person?
            </h4>
            <p className="text-gray-400 text-sm">
              Visit 1st Floor, AAA Complex above Reliance Smart Point, VK Puram, Tirupati.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={GYM_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-red-950"
            >
              Get Directions
            </a>
            <a
              href={GYM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
