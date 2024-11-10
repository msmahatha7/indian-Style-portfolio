import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import EditableText from './EditableText';

interface HeroProps {
  isEditMode: boolean;
}

export default function Hero({ isEditMode }: HeroProps) {
  const [content, setContent] = useState({
    name: 'Madhusudan Mahatha',
    title: 'Full Stack Developer',
    description: 'Transforming ideas into elegant solutions through creative design and modern technology.',
    image: 'https://i.ibb.co/StVJhwP/Whats-App-Image-2024-07-20-at-15-14-35-1.jpg'
  });

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <EditableText
                isEditMode={isEditMode}
                value={content.name}
                onChange={(value) => setContent({ ...content, name: value })}
              />
              <span className="gradient-text block">
                <EditableText
                  isEditMode={isEditMode}
                  value={content.title}
                  onChange={(value) => setContent({ ...content, title: value })}
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              <EditableText
                isEditMode={isEditMode}
                value={content.description}
                onChange={(value) => setContent({ ...content, description: value })}
              />
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-[#E07A5F] text-white rounded-lg hover:bg-[#c56a52] transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-[#E07A5F] text-[#E07A5F] rounded-lg hover:bg-[#E07A5F] hover:text-white transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
          
          <div className="relative float-animation">
            {isEditMode ? (
              <input
                type="text"
                value={content.image}
                onChange={(e) => setContent({ ...content, image: e.target.value })}
                className="absolute -top-12 left-0 w-full p-2 text-sm border rounded"
                placeholder="Image URL"
              />
            ) : null}
            <img
              src={content.image}
              alt="Hero"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#E07A5F]" />
      </div>
    </section>
  );
}