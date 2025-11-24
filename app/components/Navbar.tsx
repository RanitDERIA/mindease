'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Brain className="w-8 h-8 text-brand-primary group-hover:rotate-12 transition-transform" />
            <h3 className="text-2xl font-extrabold">MindEase<span className="font-extrabold text-orange-600">.</span></h3>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <Link href="/chat" className="hover:text-brand-primary transition-colors">Chat</Link>
            <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
            {/* <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link> */}
            <Link 
              href="/chat" 
              className="px-6 py-2 bg-brand-primary hover:bg-orange-600 rounded-full transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-white/10">Home</Link>
            <Link href="/chat" className="block px-3 py-2 rounded-lg hover:bg-white/10">Chat</Link>
            <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-white/10">About</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-lg hover:bg-white/10">Contact</Link>
            {/* <Link href="/privacy" className="block px-3 py-2 rounded-lg hover:bg-white/10">Privacy</Link> */}
          </div>
        </div>
      )}
    </nav>
  );
}