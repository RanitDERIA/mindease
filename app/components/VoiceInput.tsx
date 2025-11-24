'use client';

import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

interface Props {
  onTranscript: (text: string) => void;
  isListening: boolean;
  onToggle: () => void;
}

export default function VoiceInput({ onTranscript, isListening, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-3 rounded-xl transition-all ${
        isListening 
          ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
    >
      {isListening ? '🔴 Recording' : '🎤 Voice'}
    </button>
  );
}
