import React, { useEffect } from 'react';
import { X, MessageSquare, Phone, MapPin, Navigation, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function QuickEnquiryModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#121217] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-black overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-950">
            <Dumbbell className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-white font-display">
                MR GYM UNISEX
              </h3>
              <span className="bg-red-500/20 text-red-400 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border border-red-500/30">
                Avilali
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Unisex Fitness Center • Tirupati
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Ready to begin? Connect with MR GYM UNISEX directly via WhatsApp, phone call, or visit us in Avilali to explore the gym and membership options.
        </p>

        {/* Action Options */}
        <div className="space-y-3 mb-6">
          {/* WhatsApp Direct Option */}
          <a
            href={GYM_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-white transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <MessageSquare className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  WhatsApp Enquiry
                </p>
                <p className="text-xs text-gray-400">
                  Instant response about membership & timings
                </p>
              </div>
            </div>
            <span className="text-emerald-400 font-bold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              Send &rarr;
            </span>
          </a>

          {/* Phone Call Option */}
          <a
            href={GYM_DATA.phoneUrl}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  Call {GYM_DATA.phone}
                </p>
                <p className="text-xs text-gray-400">
                  Speak directly with the gym team
                </p>
              </div>
            </div>
            <span className="text-red-400 font-bold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              Call &rarr;
            </span>
          </a>

          {/* Location & Directions Option */}
          <a
            href={GYM_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  Visit Gym & Get Directions
                </p>
                <p className="text-xs text-gray-400">
                  1st Floor, AAA Complex, Above Reliance Smart Point
                </p>
              </div>
            </div>
            <span className="text-blue-400 font-bold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              Maps &rarr;
            </span>
          </a>
        </div>

        {/* Timings Reminder */}
        <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 text-xs text-gray-400">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Reported closing: 9:00 PM. Please confirm before travelling.</span>
        </div>
      </div>
    </div>
  );
}
