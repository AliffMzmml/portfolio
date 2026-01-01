import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start gap-8 md:gap-12">
        
        {/* Main Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-left"
        >
          <h1 className="text-[13vw] md:text-[8rem] lg:text-[10rem] leading-[0.9] font-medium text-gray-900 tracking-tighter whitespace-nowrap -ml-1 md:-ml-2">
            ui<span className="font-light italic text-gray-400 mx-1 md:mx-4">/</span>ux designer
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl text-left"
        >
          <p className="text-xl md:text-3xl font-light text-gray-800 leading-relaxed">
            with a passion for creating <span className="italic font-semibold text-gray-900">thoughtful</span> and 
            visually stunning digital experiences that solve real problems.
          </p>
        </motion.div>

        {/* CTA Button Group - Aligned Left */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
          className="mt-8 flex items-center gap-6 group cursor-pointer"
        >
          <a href="#projects" className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-900 text-gray-900 bg-transparent transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-105">
             <ArrowDownRight 
                strokeWidth={1.5}
                size={32} 
                className="transition-transform duration-500 group-hover:rotate-[-45deg]"
            />
          </a>
          <a href="#projects" className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-900 uppercase group-hover:opacity-70 transition-opacity">
            View Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;