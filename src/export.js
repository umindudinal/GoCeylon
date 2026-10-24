import pakg1 from "./assets/packages1.webp";
import pakg2 from "./assets/packages2.webp";
import pakg3 from "./assets/packages3.webp";
import pakg4 from "./assets/packages4.webp";
import pakg5 from "./assets/packages5.webp";
import pakg6 from "./assets/packages6.webp";
import rev1 from "./assets/review1.webp";
import rev2 from "./assets/review2.webp";
import rev3 from "./assets/review3.webp";
import rev4 from "./assets/review4.webp";
import logo1 from "./assets/logo1.jpg";
import logo2 from "./assets/logo2.jpg";
import logo3 from "./assets/logo3.jpg";
import logo4 from "./assets/logo4.jpg";
import logo5 from "./assets/logo5.jpg";
import logo6 from "./assets/logo6.jpg";

import { FaBox, FaShieldAlt, FaHeart } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const Tourpackages = [
  {
    id: "pkg-1",
    name: "Cultural Triangle Explorer",
    category: "Culture",
    location: "Sigiriya, Dambulla & Kandy",
    about: "Visit the ancient rock fortress of Sigiriya, explore the historic caves of Dambulla, and experience the sacred Temple of the Tooth in Kandy.",
    highlights: [
      "Climb UNESCO World Heritage Sigiriya Rock Fortress",
      "Golden Temple and cave frescoes of Dambulla",
      "Kandy Cultural Dance performance & Tooth Relic Temple",
      "Scenic countryside village tour with traditional lunch"
    ],
    inclusions: ["Private A/C Vehicle", "English Speaking Guide", "4-Star Hotel Stays", "Daily Breakfast & Dinner", "All Entrance Passes"],
    btn: "View Tour Detail",
    price: "$69",
    priceNum: 69,
    days: "4D/3N",
    daysCount: 4,
    pax: "7",
    rating: 4.9,
    reviewsCount: 84,
    image: pakg1,
  },
  {
    id: "pkg-2",
    name: "Hill Country Scenic Journey",
    category: "Hill Country",
    location: "Nuwara Eliya & Ella",
    about: "Immerse yourself in lush tea plantations, mist-covered mountain valleys, cascading waterfalls, and the world-famous blue train ride.",
    highlights: [
      "Iconic Kandy-to-Ella scenic train ride across the mountains",
      "Trek to the Nine Arch Bridge & Little Adam's Peak",
      "Tea factory tour with authentic Ceylon tea tasting",
      "Cool climate colonial walk in Little England (Nuwara Eliya)"
    ],
    inclusions: ["Observation Class Train Tickets", "Chauffeured Mountain Van", "Boutique Tea Estate Hotel", "All Daily Meals", "Hiking Guide"],
    btn: "View Tour Detail",
    price: "$79",
    priceNum: 79,
    days: "2D/4N",
    daysCount: 2,
    pax: "10",
    rating: 4.8,
    reviewsCount: 62,
    image: pakg2,
  },
  {
    id: "pkg-3",
    name: "Wildlife Safari Adventure",
    category: "Safari",
    location: "Yala National Park",
    about: "Experience thrilling open-top 4x4 jeep safaris in Yala National Park, home to the world's highest density of leopards and wild elephant herds.",
    highlights: [
      "2 Exclusive 4x4 Safari Game Drives in Yala National Park",
      "Expert local wildlife tracker & naturalist guide",
      "Sightings of Sri Lankan leopards, sloth bears & birdlife",
      "Luxury glamping experience under the star-lit jungle sky"
    ],
    inclusions: ["Custom 4x4 Safari Jeep & Park Fees", "Luxury Safari Tented Camp", "All Wildlife Tracker Fees", "All Meals & Refreshments", "Binoculars & Field Gear"],
    btn: "View Tour Detail",
    price: "$99",
    priceNum: 99,
    days: "7D/4N",
    daysCount: 7,
    pax: "12",
    rating: 5.0,
    reviewsCount: 110,
    image: pakg3,
  },
  {
    id: "pkg-4",
    name: "South Coast Beach Escape",
    category: "Beach",
    location: "Mirissa, Galle & Weligama",
    about: "Unwind on tropical golden sand beaches, take an early-morning blue whale watching cruise, and stroll through UNESCO-listed historic Galle Fort.",
    highlights: [
      "Morning Blue Whale & Dolphin Watching catamaran cruise",
      "Sunset stroll through historic Dutch colonial Galle Fort",
      "Surfing lesson or relaxed sunbathing on Mirissa Beach",
      "Visit sea turtle conservation hatchery in Kosgoda"
    ],
    inclusions: ["Beachfront Resort Accommodation", "Whale Watching Cruise Tickets", "Dedicated Driver Guide", "Daily Tropical Breakfast", "Complimentary Surf Rental"],
    btn: "View Tour Detail",
    price: "$85",
    priceNum: 85,
    days: "8D/2N",
    daysCount: 8,
    pax: "14",
    rating: 4.9,
    reviewsCount: 95,
    image: pakg4,
  },
  {
    id: "pkg-5",
    name: "Ultimate Sri Lanka Highlights Tour",
    category: "Highlights",
    location: "Island-wide Best of Sri Lanka",
    about: "A VIP luxury island odyssey covering ancient civilizations, central misty mountains, safari wildlife, and pristine southern coastline.",
    highlights: [
      "All-in-one comprehensive grand tour covering 6 UNESCO sites",
      "Private luxury transport with dedicated personal chauffeur",
      "Cultural culinary masterclass with local master chefs",
      "Exclusive sunset cruise & fine dining experiences"
    ],
    inclusions: ["Luxury 5-Star & Heritage Hotels", "VIP Fast-track passes to all sites", "Private Chauffeur Guide", "Full Board Gourmet Meals", "All Activity & Entry Fees"],
    btn: "View Tour Detail",
    price: "$299",
    priceNum: 299,
    days: "1D/2N",
    daysCount: 1,
    pax: "3",
    rating: 5.0,
    reviewsCount: 47,
    image: pakg5,
  },
  {
    id: "pkg-6",
    name: "East Coast Beach & Culture Tour",
    category: "Beach",
    location: "Trincomalee & Nilaveli",
    about: "Escape the crowds to the calm turquoise shores of Nilaveli Beach, snorkel in crystal waters at Pigeon Island, and marvel at cliffside Koneswaram Temple.",
    highlights: [
      "Snorkeling adventure with reef sharks & turtles at Pigeon Island",
      "Breathtaking clifftop ocean views from Koneswaram Kovil",
      "Pristine tranquil white sand beaches of Nilaveli",
      "Hot water springs of Kanniya"
    ],
    inclusions: ["Boat ride & Pigeon Island Marine Park Entry", "Beach Resort Stays", "Private A/C Transport", "Snorkel Gear & Lifejackets", "Daily Breakfast & Seafood Dinner"],
    btn: "View Tour Detail",
    price: "$79",
    priceNum: 79,
    days: "9D/3N",
    daysCount: 9,
    pax: "13",
    rating: 4.8,
    reviewsCount: 53,
    image: pakg6,
  },
];

