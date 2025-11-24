import Link from 'next/link';
import Hero from './components/Hero';
import Features from './components/Features';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-purple-500/20 animate-gradient bg-[length:400%_400%]" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Wellness Journey?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free session now. No signup required.
              </p>
              
              <Link 
                href="/chat"
                className="inline-block px-8 py-4 bg-brand-primary hover:bg-orange-600 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Start Chatting Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}