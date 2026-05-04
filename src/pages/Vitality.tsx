import { motion } from 'motion/react';
import PageWrapper from '../components/PageWrapper';
import { Heart, Sparkles, Shield, Clock } from 'lucide-react';

export default function Vitality() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-0 w-full h-[70vh] z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=2069" 
            alt="Intimate Luxury" 
            className="w-full h-full object-cover opacity-30 brightness-[0.7] contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/20 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Arena II: The Sanctuary</h4>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase mb-8">
              Peak <span className="gold-text-gradient italic">Vitality.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed tracking-wide italic">
              "For the woman who deserves your absolute best." Uforza Vitality is designed for the modern couple, prioritizing the strength and longevity of your most intimate bond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <Heart className="w-full h-full text-gold" strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-[12px] font-bold tracking-[0.4em] text-gold uppercase mb-6">Sophisticated Intimacy</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase mb-10 leading-tight">
              Honoring the <br /> Committed Bond.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 italic font-light">
              True strength isn't just displayed in a gym—it's felt in the home. Uforza Vitality solutions are meticulously crafted to support healthy circulation, hormonal balance, and the sustained energy required for the deep, intimate connection that anchors a devoted partnership.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Our approach is based on biological optimization, ensuring you arrive in your sanctuary with the same focus and power you bring to your professional life.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Clock, title: "Endurance & Presence", text: "Maintain optimal physical and mental presence." },
                { icon: Sparkles, title: "Biological Vitality", text: "Support systemic circulation and vascular health." },
                { icon: Shield, title: "Natural Balance", text: "Sustain health through research-backed nutritional support." }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/20 rounded-full text-gold">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-[11px]">{item.title}</h4>
                    <p className="text-gray-500 text-xs tracking-wider mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="order-1 md:order-2 relative"
          >
            <div className="absolute inset-0 bg-gold/5 z-0 rounded-sm -rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aa9fb3d0521e?auto=format&fit=crop&q=80&w=2070" 
              alt="Luxury Connection" 
              className="relative z-10 w-full aspect-[4/5] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 rounded-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-40 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-gold tracking-[0.5em] uppercase text-xs mb-8">The Anchor</h2>
          <h3 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-16">Uforza <br /> V-Essence.</h3>
          
          <div className="relative group max-w-2xl mx-auto mb-20">
            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <img 
              src="https://images.unsplash.com/photo-1593485054173-614210ec997b?auto=format&fit=crop&q=80&w=2070" 
              alt="Uforza Bottle" 
              className="relative z-10 w-full h-[500px] object-contain mx-auto filter drop-shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:drop-shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-shadow duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-gray-400 text-xl italic font-light max-w-3xl mx-auto mb-12">
            "Designed for her benefit, powered by your performance."
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="btn-gold px-12">Claim Your Edge</button>
            <button className="btn-outline-gold px-12">View Rituals</button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
