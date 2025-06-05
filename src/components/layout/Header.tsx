import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Bell, ChevronDown, X } from 'lucide-react';
import Button from '../common/Button';
import SearchBar from '../common/SearchBar';
import { popularCategories } from '../../data/mockData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Docsity</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Blog
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2">
                Subjects <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {popularCategories.slice(0, 5).map((category) => (
                    <a
                      key={category.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </a>
                  ))}
                  <a href="#" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-gray-100">
                    View All Subjects
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Universities
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              How It Works
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Help
            </a>
          </nav>

          {/* Desktop Search & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-64">
              <SearchBar onSearch={handleSearch} />
            </div>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Join Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-2">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Blog
            </Link>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Subjects
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Universities
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              How It Works
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Help
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="flex items-center space-x-2 px-3">
                <Button variant="outline" size="sm" fullWidth>
                  Sign In
                </Button>
                <Button size="sm" fullWidth>
                  Join Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Custom Book Icon for the logo
const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

export default Header;