import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import type { ExperienceItem } from '../../data/experienceData';

interface ExperienceCardProps {
  item: ExperienceItem;
  lang: 'TR' | 'EN';
}

export const ExperienceCard = ({ item, lang }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-200/70 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Üst Satır: Pozisyon, Şirket ve Tür Etiketi */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {item.role[lang]}
          </h3>
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-base mt-1">
            <Building2 size={18} />
            <span>{item.company}</span>
          </div>
        </div>

        <span className="self-start md:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
          {item.type[lang]}
        </span>
      </div>

      {/* Meta Bilgiler: Tarih ve Konum */}
      <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500 mb-6">
        <div className="flex items-center gap-1.5">
          <Calendar size={15} />
          <span>{item.period[lang]}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={15} />
          <span>{item.location[lang]}</span>
        </div>
      </div>

      {/* Görev ve Başarılar (Madde İmleri) */}
      <ul className="space-y-3">
        {item.bullets[lang].map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};