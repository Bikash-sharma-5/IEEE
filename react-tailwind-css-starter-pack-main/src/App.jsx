import React from 'react';
import './App.css';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import BrochureUnveilingSection from './components/sections/BrochureUnveilingSection';
import ImageGallery from './components/sections/ImageGallery';
import KeyHighlightsSection from './components/sections/KeyHighlightsSection';
import CallForPapersSection from './components/sections/CallForPapersSection';
import CommitteeSection from './components/sections/CommitteeSection';
import RegistrationSection from './components/sections/RegistrationSection';
import ContactSection from './components/sections/ContactSection';

// --- CSS for animations ---
const style = document.createElement('style');
style.innerHTML = `
@keyframes scroll-x {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

.animate-scroll-x {
    display: flex;
    animation: scroll-x 30s linear infinite;
}

@keyframes scroll-x-negative {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}

.animate-scroll-x-negative {
    display: flex;
    animation: scroll-x-negative 30s linear infinite;
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
}

.animate-scroll {
    display: flex;
    animation: scroll 20s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
`;
if (!document.getElementById('custom-animations')) {
  style.id = 'custom-animations';
  document.head.appendChild(style);
}

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-white font-sans w-full overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BrochureUnveilingSection />
        <ImageGallery />
        <KeyHighlightsSection />
        <CallForPapersSection />
        <CommitteeSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
