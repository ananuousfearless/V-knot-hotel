import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users } from 'lucide-react';
import { HOTEL_DATA, getWhatsAppLink } from '../lib/data';

export function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: HOTEL_DATA.rooms[0].name,
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with form details
    const message = `*New Booking Inquiry*\n\n` +
      `*Room Type:* ${formData.roomType}\n` +
      `*Check-In:* ${formData.checkIn}\n` +
      `*Check-Out:* ${formData.checkOut}\n` +
      `*Guests:* ${formData.guests}\n` +
      `*Special Requests:* ${formData.requests || 'None'}\n\n` +
      `Please confirm availability.`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 lg:py-32 bg-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Reserve Your Stay</h2>
            <p className="text-white/60">Complete the form below to send your inquiry directly via WhatsApp for swift confirmation.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Check-in */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Check-In Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar size={18} />
                  </div>
                  <input 
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Check-Out Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar size={18} />
                  </div>
                  <input 
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Guests</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Users size={18} />
                  </div>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Room Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Room Type</label>
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all appearance-none"
                >
                  {HOTEL_DATA.rooms.map(room => (
                    <option key={room.id} value={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">Special Requests {`(Optional)`}</label>
              <textarea 
                name="requests"
                rows={3}
                value={formData.requests}
                onChange={handleChange}
                placeholder="Let us know if you have any special requirements..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-black rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-lg hover:shadow-xl"
            >
              Inquire via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