export const FeaturesData = [
  {
    icon: FaBox,
    name: "Professional Local Tour Guides",
    about: "Our government-licensed Sri Lankan tour guides know the hidden gems, folklore, and cultural depth to deliver an authentic, safe island journey.",
  },
  {
    icon: RiVerifiedBadgeFill,
    name: "Certified & Trusted Travel Agency",
    about: "We are an officially registered travel partner with Sri Lanka Tourism, ensuring complete transparency, financial security, and premium quality standards.",
  },
  {
    icon: BiSupport,
    name: "24/7 Concierge & WhatsApp Assistance",
    about: "From the moment you touch down at Colombo Airport to your flight back, our friendly support team is on standby 24/7 to guarantee complete peace of mind.",
  },
];

export const ReviewsData = [
  {
    id: 1,
    name: "Sarah & David Miller",
    country: "United Kingdom",
    avatar: rev1,
    tour: "Cultural Triangle & Hill Country",
    rating: 5,
    text: "GoCeylon organized the most breathtaking trip of our lives! Climbing Sigiriya at sunrise and taking the Ella scenic train were unforgettable. Our driver guide was so polite, punctual, and knowledgeable.",
    date: "February 2026",
  },
  {
    id: 2,
    name: "Lukas Weber",
    country: "Germany",
    avatar: rev2,
    tour: "Wildlife Safari Adventure",
    rating: 5,
    text: "Seeing a wild leopard resting on a rock within our first hour in Yala was pure magic! Everything from the luxury tented camp to the hospitality exceeded our highest expectations.",
    date: "January 2026",
  },
  {
    id: 3,
    name: "Emily & Jake Chen",
    country: "Australia",
    avatar: rev3,
    tour: "South Coast Beach & Whale Watching",
    rating: 5,
    text: "Mirissa whale watching was breathtaking! We spotted 3 blue whales and dolphins right next to our boat. The Galle Fort sunset and seafood dinners were top-notch. Highly recommend GoCeylon!",
    date: "March 2026",
  },
  {
    id: 4,
    name: "Chloe Dupont",
    country: "France",
    avatar: rev4,
    tour: "Ultimate Sri Lanka Highlights",
    rating: 5,
    text: "A truly 5-star experience from start to finish. The team took care of every tiny detail. Traveling as a solo female traveler, I felt completely safe and warmly welcomed everywhere.",
    date: "December 2025",
  },
];

