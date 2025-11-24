'use client';

import { motion } from 'framer-motion';

interface Props {
  score: number;
  color: string;
}

export default function SentimentIndicator({ score, color }: Props) {
  return (
    <div className="fixed top-16 left-0 right-0 z-40">
      <motion.div
        animate={{ backgroundColor: color }}
        className="h-1"
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ width: `${score}%` }}
          className="h-full bg-white/50"
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}