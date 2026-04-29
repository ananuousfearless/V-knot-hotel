import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { HOTEL_DATA } from '../lib/data';

export function Reviews() {
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
    <section className="py-24 bg-black/40 overflow-hidden relative border-t border-b border-white/5">
      {/* Decorative quotes bg */}
      <div className="absolute top-10 left-10 text-white/5 pointer-events-none">
        <Quote size={200} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-light tracking-[0.4em] uppercase text-xs mb-6"
            >
              Guest Reviews
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif italic text-4xl md:text-6xl text-white font-light"
            >
              What Our Guests Say
            </motion.h3>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/UJdnLbQsPsNKB3Mi7"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex mr-4 px-8 py-3 border border-white/20 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black rounded-none uppercase tracking-[0.2em] text-[10px] transition-all duration-500"
            >
              Write a Review
            </a>
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
          <div className="embla__container flex">
            {HOTEL_DATA.reviews.map((review, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
              >
                <div className="bg-transparent border border-white/10 p-10 h-full flex flex-col gap-8 hover:bg-white/5 transition-colors duration-500 text-center items-center">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="flex justify-center gap-2 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} strokeWidth={1} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-sm font-light leading-relaxed tracking-wide">"{review.text}"</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 mt-auto pt-6 border-t border-white/10 w-full text-center">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-light">— {review.name}</h4>
                      <p className="text-gold-500 text-[9px] uppercase tracking-[0.3em] font-light mt-1">Verified Guest</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
