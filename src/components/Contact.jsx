import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

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
      console.error('Telegram credentials not found.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Text Side */}
          <div className="space-y-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
              >
                Contact
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-bold tracking-tighter"
              >
                Let's make it<br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">happen.</span>
              </motion.h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all duration-500">
                  <Mail className="text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Email Me</p>
                  <p className="text-xl font-medium tracking-tight">abibinuofficial@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all duration-500">
                  <MapPin className="text-purple-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-xl font-medium tracking-tight">Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/abibinu" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/abi-binu-821560340/" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 placeholder:text-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-6 bg-white text-black rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : status === 'success' ? 'Sent Successfully' : status === 'error' ? 'Error Sending' : 'Send Message'}
                {status === 'idle' && <Send size={16} />}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-40 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Abi Binu. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="https://github.com/abibinu" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
