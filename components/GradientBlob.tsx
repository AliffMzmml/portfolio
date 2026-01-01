import React from 'react';
import { motion } from 'framer-motion';

const GradientBlob: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Orb 1: Orange/Yellow */}
      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[-10%] left-[10%] w-[40vw] h-[40vw] bg-[#EDB674]/80 rounded-full blur-[100px] md:blur-[120px] mix-blend-multiply opacity-80"
      />
      
      {/* Orb 2: Purple */}
      <motion.div 
        animate={{ 
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.2, 0.95, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] bg-[#6F5CD1]/80 rounded-full blur-[100px] md:blur-[120px] mix-blend-multiply opacity-80"
      />

      {/* Orb 3: Pink */}
      <motion.div 
        animate={{ 
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-[20%] left-[25%] w-[45vw] h-[45vw] bg-[#D65DB1]/70 rounded-full blur-[100px] md:blur-[120px] mix-blend-multiply opacity-70"
      />

      {/* Orb 4: Deep Blue Accent */}
      <motion.div 
        animate={{ 
            x: [0, -20, 20, 0],
            y: [0, 20, -20, 0]
        }}
        transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[35%] w-[20vw] h-[20vw] bg-[#3B3FA3]/50 rounded-full blur-[80px] mix-blend-multiply opacity-60"
      />
    </div>
  );
};

export default GradientBlob;