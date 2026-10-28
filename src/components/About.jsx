import React from 'react';
import { Dumbbell, Users, HeartHandshake, Shield, Sparkles, MapPin, Check } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a0a0d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Card & Atmosphere Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="Gym equipment and training floor at MR GYM UNISEX"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121216]/90 border border-white/15 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
                      Avilali Fitness Center
                    </p>
                    <p className="text-white font-bold text-base">
                      MR GYM UNISEX
                    </p>
                    <p className="text-xs text-gray-400">
                      AAA Complex, Above Reliance Smart Point
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                    <Dumbbell className="w-6 h-6 text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Stat Chip */}
            <div className="absolute -top-4 -right-4 bg-[#181820] border border-red-500/30 text-white rounded-xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-black text-lg">
                4.9
              </div>
              <div>
                <p className="text-xs text-gray-300 font-semibold">Google Rating</p>
                <p className="text-[11px] text-gray-400">53 Local Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              About Our Fitness Center
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight mb-6">
              A Better Place to Build Your Strength
            </h2>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                <strong className="text-white font-semibold">MR GYM UNISEX</strong> welcomes individuals across Avilali and Tirupati who want to work toward their fitness goals in a supportive, motivating gym environment.
              </p>
              <p>
                Whether you are stepping into a gym for the first time or focusing on regular strength sessions, customer feedback consistently highlights our clean workout floor, modern equipment, friendly atmosphere, and supportive trainers who help you train with confidence.
              </p>
              <p className="text-sm text-gray-400 border-l-2 border-red-500/40 pl-4 py-1 italic">
                Note: We believe in honest, consistent training. We do not make unverified medical claims or promise overnight transformations — only a disciplined space equipped to support your genuine effort.
              </p>
            </div>

            {/* 3 Core Highlights Based On Authentic Feedback */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="bg-[#14141a] p-4 rounded-xl border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Unisex Environment</h4>
                <p className="text-xs text-gray-400 leading-snug">
                  Welcoming space where women and men train comfortably side by side.
                </p>
              </div>

              <div className="bg-[#14141a] p-4 rounded-xl border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Modern Equipment</h4>
                <p className="text-xs text-gray-400 leading-snug">
                  Quality weight stations and gear reviewed positively by local gym-goers.
                </p>
              </div>

              <div className="bg-[#14141a] p-4 rounded-xl border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Friendly Trainers</h4>
                <p className="text-xs text-gray-400 leading-snug">
                  Approachable coaching and guidance whenever you need assistance.
                </p>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={GYM_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all"
              >
                <span>Chat with MR GYM on WhatsApp</span>
              </a>
              <a
                href="#location"
                className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Visit 1st Floor, AAA Complex</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
