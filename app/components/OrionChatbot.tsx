'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function OrionChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = async (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log('You said:', transcript);
        
        const userMessage: Message = { role: 'user', content: transcript };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setIsListening(false);
        setIsThinking(true);

        try {
          const response = await fetch('/api/orion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              messages: updatedMessages.slice(-10),
            }),
          });

          const data = await response.json();
          
          if (data.reply) {
            console.log('Orion replied:', data.reply);
            const assistantMessage: Message = { role: 'assistant', content: data.reply };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsThinking(false);
            
            // Speak the response
            speakText(data.reply);
          }
        } catch (error) {
          console.error('Error calling Orion API:', error);
          setIsThinking(false);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [messages]);

  const speakText = (text: string) => {
    console.log('Attempting to speak:', text);
    
    if (!window.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Wait a moment before speaking (fixes timing issues)
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.lang = 'en-US';

      utterance.onstart = () => {
        console.log('🔊 Started speaking');
        setIsSpeaking(true);
      };
      
      utterance.onend = () => {
        console.log('✅ Finished speaking');
        setIsSpeaking(false);
      };

      utterance.onerror = (event) => {
        console.error('❌ Speech error:', event);
        setIsSpeaking(false);
      };

      console.log('Calling speak()...');
      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }
    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Talk to Orion
        </h2>
        <p className="text-gray-400 text-sm">
          Click the button and speak. Orion will respond with voice.
        </p>
      </div>

      <div className="bg-black/30 rounded-xl p-4 mb-6 h-64 overflow-y-auto space-y-3">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center py-20">Start a conversation...</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'
              }`}>
                <p className="text-sm font-semibold mb-1">{msg.role === 'user' ? 'You' : 'Orion'}</p>
                <p>{msg.content}</p>
              </div>
            </div>
          ))
        )}
        {isThinking && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
              <p className="text-sm font-semibold mb-1">Orion</p>
              <p className="flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={isListening ? stopListening : startListening}
          disabled={isThinking || isSpeaking}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? 'bg-red-600 animate-pulse shadow-xl shadow-red-500/50'
              : isThinking || isSpeaking
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 hover:scale-110 shadow-xl shadow-blue-500/50'
          }`}
        >
          {isListening ? (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          )}
        </button>

        <p className="text-sm text-gray-400">
          {isListening ? (
            <span className="text-red-400 font-semibold">🎤 Listening...</span>
          ) : isThinking ? (
            <span className="text-yellow-400 font-semibold">🤔 Thinking...</span>
          ) : isSpeaking ? (
            <span className="text-green-400 font-semibold">🔊 Speaking...</span>
          ) : (
            'Click to speak'
          )}
        </p>
      </div>
    </div>
  );
}

export default OrionChatbot;