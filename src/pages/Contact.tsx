import { useState } from 'react';
import { motion } from 'motion/react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Shield, User, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  return (
    <PageWrapper>
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/2 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold tracking-[0.6em] uppercase text-xs mb-6">Mastery Inclusion</h4>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-10 leading-tight">
              Join the <br /> <span className="gold-text-gradient italic">Elite Circle.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
              The Uforza Standard is not for everyone. It is for the man who demands absolute peak performance in every facet of his life. Connect with our advisors or join our Inner Circle for exclusive access.
            </p>

            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 border border-gold/30 rounded-sm flex items-center justify-center text-gold bg-gold/5 italic font-display text-xl">
                  U
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-1">Elite Support</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">concierge@uforza-perf.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 border border-gold/30 rounded-sm flex items-center justify-center text-gold bg-gold/5 italic font-display text-xl">
                  S
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-1">Global Standard</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Geneva | New York | Seoul</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="obsidian-card p-10 md:p-16 border-gold/20"
          >
            <h3 className="text-2xl font-display font-bold uppercase mb-10 tracking-widest border-b border-white/5 pb-6 text-center">
              Initialization Request
            </h3>

            {/* Success State */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 space-y-6"
              >
                <CheckCircle className="text-gold" size={56} />
                <h4 className="text-2xl font-display font-bold uppercase tracking-widest">Request Received</h4>
                <p className="text-gray-400 text-sm tracking-widest leading-relaxed max-w-xs">
                  Your inquiry has been transmitted to the Elite Circle. We will respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline-gold mt-4"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="FULL NAME"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-10 text-white font-bold tracking-widest text-xs focus:border-gold outline-none transition-colors uppercase placeholder:text-gray-600"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-10 text-white font-bold tracking-widest text-xs focus:border-gold outline-none transition-colors uppercase placeholder:text-gray-600"
                  />
                </div>

                <div className="relative">
                  <Shield className="absolute left-0 top-4 text-gold/50" size={18} />
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="PURPOSE OF INQUIRY"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-10 text-white font-bold tracking-widest text-xs focus:border-gold outline-none transition-colors uppercase placeholder:text-gray-600 resize-none"
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 text-red-400 bg-red-400/5 border border-red-400/20 px-4 py-3"
                  >
                    <AlertCircle size={16} />
                    <p className="text-xs tracking-widest uppercase">{errorMsg}</p>
                  </motion.div>
                )}

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold w-full py-5 text-base flex items-center justify-center group overflow-hidden relative disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader className="animate-spin mr-2" size={18} />
                        <span className="relative z-10 tracking-widest">TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">ENTER THE INNER CIRCLE</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[9px] text-center text-gray-600 tracking-[0.2em] leading-relaxed">
                  BY SUBMITTING, YOU ACKNOWLEDGE THE UFORZA PRIVACY STANDARDS. YOUR DATA REMAINS ANONYMOUS AND SECURE WITHIN OUR ENCRYPTED NETWORK.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-6 bg-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-obsidian font-display font-extrabold text-4xl md:text-6xl uppercase mb-8">
            The Ritual <br /> Weekly.
          </h2>
          <p className="text-obsidian font-bold tracking-widest uppercase text-sm mb-12">
            Biological insights for the elite few.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="ENTER SECURE EMAIL"
              className="flex-1 bg-obsidian text-white px-8 py-5 font-bold tracking-widest text-xs outline-none focus:ring-2 ring-white/20"
            />
            <button className="bg-obsidian text-gold px-12 py-5 font-bold tracking-widest text-xs hover:bg-black transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
