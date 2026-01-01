import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="sticky top-32"
        >
           <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900 leading-[0.9]">
             More than just <br/>
             <span className="italic text-gray-500">pixels.</span>
           </h2>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="space-y-8 text-lg text-gray-700 leading-relaxed font-light"
        >
            <p className="text-xl md:text-2xl font-light text-gray-900">
                Hello! I'm AliffMzmml, a multidisciplinary designer bridging the gap between functional utility and emotional resonance.
            </p>
            <p>
                My work is grounded in the belief that digital spaces should feel as organic and inviting as physical ones. With a background in new media communications and visual arts, I approach every project with a user-centric mindset, ensuring that every interaction is meaningful.
            </p>
            
            <div className="h-px w-full bg-gray-200 my-8"></div>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-8">
                <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-4">Services</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>UI/UX Design</li>
                        <li>Interaction Design</li>
                        <li>Design Systems</li>
                        <li>Prototyping</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-4">Tools</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Figma</li>
                        <li>Adobe Creative Suite</li>
                        <li>Cursor</li>
                        <li>Google AI Studio</li>
                    </ul>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;