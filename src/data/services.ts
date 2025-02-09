// src/data/services.ts

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Service {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  priceRange?: string;
  isPopular?: boolean;
}

export const categories: ServiceCategory[] = [
  {
    id: "",
    title: "All Services",
    icon: "🏠",
    description: "Comprehensive home maintenance and improvement solutions",
  },
  {
    id: "home-services",
    title: "Home Services",
    icon: "🏠",
    description: "Comprehensive home maintenance and improvement solutions",
  },
  {
    id: "design-services",
    title: "Design Services",
    icon: "🎨",
    description: "Creative design solutions for spaces and surfaces",
  },
  {
    id: "healthcare-services",
    title: "Healthcare Services",
    icon: "🏥",
    description: "Medical and wellness support services",
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    icon: "🔧",
    description: "Repair and maintenance for appliances and equipment",
  },
  {
    id: "construction-services",
    title: "Construction Services",
    icon: "🏗️",
    description: "Building and construction specialty services",
  },
  {
    id: "delivery-services",
    title: "Delivery Services",
    icon: "🚚",
    description: "Transportation and logistics solutions",
  },
  {
    id: "beauty-services",
    title: "Beauty Services",
    icon: "💅",
    description: "Personal care and beauty treatments",
  },
  {
    id: "entertainment-services",
    title: "Entertainment Services",
    icon: "🎭",
    description: "Event planning and entertainment solutions",
  },
  {
    id: "digital-services",
    title: "Digital Services",
    icon: "💻",
    description: "Technology and digital solutions",
  },
];

