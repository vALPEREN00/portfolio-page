// src/features/Publications/Publications.tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { publicationsData } from '../../data/publicationsData';
import { PublicationCard } from './PublicationCard';

export const Publications = () => {
  const { lang } = useLanguage();

  return (
    <section id="publications" className="py-24 container mx-auto px-6 md:px-12 relative z-40">
      
      {/* Başlık Alanı */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2"
        >
          {lang === 'TR' ? 'Araştırma & Literatür' : 'Research & Literature'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          {lang === 'TR' ? 'Akademik Çalışmalar' : 'Academic Publications'}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm md:text-base mt-3"
        >
          {lang === 'TR' 
            ? 'Hakemli konferans ve dergilerde yer alan bilimsel araştırma ve makaleler.' 
            : 'Scientific research and papers published in peer-reviewed conferences and journals.'}
        </motion.p>
      </div>

      {/* Kart Listesi */}
      <div className="max-w-4xl mx-auto space-y-6">
        {publicationsData.map((item) => (
          <PublicationCard key={item.id} item={item} lang={lang} />
        ))}
      </div>

    </section>
  );
};