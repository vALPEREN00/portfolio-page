import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experienceData';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="py-24 container mx-auto px-6 md:px-12 relative z-40">
      
      {/* Bölüm Başlığı */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2"
        >
          {lang === 'TR' ? 'KARİYER' : 'Career'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          {lang === 'TR' ? 'DENEYİMLER' : 'Experience'}
        </motion.h2>
      </div>

      {/* Kart Listesi (Alt alta sıralı modern bloklar) */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} lang={lang} />
        ))}
      </div>

    </section>
  );
};