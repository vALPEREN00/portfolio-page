// src/layouts/Header.tsx
import { useState, useEffect } from 'react';
import { Download, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        isScrolled ? 'bg-slate-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-slate-50/50 backdrop-blur-xs py-4 lg:bg-transparent lg:py-6'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center relative">
        
        {/* Sol Alan: Logo (min-w-0 ve truncate ekleyerek dar ekranlarda taşmasını önledik) */}
        <div className="min-w-0 flex-1 lg:flex-none pr-4">
          <div className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-blue-600 cursor-pointer truncate">
            Alperen Ünaldı
          </div>
        </div>

        {/* Orta Alan: Geniş Ekran (Desktop) Menü Linkleri (1024px ve üzeri) */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
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

        {/* Sağ Alan: Geniş Ekran (Desktop) Aksiyonlar (1024px ve üzeri) */}
        <div className="hidden lg:flex items-center justify-end gap-5 lg:w-1/3 flex-shrink-0">
          <button 
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-base font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            title="Dili Değiştir / Change Language"
          >
            <Globe size={18} />
            <span>{lang}</span>
          </button>

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

        {/* Küçük Ekran / Mobil / Tablet İçin Butonlar */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3 flex-shrink-0">
          <button 
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-200/70 px-2.5 py-1.5 rounded-md cursor-pointer"
          >
            <Globe size={15} />
            <span>{lang}</span>
          </button>

          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 focus:outline-none bg-slate-200/70 rounded-md cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        
      </nav>

      {/* Açılır Menü Paneli (1024px altındaki tüm ekran boyutlarında kusursuz çalışır) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks[lang].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-blue-600 border-b border-slate-100 pb-2"
            >
              {link.name}
            </a>
          ))}

          {/* CV İndirme Butonu */}
          <a
            href="/cv.pdf"
            download="Alperen_Unaldi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium text-sm mt-2 shadow-md"
          >
            <Download size={18} />
            <span>{lang === 'TR' ? 'CV İndir' : 'Download CV'}</span>
          </a>
        </div>
      )}
    </header>
  );
};