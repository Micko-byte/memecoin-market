
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isActive = (path: string) => {
    if (path === '/' || path === '/home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              MavMeme
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/home" 
              className={`text-sm font-medium transition-colors ${isActive('/home') ? 'text-primary' : 'hover:text-primary/80'}`}
            >
              Home
            </Link>
            <Link 
              to="/markets" 
              className={`text-sm font-medium transition-colors ${isActive('/markets') ? 'text-primary' : 'hover:text-primary/80'}`}
            >
              Markets
            </Link>
            <Link 
              to="/trade" 
              className={`text-sm font-medium transition-colors ${isActive('/trade') ? 'text-primary' : 'hover:text-primary/80'}`}
            >
              Trade
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary/80'}`}
            >
              About
            </Link>
            <ThemeToggle />
            <button className="button-primary">
              Launch App
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-primary"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="glass-panel dark:bg-gray-800/90 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/home"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/home') ? 'bg-secondary text-primary' : 'hover:bg-secondary dark:hover:bg-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/markets"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/markets') ? 'bg-secondary text-primary' : 'hover:bg-secondary dark:hover:bg-gray-700'
            }`}
          >
            Markets
          </Link>
          <Link
            to="/trade"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/trade') ? 'bg-secondary text-primary' : 'hover:bg-secondary dark:hover:bg-gray-700'
            }`}
          >
            Trade
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about') ? 'bg-secondary text-primary' : 'hover:bg-secondary dark:hover:bg-gray-700'
            }`}
          >
            About
          </Link>
          <div className="pt-2">
            <button className="w-full button-primary">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
