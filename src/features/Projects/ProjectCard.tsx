import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import type { ProjectItem } from '../../data/projectsData';

// Bağımsız SVG GitHub İkonu
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

interface ProjectCardProps {
  project: ProjectItem;
  lang: 'TR' | 'EN';
}

export const ProjectCard = ({ project, lang }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex flex-col justify-between bg-white/75 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/60 transition-all duration-300"
    >
      <div>
        {/* Üst Satır: Şık Logo Kutusu & Aksiyon Butonları */}
        <div className="flex items-center justify-between mb-5">
          {/* Yeni Modern Degrade ve Çerçeveli İkon Alanı */}
          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-105 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
            <Layers size={22} className="stroke-[2.2]" />
          </div>
          
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                title="Canlı Demo / Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors duration-200"
              title="GitHub Reposu"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Proje Başlığı */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* Kısa Açıklama */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {project.description[lang]}
        </p>
      </div>

      {/* Alt Alan: Teknoloji Rozetleri */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60 group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-700 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};