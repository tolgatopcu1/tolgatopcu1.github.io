import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import FooterSection from './FooterSection';

export default function ContactSection({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 3)
      newErrors.name = language === 'tr' ? 'En az 3 karakter gerekli' : 'Minimum 3 characters required';
    if (formData.email.trim().length < 3)
      newErrors.email = language === 'tr' ? 'En az 3 karakter gerekli' : 'Minimum 3 characters required';
    else if (!emailRegex.test(formData.email))
      newErrors.email = language === 'tr' ? 'Geçerli bir e-posta girin' : 'Enter a valid email';
    if (formData.message.trim().length < 3)
      newErrors.message = language === 'tr' ? 'En az 3 karakter gerekli' : 'Minimum 3 characters required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await emailjs.send(
        'my_portfolio_service',
        'template_39ryrjl',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'kQnByGl1wgxD9LzxE'
      );

      console.log('SUCCESS!', result.status, result.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('FAILED...', error);
      alert(language === 'tr' ? 'Mesaj gönderilemedi.' : 'Message failed to send.');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#3a3a3a] text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {language === 'tr' ? 'Bana Ulaşın' : 'Contact Me'}
        </motion.h2>

        <motion.p
          className="text-center text-sm text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {language === 'tr'
            ? 'Soru, öneri ve proje fikirleriniz için bana ulaşabilirsiniz.'
            : 'Feel free to reach out for any questions, suggestions, or project ideas.'}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#444] p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder={language === 'tr' ? 'Adınızı girin' : 'Enter your name'}
              value={formData.name}
              onChange={handleInputChange}
              className="p-3 bg-transparent border-2 border-purpleAccent rounded-lg text-white"
            />
            {errors.name && <span className="text-red-400 text-sm">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder={language === 'tr' ? 'E-posta adresinizi girin' : 'Enter your email'}
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 bg-transparent border-2 border-purpleAccent rounded-lg text-white"
            />
            {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}

            <textarea
              name="message"
              placeholder={language === 'tr' ? 'Mesajınızı yazın' : 'Enter your message'}
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              className="p-3 bg-transparent border-2 border-purpleAccent rounded-lg text-white"
            />
            {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}

            <button
              type="submit"
              className="bg-purpleAccent text-white py-3 px-6 rounded-lg mt-4 hover:bg-purple-700 transition-colors"
            >
              {language === 'tr' ? 'Gönder' : 'Send'}
            </button>

            {isSubmitted && (
              <div className="mt-4 text-center text-green-400">
                {language === 'tr'
                  ? 'Mesajınız başarıyla gönderildi!'
                  : 'Your message has been sent successfully!'}
              </div>
            )}
          </div>
        </motion.form>

        {/* Footer alanı */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FooterSection language={language} />
        </motion.div>
      </div>
    </section>
  );
}
