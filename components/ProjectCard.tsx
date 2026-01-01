import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col gap-4 cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3]">
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Work in Progress Badge */}
        {project.link === 'wip' && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Work in Progress
          </div>
        )}

        {/* Hover overlay button */}
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ArrowUpRight size={20} className="text-black" />
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
            <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold text-gray-900 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">{project.title}</motion.h3>
            <span className="text-xs font-medium tracking-wider uppercase border border-gray-300 rounded-full px-3 py-1 text-gray-500">{project.category}</span>
        </div>
        <p className="text-gray-600 line-clamp-2 max-w-md text-sm leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;