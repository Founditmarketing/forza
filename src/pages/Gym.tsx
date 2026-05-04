import { motion } from 'motion/react';
import PageWrapper from '../components/PageWrapper';
import { Activity, Zap, TrendingUp, RefreshCw } from 'lucide-react';

export default function Gym() {
  const products = [
    {
      name: "Uforza Pre-Arena",
      category: "Explosive Power",
      description: "Advanced neurological activation and vasodilation for unmatched intensity.",
      stats: ["400mg Caffeine Alpha", "8g Citrulline Malate", "3.2g Beta-Alanine"]
    },
    {
      name: "Uforza Anabolic Recovery",
      category: "Cellular Repair",
      description: "Strategic protein synthesis optimization for the elite recovery phase.",
      stats: ["5g Creatine Monohydrate", "10g EAA Complex", "L-Glutamine Infusion"]
    }
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2069" 
            alt="Gym Intensity" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold tracking-[0.5em] uppercase text-xs mb-4">Arena I: The Forge</h4>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase mb-8">
              Raw <span className="gold-text-gradient">Power.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed tracking-wide">
              Biological, scientific, and relentless. We optimize your physical form through verified research and uncompromising ingredient integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Activity, title: "Biological Precision", text: "Every gram is calculated for peak human response." },
            { icon: Zap, title: "Neural Activation", text: "Sharpen focus and connection for the heaviest loads." },
            { icon: RefreshCw, title: "Rapid Recovery", text: "Shorten the window between absolute fatigue and total readiness." },
            { icon: TrendingUp, title: "Sustained Output", text: "Maintain intensity deep into the final set." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-white/2 hover:border-gold/30 transition-all group"
            >
              <item.icon className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">The Armory</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold uppercase">Performance Tools.</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="obsidian-card p-12 group hover:border-gold/40 transition-colors"
              >
                <div className="aspect-square bg-black mb-12 flex items-center justify-center p-8 border border-white/5 overflow-hidden">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1593095183411-290f332ff520?auto=format&fit=crop&q=80&w=870" : "https://images.unsplash.com/photo-1579722820308-d74e57198cfa?auto=format&fit=crop&q=80&w=870"} 
                    alt={product.name} 
                    className="w-full h-full object-contain brightness-90 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-gold tracking-widest uppercase text-[10px] mb-2">{product.category}</h4>
                <h3 className="text-3xl font-display font-bold uppercase mb-6 tracking-tight">{product.name}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed italic">{product.description}</p>
                <div className="space-y-3 mb-10 pt-6 border-t border-white/5">
                  {product.stats.map((stat, si) => (
                    <div key={si} className="flex justify-between text-[11px] tracking-widest text-gray-500 uppercase">
                      <span>{stat.split(' ')[1]}</span>
                      <span className="text-white font-bold">{stat.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-gold w-full">Upgrade Performance</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large visual */}
      <section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Iron Focus" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tighter italic">
            "Fear no weight. <br /> Master your biomechanics."
          </h2>
        </div>
      </section>
    </PageWrapper>
  );
}
