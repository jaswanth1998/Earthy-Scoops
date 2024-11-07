import React, { useState } from 'react';
import { IceCream, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <IceCream className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">Earthy Scoops</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-pink-500 transition">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition">About</a>
            <a href="#locations" className="text-gray-700 hover:text-pink-500 transition">Locations</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition">Contact</a>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              Order Now
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="#menu"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#locations"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full mt-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}