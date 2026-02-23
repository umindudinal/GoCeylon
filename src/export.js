import pakg1 from "./assets/packages1.webp";
import pakg2 from "./assets/packages2.webp";
import pakg3 from "./assets/packages3.webp";
import pakg4 from "./assets/packages4.webp";
import pakg5 from "./assets/packages5.webp";
import pakg6 from "./assets/packages6.webp";
import { FaBox } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const Tourpackages = [
  {
    name: "Cultural Triangle Explorer",
    about: "Visit the ancient wonders of Sigiriya, explore the historic caves of Dambulla Cave Temple, and experience the cultural charm of Kandy.",
    btn: "View Tour Detail",
    price: "$69",
    days: "4D/3N",
    pax: "7",
    image: pakg1,
  },
  {
    name: "Hill Country Scenic Journey",
    about: "Enjoy tea plantations, waterfalls, and breathtaking train views through Nuwara Eliya and Ella.",
    btn: "View Tour Detail",
    price: "$79",
    days: "2D/4N",
    pax: "10",
    image: pakg2,
  },
  {
    name: "Wildlife Safari Adventure",
    about: "Experience an exciting jeep safari in Yala National Park, home to leopards, elephants, and exotic birds.",
    btn: "View Tour Detail",
    price: "$99",
    days: "7D/4N",
    pax: "12",
    image: pakg3,
  },
  {
    name: "South Coast Beach Escape",
    about: "Relax on the tropical beaches of Mirissa, explore whale watching tours, and visit the historic fort city of Galle.",
    btn: "View Tour Detail",
    price: "$85",
    days: "8D/2N",
    pax: "14",
    image: pakg4,
  },
  {
    name: "Ultimate Sri Lanka Highlights Tour",
    about: "A complete island experience covering culture, hill country, safari, and beaches across Sri Lanka’s most famous destinations.",
    btn: "View Tour Detail",
    price: "$299",
    days: "1D/2N",
    pax: "3",
    image: pakg5,
  },
  {
    name: "East Coast Beach & Culture Tour",
    about: "Relax in Trincomalee, enjoy Nilaveli Beach, and visit Koneswaram Temple — a perfect east coast escape.",
    btn: "View Tour Detail",
    price: "$79",
    days: "9D/3N",
    pax: "13",
    image: pakg6,
  },
];

export const FeaturesData = [
  {
    icon: FaBox,
    name: "Professional Local Tour Guides",
    about: "Our experienced Sri Lankan tour guides know the best destinations, hidden gems, and cultural highlights to give you an authentic island experience.",
  },
  {
    icon: RiVerifiedBadgeFill,
    name: "Certified & Trusted Travel Agency",
    about: "We are a registered and trusted Sri Lanka travel agency committed to providing safe, transparent, and high-quality tour services for every traveler.",
  },
  {
    icon: BiSupport,
    name: "24/7 Customer Support",
    about: "Our friendly support team is available 24/7 via phone and WhatsApp to assist you anytime during your Sri Lanka journey.",
  },
];
