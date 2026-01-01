import React, { useState, useEffect } from 'react';
import { X, Calendar, FileText, Phone, CheckCircle2, Download, ArrowRight, PlayCircle } from 'lucide-react';

// Real Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaVi23b2Z_l-Up1__zsvHP7RouGAtv8hpzjVPunc1YAQ0I_LP7UPx8SWZCmVMPnB-NOg/exec";

// Document Links
const PRICING_SHEET_URL = "https://drive.google.com/file/d/1n_fagjH6xzCDRB_FWJXgv5f9t80Du6o8/view?usp=share_link";
const VIRTUAL_TOUR_EMBED_URL = "https://www.youtube.com/embed/mJVuZiK9a6I?autoplay=1&rel=0";

const MASTER_PLAN_LINKS = [
  { name: 'Dawn Series (1,791 sft)', url: 'https://elementsoflife.co.in/wp-content/uploads/2025/11/A-101-1791.pdf' },
  { name: 'Dusk Series (1,803 sft)', url: 'https://elementsoflife.co.in/wp-content/uploads/2025/11/A-102-1803.pdf' },
  { name: 'Prism Series (1,793 sft)', url: 'https://elementsoflife.co.in/wp-content/uploads/2025/11/A-104-1793.pdf' }
];

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  ctaText?: string;
  context?: 'generic' | 'masterplan' | 'pricing' | 'virtual_tour';
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "Request Briefing", 
  ctaText = "Send Request",
  context = 'generic'
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for previous access on mount/open
  useEffect(() => {
    if (isOpen) {
      const hasUnlocked = localStorage.getItem('eol_unlocked') === 'true';
      if (hasUnlocked && (context === 'masterplan' || context === 'pricing' || context === 'virtual_tour')) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(false);
      }
      setIsSubmitting(false);
      setError(null);
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, context]);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get('details_check')) {
      console.log("Spam bot detected.");
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    const params = new URLSearchParams();
    params.append("FirstName", formData.get("FirstName") as string || "");
    params.append("LastName", formData.get("LastName") as string || "");
    params.append("Phone", formData.get("Phone") as string || "");
    params.append("Email", formData.get("Email") as string || "");
    params.append("Date", new Date().toLocaleString());
    params.append("Interests", selectedInterests.join(", "));
    params.append("Context", context);

    try {
       await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: params,
          mode: 'no-cors'
       });
      localStorage.setItem('eol_unlocked', 'true');
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Connection interrupted. Please try again or call +91 98800 17751.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const options = [
    { id: 'dawn', label: 'Dawn Series (East Facing)', sqft: '1,791 sft' },
    { id: 'dusk', label: 'Dusk Series (West Facing)', sqft: '1,803 sft' },
    { id: 'prism', label: 'Prism Series (East Corner)', sqft: '1,793 sft' }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-md transition-opacity duration-300" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full h-[100dvh] md:h-auto md:max-h-[90vh] md:w-auto md:max-w-4xl bg-stone-900 border-0 md:border border-stone-800 shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 md:rounded-lg overflow-hidden">
        
        {/* MOBILE HEADER (Visible only on mobile) */}
        <div className="flex md:hidden items-center justify-between p-4 bg-stone-900 border-b border-stone-800 shrink-0 z-20">
            <h3 className="font-serif text-lg text-white">{title}</h3>
            <button 
                onClick={onClose}
                className="text-stone-400 hover:text-white p-2"
            >
                <X size={24} />
            </button>
        </div>

        {/* DESKTOP SIDEBAR (Hidden on mobile) */}
        <div className="hidden md:flex md:w-5/12 bg-stone-850 p-10 flex-col justify-between border-r border-stone-800 shrink-0">
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">{title}</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              Elements of Life is a low-inventory project. We prioritize serious inquiries for private walkthroughs.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                  <Calendar size={16} className="text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Private Site Visit</h4>
                  <p className="text-stone-500 text-xs">Experience the micro-climate</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                  <FileText size={16} className="text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Digital Brochure</h4>
                  <p className="text-stone-500 text-xs">Detailed floor plans & specs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="border-t border-stone-800 pt-8">
              <p className="text-stone-500 text-[10px] uppercase tracking-widest mb-3">Sales Director Direct Line</p>
              <a href="tel:+919880017751" className="text-white font-serif text-lg flex items-center gap-2 hover:text-gold-400 transition-colors group">
                <Phone size={16} className="text-stone-600 group-hover:text-gold-400 transition-colors"/> 
                +91 98800 17751
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-stone-600 text-[9px] uppercase tracking-widest whitespace-nowrap">Managed By</span>
              <a href="https://unitern.com/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img 
                  src="https://bz6u2h1ooc3ledmb.public.blob.vercel-storage.com/Unitern/managedby_untiern.webp" 
                  alt="Managed by Unitern"
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* CLOSE BUTTON DESKTOP (Floating) */}
        <button 
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 text-stone-500 hover:text-stone-900 bg-stone-100/10 hover:bg-stone-100 p-2 rounded-full transition-all z-30"
        >
            <X size={20} />
        </button>


        {/* MAIN CONTENT AREA (Scrollable Form) */}
        <div className="md:w-7/12 bg-white relative grow overflow-y-auto">
          
          <div className="p-6 md:p-10 min-h-full">
            {/* Success State Overlay */}
            <div className={`absolute inset-0 bg-stone-900 z-10 flex flex-col items-center justify-center text-center p-8 md:p-12 transition-all duration-700 ease-out transform ${isSubmitted ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}>
                
                {context === 'virtual_tour' ? (
                    <div className="w-full h-full flex flex-col justify-center">
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-4 flex items-center justify-center gap-3">
                            <CheckCircle2 size={24} className="text-gold-500" />
                            Tour Unlocked
                        </h3>
                        <div className="relative pt-[56.25%] w-full bg-black rounded-lg overflow-hidden shadow-2xl border border-stone-800">
                            <iframe 
                                className="absolute inset-0 w-full h-full"
                                src={VIRTUAL_TOUR_EMBED_URL}
                                title="Elements of Life Virtual Tour"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button 
                            onClick={onClose}
                            className="mt-6 text-stone-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
                        >
                            Close Viewer
                        </button>
                    </div>
                ) : context === 'masterplan' ? (
                    <div className="flex flex-col items-center w-full my-auto">
                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
                            <CheckCircle2 size={24} className="text-gold-500" />
                        </div>
                        <h3 className="font-serif text-2xl text-white mb-2">Plans Unlocked</h3>
                        <p className="text-stone-400 text-xs mb-8">Download the specific floor plans below.</p>
                        <div className="w-full space-y-3 max-w-sm">
                            {MASTER_PLAN_LINKS.map((plan, idx) => (
                                <a 
                                    key={idx}
                                    href={plan.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-stone-800 border border-stone-700 text-stone-200 px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-stone-700 hover:border-gold-500/50 hover:text-white transition-all flex items-center justify-between group rounded-sm"
                                >
                                    <span>{plan.name}</span>
                                    <Download size={14} className="text-gold-500 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                        <button onClick={onClose} className="mt-8 text-stone-500 text-xs underline">Close</button>
                    </div>
                ) : context === 'pricing' ? (
                    <div className="flex flex-col items-center my-auto">
                        <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 animate-[bounce_1s_infinite]">
                            <CheckCircle2 size={32} className="text-gold-500" />
                        </div>
                        <h3 className="font-serif text-3xl text-white mb-2">Access Granted</h3>
                        <p className="text-stone-400 text-xs mb-8">Pricing Sheet Unlocked</p>
                        <a 
                            href={PRICING_SHEET_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold-500 text-stone-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-400 transition-all flex items-center gap-2"
                        >
                            <Download size={16} /> Download Price Sheet
                        </a>
                        <button onClick={onClose} className="mt-8 text-stone-500 text-xs underline">Close</button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center my-auto">
                        <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 animate-[bounce_1s_infinite]">
                            <CheckCircle2 size={32} className="text-gold-500" />
                        </div>
                        <h3 className="font-serif text-3xl text-white mb-2">Request Confirmed</h3>
                        <div className="h-[1px] w-12 bg-gold-500/50 mb-6"></div>
                        <p className="text-stone-300 text-sm leading-relaxed mb-8 max-w-xs">
                            Thank you for your interest. Your request has been securely logged with our sales office.
                        </p>
                        <button 
                            onClick={onClose}
                            className="text-white border border-white/20 px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all"
                        >
                            Close Window
                        </button>
                    </div>
                )}
            </div>

            {/* Form Content */}
            <div className={`transition-all duration-500 pb-12 ${isSubmitted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                <h3 className="text-stone-900 font-serif text-xl md:text-2xl mb-6">Your Details</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="text" name="details_check" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">First Name <span className="text-red-500">*</span></label>
                            <input 
                                name="FirstName" 
                                required 
                                type="text" 
                                className="w-full border-b border-stone-300 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors bg-transparent placeholder-stone-300 text-base rounded-none" 
                                placeholder="Rahul" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Last Name</label>
                            <input 
                                name="LastName" 
                                type="text" 
                                className="w-full border-b border-stone-300 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors bg-transparent placeholder-stone-300 text-base rounded-none" 
                                placeholder="Sharma" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Mobile Number <span className="text-red-500">*</span></label>
                        <input 
                            name="Phone" 
                            required 
                            type="tel" 
                            className="w-full border-b border-stone-300 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors bg-transparent placeholder-stone-300 text-base rounded-none" 
                            placeholder="+91 98765 43210" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Email Address</label>
                        <input 
                            name="Email" 
                            type="email" 
                            className="w-full border-b border-stone-300 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors bg-transparent placeholder-stone-300 text-base rounded-none" 
                            placeholder="rahul.s@gmail.com" 
                        />
                    </div>

                    <div className="space-y-3 pt-4">
                        <p className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">I am primarily looking for</p>
                        <div className="flex flex-col gap-3">
                            {options.map((opt) => (
                            <div 
                                key={opt.id}
                                onClick={() => toggleInterest(opt.id)}
                                className="flex items-center gap-3 cursor-pointer group select-none py-1"
                            >
                                <div className={`w-5 h-5 border border-stone-300 rounded-sm group-hover:border-stone-900 flex items-center justify-center transition-colors shrink-0 ${selectedInterests.includes(opt.id) ? 'border-stone-900' : ''}`}>
                                    <div className={`w-3 h-3 bg-stone-900 transition-opacity duration-200 ${selectedInterests.includes(opt.id) ? 'opacity-100' : 'opacity-0'}`}></div>
                                </div>
                                <span className="text-sm text-stone-700">
                                {opt.label} <span className="text-stone-400 text-xs ml-1 whitespace-nowrap">— {opt.sqft}</span>
                                </span>
                            </div>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs bg-red-50 p-2 rounded">{error}</p>
                    )}

                    <button 
                    disabled={isSubmitting}
                    className="w-full bg-stone-900 text-white py-4 mt-6 uppercase tracking-widest text-xs font-bold hover:bg-stone-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 rounded-sm"
                    >
                    {isSubmitting ? (
                        <>
                            <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Processing...
                        </>
                    ) : (
                        <>
                        {ctaText} <ArrowRight size={14} />
                        </>
                    )}
                    </button>
                    
                    <p className="text-[10px] text-stone-400 text-center mt-4 leading-tight">
                    By submitting, you consent to receive a call/message from Amogaya Projects.
                    </p>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};