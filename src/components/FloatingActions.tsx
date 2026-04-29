import { PhoneCall, MessageCircle } from 'lucide-react';
import { HOTEL_DATA, getWhatsAppLink } from '../lib/data';

export function FloatingActions() {
  const whatsappUrl = getWhatsAppLink("Hello, I would like to inquire about booking a room at V KNOT RESIDENCY PORT.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* Mobile Call Button - Visible mainly on smaller screens */}
      <a
        href={`tel:${HOTEL_DATA.contact.phone.replace(/\s+/g, '')}`}
        className="lg:hidden flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full 
                 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        aria-label="Call Hotel"
      >
        <PhoneCall size={26} className="animate-pulse" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full 
                 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
