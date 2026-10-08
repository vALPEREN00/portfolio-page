
import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpjpezj';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 container mx-auto px-6 md:px-12 relative z-40">
      
      {/* Başlık Alanı */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2"
        >
          {lang === 'TR' ? 'Bağlantı' : 'Get in Touch'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          {lang === 'TR' ? 'İletişime Geçin' : 'Contact Me'}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm md:text-base mt-3"
        >
          {lang === 'TR' 
            ? 'Aşağıdaki formu kullanarak bana doğrudan mesaj bırakabilir ya da e-posta yoluyla iletişime geçebilirsiniz.' 
            : 'Feel free to leave a message using the form below or reach out directly via email.'}
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* Sol Sütun: Hızlı Bilgiler */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-5">
            <h3 className="font-bold text-slate-900 text-lg">
              {lang === 'TR' ? 'İletişim Kanalları' : 'Channels'}
            </h3>

            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Mail size={18} />
              </div>
              <span className="break-all font-medium">alprnunld@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <MapPin size={18} />
              </div>
              <span className="font-medium">Ankara / Türkiye</span>
            </div>
          </div>
        </div>

        {/* Sağ Sütun: Form Alanı */}
        <div className="md:col-span-3 bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-200/70 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* İsim Alanı */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                {lang === 'TR' ? 'Ad Soyad' : 'Full Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={lang === 'TR' ? 'Adınız ve soyadınız' : 'Your name'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
              />
            </div>

            {/* E-posta Alanı */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                {lang === 'TR' ? 'E-posta Adresi' : 'Email Address'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={lang === 'TR' ? 'ornek@domain.com' : 'you@example.com'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
              />
            </div>

            {/* Konu Alanı */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                {lang === 'TR' ? 'Konu' : 'Subject'}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder={lang === 'TR' ? 'Mesajınızın konusu' : 'Brief subject'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
              />
            </div>

            {/* Mesaj Alanı */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                {lang === 'TR' ? 'Mesajınız' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={lang === 'TR' ? 'Mesajınızı buraya yazabilirsiniz...' : 'Write your message here...'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all resize-none"
              />
            </div>

            {/* Gönder Butonu */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {status === 'submitting' ? (
                <span>{lang === 'TR' ? 'Gönderiliyor...' : 'Sending...'}</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>{lang === 'TR' ? 'Mesajı Gönder' : 'Send Message'}</span>
                </>
              )}
            </button>

            {/* Başarı Bildirimi */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200"
              >
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>
                  {lang === 'TR' 
                    ? 'Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağım.' 
                    : 'Your message has been sent successfully. I will get back to you soon.'}
                </span>
              </motion.div>
            )}

            {/* Hata Bildirimi */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold border border-rose-200"
              >
                <AlertCircle size={16} className="text-rose-600 shrink-0" />
                <span>
                  {lang === 'TR' 
                    ? 'Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan e-posta adresimi kullanın.' 
                    : 'An error occurred while sending the message. Please reach out directly via email.'}
                </span>
              </motion.div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};