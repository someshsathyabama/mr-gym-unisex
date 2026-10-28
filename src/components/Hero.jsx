import React from 'react';
import { Star, MessageSquare, Navigation, Phone, MapPin, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-[#08080a]"
    >
      {/* Background Hero Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85"
          alt="MR GYM UNISEX Fitness Center Interior in Avilali Tirupati"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
        />
        {/* Dark radial and linear gradients for luxury aesthetic and maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-[#08080a]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/75 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badges Bar: Unisex Fitness Center & Avilali, Tirupati */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Unisex Fitness Center
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Avilali, Tirupati</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
              <span>Above Reliance Smart Point</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] mb-6">
            YOUR FITNESS.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
              YOUR STRENGTH.
            </span>{' '}
            YOUR JOURNEY.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Train with purpose at <span className="font-semibold text-white">MR GYM UNISEX</span>, your local fitness destination in Avilali, Tirupati.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            {/* Primary CTA: WhatsApp */}
            <a
              href={GYM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-xl shadow-red-900/40 hover:shadow-red-800/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Enquire on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* Secondary CTA: Get Directions */}
            <a
              href={GYM_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#18181f] hover:bg-[#22222b] text-white font-semibold text-base border border-white/15 hover:border-white/30 transition-all duration-200"
            >
              <Navigation className="w-5 h-5 text-red-500" />
              <span>Get Directions</span>
            </a>

            {/* Quick Call Button */}
            <a
              href={GYM_DATA.phoneUrl}
              className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200"
              title="Call gym directly"
            >
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="sm:hidden">Call: {GYM_DATA.phone}</span>
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>

          {/* Social Proof & Trust Badges Card */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Google Rating */}
            <div className="bg-[#121216]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xl sm:text-2xl font-black text-white font-display">
                  {GYM_DATA.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium">Google Rating</p>
            </div>

            {/* Reviews Count */}
            <div className="bg-[#121216]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-white font-display mb-1">
                {GYM_DATA.reviewsCount}+
              </div>
              <p className="text-xs text-gray-400 font-medium">Google Reviews</p>
            </div>

            {/* Fitness Center Type */}
            <div className="bg-[#121216]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-1.5 pt-1">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Unisex Gym</span>
              </div>
              <p className="text-xs text-gray-400 font-medium">Inclusive Training</p>
            </div>

            {/* Timing / Location Note */}
            <div className="bg-[#121216]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                <span>Closes 9:00 PM</span>
              </div>
              <p className="text-xs text-gray-400 font-medium">Reported Closing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
