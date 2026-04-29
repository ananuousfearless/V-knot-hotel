import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Facilities } from './components/Facilities';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ThemeSelector } from './components/ThemeSelector';
import { AnimatedSection } from './components/AnimatedSection';
import { THEMES } from './lib/themes';

export default function App() {
  const [theme, setTheme] = useState(THEMES[0]);

  useEffect(() => {
    const savedId = localStorage.getItem('app-theme');
    if (savedId) {
      const found = THEMES.find(t => t.id === savedId);
      if (found) setTheme(found);
    }
    // Remove the old dark mode class since we manage variables via theme classes
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    document.documentElement.className = theme.id;
    localStorage.setItem('app-theme', theme.id);
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Background Scene based on Theme */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={theme.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            src={theme.image}
            alt="Island Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/80 transition-colors duration-1000"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Rooms /></AnimatedSection>
        <AnimatedSection><BookingForm /></AnimatedSection>
        <AnimatedSection><Facilities /></AnimatedSection>
        <AnimatedSection><Gallery /></AnimatedSection>
        <AnimatedSection><Reviews /></AnimatedSection>
        <AnimatedSection><Location /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </main>

      <Footer />
      <FloatingActions />
      <ThemeSelector currentTheme={theme} onChange={setTheme} />
    </div>
  );
}
