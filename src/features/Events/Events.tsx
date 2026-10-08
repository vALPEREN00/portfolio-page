// src/features/Events/Events.tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { eventsData } from '../../data/eventsData';
import { EventCard } from './EventCard';

export const Events = () => {
  const { lang } = useLanguage();

  return (
    <section id="events" className="py-24 container mx-auto px-6 md:px-12 relative z-40">
      
      {/* Başlık Alanı */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2"
        >
          {lang === 'TR' ? 'Topluluk & Zirveler' : 'Community & Summits'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          {lang === 'TR' ? 'Etkinlikler' : 'Events & Summits'}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm md:text-base mt-3"
        >
          {lang === 'TR' 
            ? 'Network Etkinlikleri, Konferanslar ve Sertifikalar.' 
            : 'Networking Events, Conferences & Certifications.'}
        </motion.p>
      </div>

      {/* Kompakt Izgara Düzeni (Geniş ekranda 3 veya 4 kart yan yana) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {eventsData.map((item) => (
          <EventCard key={item.id} item={item} lang={lang} />
        ))}
      </div>

    </section>
  );
};