export const services: Service[] = [
  // Home Services
  {
    id: "home-electrical",
    categoryId: "home-services",
    name: "Electrical Work",
    description: "Professional electrical installations and repairs",
    priceRange: "$$-$$$",
    isPopular: true,
  },
  {
    id: "home-plumbing",
    categoryId: "home-services",
    name: "Plumbing",
    description: "24/7 plumbing services and emergency repairs",
    priceRange: "$$-$$$",
  },
  {
    id: "home-repairs",
    categoryId: "home-services",
    name: "Repairs",
    description: "General home repair services",
    priceRange: "$$",
  },
  {
    id: "home-carpentry",
    categoryId: "home-services",
    name: "Carpentry",
    description: "Custom woodworking and furniture repair",
    priceRange: "$$$",
  },
  {
    id: "home-cleaning",
    categoryId: "home-services",
    name: "Cleaning",
    description: "Professional home cleaning services",
    priceRange: "$-$$",
    isPopular: true,
  },
  {
    id: "home-painting",
    categoryId: "home-services",
    name: "Painting",
    description: "Interior and exterior painting services",
    priceRange: "$$$",
  },
  {
    id: "shop-preparation",
    categoryId: "home-services",
    name: "Shop Preparation",
    description: "Commercial space setup and preparation",
    priceRange: "$$$$",
  },
  {
    id: "gypsum-works",
    categoryId: "home-services",
    name: "Gypsum Works",
    description: "Drywall installation and repair",
    priceRange: "$$$",
  },
  {
    id: "wallpaper-installation",
    categoryId: "home-services",
    name: "Wallpaper Installation",
    description: "Professional wallpaper hanging services",
    priceRange: "$$",
  },
  {
    id: "zellige",
    categoryId: "home-services",
    name: "Zellige",
    description: "Traditional tile installation services",
    priceRange: "$$$$",
  },
  {
    id: "marble-works",
    categoryId: "home-services",
    name: "Marble Works",
    description: "Marble installation and maintenance",
    priceRange: "$$$$",
  },

  // Design Services
  {
    id: "surface-sessions",
    categoryId: "design-services",
    name: "Surface Sessions",
    description: "Custom surface design consultations",
    priceRange: "$$$",
  },
  {
    id: "interior-design",
    categoryId: "design-services",
    name: "Interior Design",
    description: "Complete interior design solutions",
    priceRange: "$$$$",
    isPopular: true,
  },
  {
    id: "garden-design",
    categoryId: "design-services",
    name: "Garden Design",
    description: "Landscape and garden planning services",
    priceRange: "$$$",
  },
  {
    id: "3d-designs",
    categoryId: "design-services",
    name: "3D Designs",
    description: "3D modeling and visualization services",
    priceRange: "$$$$",
  },

  // Healthcare Services
  {
    id: "patient-monitoring",
    categoryId: "healthcare-services",
    name: "Patient Monitoring",
    description: "Remote health monitoring services",
    priceRange: "$$$$",
  },
  {
    id: "mental-health-support",
    categoryId: "healthcare-services",
    name: "Mental Health Support",
    description: "Professional mental health counseling",
    priceRange: "$$$$",
  },

  // Maintenance Services
  {
    id: "phone-repair",
    categoryId: "maintenance-services",
    name: "Phone Repair",
    description: "Mobile device repair services",
    priceRange: "$$",
    isPopular: true,
  },
  {
    id: "fridge-repair",
    categoryId: "maintenance-services",
    name: "Fridge Repair",
    description: "Refrigerator maintenance and repair",
    priceRange: "$$$",
  },
  {
    id: "mechanic-services",
    categoryId: "maintenance-services",
    name: "Mechanic Services",
    description: "Automotive repair and maintenance",
    priceRange: "$$$",
  },
  {
    id: "hvac",
    categoryId: "maintenance-services",
    name: "HVAC",
    description: "Heating and cooling system services",
    priceRange: "$$$",
  },
  {
    id: "electronic-installation",
    categoryId: "maintenance-services",
    name: "Electronic Installation",
    description: "Home electronic setup services",
    priceRange: "$$",
  },
  {
    id: "camera-installation",
    categoryId: "maintenance-services",
    name: "Camera Installation",
    description: "Security camera installation",
    priceRange: "$$$",
  },

  // Construction Services
  {
    id: "building-construction",
    categoryId: "construction-services",
    name: "Building Construction",
    description: "Full-scale construction services",
    priceRange: "$$$$",
  },
  {
    id: "blacksmithing",
    categoryId: "construction-services",
    name: "Blacksmithing",
    description: "Custom metalwork services",
    priceRange: "$$$",
  },
  {
    id: "aluminum-works",
    categoryId: "construction-services",
    name: "Aluminum Works",
    description: "Aluminum fabrication and installation",
    priceRange: "$$$",
  },

  // Delivery Services
  {
    id: "package-delivery",
    categoryId: "delivery-services",
    name: "Package Delivery",
    description: "Secure parcel delivery services",
    priceRange: "$-$$",
  },
  {
    id: "furniture-transport",
    categoryId: "delivery-services",
    name: "Furniture Transport",
    description: "Large item moving services",
    priceRange: "$$$",
  },

  // Beauty Services
  {
    id: "nail-services",
    categoryId: "beauty-services",
    name: "Nail Services",
    description: "Professional nail care treatments",
    priceRange: "$$",
  },
  {
    id: "hair-cutting",
    categoryId: "beauty-services",
    name: "Hair Cutting",
    description: "Professional hairstyling services",
    priceRange: "$$",
    isPopular: true,
  },
  {
    id: "henna",
    categoryId: "beauty-services",
    name: "Henna",
    description: "Traditional henna application services",
    priceRange: "$",
  },
  {
    id: "beauty-treatments",
    categoryId: "beauty-services",
    name: "Beauty",
    description: "General beauty treatments",
    priceRange: "$$$",
  },
  {
    id: "home-cleaning-beauty",
    categoryId: "beauty-services",
    name: "Cleaning",
    description: "Beauty space cleaning services",
    priceRange: "$$",
  },
  {
    id: "cooking-services",
    categoryId: "beauty-services",
    name: "Cooking",
    description: "Specialty cooking services",
    priceRange: "$$$",
  },
  {
    id: "house-help",
    categoryId: "beauty-services",
    name: "House Help",
    description: "Domestic assistance services",
    priceRange: "$$",
  },
  {
    id: "mens-haircut",
    categoryId: "beauty-services",
    name: "Men's Haircut",
    description: "Professional barber services",
    priceRange: "$$",
  },

  // Entertainment Services
  {
    id: "event-planning",
    categoryId: "entertainment-services",
    name: "Event Planning",
    description: "Full-service event coordination",
    priceRange: "$$$$",
  },
  {
    id: "performances",
    categoryId: "entertainment-services",
    name: "Performances",
    description: "Live entertainment booking",
    priceRange: "$$$$",
  },
  {
    id: "bookings",
    categoryId: "entertainment-services",
    name: "Bookings",
    description: "Entertainment reservation services",
    priceRange: "$$",
  },

  // Digital Services
  {
    id: "consulting",
    categoryId: "digital-services",
    name: "Consulting",
    description: "IT and business consulting",
    priceRange: "$$$$",
  },
  {
    id: "translation",
    categoryId: "digital-services",
    name: "Translation",
    description: "Professional translation services",
    priceRange: "$$$",
  },
  {
    id: "web-app-dev",
    categoryId: "digital-services",
    name: "Website & App Development",
    description: "Custom software development",
    priceRange: "$$$$",
    isPopular: true,
  },
];

// Utility Functions
export const getServicesByCategory = (categoryId: string): Service[] => {
  return services.filter((service) => service.categoryId === categoryId);
};

export const getCategoryById = (
  categoryId: string
): ServiceCategory | undefined => {
  return categories.find((cat) => cat.id === categoryId);
};
