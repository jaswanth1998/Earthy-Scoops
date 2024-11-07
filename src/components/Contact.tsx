import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-gray-600">hello@scoopsmiles.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Customer Service</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium mb-2">Do you offer catering services?</h4>
                  <p className="text-gray-600">Yes! We cater for events of all sizes. Contact us for details.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium mb-2">Are your products allergen-free?</h4>
                  <p className="text-gray-600">We offer various options for different dietary needs. Please ask about specific allergens.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium mb-2">Can I order ice cream cake in advance?</h4>
                  <p className="text-gray-600">Yes, we recommend ordering custom cakes at least 48 hours in advance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}