'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, GraduationCap, MapPin, Code } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="gradient-text">MindEase</span>
            </h1>
            <p className="text-xl text-gray-400">
              Revolutionizing mental wellness through artificial intelligence
            </p>
          </div>

          {/* Developer Profile Card */}
          <div className="glass-effect rounded-3xl p-8 border border-brand-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-brand-primary" />
                Meet the Creator
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-white">Ranit Deria</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <GraduationCap className="w-4 h-4" /> B.Tech CSE '26 
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      <MapPin className="w-4 h-4" /> India
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Hi! I'm an engineering student passionate about leveraging technology to solve real-world problems. 
                    I built MindEase as a project to bridge the gap between mental health needs and accessible technology in India and beyond. 
                    My goal is to create a safe, judgment-free digital space where anyone can find immediate support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Target className="text-brand-primary" />
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              MindEase was created to make mental wellness support accessible to everyone, everywhere—from bustling metropolitan cities to remote towns.
              We believe that everyone deserves immediate access to compassionate guidance when they need it most. 
              Our AI-powered platform provides instant support while maintaining complete privacy and anonymity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-2xl p-6">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Who We Serve</h3>
              <p className="text-gray-400">
                Students facing exam stress, professionals dealing with burnout, and anyone in India or abroad seeking confidential mental wellness support.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Our Approach</h3>
              <p className="text-gray-400">
                Combining global evidence-based wellness techniques with culturally aware AI to deliver personalized, empathetic support relevant to your context.
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 bg-gradient-to-br from-brand-primary/10 to-purple-500/10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-brand-primary" />
              Important Disclaimer & Resources
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-brand-primary">
                ⚠️ MindEase is NOT a replacement for professional medical care
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>We do not diagnose mental health conditions</li>
                <li>We do not prescribe medication or treatment plans</li>
                <li>We do not provide emergency crisis intervention</li>
                <li>All conversations are for wellness support and guidance only</li>
              </ul>
              
              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="font-semibold text-white">If you are in crisis, please contact:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-gray-400 mb-1">India (Tele-MANAS)</p>
                    <a href="tel:14416" className="text-xl font-bold text-brand-primary hover:underline">14416</a>
                    <p className="text-xs text-gray-500 mt-1">24/7 Free Mental Health Support</p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-gray-400 mb-1">USA / International</p>
                    <a href="tel:988" className="text-xl font-bold text-brand-primary hover:underline">988</a>
                    <p className="text-xs text-gray-500 mt-1">Suicide & Crisis Lifeline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Next.js 14', 'TypeScript', 'Groq AI', 'Framer Motion', 'Tailwind CSS', 'Web Speech API', 'React Hooks', 'App Router'].map((tech) => (
                <div key={tech} className="glass-effect rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
                  <p className="font-semibold text-sm">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8">
            <p className="text-gray-400 mb-4">
              Built with ❤️ in India by <a href="https://profession-folio.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-brand-primary transition-colors">RanitDERIA</a>
            </p>
            <p className="text-sm text-gray-500">
              Demonstrating full-stack development, AI integration, and modern web technologies
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}