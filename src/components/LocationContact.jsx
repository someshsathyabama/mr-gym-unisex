import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Copy, Check, MessageSquare, AlertTriangle, Building2 } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function LocationContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DATA.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Maps iframe embed query for AAA Complex / Avilali Tirupati
  const mapEmbedUrl = `https://maps.google.com/maps?q=MR%20GYM%20UNISEX%20AAA%20Complex%20Avilali%20Tirupati&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#09090c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Location & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight mb-4">
            Visit MR GYM UNISEX in Avilali
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Located conveniently on the 1st Floor of AAA Complex, directly above Reliance Smart Point in VK Puram.
          </p>
        </div>

        {/* Closing Hours Advisory Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 sm:mt-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-amber-300 font-bold text-sm">
                Reported Closing Time: 9:00 PM
              </p>
              <p className="text-gray-300 text-xs sm:text-sm mt-0.5">
                {GYM_DATA.closingNote}
              </p>
            </div>
          </div>
          <a
            href={GYM_DATA.phoneUrl}
            className="shrink-0 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-bold border border-amber-500/30 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Confirm Hours (+91 76609 99890)</span>
          </a>
        </div>

        {/* Location Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#121217] rounded-2xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-black text-white font-display">
                  {GYM_DATA.name}
                </h3>
                <p className="text-sm text-gray-200 font-semibold">
                  {GYM_DATA.address.floor}
                </p>
                <p className="text-sm text-red-400 font-medium">
                  {GYM_DATA.address.landmark}
                </p>
                <p className="text-sm text-gray-300">
                  {GYM_DATA.address.area}
                </p>
                <p className="text-sm text-gray-300">
                  {GYM_DATA.address.stateAndPin}
                </p>
              </div>

              {/* Location Reference / Plus Code */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400">Google Plus Code:</span>
                <span className="font-mono font-semibold text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {GYM_DATA.locationRef}
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <a
                href={GYM_DATA.phoneUrl}
                className="bg-[#121217] rounded-xl p-5 border border-white/10 hover:border-red-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone Support</p>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-red-400 transition-colors">
                    {GYM_DATA.phone}
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-red-400 flex items-center gap-1">
                  Click to Call &rarr;
                </span>
              </a>

              {/* WhatsApp Card */}
              <a
                href={GYM_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121217] rounded-xl p-5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Chat</p>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                    Instant Inquiry
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  Open Chat &rarr;
                </span>
              </a>
            </div>

            {/* Google Maps External Button */}
            <a
              href={GYM_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-950 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Exact Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>

          </div>

          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-[#121217] rounded-2xl border border-white/10 p-2 sm:p-3 overflow-hidden shadow-2xl">
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden bg-[#181820]">
                <iframe
                  title="MR GYM UNISEX Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.08) saturate(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-4 left-4 max-w-xs bg-black/85 backdrop-blur-md border border-white/15 p-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="font-bold text-xs text-white">MR GYM UNISEX</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Above Reliance Smart Point, Avilali, Tirupati
                  </p>
                </div>

                {/* Direct Maps CTA Button Pin */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={GYM_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-black/90 hover:bg-black text-white text-xs font-semibold border border-white/20 shadow-lg transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="px-3 py-2 text-[11px] text-gray-400 flex items-center justify-between">
                <span>Landmark: 1st Floor, Above Reliance Smart Point</span>
                <span className="text-gray-500">Tirupati 517502</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
