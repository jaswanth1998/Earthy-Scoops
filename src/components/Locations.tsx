import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    name: "Downtown Sweet Spot",
    address: "123 Ice Cream Lane",
    city: "Sweet City, SC 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 11am-10pm",
    image: "https://images.unsplash.com/photo-1472555794301-77353b152fb7?auto=format&fit=crop&q=80"
  },
  {
    name: "Beachside Parlor",
    address: "456 Ocean Drive",
    city: "Sweet City, SC 12346",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 12pm-11pm",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
  },
  {
    name: "Mall Location",
    address: "789 Shopping Center",
    city: "Sweet City, SC 12347",
    phone: "(555) 345-6789",
    hours: "Mon-Sat: 10am-9pm",
    image: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?auto=format&fit=crop&q=80"
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600">Find your nearest Earthy Scoops location</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-pink-500 mt-1" />
                    <div>
                      <p>{location.address}</p>
                      <p>{location.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-pink-500" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-pink-500" />
                    <p>{location.hours}</p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}