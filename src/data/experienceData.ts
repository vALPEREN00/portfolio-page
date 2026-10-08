// src/data/experienceData.ts

export interface ExperienceItem {
  id: string;
  company: string;
  role: {
    TR: string;
    EN: string;
  };
  period: {
    TR: string;
    EN: string;
  };
  location: {
    TR: string;
    EN: string;
  };
  type: {
    TR: string;
    EN: string;
  };
  bullets: {
    TR: string[];
    EN: string[];
  };
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'sebit-internship',
    company: 'Sebit Eğitim ve Bilgi Teknolojileri',
    role: {
      TR: 'Yazılım Geliştirme Stajyeri', //
      EN: 'Software Development Intern' //[cite: 8]
    },
    period: {
      TR: 'Temmuz 2025 - Ağustos 2025', //[cite: 8]
      EN: 'July 2025 - August 2025' //[cite: 8]
    },
    location: {
      TR: 'Ankara, Türkiye',
      EN: 'Ankara, Turkey'
    },
    type: {
      TR: 'Staj',
      EN: 'Internship'
    },
    bullets: {
      TR: [
        'Java Web API mimarisi ile backend servislerinin geliştirilmesi ve kullanıcı arayüzü (frontend) bileşenleri ile uçtan uca entegrasyonu sağlandı.', //[cite: 8]
        'IMDb / OMDb API entegrasyonu gerçekleştirilerek dinamik film verilerini işleyen kolektif ve modüler bir web uygulaması geliştirildi.', //[cite: 8]
        'İlişkisel veritabanı sorguları ve veri katmanı akışları optimize edilerek uygulama yanıt süreleri ve veri bütünlüğü güvenceye alındı.'
      ],
      EN: [
        'Developed enterprise backend services leveraging Java Web API architecture, integrating seamlessly with frontend application interfaces.', //[cite: 8]
        'Engineered a collaborative web platform consuming film datasets via IMDb / OMDb API integrations.', //[cite: 8]
        'Optimized relational database queries and data layer workflows to maintain high responsiveness and data integrity.'
      ]
    }
  },
  {
    id: '4s-internship',
    company: '4S Bilişim Teknolojileri', //[cite: 8]
    role: {
      TR: 'BT Sistem Uzmanı Stajyeri', //[cite: 8]
      EN: 'IT Systems Specialist Intern' //[cite: 8]
    },
    period: {
      TR: 'Ağustos 2024 - Eylül 2024', //[cite: 8]
      EN: 'August 2024 - September 2024' //[cite: 8]
    },
    location: {
      TR: 'Ankara, Türkiye',
      EN: 'Ankara, Turkey'
    },
    type: {
      TR: 'Staj',
      EN: 'Internship'
    },
    bullets: {
      TR: [
        'Kurumsal sunucu altyapıları, donanım kaynakları ve sanallaştırma teknolojilerinin kurulum ve bakım süreçlerinde görev alındı.', //[cite: 8]
        'Uygulama yaşam döngüsü yönetimi (ALM) süreçleri takip edilerek sistemlerin kararlılığı ve operasyonel sürekliliği desteklendi.', //[cite: 8]
        'Sunucu izleme, sistem performansı optimizasyonu ve ağ servisleri konfigürasyonlarında teknik operasyonlar yürütüldü.' //[cite: 8]
      ],
      EN: [
        'Participated in configuration, deployment, and maintenance of virtualization platforms and enterprise server infrastructure.', //[cite: 8]
        'Supported application lifecycle management (ALM) workflows ensuring operational stability and deployment integrity.', //[cite: 8]
        'Assisted in infrastructure performance monitoring, network diagnostics, and systems maintenance operations.' //[cite: 8]
      ]
    }
  }
];