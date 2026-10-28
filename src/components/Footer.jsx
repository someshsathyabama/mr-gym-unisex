import React, { useState } from 'react';
import { Dumbbell, Phone, MapPin, MessageSquare, Navigation, Shield, Heart, ArrowUp } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-950">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  MR GYM
                </span>
                <span className="bg-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-red-500/30">
                  UNISEX
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              MR GYM UNISEX is a dedicated fitness center in Avilali, Tirupati, offering a motivating training environment, modern equipment, and friendly trainers for all fitness levels.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-amber-400 font-semibold">
                ★ 4.9/5 Rating (53 Google Reviews)
              </span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Gym</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Member Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Find Location</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Contact & Timings</p>
            <div className="space-y-2.5 text-xs text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={GYM_DATA.phoneUrl} className="text-white hover:text-red-400 font-medium">
                  {GYM_DATA.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={GYM_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400"
                >
                  WhatsApp Official Chat
                </a>
              </p>
              <div className="pt-2 border-t border-white/5">
                <p className="text-white font-semibold">Reported Closing: 9:00 PM</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Please confirm current hours before visiting.</p>
              </div>
            </div>
          </div>

          {/* Address & Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Location</p>
            <div className="text-xs text-gray-400 space-y-1">
              <p className="font-semibold text-gray-200">1st Floor, AAA Complex</p>
              <p className="text-red-400 font-medium">Above Reliance Smart Point</p>
              <p>VK Puram, Tirupati, Avilali</p>
              <p>Andhra Pradesh 517502, India</p>
              <p className="pt-1 text-[11px] text-gray-500 font-mono">Plus Code: {GYM_DATA.locationRef}</p>
            </div>
            <div className="pt-2">
              <a
                href={GYM_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps &rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} <span className="text-white font-semibold">MR GYM UNISEX</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              Privacy & Transparency Policy
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Back to top</span>
            </button>
          </div>
        </div>

      </div>

      {/* Real Privacy & Transparency Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121218] border border-white/15 rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-white font-display">
                Privacy & Business Transparency Policy
              </h3>
              <button
                onClick={() => setShowPrivacy(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
              <p>
                <strong>1. Business Accuracy Commitment:</strong> MR GYM UNISEX is committed to accurate and transparent representation. All review excerpts, ratings (4.9/5 from 53 reviews), address details, and contact numbers displayed on this website are derived directly from the business brief and verified Google Maps profile.
              </p>
              <p>
                <strong>2. No Fabricated Pricing or Medical Claims:</strong> We do not publish artificial discounts, unverified trainer credentials, or medical wellness guarantees. For exact membership plans, visitors are encouraged to contact us directly or visit our Avilali premises.
              </p>
              <p>
                <strong>3. Contact Inquiries & WhatsApp:</strong> When you use our click-to-call or WhatsApp enquiry links, no user data is stored on external web servers. Your inquiry directly opens your device's native WhatsApp or phone dialer.
              </p>
              <p>
                <strong>4. Location & Timings:</strong> Our reported closing time is 9:00 PM. Visitors are advised to confirm ongoing holiday or seasonal schedules directly at +91 76609 99890 before traveling.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
