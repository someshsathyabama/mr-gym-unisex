import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin, Dumbbell } from 'lucide-react';
import { GYM_DATA } from '../constants/gymData';

export default function Navbar({ onOpenEnquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform duration-200">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  MR GYM
                </span>
                <span className="bg-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-red-500/30">
                  UNISEX
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-red-500" /> Avilali, Tirupati
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141418]/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={GYM_DATA.phoneUrl}
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-150"
              title="Call MR GYM UNISEX"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{GYM_DATA.phone}</span>
            </a>
            
            <button
              onClick={onOpenEnquiry}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-900/30 active:scale-95 transition-all duration-150"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Join Our Gym</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-md"
            >
              Join
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="sm:hidden bg-[#0c0c10] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-200 hover:bg-white/5 rounded-lg hover:text-red-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={GYM_DATA.phoneUrl}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {GYM_DATA.phone}</span>
            </a>

            <a
              href={GYM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
