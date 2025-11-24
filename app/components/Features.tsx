'use client';

import { motion } from 'framer-motion';
import { Brain, Mic, Activity, Shield, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Conversation',
    description: 'Intelligent responses powered by advanced language models trained on wellness psychology',
    color: 'from-brand-primary to-orange-600',
  },
  {
    icon: Mic,
    title: 'Voice-to-Vent',
    description: 'Speak your thoughts naturally with our speech recognition technology',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Activity,
    title: 'Serenity Breath',
    description: 'Guided 4-7-8 breathing exercises with beautiful animations',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Complete Privacy',
    description: 'No data stored. Everything resets on refresh. Your privacy is guaranteed',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Instant Support',
    description: 'Get immediate responses 24/7 without appointments or waiting',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Sentiment Tracking',
    description: 'Visual mood indicators that adapt to your emotional state in real-time',
    color: 'from-red-500 to-pink-500',
  },
];

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="gradient-text"> Your Wellbeing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for mental wellness support in one intelligent platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}