// src/App.tsx
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './features/About/Hero';
import { Projects } from './features/Projects/Projects';
import { Experience } from './features/Experience/Experience';
import { Publications } from './features/Publications/Publications';
import { Events } from './features/Events/Events';
import { Contact } from './features/Contact/Contact';

const App = () => {
  return (
    <LanguageProvider>
      <MainLayout>
        {/* Hakkımda */}
        <Hero />
        
        {/* Projeler */}
        <Projects />

        {/* Deneyim */}
        <Experience />

        {/* Akademik Çalışmalar */}
        <Publications />

        {/* Etkinlikler */}
        <Events />

        {/* İletişim */}
        <Contact />
      </MainLayout>
    </LanguageProvider>
  );
};

export default App;