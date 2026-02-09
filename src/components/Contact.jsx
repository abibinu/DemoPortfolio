import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const telegramMessage = `
📨 New Contact Form Message
---------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📑 Subject: ${formData.subject}
💬 Message: ${formData.message}
    `.trim();

    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('Telegram credentials not found. Please set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in your .env file.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email</h4>
                <p className="text-gray-400">abibinuofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Location</h4>
                <p className="text-gray-400">Pathanamthitta, Kerala, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all ${
                    status === 'success' ? 'bg-green-500 text-white' :
                    status === 'error' ? 'bg-red-500 text-white' : 'bg-primary text-white hover:bg-secondary'
                  }`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" />
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : status === 'error' ? (
                    'Failed to Send'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
