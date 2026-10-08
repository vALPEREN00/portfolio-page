
export interface EventItem {
  id: string;
  title: {
    TR: string;
    EN: string;
  };
  image: string; 
  date?: string;
  location?: string;
}

export const eventsData: EventItem[] = [
  {
    id: 'bilmok',
    title: {
      TR: 'BİLMÖK - Bilgisayar Mühendisliği Öğrencileri Kongresi',
      EN: 'BILMOK - Computer Engineering Students Congress'
    },
    image: '/events/bilmok.jpg',
    date: '2025',
    location: 'Türkiye'
  },
  {
    id: 'take-off',
    title: {
      TR: 'Take Off İstanbul Girişim Zirvesi',
      EN: 'Take Off Istanbul Entrepreneurship Summit'
    },
    image: '/events/takeoff.jpg',
    date: '2025',
    location: 'İstanbul'
  }
];