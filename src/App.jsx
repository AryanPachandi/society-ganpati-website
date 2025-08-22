import React, { useState, useEffect } from 'react';


import logo from "./assets/logo.jpeg";
import img1 from "./assets/img1.jpeg"
import img2 from "./assets/img2.jpeg"
import img3 from "./assets/img3.jpeg"
import img4 from "./assets/img4.jpeg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"
import img7 from "./assets/img7.jpeg"
import img8 from "./assets/img8.jpeg"
import img9 from "./assets/img9.jpeg"
import img10 from "./assets/img10.jpeg"
import img11 from "./assets/img11.jpeg"
import img12 from "./assets/img12.jpeg"
// import img13 from "./assets/img13.jpeg"

// import { Card } from "@/components/ui/card";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Users,
  Star,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Filter,
  Award,
  Heart,
  Image as ImageIcon
} from 'lucide-react';

// Mock data
const eventsData = [
  { id: 1, day: "Day 1 Date : 27/08/2025", title: "Ganesh Pooja (Aagaman)", time: "07:30 PM", category: "Religious", description: "Installation of Lord Ganesh idol with traditional rituals" },
  { id: 2, day: "Day 1 Date : 27/08/2025", title: "Musical Chair", time: "08:30 PM", category: "Cultural", description: "Fun musical chair competition" },

  { id: 3, day: "Day 2 Date : 28/08/2025", title: "1st to 10th Std Sports Competition", time: "05:00 PM", category: "Competition", description: "Sports competitions for school students" },
  { id: 4, day: "Day 2 Date : 28/08/2025", title: "Fireless Cooking", time: "After Aarti", category: "Competition", description: "Cooking without fire competition" },

  { id: 5, day: "Day 3 Date : 29/08/2025", title: "Fun Fair", time: "06:00 PM", category: "Cultural", description: "Community fun fair with games and stalls" },
  { id: 6, day: "Day 3 Date : 29/08/2025", title: "Home Minister", time: "09:00 PM", category: "Cultural", description: "Entertaining 'Home Minister' contest" },

  { id: 7, day: "Day 4 Date : 30/08/2025", title: "Atharvashirsha Pathan", time: "03:30 PM", category: "Religious", description: "Recitation of Atharvashirsha" },
  { id: 8, day: "Day 4 Date : 30/08/2025", title: "Fun Fair 2.0", time: "06:00 PM", category: "Cultural", description: "Second day of fun fair" },
  { id: 9, day: "Day 4 Date : 30/08/2025", title: "Cultural Night", time: "09:00 PM", category: "Cultural", description: "Cultural night with performances" },

  { id: 10, day: "Day 5 Date : 31/08/2025", title: "Essay & Drawing Competition", time: "10:00 AM", category: "Competition", description: "Essay writing and drawing competition" },
  { id: 11, day: "Day 5 Date : 31/08/2025", title: "Mehendi, Rangoli & Carrom", time: "12:30 PM", category: "Competition", description: "Mehendi, Rangoli and Carrom competitions" },
  { id: 12, day: "Day 5 Date : 31/08/2025", title: "Murti Making (for kids)", time: "01:30 PM", category: "Competition", description: "Clay idol making competition for kids" },
  { id: 13, day: "Day 5 Date : 31/08/2025", title: "Fun Fair for Kids", time: "After Aarti", category: "Cultural", description: "Fun fair designed for kids" },

  { id: 14, day: "Day 6 Date : 01/09/2025", title: "Prize Distribution", time: "After Aarti", category: "Cultural", description: "Prize distribution ceremony" },

  { id: 15, day: "Day 7 Date : 02/09/2025", title: "Box Cricket", time: "After Aarti", category: "Competition", description: "Box cricket matches" },
  { id: 16, day: "Day 7 Date : 02/09/2025", title: "Ganpati Visarjan", time: "08:00 PM", category: "Religious", description: "Farewell and immersion ceremony of Lord Ganesh" },
];


const galleryImages = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,

];

