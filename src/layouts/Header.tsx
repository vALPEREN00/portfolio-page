import { useState, useEffect } from 'react';
import { Download, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  const navLinks = {
    TR: [
      { name: 'Hakkımda', href: '#about' },
      { name: 'Projeler', href: '#projects' },
      { name: 'Deneyim', href: '#experience' },
      { name: 'Akademik', href: '#publications' },
      { name: 'Etkinlikler', href: '#events' },
      { name: 'İletişim', href: '#contact' },
    ],
    EN: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Publications', href: '#publications' },
      { name: 'Events', href: '#events' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-50/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center relative h-10">
        
        {/* Sol Alan: Logo */}
        <div className="text-2xl font-extrabold tracking-tighter w-1/3 bg-clip-text text-transparent bg-linear-to-r from-slate-900 via-slate-700 to-blue-600 cursor-pointer">
          Alperen Ünaldı
        </div>

        {/* Orta Alan: Menü Linkleri */}
        <div className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
          {navLinks[lang].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative text-base font-semibold text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 py-1"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Sağ Alan: Aksiyonlar (Dil Değiştirici & CV İndirme Butonu) */}
        <div className="hidden md:flex items-center justify-end gap-5 w-1/3">
          <button 
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-base font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            title="Dili Değiştir / Change Language"
          >
            <Globe size={18} />
            <span>{lang}</span>
          </button>

          {/* Fonksiyonel CV İndirme Bağlantısı */}
          <a
            href="/Alperen_Unaldi_CV.pdf"
            download="Alperen_Unaldi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30 font-medium text-sm cursor-pointer"
          >
            <Download size={16} />
            <span>{lang === 'TR' ? 'CV İndir' : 'Download CV'}</span>
          </a>
        </div>
        
      </nav>
    </header>
  );
};