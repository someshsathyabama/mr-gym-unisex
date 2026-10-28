import React from 'react';
import { Star, Quote, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#08080a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              Member Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight mb-3">
              Real Experiences From Real Members
            </h2>
            <p className="text-gray-300 text-base">
              Verifiable excerpts shared by gym members on our Google Maps business listing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <a
              href={GYM_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase border border-white/20 hover:border-white/40 transition-all shadow-lg"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
            </a>
          </div>
        </div>

        {/* 3 Genuine Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GYM_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121217] rounded-2xl p-7 border border-white/10 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-white/10 group-hover:text-red-500/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-100 text-base sm:text-lg font-medium italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bold text-white text-sm">
                    {rev.avatarInitial}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                    <p className="text-[11px] text-gray-400">{rev.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Source Notice as required by prompt */}
        <div className="p-4 rounded-xl bg-[#14141a] border border-white/5 text-gray-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-300 shrink-0" />
            <span>
              <strong>Transparency note:</strong> The 4.9/5 rating and 53 reviews represent information provided from the Google Maps listing at the time of documentation and do not reflect an automated live API feed.
            </span>
          </div>
          <span className="text-gray-300 whitespace-nowrap">Source: Google Maps Listing</span>
        </div>

      </div>
    </section>
  );
}
