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
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      facilities: ["Free WiFi", "Air Conditioning", "TV", "Hot Water"]
    },
    {
      id: "super-deluxe",
      name: "Super Deluxe Room",
      price: "₹3,499",
      description: "Spacious luxury with premium bedding, city views, and upgraded amenities for a relaxing getaway.",
      occupancy: "2 Adults, 2 Children",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
      facilities: ["Free WiFi", "Air Conditioning", "King Bed", "Mini Fridge", "Room Service"]
    },
    {
      id: "family-suite",
      name: "Family Premium Suite",
      price: "₹5,999",
      description: "The ultimate family experience featuring separate living areas, dual bathrooms, and panoramic views.",
      occupancy: "4 Adults, 2 Children",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
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
      text: "Amazing stay and very clean rooms. The location is perfect for exploring Port Blair.",
      avatar: "https://i.pravatar.cc/150?u=AnanyaSharma"
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "Staff behavior was excellent and very welcoming. Will definitely visit again!",
      avatar: "https://i.pravatar.cc/150?u=RahulVerma"
    },
    {
      name: "Kavita Desai",
      rating: 4,
      text: "Best hotel experience with beautiful surroundings. The breakfast was outstanding.",
      avatar: "https://i.pravatar.cc/150?u=KavitaDesai"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Fast WiFi and excellent room service. Perfect for remote working while on vacation.",
      avatar: "https://i.pravatar.cc/150?u=AmitPatel"
    },
    {
      name: "Neha Singh",
      rating: 5,
      text: "Reception team was very helpful and professional. Arranged our local tours seamlessly.",
      avatar: "https://i.pravatar.cc/150?u=NehaSingh"
    }
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1542314831-c6a4d1409b1c?q=80&w=2000&auto=format&fit=crop", category: "Lobby" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop", category: "Rooms" },
    { src: "https://images.unsplash.com/photo-1589309736402-263aecd40b2a?q=80&w=2000&auto=format&fit=crop", category: "Radhanagar Beach" },
    { src: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2000&auto=format&fit=crop", category: "Boat Safari" },
    { src: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2000&auto=format&fit=crop", category: "Island Views" },
    { src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000&auto=format&fit=crop", category: "Tropical Sunset" },
  ]
};

export const getWhatsAppLink = (message: string) => 
  `https://wa.me/91${HOTEL_DATA.contact.whatsapp}?text=${encodeURIComponent(message)}`;