export const PartnerLogos = [
  { id: 1, img: logo1, name: "Partner 1" },
  { id: 2, img: logo2, name: "Partner 2" },
  { id: 3, img: logo3, name: "Partner 3" },
  { id: 4, img: logo4, name: "Partner 4" },
  { id: 5, img: logo5, name: "Partner 5" },
  { id: 6, img: logo6, name: "Partner 6" },
];

export const DestinationsData = [
  {
    id: "dest-1",
    name: "Sigiriya",
    category: "Cultural Wonder",
    description: "The 5th-century ancient rock fortress rising 200m above the jungle, featuring world-famous frescoes, water gardens, and lion paw entrance.",
    bestTime: "Dec to April",
    idealDays: "1 - 2 Days",
    tag: "UNESCO World Heritage",
    topHighlights: ["Lion Rock Summit Hike", "Mirror Wall & Ancient Frescoes", "Pidurangala Sunset View", "Ancient Royal Water Gardens"]
  },
  {
    id: "dest-2",
    name: "Kandy",
    category: "Cultural Heritage",
    description: "The sacred hill capital surrounded by misty mountain ranges and tea hills, home to the sacred Temple of the Tooth Relic and royal botanical gardens.",
    bestTime: "Year Round",
    idealDays: "2 Days",
    tag: "Sacred City",
    topHighlights: ["Temple of the Sacred Tooth", "Peradeniya Royal Botanical Gardens", "Kandy Lake Walk", "Traditional Kandyan Cultural Dance"]
  },
  {
    id: "dest-3",
    name: "Ella",
    category: "Hill Country",
    description: "A tranquil mountain village enveloped by tea estates, dramatic cloud gaps, world-famous train viaducts, and refreshing waterfalls.",
    bestTime: "Jan to May",
    idealDays: "2 - 3 Days",
    tag: "Hiker's Paradise",
    topHighlights: ["Nine Arch Bridge Train Watch", "Little Adam's Peak Trek", "Ravana Waterfall", "Flying Ravana Zip-line"]
  },
  {
    id: "dest-4",
    name: "Yala",
    category: "Wildlife Safari",
    description: "Sri Lanka's premier national park bordering the ocean, renowned globally for having one of the highest densities of wild leopards in the world.",
    bestTime: "Feb to June",
    idealDays: "1 - 2 Days",
    tag: "Big Game Safari",
    topHighlights: ["Leopard & Sloth Bear Tracking", "Wild Elephant Safari Drives", "Scenic Ocean Coastal Dunes", "Exotic Bird Watching"]
  },
  {
    id: "dest-5",
    name: "Mirissa",
    category: "Beach Escape",
    description: "A tropical beach paradise famous for gentle surf breaks, coconut palm hills, lively beach cafes, and the world's best blue whale watching.",
    bestTime: "Nov to April",
    idealDays: "2 - 4 Days",
    tag: "Ocean & Marine Life",
    topHighlights: ["Blue Whale Watching Cruises", "Coconut Tree Hill Photos", "Secret Beach Relaxation", "Fresh Seafood Beach Barbecues"]
  },
  {
    id: "dest-6",
    name: "Galle",
    category: "Historic City",
    description: "A living 17th-century Dutch colonial fortress by the sea, packed with cobblestone lanes, boutique cafes, jewelry shops, and historic lighthouses.",
    bestTime: "Dec to April",
    idealDays: "1 - 2 Days",
    tag: "Living Colonial Citadel",
    topHighlights: ["Galle Fort Wall Sunset Walk", "Galle Lighthouse Landmark", "Boutique Shopping & Gelato", "National Maritime Museum"]
  },
];
