'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import SerenityBreath from '../components/SerenityBreath';
import { Wind, AlertTriangle } from 'lucide-react';

export default function ChatPage() {
  const [showBreath, setShowBreath] = useState(false);

  return (
    <div className="pt-16">
      {/* Safety Banner - Updated for India */}
      <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 text-sm">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-gray-300">
              <strong className="text-red-400">Crisis?</strong> Call{' '}
              <a href="tel:14416" className="text-brand-primary hover:underline font-bold">14416 (Tele-MANAS)</a> 
              {' '}or <a href="tel:112" className="text-brand-primary hover:underline font-bold">112</a>. 
              MindEase is not a replacement for professional care.
            </p>
          </div>
        </div>
      </div>

      {/* Breath Button */}
      <div className="fixed bottom-24 right-8 z-40">
        <button
          onClick={() => setShowBreath(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg shadow-blue-500/50 transition-all transform hover:scale-105"
        >
          <Wind className="w-5 h-5" />
          <span className="font-semibold">Serenity Breath</span>
        </button>
      </div>

      <ChatInterface />

      {showBreath && <SerenityBreath onClose={() => setShowBreath(false)} />}
    </div>
  );
}