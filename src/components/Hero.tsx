import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80"
          alt="Ice cream background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Herbal Freshness, Custard-Filled Happiness
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Made fresh daily with premium ingredients and a whole lot of love.
            Experience flavors that will make your taste buds dance!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition flex items-center justify-center gap-2 text-lg">
              View Our Menu
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-gray-100 transition text-lg">
              Find a Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}