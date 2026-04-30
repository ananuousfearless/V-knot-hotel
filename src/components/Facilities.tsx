import { motion } from 'motion/react';
import { HOTEL_DATA } from '../lib/data';

export function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 lg:py-32 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-light tracking-[0.4em] uppercase text-xs mb-6"
          >
            Amenities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-4xl md:text-6xl text-white font-light mb-6"
          >
            Explore Our Facilities
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/60"
          >
            Every stay at our property encompasses a range of premium amenities ensuring you have the most comfortable and memorable experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {HOTEL_DATA.facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 bg-transparent border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-500 flex flex-col items-center justify-center text-center backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors duration-500">
                  <Icon size={24} strokeWidth={1} className="text-white/60 group-hover:text-gold-500 transition-colors duration-500" />
                </div>
                <h4 className="font-light tracking-[0.2em] uppercase text-[10px] text-white/80 group-hover:text-gold-500 transition-colors duration-500">{fac.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
