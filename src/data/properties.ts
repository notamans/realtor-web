export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  type: "house" | "condo" | "apartment" | "townhouse";
  status: "for-sale" | "for-rent" | "sold" | "rented";
  description: string;
  amenities: string[];
  yearBuilt: number;
  garage: number;
  lot?: number;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
  specialties: string[];
  experience: number;
  propertiesSold: number;
}

// Mock property data
export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Condo",
    address: "123 Main St, Downtown, NY 10001",
    price: 850000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    type: "condo",
    status: "for-sale",
    description:
      "Stunning modern condo in the heart of downtown with floor-to-ceiling windows and city views.",
    amenities: ["Gym", "Concierge", "Rooftop Terrace", "In-unit Laundry"],
    yearBuilt: 2018,
    garage: 1,
  },
  {
    id: "2",
    title: "Charming Victorian House",
    address: "456 Oak Avenue, Riverside, NY 10002",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2800,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600563438938-a42d0932b8d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    ],
    type: "house",
    status: "for-sale",
    description:
      "Beautiful Victorian home with original hardwood floors, updated kitchen, and spacious backyard.",
    amenities: ["Fireplace", "Garden", "Updated Kitchen", "Hardwood Floors"],
    yearBuilt: 1925,
    garage: 2,
    lot: 0.25,
  },
  {
    id: "3",
    title: "Luxury Penthouse Suite",
    address: "789 Park Place, Uptown, NY 10003",
    price: 2750000,
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2200,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    ],
    type: "condo",
    status: "for-sale",
    description:
      "Exclusive penthouse with panoramic city views, private terrace, and luxury finishes throughout.",
    amenities: [
      "Private Terrace",
      "City Views",
      "Marble Counters",
      "Premium Appliances",
    ],
    yearBuilt: 2020,
    garage: 2,
  },
  {
    id: "4",
    title: "Cozy Suburban Townhouse",
    address: "321 Maple Lane, Westfield, NY 10004",
    price: 675000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    images: [
      "https://images.unsplash.com/photo-1600563438938-a42d0932b8d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    type: "townhouse",
    status: "for-sale",
    description:
      "Perfect family home in quiet neighborhood with easy access to schools and shopping.",
    amenities: [
      "Patio",
      "Close to Schools",
      "Quiet Neighborhood",
      "Move-in Ready",
    ],
    yearBuilt: 2005,
    garage: 1,
    lot: 0.15,
  },
  {
    id: "5",
    title: "Studio Apartment",
    address: "654 Broadway, Arts District, NY 10005",
    price: 2800,
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 550,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    type: "apartment",
    status: "for-rent",
    description:
      "Modern studio in vibrant arts district, perfect for young professionals.",
    amenities: [
      "High Ceilings",
      "Exposed Brick",
      "Modern Kitchen",
      "Near Transit",
    ],
    yearBuilt: 2015,
    garage: 0,
  },
  {
    id: "6",
    title: "Waterfront Estate",
    address: "987 Lakeside Drive, Lakewood, NY 10006",
    price: 3500000,
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4200,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600563438938-a42d0932b8d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    ],
    type: "house",
    status: "for-sale",
    description:
      "Magnificent waterfront estate with private dock, swimming pool, and breathtaking lake views.",
    amenities: ["Private Dock", "Swimming Pool", "Lake Views", "Guest House"],
    yearBuilt: 2010,
    garage: 3,
    lot: 2.5,
  },
  {
    id: "7",
    title: "Modern Loft Apartment",
    address: "246 Industrial Blvd, Arts Quarter, NY 10007",
    price: 4500,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 1100,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
    ],
    type: "apartment",
    status: "for-rent",
    description:
      "Industrial-style loft with exposed brick walls, high ceilings, and modern amenities in the heart of the arts district.",
    amenities: ["Exposed Brick", "High Ceilings", "Gym Access", "Roof Deck"],
    yearBuilt: 2019,
    garage: 0,
  },
  {
    id: "8",
    title: "Executive Townhome",
    address: "159 Executive Drive, Prestige Heights, NY 10008",
    price: 1850000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop",
    ],
    type: "townhouse",
    status: "for-sale",
    description:
      "Sophisticated townhome featuring premium finishes, smart home technology, and a private rooftop terrace.",
    amenities: [
      "Smart Home",
      "Rooftop Terrace",
      "Premium Finishes",
      "Security System",
    ],
    yearBuilt: 2021,
    garage: 2,
    lot: 0.12,
  },
  {
    id: "9",
    title: "Beachfront Villa",
    address: "777 Ocean View Avenue, Coastal Estates, NY 10009",
    price: 4750000,
    bedrooms: 6,
    bathrooms: 5,
    squareFeet: 5500,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    ],
    type: "house",
    status: "for-sale",
    description:
      "Stunning beachfront villa with panoramic ocean views, infinity pool, and direct beach access.",
    amenities: ["Ocean Views", "Infinity Pool", "Beach Access", "Wine Cellar"],
    yearBuilt: 2022,
    garage: 4,
    lot: 1.8,
  },
  {
    id: "10",
    title: "Urban Penthouse",
    address: "888 Skyline Tower, Metropolitan District, NY 10010",
    price: 8900,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1650,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    ],
    type: "condo",
    status: "for-rent",
    description:
      "Ultra-modern penthouse with floor-to-ceiling windows, designer kitchen, and wraparound terrace.",
    amenities: [
      "Floor-to-Ceiling Windows",
      "Designer Kitchen",
      "Wraparound Terrace",
      "Concierge",
    ],
    yearBuilt: 2023,
    garage: 2,
  },
];

