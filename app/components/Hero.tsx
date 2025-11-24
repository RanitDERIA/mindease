'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Heart, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-purple-500/5 to-pink-500/10 animate-gradient bg-[length:400%_400%]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:items-stretch md:h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-center py-8 md:py-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm">AI-Powered Mental Wellness</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Journey to
              <span className="gradient-text block">Inner Peace</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Experience personalized mental wellness support with our advanced AI companion. 
              Get instant guidance, breathing exercises, and empathetic conversations—anytime, anywhere.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/chat"
                className="px-8 py-4 bg-brand-primary hover:bg-orange-600 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Session
                <Sparkles className="w-5 h-5" />
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 glass-effect rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-400">100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-400">Always Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-400">AI-Powered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-end justify-center md:h-full mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
            <motion.div 
              className="relative w-full max-w-lg md:h-full md:max-w-none flex items-end justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile: Normal aspect ratio */}
              <div className="md:hidden relative w-full aspect-square">
                <Image
                  src="/girl.png"
                  alt="Mental Wellness Companion"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Desktop: Full height to bottom */}
              <div className="hidden md:flex relative h-full w-full items-end">
                <Image
                  src="/girl.png"
                  alt="Mental Wellness Companion"
                  width={600}
                  height={800}
                  className="object-contain object-bottom drop-shadow-2xl w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}