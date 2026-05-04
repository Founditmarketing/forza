import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { ArrowRight, ShieldCheck, Zap, Heart } from 'lucide-react';

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2070" 
            alt="Uforza Elite Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter leading-none mb-6">
              Unleash Your <br />
              <span className="gold-text-gradient italic">Absolute Peak.</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-300 font-light tracking-[0.2em] uppercase mb-12 max-w-3xl mx-auto leading-relaxed">
              Elite performance for the two arenas that define a man: <br className="hidden md:block" />
              The Gym and The Home.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/gym" className="btn-gold group flex items-center">
                Enter The Arena <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link to="/vitality" className="btn-outline-gold">
                Master Vitality
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase mb-4">Experience Mastery</span>
          <div className="w-[1px] h-20 bg-linear-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* The Philosophy */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[12px] font-bold tracking-[0.4em] text-gold uppercase mb-6">Mastery & Duty</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-10 leading-tight">
                The Uforza <br /> Standard.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Confidence is not a trait; it is a result. It is the byproduct of physical dominance and relational mastery. At Uforza, we believe a man's greatest responsibility is to provide, protect, and perform—both for himself and for the partner who deserves his absolute best.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                We don't sell supplements. We provide the biological leverage required to sustain peak intensity in every theatre of life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-sm border border-gold/20">
                    <ShieldCheck className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Uncompromising Quality</h4>
                    <p className="text-gray-500 text-xs tracking-wider">Clinical dosages. Zero fillers. Pure performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-sm border border-gold/20">
                    <Zap className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Biological Edge</h4>
                    <p className="text-gray-500 text-xs tracking-wider">Optimized for power, endurance, and rapid recovery.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border border-gold/30 translate-x-6 translate-y-6 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=2069" 
                alt="Elite Form" 
                className="relative z-10 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Path Navigation */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Path: Gym */}
          <Link to="/gym" className="group relative h-[80vh] overflow-hidden flex flex-col items-center justify-center p-12 text-center">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=2070" 
                alt="Gym Performance" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-gold/10 transition-colors duration-500" />
            </div>
            <motion.div className="relative z-10">
              <h4 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Arena I</h4>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-8">Performance: <span className="block">Gym</span></h2>
              <div className="inline-flex items-center text-white border-b border-white pb-2 group-hover:border-gold group-hover:text-gold transition-all">
                EXPLORE POWER <ArrowRight className="ml-2" size={20} />
              </div>
            </motion.div>
          </Link>

          {/* Path: Bedroom */}
          <Link to="/vitality" className="group relative h-[80vh] overflow-hidden flex flex-col items-center justify-center p-12 text-center border-l border-white/5">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1616594831848-ad15383f0868?auto=format&fit=crop&q=80&w=2070" 
                alt="Bedroom Vitality" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-gold/10 transition-colors duration-500" />
            </div>
            <motion.div className="relative z-10">
              <h4 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Arena II</h4>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-8">Performance: <span className="block">Bedroom</span></h2>
              <div className="inline-flex items-center text-white border-b border-white pb-2 group-hover:border-gold group-hover:text-gold transition-all">
                EXPLORE VITALITY <ArrowRight className="ml-2" size={20} />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 text-center bg-[#050505] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <Heart className="text-gold/30 mx-auto mb-12" size={40} />
          <h2 className="text-3xl md:text-5xl font-display font-light italic leading-relaxed text-gray-200">
            "For the woman who deserves your best, and the man you were born to become. Strengthening the bond of the modern couple through peak vitality."
          </h2>
          <div className="mt-12 text-[10px] tracking-[0.8em] font-bold text-gold uppercase underline decoration-gold underline-offset-8">
            The Uforza Vow
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
