import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="py-24 container mx-auto px-6 md:px-12 relative z-40">
      
      {/* Bölüm Başlığı */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2"
        >
          {lang === 'TR' ? 'Çalışmalarım' : 'Portfolio'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          {lang === 'TR' ? 'PROJELERİM' : 'Featured Projects'}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm md:text-base mt-3"
        >
          {lang === 'TR' 
            ? 'Geliştirdiğim Uygulamalar ve Projelerim' 
            : 'Applications And Projects Built.'}
        </motion.p>
      </div>

      {/* Grid Düzeni: Mobilde 1, Tablette 2, Geniş Ekranda 3 Sütun */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}
      </div>

    </section>
  );
};