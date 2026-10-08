
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const word = words[index % words.length];
    
    if (subIndex === word.length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }
    
    if (subIndex === 0 && isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index % words.length].substring(0, subIndex)}${blink ? '|' : ' '}`;
};

const SocialButton = ({ icon: Icon, label, href }: { icon: React.ElementType, label: string, href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial="rest"
    whileHover="hover"
    animate="rest"
    variants={{
      rest: { width: '48px' },
      hover: { width: '130px' }
    }}
    className="flex items-center gap-2 bg-slate-900 text-white rounded-xl overflow-hidden h-12 px-3 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
  >
    <Icon size={22} className="shrink-0 text-blue-400" />
    <motion.span
      variants={{
        rest: { opacity: 0, x: -10, display: 'none' },
        hover: { opacity: 1, x: 0, display: 'block', transition: { delay: 0.1 } }
      }}
      className="whitespace-nowrap font-medium text-sm"
    >
      {label}
    </motion.span>
  </motion.a>
);

const SkillBadge = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-2xl">{icon}</div>
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// --- ANA BİLEŞEN ---
export const Hero = () => {
  const { lang } = useLanguage();

  const titles = useMemo(() => {
    return lang === 'TR' 
      ? ["Bilgisayar Mühendisi", "Yapay Zeka Geliştiricisi", "Veri Odaklı Yazılım Mühendisi"]
      : ["Computer Engineer", "AI Developer", "Data-Driven Software Engineer"];
  }, [lang]);

  const typedText = useTypewriter(titles);

  return (
    <section id="about" className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center container mx-auto px-6 relative z-40">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-[0_0_25px_rgba(37,99,235,0.2)] overflow-hidden bg-slate-200">
          <img src="/profile.jpg" alt="Alperen Ünaldı" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <p className="text-slate-500 font-medium mb-1">
          {lang === 'TR' ? 'Merhaba, ben' : 'Hi, I am'}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
          ALPEREN ÜNALDI
        </h1>
        <div className="h-8 text-blue-600 font-bold text-lg md:text-xl tracking-wide">
          {typedText}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-6 mb-8"
      >
        <SocialButton icon={LinkedinIcon} label="LinkedIn" href="https://linkedin.com/in/alperen-ünaldı-45864225a" />
        <SocialButton icon={GithubIcon} label="GitHub" href="https://github.com/vALPEREN00" />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center max-w-2xl text-slate-600 leading-relaxed md:text-lg mb-10"
      >
        {lang === 'TR' 
          ? "Yapay zeka, veri bilimi ve modern backend mimarileri üzerine uzmanlaşıyorum. Makine öğrenmesi, doğal dil işleme (NLP) ve LLM entegrasyonları ile veriyi akıllı sistemlere dönüştürüyor; geliştirdiğim bu modelleri Node.js ve bulut teknolojileriyle ölçeklenebilir ürünler haline getiriyorum."
          : "I specialize in artificial intelligence, data science, and modern backend architectures. I transform data into intelligent systems using machine learning, NLP, and LLM integrations, while building these models into scalable products with Node.js and cloud technologies."
        }
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-blue-50/50 p-4 rounded-xl border border-blue-100 shadow-sm mb-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <span className="font-semibold text-slate-800">
              {lang === 'TR' ? 'İstanbul Rumeli Üniversitesi' : 'Istanbul Rumeli University'} <span className="text-blue-600 font-medium text-sm">({lang === 'TR' ? '%100 Burslu' : '100% Scholarship'})</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0 font-medium text-slate-600">
            📊 GPA: <span className="text-slate-900 font-bold">3.04 / 4.00</span>
          </div>
        </div>

        <SkillBadge 
          icon="🧠" 
          title={lang === 'TR' ? "Yapay Zeka & Veri Bilimi" : "AI & Data Science"} 
          desc={lang === 'TR' ? "Python, ML/DL, NLP, LLM API & Fine-Tuning, PySpark, Veri Analizi" : "Python, ML/DL, NLP, LLM API & Fine-Tuning, PySpark, Data Analysis"} 
        />
        <SkillBadge 
          icon="⚙️" 
          title={lang === 'TR' ? "Backend & Veritabanı" : "Backend & Database"} 
          desc={lang === 'TR' ? "Node.js, Express.js, TypeScript, REST API, Prisma ORM, SQL/NoSQL" : "Node.js, Express, TypeScript, REST API, Prisma ORM, SQL/NoSQL"} 
        />
        <SkillBadge 
          icon="🚀" 
          title={lang === 'TR' ? "DevOps" : "DevOps"} 
          desc="Docker, Kubernetes, Git/GitHub, Test." 
        />
        <SkillBadge 
          icon="🌍" 
          title={lang === 'TR' ? "Diller" : "Languages"} 
          desc={lang === 'TR' ? "Python, JavaScript, SQL | İngilizce: B1" : "Python, JavaScript, SQL | English: B1"} 
        />
      </motion.div>

    </section>
  );
};