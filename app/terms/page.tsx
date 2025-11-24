'use client';

import { motion } from 'framer-motion';
import { Scale, ScrollText, AlertTriangle, ShieldCheck, Gavel, FileWarning, Mail } from 'lucide-react';

export default function Terms() {
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
                        <Scale className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                        <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
                        <p className="text-gray-400">Last updated: November 2025</p>
                    </div>

                    {/* Main Content */}
                    <div className="glass-effect rounded-3xl p-8 space-y-10">
                        
                        {/* 1. Acceptance */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <ScrollText className="text-brand-primary" />
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-300 mb-4">
                                By accessing or using MindEase ("the Service"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                            </p>
                            <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-4">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-brand-primary">Context:</strong> MindEase is an independent engineering initiative developed by <strong>Ranit Deria</strong>. While fully functional, it is not a licensed medical product.
                                </p>
                            </div>
                        </section>

                        {/* 2. Medical Disclaimer - CRITICAL */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <AlertTriangle className="text-red-500" />
                                2. Medical Disclaimer
                            </h2>
                            <p className="text-gray-300 mb-4 font-semibold">
                                MindEase is an AI-powered companion, NOT a doctor or healthcare provider.
                            </p>
                            <ul className="space-y-3 text-gray-400 list-disc list-inside bg-white/5 p-6 rounded-2xl border border-white/5">
                                <li>The Service does not provide medical diagnosis, treatment, or prescriptions.</li>
                                <li>Information provided by the AI is for support and educational purposes only.</li>
                                <li>Never disregard professional medical advice because of something you have read on this app.</li>
                                <li className="text-white font-medium pt-2">If you are in a crisis or emergency, stop using this app and call emergency services (112/14416 in India or 988 in the US) immediately.</li>
                            </ul>
                        </section>

                        {/* 3. AI Limitations */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <FileWarning className="text-yellow-500" />
                                3. Limitations of AI
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Our Service uses Large Language Models (LLMs) to generate responses. You acknowledge that:
                            </p>
                            <ul className="space-y-2 text-gray-400 list-disc list-inside">
                                <li>AI can "hallucinate" or provide incorrect information.</li>
                                <li>The AI does not have real feelings, consciousness, or the ability to intervene in real-world situations.</li>
                                <li>Responses are generated based on patterns, not clinical judgment.</li>
                            </ul>
                        </section>

                        {/* 4. User Conduct */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <ShieldCheck className="text-green-500" />
                                4. User Responsibilities
                            </h2>
                            <p className="text-gray-300 mb-4">
                                You agree NOT to use the Service to:
                            </p>
                            <ul className="space-y-2 text-gray-400 list-disc list-inside">
                                <li>Generate harmful, threatening, or illegal content.</li>
                                <li>Impersonate others or misrepresent your affiliation with any person or entity.</li>
                                <li>Attempt to bypass our safety guardrails or reverse-engineer the AI prompts.</li>
                                <li>Input sensitive personal health information (PHI) or personally identifiable information (PII).</li>
                            </ul>
                        </section>

                        {/* 5. Liability */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Gavel className="text-purple-500" />
                                5. Limitation of Liability
                            </h2>
                            <p className="text-gray-300">
                                To the fullest extent permitted by law, MindEase and its creator shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to mental distress or health complications resulting from your use of the Service. You use this tool entirely at your own risk.
                            </p>
                        </section>

                    </div>

                    {/* Contact Footer */}
                    <div className="text-center glass-effect rounded-2xl p-8 border border-white/10">
                        <Mail className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                        <h3 className="text-xl font-bold mb-2">Questions?</h3>
                        <p className="text-gray-400 mb-4">
                            If you have questions about these terms or the project itself, please reach out.
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