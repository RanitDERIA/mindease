'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function SerenityBreath({ onClose }: Props) {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [counter, setCounter] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev === 1) {
          if (phase === 'inhale') {
            setPhase('hold');
            return 7;
          } else if (phase === 'hold') {
            setPhase('exhale');
            return 8;
          } else {
            setPhase('inhale');
            setCycles(c => c + 1);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  const circleSize = phase === 'inhale' ? 320 : phase === 'hold' ? 320 : 180;
  const instructions = {
    inhale: 'Breathe In',
    hold: 'Hold',
    exhale: 'Breathe Out'
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 glass-effect rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center" onClick={(e) => e.stopPropagation()}>
          <motion.div
            animate={{ 
              width: circleSize, 
              height: circleSize,
              scale: phase === 'hold' ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              duration: phase === 'inhale' ? 4 : phase === 'exhale' ? 8 : 0,
              scale: { repeat: Infinity, duration: 2 }
            }}
            className="rounded-full bg-gradient-to-br from-brand-primary via-purple-600 to-pink-600 mx-auto flex items-center justify-center shadow-2xl shadow-brand-primary/50"
          >
            <div className="text-white">
              <div className="text-8xl font-bold mb-4">{counter}</div>
              <div className="text-2xl font-light opacity-80">{instructions[phase]}</div>
            </div>
          </motion.div>

          <div className="mt-12 space-y-4">
            <p className="text-xl text-gray-400">
              4-7-8 Breathing Technique
            </p>
            <p className="text-sm text-gray-500">
              Cycles completed: {cycles}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}