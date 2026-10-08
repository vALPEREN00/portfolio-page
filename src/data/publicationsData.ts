export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  publisher: string;
  status: {
    TR: string;
    EN: string;
  };
  abstract: {
    TR: string;
    EN: string;
  };
  tags: string[];
  link?: string;
  doi?: string;
}

export const publicationsData: PublicationItem[] = [
  {
    id: 'springer-stock-prediction-2026',
    title: 'A Hybrid Deep Learning Framework for Stock Movement Prediction: Evidence from Borsa Istanbul',
    authors: ['Alperen Ünaldı', 'Somaiyeh Dehghan'],
    venue: 'ICACISM 2026 (International Conference on Advanced Computing, IoT and Secure Mining)',
    publisher: 'Springer - Lecture Notes in Networks and Systems (LNNS)',
    status: {
      TR: 'Kabul Edildi / Basım Aşamasında',
      EN: 'Accepted / In Press'
    },
    abstract: {
      TR: 'Hisse senedi fiyat tahmininde haber metinleri ve teknik indikatörlerin birlikte kullanımının tahmin başarısını artırdığını ortaya koyan akademik çalışma.',
      EN: 'An academic study demonstrating that the integration of financial news texts and technical indicators enhances stock price prediction accuracy.'
    },
    tags: ['Deep Learning', 'LSTM', 'BERT', 'Financial NLP', 'Quantitative Finance'],
    link: 'https://link.springer.com'
  }
];