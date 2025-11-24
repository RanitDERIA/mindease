'use client'; 
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Brain, User } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    sentiment?: number;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hello! I'm MindEase, your AI wellness companion. I'm here to listen and support you. How are you feeling today?",
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [sentiment, setSentiment] = useState(50);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    // Ensure you have created this hook in hooks/useSpeechRecognition.ts
    const { isListening, transcript, startListening, stopListening, error } = useSpeechRecognition(); 

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return; 
        
        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setLoading(true); 
        
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages
                }),
            }); 
            
            const data = await res.json(); 
            
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.response,
                sentiment: data.sentiment_score
            }]);
            
            if (data.sentiment_score) {
                setSentiment(data.sentiment_score);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I apologize, but I'm having trouble connecting right now. Please try again."
            }]);
        }
        setLoading(false);
    }; 

    const handleVoiceToggle = () => {
        if (isListening) {
            stopListening();
            setInput(transcript);
        } else {
            startListening();
        }
    }; 

    const getSentimentColor = () => {
        if (sentiment < 33) return 'bg-red-500';
        if (sentiment < 66) return 'bg-yellow-500';
        return 'bg-green-500';
    }; 

    return (
        // Changed 100vh to 100dvh for mobile browsers to handle address bar resizing correctly
        <div className="flex flex-col h-[calc(100dvh-64px)]">
            {/* Sentiment Bar */}
            <div className="h-1.5 md:h-2 bg-gray-800 w-full">
                <motion.div
                    animate={{ width: `${sentiment}%` }}
                    className={`h-full ${getSentimentColor()} transition-colors duration-500`}
                />
            </div>  

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4">
                <AnimatePresence>
                    {messages.map((message, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`flex gap-2 md:gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user' ? 'bg-brand-primary' : 'bg-purple-500'}`}>
                                {message.role === 'user' ? <User className="w-4 h-4 md:w-5 md:h-5" /> : <Brain className="w-4 h-4 md:w-5 md:h-5" />}
                            </div>
                            <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-3 md:p-4 text-sm md:text-base ${message.role === 'user' ? 'bg-brand-primary text-white' : 'glass-effect'}`}>
                                <p className="whitespace-pre-wrap">{message.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence> 
                
                {loading && (
                    <div className="flex gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500 flex items-center justify-center">
                            <Brain className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className="glass-effect rounded-2xl p-3 md:p-4">
                            <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div> 
            
            {/* Input */}
            <div className="border-t border-white/10 p-3 md:p-4 glass-effect">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-2">
                    <input
                        type="text"
                        value={isListening ? transcript : input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type message..."
                        className="flex-1 px-3 py-2 md:px-4 md:py-3 bg-brand-card border border-gray-700 rounded-xl focus:outline-none focus:border-brand-primary text-sm md:text-base"
                        disabled={loading || isListening}
                    />
                    <button
                        type="button"
                        onClick={handleVoiceToggle}
                        className={`px-3 py-2 md:px-4 md:py-3 rounded-xl transition-colors flex items-center justify-center ${isListening ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        {isListening ? '🔴' : '🎤'}
                    </button>
                    <button
                        type="submit"
                        disabled={loading || (!input.trim() && !transcript)}
                        className="px-4 py-2 md:px-6 md:py-3 bg-brand-primary hover:bg-orange-600 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {loading ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : <Send className="w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                </form>
                {error && <p className="text-red-500 text-xs md:text-sm mt-2 text-center">{error}</p>}
            </div>
        </div>
    );
}