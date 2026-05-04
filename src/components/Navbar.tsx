import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'THE STANDARD', path: '/' },
    { name: 'GYM: POWER', path: '/gym' },
    { name: 'VITALITY: HOME', path: '/vitality' },
    { name: 'JOIN ELITE', path: '/contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group flex items-center space-x-2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-extrabold tracking-[0.2em] text-white"
          >
            UFOR<span className="text-gold">ZA</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center space-y-12 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-display font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="absolute bottom-12 text-[10px] tracking-[0.5em] text-gray-500 uppercase">
              The Elite Standard
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
