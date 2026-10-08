import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Image as ImageIcon } from 'lucide-react';
import type { EventItem } from '../../data/eventsData';

interface EventCardProps {
  item: EventItem;
  lang: 'TR' | 'EN';
}

export const EventCard = ({ item, lang }: EventCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex flex-col bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      {/* Üst Alan: Fotoğraf */}
      <div className="relative w-full h-44 bg-slate-100 overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.title[lang]}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 p-4 text-center">
            <ImageIcon size={32} />
            <span className="text-xs font-medium">Görsel Eklenmedi</span>
          </div>
        )}

        {/* Tarih Etiketi (Varsa) */}
        {item.date && (
          <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md">
            <Calendar size={12} />
            <span>{item.date}</span>
          </div>
        )}
      </div>

      {/* Alt Alan: Etkinlik Başlığı */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-slate-900 text-sm md:text-base leading-snug group-hover:text-blue-600 transition-colors">
          {item.title[lang]}
        </h3>

        {item.location && (
          <p className="text-xs text-slate-400 mt-2 font-medium">
            {item.location}
          </p>
        )}
      </div>
    </motion.div>
  );
};