const notices = [
  { id: 1, title: "EveryDay Aarti at 7:30 PM", date: "2025-08-21", priority: "high" },
  { id: 2, title: "Volunteer Registration Open", date: "2025-08-20", priority: "medium" },
  { id: 3, title: "Parking Guidelines Updated", date: "2025-08-19", priority: "low" },
  { id: 4, title: "Cultural Program Rehearsals", date: "2025-08-18", priority: "medium" },
];

const sponsors = [
  { id: 1, name: "ABC Electronics", logo: "https://via.placeholder.com/150x100/FF6B35/FFFFFF?text=ABC+Electronics" },
  { id: 2, name: "XYZ Traders", logo: "https://via.placeholder.com/150x100/004E89/FFFFFF?text=XYZ+Traders" },
  { id: 3, name: "Local Restaurant", logo: "https://via.placeholder.com/150x100/009639/FFFFFF?text=Restaurant" },
  { id: 4, name: "Tech Solutions", logo: "https://via.placeholder.com/150x100/FF9500/FFFFFF?text=Tech+Solutions" },
  { id: 5, name: "Fashion Store", logo: "https://via.placeholder.com/150x100/7209B7/FFFFFF?text=Fashion+Store" },
  { id: 6, name: "Medical Center", logo: "https://via.placeholder.com/150x100/F72585/FFFFFF?text=Medical+Center" },
];

const faqData = [
  { question: "What are the Mandal timings?", answer: "The Mandal is open daily from 6:00 AM to 10:00 PM during the festival period." },
  { question: "How can I participate in events?", answer: "You can register for events through our Application page or contact us directly." },
  { question: "Is there parking available?", answer: "Yes, we have arranged parking facilities nearby. Please follow the parking guidelines." },
  { question: "Can I volunteer for the Mandal?", answer: "Absolutely! We welcome volunteers. Please contact us or visit our office for registration." },
  { question: "Are there any entry fees?", answer: "No, there are no entry fees. However, donations are welcome to support our activities." },
  { question: "What safety measures are in place?", answer: "We have security personnel, first aid facilities, and follow all safety protocols." },
];

// Utility Components
const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", size = "md", className = "", onClick, ...props }) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-300",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    religious: "bg-blue-100 text-blue-800",
    cultural: "bg-purple-100 text-purple-800",
    competition: "bg-green-100 text-green-800"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

