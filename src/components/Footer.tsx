import React from 'react';
import { IceCream, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <IceCream className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">Earthy Scoops</span>
            </div>
            <p className="text-gray-400">
              Bringing joy one scoop at a time since 1985.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-400 hover:text-pink-500 transition">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-pink-500 transition">Locations</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-pink-500 transition">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Ice Cream Lane</li>
              <li>Sweet City, SC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@scoopsmiles.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Earthy Scoops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}