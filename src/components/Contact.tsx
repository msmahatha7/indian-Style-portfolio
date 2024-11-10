import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Mail className="w-6 h-6 text-[#E07A5F]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">madhusudanmahatha14@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <Phone className="w-6 h-6 text-[#E07A5F]" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 7076209302</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#E07A5F]" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">KOLKATA, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#E07A5F] focus:ring-[#E07A5F]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#E07A5F] focus:ring-[#E07A5F]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#E07A5F] focus:ring-[#E07A5F]"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-[#E07A5F] text-white rounded-lg hover:bg-[#c56a52] transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}