const Input = ({ label, error, ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
    <input
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
    <textarea
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Select = ({ label, children, error, ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
    <select
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      {...props}
    >
      {children}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium">{item.question}</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-3 text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Toast Component
const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
    >
      {message}
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/application', label: 'Apply' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/notices', label: 'Notices' },
    // { path: '/sponsors', label: 'Sponsors' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="bg-gradient-to-r from-orange-500 to-red-500 shadow-lg sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-lg">
                <img
  src={logo}
  alt="Ganpati Mandal Logo"
  className="w-12 h-12 rounded-full object-cover"
/>

                </span>
              </div>
              <span className="text-white font-bold text-xl">Ganpati Mandal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-orange-200 transition-colors duration-200 ${
                  location.pathname === item.path ? 'border-b-2 border-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-200 focus:outline-none focus:text-orange-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-orange-600"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-white hover:text-orange-200 transition-colors duration-200 ${
                    location.pathname === item.path ? 'bg-orange-700 rounded' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4"> Society</h3>
          <p className="text-gray-400">
            Bringing the community together in devotion and celebration of Lord Ganesh.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>yashomagalmitramandal@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Yashomangal Society Pimpri Chinchwad</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/events" className="block text-gray-400 hover:text-white transition-colors">Events</Link>
            <Link to="/application" className="block text-gray-400 hover:text-white transition-colors">Apply</Link>
            <Link to="/gallery" className="block text-gray-400 hover:text-white transition-colors">Gallery</Link>
            <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2025 Yashomangal Society Ganpati Mandal. All rights reserved.</p>
        <p className="mt-2">Developed by <span className="text-orange-400 font-semibold">Aryan Pachandi  </span></p>
      </div>
    </div>
  </footer>
);

// Home Page Component
const Home = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2025-09-07T16:00:00'); // Visarjan day

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Yashomangal Society
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ganpati Mandal 2025
          </motion.h2>
          <motion.div
            className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img
              src={logo}
              alt="Lord Ganesh"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Join us in celebrating the divine presence of Lord Ganesh with traditional rituals,
            cultural programs, and community festivities that bring joy and blessings to all.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link to="/events">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                View Events
              </Button>
            </Link>
            <Link to="/application">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Countdown Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Countdown to Visarjan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">{value || 0}</div>
                <div className="text-gray-600 font-medium capitalize">{unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Our Mandal</h2>
              <p className="text-gray-600 mb-4">
                 Yashomangal Society Ganpati Mandal has been serving
                the community for over years. We organize grand celebrations that bring together
                people from all walks of life in devotion and unity.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to preserve traditional values while creating memorable experiences
                for devotees of all ages through cultural programs, competitions, and spiritual activities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">10+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">50K+</div>
                  <div className="text-gray-600">Annual Visitors</div>
                </div> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <img
                src={img1}
                alt="Mandal celebration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Events Page Component
const Events = () => {
  const [filter, setFilter] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(eventsData.filter(event => event.category === filter));
    }
  }, [filter]);

  const getTodayEvent = () => {
    const today = new Date().getDate();
    return eventsData.find(event => parseInt(event.day.split(' ')[1]) === today);
  };

  const todayEvent = getTodayEvent();

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Festival Events</h1>
          <p className="text-xl text-gray-600">Join us for 10 days of celebration and devotion</p>
        </motion.div>

        {/* Today's Event Highlight */}
        {todayEvent && (
          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">🎉 Today's Event</h2>
                  <h3 className="text-xl font-semibold">{todayEvent.title}</h3>
                  <p className="flex items-center mt-2">
                    <Clock className="h-4 w-4 mr-2" />
                    {todayEvent.time}
                  </p>
                </div>
                <Badge variant="default" className="bg-white text-orange-500">
                  {todayEvent.category}
                </Badge>
              </div>
              <p className="mt-4">{todayEvent.description}</p>
            </Card>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {['All', 'Religious', 'Cultural', 'Competition'].map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'primary' : 'secondary'}
              onClick={() => setFilter(category)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>{category}</span>
            </Button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="default" className="bg-orange-100 text-orange-800">
                    {event.day}
                  </Badge>
                  <Badge variant={event.category.toLowerCase()}>
                    {event.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="flex items-center text-gray-600 mb-3">
                  <Clock className="h-4 w-4 mr-2" />
                  {event.time}
                </p>
                <p className="text-gray-700">{event.description}</p>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full">
                    More Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Application Page Component
const Application = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    event: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.event) {
      newErrors.event = 'Please select an event';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const res = await fetch("https://formspree.io/f/xzzvnedd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowToast(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          event: '',
          message: ''
        });
        setErrors({});
      } else {
        console.error("Formspree submission failed");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toast
        message="Application submitted successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Event Application</h1>
          <p className="text-xl text-gray-600">Join us in our celebrations and activities</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name *"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                error={errors.fullName}
              />

              <Input
                label="Mobile Number *"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                error={errors.mobile}
              />

              <Input
                label="Email Address *"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                error={errors.email}
              />

              <Select
                label="Event Interested In *"
                name="event"
                value={formData.event}
                onChange={handleChange}
                error={errors.event}
              >
                <option value="">Select an event</option>
                {eventsData.map((event) => (
                  <option key={event.id} value={event.title}>
                    {event.title} - {event.day}
                  </option>
                ))}
              </Select>

              <Textarea
                label="Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any additional information or requirements..."
                rows={4}
              />

              <div className="text-center">
                <Button type="submit" size="lg" className="px-12">
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="p-6 bg-blue-50">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              For any queries regarding the application process, feel free to contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918767907739" className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800">
                <Phone className="h-4 w-4" />
                <span>+91 8767907739</span>
              </a>
              <a href="mailto:yashomagalmitramandal@gmail.com" className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800">
                <Mail className="h-4 w-4" />
                <span>yashomagalmitramandal@gmail.com</span>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">Memories from our celebrations</p>
        </motion.div>

        {/* Grid of images */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md bg-gray-200 cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Gallery+Image";
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-8 w-8" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};






// Notices Page Component
const Notices = () => {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 border-red-500 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'low': return 'bg-blue-100 border-blue-500 text-blue-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Important Notices</h1>
          <p className="text-xl text-gray-600">Stay updated with latest announcements</p>
        </motion.div>

        {/* Scrolling Notice Ticker */}
        <motion.div
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg shadow-lg mb-8 overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex items-center">
            <span className="font-bold mr-4 flex-shrink-0">🔔 LATEST:</span>
            <motion.div
              key={currentNoticeIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold"
            >
              {notices[currentNoticeIndex].title}
            </motion.div>
          </div>
        </motion.div>

        {/* Notice Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className={`p-6 border-l-4 ${getPriorityColor(notice.priority)} hover:shadow-lg transition-shadow duration-300`}>
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="default" className={getPriorityColor(notice.priority)}>
                    {notice.priority.toUpperCase()} PRIORITY
                  </Badge>
                  <span className="text-sm text-gray-500">{notice.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
                <p className="text-gray-700">

                </p>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Card className="p-6 bg-red-50 border-red-200">
            <h3 className="text-lg font-semibold mb-2 text-red-800">🚨 Emergency Contact</h3>
            <p className="text-red-700 mb-4">
              For urgent matters during festival days, please contact our emergency helpline
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel: +918767907739" className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Emergency: +91 8767907739</span>
                <span>Emergency: +91 8669230258</span>
              </a>
              <a href="https://wa.me/8468913733" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Sponsors Page Component
const Sponsors = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-600">Thank you for supporting our celebration</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white">
                <div className="mb-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-24 object-contain mx-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{sponsor.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Thank you for your generous support in making our festival celebrations possible.
                </p>
                <div className="flex items-center justify-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action for New Sponsors */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
            <p className="text-lg mb-6">
              Join us in spreading joy and celebrating our rich cultural heritage.
              Your support helps us organize better events and serve the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+918767907739">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Call Now
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>

        {/* Sponsorship Benefits */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">Sponsorship Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community Reach</h3>
              <p className="text-gray-600">Connect with over 50,000 festival visitors and local community members</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Brand Recognition</h3>
              <p className="text-gray-600">Get your brand prominently displayed throughout the festival duration</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Social Impact</h3>
              <p className="text-gray-600">Contribute to preserving cultural traditions and community development</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// FAQ Page Component
const FAQ = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our festival</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="p-8">
            <Accordion items={faqData} />
          </Card>
        </motion.div>

        {/* Still have questions section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="p-8 bg-blue-50">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Feel free to reach out to us through any of the following channels.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="tel:+918767907739" className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </a>
              <a href="mailto:info@ganpatimandal.org" className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
              <Link to="/contact" className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                <MapPin className="h-5 w-5" />
                <span>Visit Us</span>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our Mandal committee</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">pune<br />Pimpri Chinchwad</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+918767907739" className="hover:text-orange-500">+91 8767907739</a><br />
                      <a href="tel:+918669230258" className="hover:text-orange-500">+91 8669230258</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ganpatimandal.org" className="hover:text-orange-500">yashomagalmitramandal@gmail.com</a><br />
                      {/* <a href="mailto:events@ganpatimandal.org" className="hover:text-orange-500">events@ganpatimandal.org</a> */}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Festival Hours</h3>
                    <p className="text-gray-600">
                      Daily: 6:00 AM - 10:00 PM<br />
                      Office: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4">Connect with us</h3>
                <div className="flex space-x-4">
                  <a href="https://wa.me/8767907739" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <span className="text-sm font-bold">@</span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="p-0 overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.746041354566!2d73.79146427600836!3d18.630489065805815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b2da6d56cf%3A0x33d187818c101d91!2sYashomangal%20Society%2C%20Harshal%20Residency%2C%20Gawade%20Nagar%2C%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1755834042348!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mandal Location"
              />
            </Card>
          </motion.div>
        </div>

        {/* Floating WhatsApp Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://wa.me/8767907739"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main App Component with Routing
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/application" element={<Application />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notices" element={<Notices />} />
            {/* <Route path="/sponsors" element={<Sponsors />} /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
