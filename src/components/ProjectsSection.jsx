import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Tailwind ikonları (shadcn/lucide-react)
import project1 from '/assets/project1.webp';
import project2 from '/assets/project2.webp';
import project3 from '/assets/project3.webp';

const projects = [
  {
    name: 'Blog App',
    description: 'A blog platform with an Admin Panel, Blog CRUD operations, and user management features.',
    githubLink: 'https://github.com/tolgatopcu1/BlogApp',
    imgSrcs: [project1, project2, project3],
  },
  // Diğer projeleri aynı yapıda ekleyebilirsin
];

export default function ProjectsSection({ language }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="min-h-screen bg-[#2e2e2e] py-24 px-4">
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {language === 'tr' ? 'Projelerim' : 'My Projects'}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={inView} language={language} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index, inView, language }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % project.imgSrcs.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.imgSrcs.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className="flex flex-col rounded-xl overflow-hidden shadow-md bg-[#3b3b3b] hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Slider */}
      <div className="relative w-full aspect-[16/9]">
        <AnimatePresence mode="wait">
        <motion.img
          key={project.imgSrcs[currentImage]}
          src={project.imgSrcs[currentImage]}
          alt={`${project.name} ${currentImage + 1}`}
          className="w-full h-full object-contain absolute top-0 left-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>

      {/* İçerik */}
      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        </div>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition duration-300 ease-in-out"
        >
          {language === 'tr' ? 'Detay' : 'Details'}
        </a>
      </div>
    </motion.div>
  );
}
