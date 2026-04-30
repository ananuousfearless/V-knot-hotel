import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { Users, BedDouble, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOTEL_DATA, getWhatsAppLink } from '../lib/data';

export function Rooms() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="rooms" className="py-16 md:py-24 lg:py-32 bg-black/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-light tracking-[0.4em] uppercase text-xs mb-6"
            >
              Accommodation
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif italic text-4xl md:text-6xl text-white font-light"
            >
              Our Rooms & Suites
            </motion.h3>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black disabled:opacity-30 transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black disabled:opacity-30 transition-all duration-300 hover:scale-105"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="embla overflow-visible" ref={emblaRef}>
          <div className="embla__container flex -ml-6">
          {HOTEL_DATA.rooms.map((room, index) => {
            const encodedMessage = `Hello, I would like to book the ${room.name} at your hotel.`;
            
            return (
              <div 
                key={room.id}
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
              >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/60 backdrop-blur-lg rounded-none overflow-hidden border border-white/5 group hover:border-gold-500/30 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-colors duration-700"></div>
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 right-6 z-20 bg-black/60 shadow-2xl backdrop-blur-md px-6 py-3 border border-white/10 rounded-none flex flex-col items-center">
                    <p className="text-gold-500 font-normal tracking-widest font-serif italic text-2xl">{room.price}</p>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-1">Per Night</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1 text-center items-center">
                  <h4 className="font-serif text-3xl font-light text-white mb-4">
                    {room.name}
                  </h4>
                  <p className="text-white/60 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed font-light">
                    {room.description}
                  </p>
                  
                  {/* Meta Specs */}
                  <div className="flex justify-center items-center gap-6 mb-8 pb-8 border-b border-white/5 w-full">
                    <div className="flex justify-center items-center gap-3 text-xs text-white/50 tracking-[0.2em] uppercase">
                      <Users size={16} className="text-gold-500" strokeWidth={1.5} />
                      <span>{room.occupancy}</span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-10 w-full">
                    <div className="flex flex-wrap justify-center gap-2">
                      {room.facilities.map((facility, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] uppercase tracking-[0.2em] font-light text-white/70 bg-transparent border border-white/10 px-4 py-2 rounded-none"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <a
                    href={getWhatsAppLink(encodedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full py-5 text-center bg-transparent border border-white/20 hover:bg-gold-500 hover:border-gold-500 text-white hover:text-black font-normal uppercase tracking-[0.2em] text-xs transition-all duration-500"
                  >
                    Reserve Now
                  </a>
                </div>
              </motion.div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
