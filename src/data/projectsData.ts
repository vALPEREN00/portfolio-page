export interface ProjectItem {
  id: string;
  title: string;
  description: {
    TR: string;
    EN: string;
  };
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // İsteğe bağlı canlı demo linki
}

export const projectsData: ProjectItem[] = [
  {
    id: 'finsight-ai',
    title: 'FinSightAI',
    description: {
      TR: 'Hibrit Yapay Zeka Destekli(LSTM & NLP) Hisse Senedi Tahmin ve Analiz Platformu',
      EN: 'Hybrid AI-Powered (LSTM & NLP) Stock Prediction and Analysis Platform.'
    },
    tags: ['Python','Deep Learning','NLP','BERT','Node.js','PostgreSQL','React','React-Native','PrismaORM','Docker',],
    githubUrl: 'https://github.com/vALPEREN00/FinSightAI',
  },
  {
    id: 'java-film-data-app',
    title: 'Movie Data Web API & Management',
    description: {
      TR: 'OMDb API entegrasyonu ile film verilerini toplayan, Spring Security ile rol tabanlı yetkilendirme sağlayan ve Apache POI ile dinamik raporlama sunan Java web uygulaması.',
      EN: 'Enterprise Java web application fetching film data via OMDb API, featuring role-based authentication with Spring Security and dynamic reporting via Apache POI.'
    },
    tags: ['Java', 'Spring MVC', 'Spring Security', 'PostgreSQL', 'Apache POI', 'REST API'],
    githubUrl: 'https://github.com/vALPEREN00/Java-Web-API-Film-Data-Application',
  },
  {
    id: 'twitter-sentiment-analysis',
    title: 'Twitter Sentiment Analysis (NLP)',
    description: {
      TR: '1.6 milyonluk Sentiment140 veri kümesi üzerinde NLTK metin ön işleme, TF-IDF vektörleştirme ve makine öğrenmesi sınıflandırıcılarıyla geliştirilen duygu analiz modeli.',
      EN: 'Natural language processing model trained on 1.6M tweets from Sentiment140 utilizing NLTK preprocessing, TF-IDF feature extraction, and ML classification.'
    },
    tags: ['Python', 'NLP', 'NLTK', 'TF-IDF', 'Scikit-learn', 'Machine Learning'],
    githubUrl: 'https://github.com/vALPEREN00/Twitter-Sentimental-Analys',
  },
  {
    id: 'twitter-pipeline-project',
    title: 'Twitter End-to-End Data Pipeline',
    description: {
      TR: 'Sosyal medya metin verilerini toplayıp temizleyen, öznitelik çıkarımı ve modelleme aşamalarını uçtan uca otomatikleştiren modüler NLP veri işleme hattı.',
      EN: 'End-to-end modular NLP pipeline automating text collection, data cleaning, feature engineering, and preparation stages for analytical modeling workflows.'
    },
    tags: ['Python', 'Data Engineering', 'ETL Pipeline', 'Text Mining', 'NLP'],
    githubUrl: 'https://github.com/vALPEREN00/Twitter-Pipeline-Project',
  },
  {
  id: 'msa-dp-project',
  title: 'Multiple Sequence Alignment (MSA) with Dynamic Programming',
  description: {
    TR: 'Biyoinformatik alanında DNA ve protein dizilimlerinin benzerlik analizini dinamik programlama algoritmaları kullanarak optimize eden Python tabanlı çoklu dizi hizalama çözümü.',
    EN: 'Computational biology project implementing Multiple Sequence Alignment (MSA) for DNA and protein sequences using dynamic programming optimization algorithms in Python.'
  },
  tags: ['Python', 'Dynamic Programming', 'Bioinformatics', 'Algorithms', 'Optimization'],
  githubUrl: 'https://github.com/vALPEREN00/msa-dp-project',
  },
  {
    id: 'ecommerce-sql-project',
    title: 'E-Commerce Relational Database System',
    description: {
      TR: 'Azure sanal sunucusu üzerinde Linux ortamında kurgulanan; ilişkisel veri modelleme, normalizasyon, stored procedure, view ve trigger yapıları içeren kapsamlı e-ticaret veritabanı mimarisi.',
      EN: 'Relational e-commerce database architecture hosted on Azure Linux VMs, designed with normalization, stored procedures, views, and automated triggers.'
    },
    tags: ['MySQL', 'Azure VM', 'Database Design', 'Stored Procedures', 'Triggers', 'phpMyAdmin'],
    githubUrl: 'https://github.com/vALPEREN00/E-commerce-SQL-Project',
  },
  {
  id: 'mylibrary-android',
  title: 'MyLibrary - Android Personal Library & Book Discovery',
  description: {
    TR: 'Google Books API ve Room veritabanı entegrasyonuyla geliştirilen; MVVM mimarisi, Retrofit, LiveData ve Glide kullanan yerel Android kitap keşif ve kişisel kütüphane yönetim uygulaması.',
    EN: 'Native Android book discovery and personal library management app built with MVVM architecture, integrating Google Books API via Retrofit and local persistence with Room Database.'
  },
  tags: ['Java', 'Android SDK', 'MVVM', 'Room DB', 'Retrofit', 'LiveData', 'Glide', 'REST API'],
  githubUrl: 'https://github.com/vALPEREN00/MyLibrary',
  }
];