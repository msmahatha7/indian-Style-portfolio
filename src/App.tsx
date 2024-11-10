import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Settings } from 'lucide-react';

export default function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="min-h-screen">
      <button
        onClick={() => setIsEditMode(!isEditMode)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-[#E07A5F] text-white rounded-full shadow-lg hover:bg-[#c56a52] transition-all"
        title="Toggle Edit Mode"
      >
        <Settings className="w-6 h-6" />
      </button>

      <Hero isEditMode={isEditMode} />
      <Skills isEditMode={isEditMode} />
      <Contact isEditMode={isEditMode} />
      <Footer isEditMode={isEditMode} />
    </div>
  );
}