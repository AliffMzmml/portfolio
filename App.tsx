import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GradientBlob from './components/GradientBlob';
import GrainOverlay from './components/GrainOverlay';
import ProjectCard from './components/ProjectCard';
import CaseStudyModal from './components/CaseStudyModal';
import About from './components/About';
import Contact from './components/Contact';
import { PROJECTS } from './constants';
import { Project } from './types';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Custom cursor logic (optional enhancement)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('.cursor-pointer')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project: Project) => {
    // Handle work in progress projects
    if (project.link === 'wip') {
      alert("📝 Case Study in Progress\n\nI'm currently compiling the case study for this project! Check back soon to see the full design process and insights. Thanks for your patience! 😊");
      return;
    }

    // If project has an external link, redirect to it instead of opening modal
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;

    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    const nextProject = PROJECTS[nextIndex];

    // Handle work in progress projects
    if (nextProject.link === 'wip') {
      alert("📝 Case Study in Progress\n\nI'm currently compiling the case study for this project! Check back soon to see the full design process and insights. Thanks for your patience! 😊");
      return;
    }

    // If project has an external link, redirect to it instead of opening modal
    if (nextProject.link && nextProject.link !== '#') {
      window.open(nextProject.link, '_blank', 'noopener,noreferrer');
      handleCloseModal();
    } else {
      setSelectedProject(nextProject);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-gray-900 selection:bg-orange-200 selection:text-orange-900">
      
      {/* Custom Cursor (Hidden on touch devices) */}
      <div 
        className="fixed top-0 left-0 w-6 h-6 border border-black rounded-full pointer-events-none z-[100] hidden md:block transition-transform duration-150 ease-out mix-blend-difference bg-white"
        style={{ 
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 2.5 : 1})`,
            opacity: 1
        }}
      />

      <GrainOverlay />
      
      {/* Navbar is rendered outside AnimatePresence so it stays visible (unless you want it covered by modal) */}
      <Navbar />

      <main className="relative">
        {/* Hero Section Wrapper for Fixed Background Effect */}
        <div className="relative">
             <div className="fixed inset-0 z-0">
                 <motion.div style={{ opacity }} className="h-full w-full">
                     <GradientBlob />
                 </motion.div>
             </div>
            
            <Hero />
        </div>

        {/* Selected Works */}
        <section id="projects" className="relative z-10 bg-[#FDFBF7] py-20 md:py-32 px-6 md:px-12 lg:px-24 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] -mt-12">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <h2 className="text-4xl md:text-6xl font-bold">Selected Works</h2>
                <p className="text-gray-500 max-w-sm text-sm">
                    A collection of projects showcasing my process in solving complex problems through design.
                </p>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {PROJECTS.map((project, index) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </section>

        <About />
        <Contact />
      </main>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={handleCloseModal}
            onNextProject={handleNextProject}
          />
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && !selectedProject && (
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-40 w-14 h-14 rounded-full border border-gray-900 flex items-center justify-center bg-[#FDFBF7] hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
                <ArrowUp strokeWidth={1.5} size={24} />
            </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;