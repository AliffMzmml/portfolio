import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Left: Logo/Name */}
      <div className="flex-1 flex justify-start">
        <div className="flex flex-col group cursor-pointer">
            <span className="font-bold text-lg tracking-tight leading-none text-gray-900">AliffMzmml</span>
            <span className="text-[10px] tracking-widest text-gray-500 uppercase">UI/UX Designer</span>
        </div>
      </div>

      {/* Center: Desktop Nav */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-12">
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className="text-gray-600 hover:text-black font-medium text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right: Empty div to balance flex layout */}
      <div className="hidden md:flex flex-1 justify-end items-center">
      </div>

      {/* Mobile Toggle (Absolute Right on mobile) */}
      <div className="md:hidden flex-1 flex justify-end">
        <button 
            className="z-50 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className="text-3xl font-medium text-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;