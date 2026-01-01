import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
            <div className="flex flex-col gap-8 max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                    Have an idea? <br/>
                    <span className="text-gray-400 italic">Let's build it.</span>
                </h2>
                <a
                    href="mailto:aliffmzmml@gmail.com"
                    className="inline-flex items-center gap-4 text-2xl md:text-3xl border-b border-gray-700 pb-2 hover:text-gray-300 hover:border-gray-300 transition-all w-fit group"
                >
                    aliffmzmml@gmail.com
                    <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </a>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4 text-gray-400 text-sm">
                <div className="flex gap-6">
                    <a href="http://www.linkedin.com/in/aliffmzmml15" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://www.behance.net/aliffmuzammi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
                </div>
                <p>© {new Date().getFullYear()} AliffMzmml. All Rights Reserved.</p>
            </div>
        </div>
    </section>
  );
};

export default Contact;