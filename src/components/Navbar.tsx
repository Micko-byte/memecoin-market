
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './ui/navigation-menu';

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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/documentation" className="block p-2 hover:bg-secondary rounded-md">
                            Documentation
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/api" className="block p-2 hover:bg-secondary rounded-md">
                            API
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/status" className="block p-2 hover:bg-secondary rounded-md">
                            Status
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/blog" className="block p-2 hover:bg-secondary rounded-md">
                            Blog
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about" className="block p-2 hover:bg-secondary rounded-md">
                            About Us
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/terms" className="block p-2 hover:bg-secondary rounded-md">
                            Terms of Service
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/privacy" className="block p-2 hover:bg-secondary rounded-md">
                            Privacy Policy
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/contact" className="block p-2 hover:bg-secondary rounded-md">
                            Contact
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
            About Us
          </Link>
          
          <div className="pt-4 pb-2">
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Resources
              </p>
              <div className="mt-2 space-y-1">
                <a href="/documentation" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  Documentation
                </a>
                <a href="/api" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  API
                </a>
                <a href="/status" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  Status
                </a>
                <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  Blog
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Company
              </p>
              <div className="mt-2 space-y-1">
                <a href="/terms" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  Terms of Service
                </a>
                <a href="/privacy" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  Privacy Policy
                </a>
                <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary dark:hover:bg-gray-700">
                  Contact
                </a>
              </div>
            </div>
          </div>
          
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
