import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award } from 'lucide-react';
import type { PublicationItem } from '../../data/publicationsData';

interface PublicationCardProps {
  item: PublicationItem;
  lang: 'TR' | 'EN';
}

export const PublicationCard = ({ item, lang }: PublicationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-200/70 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        
        {/* Üst Çizgi: Rozet ve Durum */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Award size={14} />
            <span>{item.status[lang]}</span>
          </div>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>{lang === 'TR' ? 'Yayın Detayı' : 'View Publication'}</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Makale Başlığı */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
          {item.title}
        </h3>

        {/* Yazarlar Listesi (Kendi ismin kalın ve belirgin vurgulanır) */}
        <div className="text-sm text-slate-700">
          <span className="font-semibold text-slate-500 mr-2">
            {lang === 'TR' ? 'Yazarlar:' : 'Authors:'}
          </span>
          {item.authors.map((author, index) => (
            <span key={author}>
              {author.toLowerCase().includes('alperen') ? (
                <span className="font-bold text-blue-600 underline decoration-blue-300 underline-offset-4">
                  {author}
                </span>
              ) : (
                <span>{author}</span>
              )}
              {index < item.authors.length - 1 && ', '}
            </span>
          ))}
        </div>

        {/* Konferans ve Yayıncı Bilgisi */}
        <div className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
          <BookOpen size={18} className="shrink-0 text-blue-600 mt-0.5" />
          <div>
            <p className="font-medium text-slate-800">{item.venue}</p>
            <p className="text-slate-500 italic mt-0.5">{item.publisher}</p>
          </div>
        </div>

        {/* Özet (Abstract) */}
        <p className="text-slate-600 text-sm leading-relaxed">
          {item.abstract[lang]}
        </p>

        {/* Araştırma Anahtar Kelimeleri */}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50/60 text-blue-700 border border-blue-100/50"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};