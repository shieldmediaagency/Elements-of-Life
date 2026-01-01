import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, ShieldCheck } from 'lucide-react';
import { getConciergeResponse } from '../services/gemini';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Welcome to Elements of Life. I am your private concierge. Whether you're inquiring about investment yields, floor plan specifics, or neighborhood privacy, I am here to assist." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await getConciergeResponse(userMsg, messages);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        aria-label="Open concierge chat"
        className={`fixed bottom-8 right-8 z-50 bg-stone-100 text-stone-900 p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-3`}
      >
        <div className="relative">
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <span className="font-serif font-medium pr-2">Concierge</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[95vw] md:w-[450px] h-[600px] bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-stone-850 p-4 flex justify-between items-center border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                <ShieldCheck size={20} className="text-gold-400" />
              </div>
              <div>
                <h3 className="font-serif text-white">Director's Desk</h3>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Online Now
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-stone-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-900/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stone-800 text-white rounded-br-sm' 
                    : 'bg-stone-950 border border-stone-800 text-stone-300 rounded-bl-sm shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-stone-950 border border-stone-800 text-stone-400 p-4 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-stone-850 border-t border-stone-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about pricing, floor plans, or amenities..."
                className="w-full bg-stone-900 text-white p-4 pr-12 rounded-xl border border-stone-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-stone-600 text-sm"
              />
              <button 
                onClick={handleSend}
                aria-label="Send message"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-400 hover:text-gold-500 p-2"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {['Investment Potential', 'Privacy Features', 'Viewing Availability'].map((chip) => (
                <button 
                  key={chip}
                  onClick={() => {
                    setInput(chip);
                    // Optional: auto-send
                  }}
                  className="whitespace-nowrap px-3 py-1.5 bg-stone-800 text-stone-400 text-xs rounded-full hover:bg-stone-700 hover:text-white transition-colors border border-stone-700"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};