import React, { useEffect, useRef } from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const typingRef = useRef<HTMLDivElement>(null);
  const text = "Building the future, one line of code at a time...";
  
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    
    const typeText = () => {
      if (!typingRef.current) return;
      
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        typingRef.current.textContent = currentText + '|';
        currentIndex++;
        setTimeout(typeText, 100);
      } else {
        typingRef.current.textContent = currentText;
        setTimeout(() => {
          currentText = '';
          currentIndex = 0;
          typeText();
        }, 3000);
      }
    };
    
    typeText();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <div
              ref={typingRef}
              className="text-gray-400 h-12 font-mono"
            ></div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#E07A5F] transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-[#E07A5F] transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-[#E07A5F] transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-[#E07A5F] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/msmahatha" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#E07A5F] transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.instagram.com/msmahatha/" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#E07A5F] transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a> 
            <Instagram className="w-8 h-8" />
              <a 
                href="https://www.linkedin.com/in/madhusudan-mahatha-373b38229" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#E07A5F] transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://x.com/MsMahatha" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#E07A5F] transition-colors group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Madhusudan Mahatha. All rights reserved.</p>
            <p className="mt-2 text-sm">Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}