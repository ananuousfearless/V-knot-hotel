import { motion } from 'motion/react';
import { HOTEL_DATA } from '../lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-gold-500 font-light tracking-[0.4em] uppercase text-xs mb-6">Contact Us</h2>
            <h3 className="font-serif italic text-4xl md:text-6xl text-white font-light mb-6">
              Get In Touch
            </h3>
            <p className="text-white/60 mb-10 leading-relaxed max-w-md font-light">
              We look forward to welcoming you to V KNOT RESIDENCY PORT. Reach out to our team for any inquiries or booking assistance.
            </p>

            <div className="space-y-8 flex flex-col items-center">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="text-gold-500" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-light tracking-[0.2em] uppercase text-[10px] text-white/50 mb-2">Address</h4>
                  <p className="text-white/80 leading-relaxed font-light">
                    {HOTEL_DATA.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Phone className="text-gold-500" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-light tracking-[0.2em] uppercase text-[10px] text-white/50 mb-2">Phone</h4>
                  <p className="text-white/80 font-light">
                    <a href={`tel:${HOTEL_DATA.contact.phone.replace(/\s+/g, '')}`} className="hover:text-gold-500 transition-colors">
                      {HOTEL_DATA.contact.phone}
                    </a>
                  </p>
                  <p className="text-white/80 mt-1 font-light flex items-center justify-center gap-2">
                    <span className="text-[10px] uppercase font-medium text-white/40 tracking-wider">WhatsApp </span>
                    <a href={`https://wa.me/91${HOTEL_DATA.contact.whatsapp}`} className="hover:text-gold-500 transition-colors">
                      {HOTEL_DATA.contact.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Mail className="text-gold-500" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-light tracking-[0.2em] uppercase text-[10px] text-white/50 mb-2">Email</h4>
                  <p className="text-white/80 font-light">
                    <a href={`mailto:${HOTEL_DATA.contact.email}`} className="hover:text-gold-500 transition-colors">
                      {HOTEL_DATA.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-md p-10 border border-white/10 shadow-2xl rounded-none flex flex-col text-center"
          >
            <h3 className="font-serif italic text-3xl font-light text-white mb-8">Send a Message</h3>
            <form className="space-y-6 text-center" action={`mailto:${HOTEL_DATA.contact.email}`} method="post" encType="text/plain">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-light text-white/50 block mb-3 text-center">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-5 py-4 border border-white/10 bg-white/5 text-white focus:border-gold-500 focus:bg-white/10 outline-none transition-all duration-300 font-light text-center"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-light text-white/50 block mb-3 text-center">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-5 py-4 border border-white/10 bg-white/5 text-white focus:border-gold-500 focus:bg-white/10 outline-none transition-all duration-300 font-light text-center"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-light text-white/50 block mb-3 text-center">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 border border-white/10 bg-white/5 text-white focus:border-gold-500 focus:bg-white/10 outline-none transition-all duration-300 resize-none font-light text-center"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-transparent border border-gold-500 hover:bg-gold-500 text-gold-500 hover:text-black font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-lg hover:shadow-xl mt-4"
              >
                Send via Email
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
