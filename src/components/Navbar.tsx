import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { HOTEL_DATA } from '../lib/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md border-white/10 shadow-sm' 
          : 'bg-black/20 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex flex-col justify-center mt-2 group">
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.3em] text-white group-hover:text-gold-500 transition-colors duration-500">
              V KNOT
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 mt-1 opacity-80">
              Residency Port
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-white/20 pl-8 ml-2">
              <a
                href={`tel:${HOTEL_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="border border-white/20 hover:border-gold-500 px-8 py-3 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-gold-500 hover:text-black transition-all duration-500"
              >
                Reservation
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-gold-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-transparent backdrop-blur-sm border-b border-white/10 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-3 text-sm tracking-widest uppercase text-white/80 hover:text-gold-500 hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3 px-3">
                <a 
                  href={`tel:${HOTEL_DATA.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gold-500/50 text-[10px] uppercase tracking-widest text-gold-500 hover:bg-gold-500 hover:text-black transition-colors"
                >
                  <PhoneCall size={16} /> Call Us
                </a>
                <a
                  href="#booking"
                  onClick={(e) => handleScrollTo(e, '#booking')}
                  className="text-center w-full bg-gold-500 text-black px-4 py-3 rounded-lg text-[10px] uppercase tracking-widest font-bold shadow-md hover:bg-gold-600 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
