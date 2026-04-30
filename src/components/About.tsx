import { motion } from 'motion/react';
import { HOTEL_DATA } from '../lib/data';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative w-full md:w-5/6 lg:w-full mx-auto"
          >
            <div className="flex flex-col gap-4 mt-8 md:mt-12">
              <img 
                src="https://i.imgur.com/Avb2yym.jpeg" 
                alt="View" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://i.imgur.com/iH7oIIM.jpeg" 
                alt="Interior" 
                className="rounded-2xl shadow-2xl w-full aspect-square object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-4 mb-8 md:mb-12">
              <img 
                src="https://i.imgur.com/6OEuYXl.jpeg" 
                alt="Exterior" 
                className="rounded-2xl shadow-2xl w-full aspect-square object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://i.imgur.com/Tkzeca3.jpeg" 
                alt="Dining" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-36 h-36 border border-white/20">
              <span className="font-serif italic text-4xl text-gold-500">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium mt-2 text-center">Years of<br/>Hospitality</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-gold-500 font-light tracking-[0.4em] uppercase text-xs mb-6">About Us</h2>
            <h3 className="font-serif italic text-4xl md:text-6xl text-white font-light mb-6 leading-tight text-balance">
              A Symphony of Luxury and Comfort
            </h3>
            <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
              {HOTEL_DATA.about.intro}
            </p>
            
            <div className="space-y-4 flex flex-col items-center">
              {HOTEL_DATA.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-center gap-4">
                  <div className="mt-1 bg-white/5 text-gold-500 p-1.5 rounded-full border border-white/10 shrink-0">
                    <CheckCircle2 size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-white/80 font-light tracking-wide">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center border-t border-white/10 pt-8 w-full text-center">
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">For Reservations</p>
                <a href={`tel:${HOTEL_DATA.contact.phone.replace(/\s+/g, '')}`} className="font-serif italic text-3xl text-white hover:text-gold-500 transition-colors">
                  {HOTEL_DATA.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
