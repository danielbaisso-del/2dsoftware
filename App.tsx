
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import TechSection from './components/TechSection';
import EcossistemaParticulas from './components/EcossistemaParticulas';
import SitesSection from './components/SitesSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <EcossistemaParticulas />
        <Products />
        <SitesSection />
        <Features />
        <TechSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
