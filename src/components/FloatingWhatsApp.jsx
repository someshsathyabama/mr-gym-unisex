import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Optional Dismissible Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#14141c] text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-emerald-500/30 shadow-xl shadow-black/60 animate-in fade-in slide-in-from-right-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Enquire on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={GYM_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Chat with MR GYM UNISEX on WhatsApp"
        title="Chat with MR GYM UNISEX on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
