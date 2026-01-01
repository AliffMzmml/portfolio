import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Image as ImageIcon, Play } from 'lucide-react';
import { Project, EvidenceItem } from '../types';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

// Sub-component for individual evidence cards with toggle logic
const EvidenceCard: React.FC<{ item: EvidenceItem; index: number }> = ({ item, index }) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  const hasBefore = !!(item.beforeImageUrl || item.beforeVideoUrl);
  const hasGif = !!item.imageUrl;
  const hasVideo = !!(item.videoUrl || item.beforeVideoUrl);
  const isDocumentFirst = item.title === "Document-First Interaction";
  const isBulkMove = item.title === "Bulk Select & Move";
  const isTrustReliability = item.title === "Trust & Reliability";

  // Resolve media based on active tab
  const currentImageUrl = activeTab === 'after' ? item.imageUrl : item.beforeImageUrl;
  const currentVideoUrl = activeTab === 'after' ? item.videoUrl : item.beforeVideoUrl;

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group">
      {/* Media Section */}
      <div className={`relative ${hasGif ? 'flex justify-center py-8 md:py-12 bg-gray-50' : 'w-full bg-gray-100'}`}>

          {/* Aspect Ratio Wrapper */}
           <div className={`relative ${hasGif ? (isDocumentFirst || isTrustReliability ? 'w-full max-w-[800px] aspect-[1280/678]' : isBulkMove ? 'w-full max-w-[800px] aspect-[1280/713]' : 'w-full max-w-[420px] aspect-[840/982]') : hasVideo ? 'aspect-[2880/1718]' : 'aspect-[16/10] md:aspect-[2/1]'} rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white mx-4 md:mx-0`}>

              {/* Before/After Toggle */}
              {hasBefore && (
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex bg-white/90 backdrop-blur-md rounded-full p-1 shadow-lg border border-gray-200/50">
                      <button
                          onClick={() => setActiveTab('before')}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'before' ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                          Before
                      </button>
                      <button
                          onClick={() => setActiveTab('after')}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'after' ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                          After
                      </button>
                  </div>
              )}

              <AnimatePresence mode="wait">
                  <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full bg-gray-100"
                  >
                       {currentVideoUrl ? (
                           <div className="w-full h-full relative">
                                {currentVideoUrl.includes('drive.google.com') ? (
                                  <iframe
                                    src={currentVideoUrl.replace('/uc?export=download&id=', '/file/d/').replace(/\/file\/d\/([^/]+).*/, '/file/d/$1/preview')}
                                    className="w-full h-full"
                                    allow="autoplay"
                                    allowFullScreen
                                  />
                                ) : (
                                  <video src={currentVideoUrl} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                                )}
                           </div>
                       ) : currentImageUrl ? (
                           <img src={currentImageUrl} alt={item.imageAlt} className="w-full h-full object-cover" />
                       ) : (
                           /* Placeholder Photo Frame */
                           <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                                <img
                                    src={`https://picsum.photos/seed/${index + item.title.length}/1200/800?grayscale`}
                                    alt="Placeholder"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                                        <ImageIcon size={16} className="text-gray-500" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Visual Placeholder</span>
                                    </div>
                                </div>
                           </div>
                       )}
                  </motion.div>
              </AnimatePresence>
           </div>
      </div>

      {/* Text Content Section */}
      <div className="p-6 md:p-8 border-t border-gray-100">
        <div className={`max-w-3xl ${hasGif ? 'mx-auto text-center' : ''}`}>
           <div className={`flex items-center gap-3 mb-3 ${hasGif ? 'justify-center' : ''}`}>
               <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700 bg-orange-100 px-2 py-1 rounded">
                   {item.category}
               </span>
               {hasBefore && (
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 px-2 py-1 rounded">
                       Comparison Available
                   </span>
               )}
           </div>
           <h4 className="font-bold text-2xl text-gray-900 mb-3">{item.title}</h4>
           <p className={`text-gray-600 leading-relaxed text-lg ${hasGif ? '' : 'border-l-2 border-gray-200 pl-4'}`}>
               {item.caption}
           </p>
        </div>
      </div>
    </div>
  );
};

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#FDFBF7] overflow-y-auto"
    >
      {/* Header / Nav for Modal */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100">
        <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Case Study</span>
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="flex flex-col gap-8 mb-16">
          <motion.h1 
            layoutId={`title-${project.id}`}
            className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[0.9] text-gray-900 tracking-tight"
          >
            {project.title}
          </motion.h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-200 py-8 mt-4">
            <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Client</span>
              <span className="font-medium text-gray-900">{project.client}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Role</span>
              <span className="font-medium text-gray-900">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Year</span>
              <span className="font-medium text-gray-900">{project.year}</span>
            </div>
             <div>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Category</span>
              <span className="font-medium text-gray-900">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <motion.div 
          layoutId={`image-${project.id}`}
          className="w-full aspect-video rounded-2xl overflow-hidden mb-20 bg-gray-200 shadow-sm"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Challenge</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800">
              {project.challenge}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Solution</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Evidence-Based Design Section - Vertically Stacked */}
        {project.evidence && (
          <div className="mb-32">
             <div className="max-w-3xl mx-auto text-center mb-16">
                 <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Evidence-Based Design</h3>
                 <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                     The redesign's primary goal is maximizing screening efficiency by reducing "Clicks-to-Decision".
                 </p>
             </div>
            
             <div className="flex flex-col gap-24">
                 {project.evidence.map((item, index) => (
                     <EvidenceCard key={index} item={item} index={index} />
                 ))}
             </div>
          </div>
        )}

        {/* Design Process Section */}
        {project.process && (
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">Design Process</h3>
            
            <div className="relative space-y-16">
               {/* Vertical Timeline Line (Desktop Only) */}
               <div className="hidden md:block absolute top-0 bottom-0 left-[33.33%] w-px bg-gray-200 -translate-x-1/2"></div>
               
              {project.process.map((phase, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  
                  {/* Phase Title - Sticky on desktop */}
                  <div className="md:col-span-4 relative">
                    <div className="sticky top-32 flex items-center justify-start md:justify-end">
                        {/* Dot on Line */}
                        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full translate-x-[calc(50%+1px)] z-10 border-[3px] border-gray-900"></div>
                        
                        <h4 className="text-xl font-bold uppercase tracking-wide text-gray-900 md:text-right md:pr-12 w-full flex items-center md:block">
                           <span className="md:hidden w-2 h-2 bg-gray-900 rounded-full mr-4"></span>
                           {phase.title}
                        </h4>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="md:col-span-8 space-y-6 md:pl-12 border-l border-gray-200 md:border-l-0 ml-3 md:ml-0 pl-6">
                    {phase.steps.map((step, stepIndex) => (
                      <div 
                        key={stepIndex} 
                        className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                          step.highlight 
                            ? 'bg-gray-900 text-white border-gray-900 shadow-xl scale-[1.02]' 
                            : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg'
                        }`}
                      >
                         {step.highlight && (
                             <div className="absolute -top-3 -right-3 bg-orange-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Key Pivot
                             </div>
                         )}
                        <h5 className={`text-xl font-bold mb-2 ${step.highlight ? 'text-white' : 'text-gray-900'}`}>
                          {step.title}
                        </h5>
                        <p className={`text-lg leading-relaxed ${step.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                          {renderTextWithBold(step.description)}
                        </p>
                        {step.title === "AI Prototyping" && (
                            <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                <CheckCircle2 size={12} /> Google AI Studio
                            </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Width Image / Mockup with Action Buttons */}
        <div className="w-full aspect-[21/9] bg-gray-100 rounded-2xl mb-20 overflow-hidden relative group">
             <img src="/Images/SCREEN.png" className="w-full h-full object-cover" alt="ATS Redesign Mockup" />
             <div className="absolute inset-0 flex items-center justify-center gap-4">
                 <a
                    href="https://www.figma.com/design/gSwwg43hKFVeJtCCIm9QIC/ATS-REVAMP-MOCKUP?node-id=0-1&t=9mCGLuJ8bPjtjyYn-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur hover:bg-gray-900 hover:text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest text-gray-900 shadow-lg border border-gray-200 hover:border-gray-900 transition-all duration-300 flex items-center gap-2"
                 >
                    Mockup <ArrowRight size={16} />
                 </a>
                 <a
                    href="https://ai.studio/apps/drive/1EppEbgQST71nNVwQNTHqC3dUom_Ildt-?fullscreenApplet=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur hover:bg-gray-900 hover:text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest text-gray-900 shadow-lg border border-gray-200 hover:border-gray-900 transition-all duration-300 flex items-center gap-2"
                 >
                    Prototype <ArrowRight size={16} />
                 </a>
             </div>
        </div>

        {/* Next Steps / Footer */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-12">
            <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors">Back to projects</button>
            <a href="#" className="flex items-center gap-2 font-medium text-lg group hover:underline">
                Next Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </motion.div>
  );
};

export default CaseStudyModal;