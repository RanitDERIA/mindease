'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Server, UserCheck, Mail } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center">
                        <Shield className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-gray-400">Last updated: November 2025</p>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 space-y-10">
                        
                        {/* 1. The Core Promise */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Eye className="text-brand-primary" />
                                1. Data Collection & Usage
                            </h2>
                            <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-6 mb-4">
                                <p className="text-lg text-white font-medium mb-2">
                                    The Short Answer: We don't store your secrets.
                                </p>
                                <p className="text-gray-300">
                                    MindEase is designed as a stateless application. When you close your browser tab, your conversation history vanishes from your device. We do not have a database storing your chat logs.
                                </p>
                            </div>
                            <ul className="grid md:grid-cols-2 gap-4 mt-4">
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="block text-white mb-1">Chat History</strong>
                                    <span className="text-gray-400 text-sm">Processed in real-time, never saved to a persistent database.</span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="block text-white mb-1">Voice Data</strong>
                                    <span className="text-gray-400 text-sm">Processed locally using the Web Speech API in your browser.</span>
                                </li>
                            </ul>
                        </section>

                        {/* 2. Third Party Processors */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Server className="text-purple-500" />
                                2. How AI Processing Works
                            </h2>
                            <p className="text-gray-300 mb-4">
                                To generate intelligent responses, your text input is sent securely to our AI provider. Here is exactly what happens:
                            </p>
                            <ul className="space-y-3 text-gray-400 list-disc list-inside">
                                <li>
                                    <strong className="text-white">Groq API (LLM Provider):</strong> Your text is sent to Groq to generate the response. According to their API policy, data sent via the API is not used to train their models.
                                </li>
                                <li>
                                    <strong className="text-white">Vercel (Hosting):</strong> This website is hosted on Vercel. They collect anonymous usage logs (like page views) for performance monitoring, but cannot see the content of your chats.
                                </li>
                            </ul>
                        </section>

                        {/* 3. Security */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Lock className="text-green-500" />
                                3. Security Measures
                            </h2>
                            <ul className="space-y-2 text-gray-400 list-disc list-inside">
                                <li>All communication between your browser and our server is encrypted via HTTPS (TLS 1.3).</li>
                                <li>We do not implement user accounts, so there are no passwords to be stolen.</li>
                                <li>No cookies are used for tracking or advertising purposes.</li>
                            </ul>
                        </section>

                        {/* 4. Developer Info */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <UserCheck className="text-orange-500" />
                                4. About the Developer
                            </h2>
                            <p className="text-gray-300 mb-4">
                                This project is developed and maintained by <strong>Ranit Deria</strong>, a B.Tech (CSE) student from India, dedicated to ethical AI engineering.
                            </p>
                            <p className="text-gray-400 text-sm">
                                As an independent open-source initiative, this site prioritizes user privacy and voluntarily adheres to high data protection standards.
                            </p>
                        </section>

                    </div>

                    {/* Contact Footer */}
                    <div className="text-center glass-effect rounded-2xl p-8 border border-white/10">
                        <Mail className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                        <h3 className="text-xl font-bold mb-2">Privacy Questions?</h3>
                        <p className="text-gray-400 mb-4">
                            If you have concerns about how MindEase handles data, please reach out.
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-brand-primary rounded-full transition-all text-white font-semibold"
                        >
                            Contact Developer
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}