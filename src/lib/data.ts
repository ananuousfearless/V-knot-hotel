import { 
  Wifi, Waves, Wind, Car, Tv, 
  WashingMachine, Zap, Shield, Plane, Thermometer, 
  Video, Users, Mic, TreePine, PawPrint, Coffee
} from 'lucide-react';

export const HOTEL_DATA = {
  name: "V KNOT RESIDENCY PORT",
  tagline: "Experience Luxury & Tranquility in the Islands",
  about: {
    intro: "Welcome to V KNOT RESIDENCY PORT, your premium escape nestled in the heart of Andaman and Nicobar Islands. We blend modern luxury with authentic island hospitality to provide an unforgettable stay.",
    highlights: [
      "Peaceful and comfortable room environment",
      "Friendly and professional reception service",
      "Impeccable cleanliness and hygiene standards",
      "Breathtaking nearby attractions and views",
      "Perfect for both families and couples"
    ]
  },
  contact: {
    whatsapp: "9339235812",
    phone: "+91 9339235812",
    email: "fffearless74@gmail.com",
    address: "near VIJAYA BANK, LOTUS COLONY, Garacharama, Sri Vijaya Puram, Andaman and Nicobar Islands 744105",
    mapLink: "https://maps.app.goo.gl/UJdnLbQsPsNKB3Mi7?g_st=ic",
    bookingFormReceiver: "fffearless74@gmail.com" // Where booking form emails go
  },
  rooms: [
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: "₹2,499",
      description: "A beautifully appointed room offering comfort and elegance, perfect for short stays.",
      occupancy: "2 Adults, 1 Child",
      image: "https://i.imgur.com/au9GzOl.jpeg",
      facilities: ["Free WiFi", "Air Conditioning", "TV", "Hot Water"]
    },
    {
      id: "super-deluxe",
      name: "Super Deluxe Room",
      price: "₹3,499",
      description: "Spacious luxury with premium bedding, city views, and upgraded amenities for a relaxing getaway.",
      occupancy: "2 Adults, 2 Children",
      image: "https://i.imgur.com/nqHrpHR.jpeg",
      facilities: ["Free WiFi", "Air Conditioning", "King Bed", "Mini Fridge", "Room Service"]
    },
    {
      id: "family-suite",
      name: "Family Premium Suite",
      price: "₹5,999",
      description: "The ultimate family experience featuring separate living areas, dual bathrooms, and panoramic views.",
      occupancy: "4 Adults, 2 Children",
      image: "https://i.imgur.com/PqnxqDC.jpeg",
      facilities: ["Free WiFi", "2 Bedrooms", "Lounge Area", "Bathtub", "Premium Service"]
    }
  ],
  facilities: [
    { name: "Free WiFi", icon: Wifi },
    { name: "Air Conditioning", icon: Wind },
    { name: "Room Service", icon: Coffee },
    { name: "Parking", icon: Car },
    { name: "TV", icon: Tv },
    { name: "Laundry Service", icon: WashingMachine },
    { name: "Power Backup", icon: Zap },
    { name: "24/7 Reception", icon: Shield },
    { name: "Airport Pickup", icon: Plane },
    { name: "Hot Water", icon: Thermometer },
    { name: "CCTV Security", icon: Video },
    { name: "Family Rooms", icon: Users },
    { name: "Conference Hall", icon: Mic },
    { name: "Garden Area", icon: TreePine },
    { name: "Pet Friendly", icon: PawPrint },
  ],
  reviews: [
    {
      name: "Ananya Sharma",
      rating: 5,
      text: "The essence of true hospitality! From the pristine cleanliness of our room to the unmatched comfort of the bed, our stay was memorable. Truly a hidden gem in Port Blair.",
      avatar: "https://i.pravatar.cc/150?u=AnanyaSharma"
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "Exceptional service and spotlessly clean! The staff went out of their way to ensure our holiday was completely stress-free. Every comfort was thoughtfully provided.",
      avatar: "https://i.pravatar.cc/150?u=RahulVerma"
    },
    {
      name: "Priyanka Desai",
      rating: 5,
      text: "A magical experience! The attention to detail in room cleanliness and guest comfort was phenomenal. Our memories here will last a lifetime.",
      avatar: "https://i.pravatar.cc/150?u=KavitaDesai"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Impeccable hospitality. The ambiance, the comfortable interiors, and the welcoming staff made us feel entirely at home. Best stay ever!",
      avatar: "https://i.pravatar.cc/150?u=AmitPatel"
    },
    {
      name: "Neha Singh",
      rating: 5,
      text: "Unforgettable hospitality! We felt pampered from check-in to check-out. The hygiene standards and cozy rooms made it a perfect escape.",
      avatar: "https://i.pravatar.cc/150?u=NehaSingh"
    }
  ],
  experiences: [
    {
      title: "Cellular Jail",
      description: "Step back in time at this historic national memorial, standing silently as a testament to India's freedom struggle.",
      image: "https://i.imgur.com/y9vgyE6.jpeg"
    },
    {
      title: "Corbyn’s Cove Beach",
      description: "Relax on unspoiled sands shaded by lush palm trees. A perfect spot for a long, romantic evening walk.",
      image: "https://i.imgur.com/cxo0B2y.jpeg"
    },
    {
      title: "Island Hopping",
      description: "Discover a paradise of secluded islands and vibrant coral reefs, charting a new adventure every single day.",
      image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Scuba Diving",
      description: "Plunge into the deep blue archipelago to explore exotic marine life and mesmerizing underwater topographies.",
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Water Sports",
      description: "Feel the rush of adrenaline with thrilling a jet-ski ride and parasailing over sparkling turquoise waves.",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Romantic Beach Evenings",
      description: "Savor a private, candle-lit dinner alongside golden sunsets, wrapped in a cool gentle ocean breeze.",
      image: "https://i.imgur.com/eF2h4OG.jpeg"
    }
  ],
  gallery: [
    { src: "https://i.imgur.com/JzAEqgL.jpeg", category: "Lobby" },
    { src: "https://i.imgur.com/au9GzOl.jpeg", category: "Rooms" },
    { src: "https://i.imgur.com/nqHrpHR.jpeg", category: "View" },
    { src: "https://i.imgur.com/PqnxqDC.jpeg", category: "Exterior" },
    { src: "https://i.imgur.com/OqHMhm9.jpeg", category: "Hotel" },
  ]
};

export const getWhatsAppLink = (message: string) => 
  `https://wa.me/91${HOTEL_DATA.contact.whatsapp}?text=${encodeURIComponent(message)}`;
