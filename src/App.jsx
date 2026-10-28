import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import JoinGym from './components/JoinGym';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuickEnquiryModal from './components/QuickEnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryModalOpen(true);
  const closeEnquiry = () => setIsEnquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenEnquiry={openEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenEnquiry={openEnquiry} />
        <About />
        <Facilities />
        <WhyChooseUs />
        <Reviews />
        <JoinGym />
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Quick Enquiry Interactive Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiry}
      />
    </div>
  );
}