// Mock agent data
export const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    phone: "(555) 123-4567",
    email: "sarah@realtyplus.com",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b792?w=400&h=400&fit=crop&crop=face",
    bio: "With over 10 years of experience in luxury real estate, Sarah specializes in downtown condos and high-rise living.",
    specialties: [
      "Luxury Properties",
      "Downtown Condos",
      "Investment Properties",
    ],
    experience: 10,
    propertiesSold: 250,
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Real Estate Specialist",
    phone: "(555) 234-5678",
    email: "michael@realtyplus.com",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Michael focuses on family homes and suburban properties, helping families find their perfect home.",
    specialties: ["Family Homes", "Suburban Properties", "First-Time Buyers"],
    experience: 7,
    propertiesSold: 180,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Luxury Property Consultant",
    phone: "(555) 345-6789",
    email: "emily@realtyplus.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Emily specializes in high-end properties and waterfront estates, providing white-glove service to discerning clients.",
    specialties: ["Luxury Estates", "Waterfront Properties", "High-End Condos"],
    experience: 12,
    propertiesSold: 320,
  },
];

// Statistics data
export const companyStats = {
  propertiesSold: 1200,
  happyClients: 950,
  yearsExperience: 15,
  averageDaysOnMarket: 18,
};

// Testimonials interface
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

// Mock testimonials data
export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jennifer Wilson",
    role: "First-time Home Buyer",
    content:
      "Working with RealtyPlus was an incredible experience. Sarah Johnson helped us find our dream home in just two weeks! Her expertise and dedication made the entire process smooth and stress-free.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b792?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "2",
    name: "Robert Chen",
    role: "Investment Property Owner",
    content:
      "Michael Chen has been instrumental in building my real estate portfolio. His market knowledge and investment insights have helped me make profitable decisions. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "3",
    name: "Lisa Thompson",
    role: "Luxury Home Seller",
    content:
      "Emily Rodriguez sold our waterfront estate for above asking price in record time. Her marketing strategy and attention to detail were exceptional. We couldn't be happier with the service.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "4",
    name: "David Martinez",
    role: "Family Home Buyer",
    content:
      "The entire team at RealtyPlus went above and beyond to help us find the perfect family home. Their patience and professionalism throughout the process was outstanding.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];
