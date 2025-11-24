'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 border-t border-white/10 relative overflow-hidden mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/footer-bg.png')] opacity-5 mix-blend-overlay bg-cover bg-center pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Brain className="w-8 h-8 text-brand-primary group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-extrabold text-white">MindEase<span className="font-extrabold text-brand-primary">.</span></h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your AI-powered mental wellness companion, built with care for your wellbeing.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/RanitDERIA" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ranit-deria-916864257/" },
                { icon: Mail, href: "mailto:bytebardderia@gmail.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-primary">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Start Chat', path: '/chat' },
                { name: 'About Us', path: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-primary">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Crisis Resources (India Specific) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-primary">
              Crisis Resources (India)
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <span>🆘</span>
                </div>
                <span>Tele-MANAS (Govt): <a href="tel:14416" className="text-brand-primary hover:underline font-semibold">14416</a></span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <span>💬</span>
                </div>
                <span>Vandrevala Fdn: <a href="https://wa.me/919999666555" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-colors">WhatsApp Chat</a></span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <span>🌐</span>
                </div>
                <a href="https://telemanas.mohfw.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Official Portal</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MindEase. All Rights Reserved.</p>
          
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </motion.div>
            <span>by <a href="https://profession-folio.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-brand-primary transition-colors">RanitDERIA</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}