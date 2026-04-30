import { motion } from 'motion/react';
import { HOTEL_DATA } from '../lib/data';
import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-light tracking-[0.4em] uppercase text-xs mb-6"
          >
            Location
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl md:text-6xl text-white font-light"
          >
            Find Us Here
          </motion.h3>
        </div>

        <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-zinc-800 flex flex-col md:flex-row">
          {/* Map info panel */}
          <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/30 text-gold-500 rounded-full flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="font-serif text-2xl font-bold text-white mb-4">
              V KNOT RESIDENCY PORT
            </h4>
            <p className="text-white/60 leading-relaxed mb-8">
              {HOTEL_DATA.contact.address}
            </p>
            <a 
              href={HOTEL_DATA.contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl tracking-widest uppercase text-[10px] font-bold transition-colors w-full"
            >
              Open Google Maps
            </a>
          </div>
          
          {/* Google Maps iFrame */}
          <div className="md:w-2/3 h-96 md:h-auto min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.919036495204!2d92.71545625!3d11.6247343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308895006b528e1d%3A0x67399eb25ccf0bfb!2sGaracharma%2C%20Sri%20Vijaya%20Puram%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-125 dark:opacity-80 dark:invert-[90%] dark:hue-rotate-180" // Styling trick for map thematic matching
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
