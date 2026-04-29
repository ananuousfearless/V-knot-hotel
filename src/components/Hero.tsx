import { motion } from 'motion/react';
import { HOTEL_DATA } from '../lib/data';

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-zinc-900"
      >
        <img 
          src="https://images.unsplash.com/photo-1514282401047-d79b71a640f5?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Resort" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-colors duration-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold-400 font-light tracking-[0.4em] uppercase text-xs md:text-sm mb-6 block">
            Welcome to Paradise
          </span>
          <h1 className="font-serif italic text-6xl md:text-8xl lg:text-[10rem] font-light text-white mb-6 leading-none drop-shadow-2xl text-balance">
            {HOTEL_DATA.name}
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light tracking-[0.1em] md:tracking-[0.2em] leading-relaxed text-balance">
            {HOTEL_DATA.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <button
              onClick={() => handleScroll('#booking')}
              className="w-full sm:w-auto px-10 py-5 bg-gold-500 text-black font-semibold uppercase tracking-[0.2em] text-xs hover:bg-gold-400 transition-all shadow-xl hover:scale-105 duration-500"
            >
              Reserve Your Stay
            </button>
            <a
              href={HOTEL_DATA.contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border border-white/30 backdrop-blur-md text-white font-semibold uppercase tracking-[0.2em] text-xs hover:bg-white/10 hover:border-white/60 transition-all hover:scale-105 duration-500"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <button 
          onClick={() => handleScroll('#about')}
          className="p-2 rounded-full border border-white/30 text-white/70 hover:text-white bg-white/5 backdrop-blur-sm transition-colors"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
