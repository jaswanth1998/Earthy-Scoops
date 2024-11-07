import React from 'react';
import { IceCream, Heart, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: <IceCream className="h-8 w-8 text-pink-500" />,
    title: "Artisanal Quality",
    description: "Each flavor is crafted in small batches using premium ingredients and time-honored techniques."
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-500" />,
    title: "Made with Love",
    description: "Our passionate team puts their heart into every scoop we serve."
  },
  {
    icon: <Users className="h-8 w-8 text-pink-500" />,
    title: "Family Owned",
    description: "Three generations of ice cream expertise, serving our community since 1985."
  },
  {
    icon: <Leaf className="h-8 w-8 text-pink-500" />,
    title: "Sustainable Practice",
    description: "We source locally when possible and use eco-friendly packaging."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings as a small family shop to becoming the community's favorite ice cream destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581932557968-41d9d3ae0f4f?auto=format&fit=crop&q=80"
              alt="Ice cream shop"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-6">A Sweet Legacy</h3>
            <p className="text-gray-600 mb-6">
              What started as a small dream in 1985 has blossomed into a beloved institution. 
              Our founder, Maria Rodriguez, began with just three flavors and a passion for 
              creating the perfect scoop. Today, we continue her legacy of quality, creativity, 
              and community connection.
            </p>
            <p className="text-gray-600">
              Every recipe we use has been perfected over generations, combining traditional 
              methods with innovative flavors. We're proud to be part of our community's 
              special moments and everyday joys.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-gray-50 rounded-xl">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}