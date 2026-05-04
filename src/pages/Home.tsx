import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { ArrowRight, ShieldCheck, Zap, Heart, Play } from 'lucide-react';
import { useState, useRef } from 'react';

const heroVideos = [
  'AQMEJaVdZwEaUkjWH2s2S0YSoVOQ2iz1QUvjrMEwqZg8cvEern_sdB9Am4wT3T41cGLls_J9pyHV4fHeq-QrBG5x4fKPqT4cIk1BPxF15j7b4A.mp4',
  'AQMzH_hhCvcq-B4WaQxjkbAEjORUishkbDQnF7d8fnVHmEcDQ0A9AaD7jlsxLu0zrDcv_x2zDPxaOW0IXztyxL1cQAaVFGkQp0cqnmER5oVLZg.mp4',
  'AQNHM-ZdJ8lJipCduyMYImF0_M1tbIra4FS83Y8mCOlYqqaIJvuQSFUYl67dtOHUnMyk0y9jJwP9JyWIATSvhKZFBNQ35lQjwgrLr2sE7w.mp4',
];

const galleryVideos = [
  'AQNtzMl_qbnQDiA2dpOoKnt0R-c7Kpz77uzAeJ5l5GTHjIMGSpfGlWMH1O6k30gocqr3-UuDXqCIoHF5HG3pgLBjkM5Zn1e1pAlcCxbEJpMg-w.mp4',
  'AQO3RZXPOY3adL-XQdynB-l3wTVV4aSSzDsgakrwGVlWrEO1mfzzk0DFtVyEY5knAJp17wluTngFtbx0rb9qZG1Ox_GIL3huvtwKy_iKZA.mp4',
  'AQOElnLJZOsQWw-HdomM-3psVeOHnXgtgdvIV3HG7PdyyXeWQwjVtzqJpm-R_Rv9fjEkLjYOUZoZwEbxQp4_OQGkO7VHAOe-dR8VEQp_yzmqXA.mp4',
  'AQOLZBgSOFbBsDKKeP8VFOH1IcU-XML07uOD7PA3sVUr3392labxkv8H0iEWX0yvetaDtTzCzaEI5WM-dSdVa0nM_WUhCSLEUoB9i6KRT5rp-w.mp4',
  'AQOTRV5Vukmz5GmKn83_6uQ0OXOSVB0s4XFwywWSTtwVN-m0d0xfLjoFFyzUZUV8k3-zWDaayNqdseb49nmXA4m-Aeg0S5mbsOt3AcXhHJFdAA.mp4',
  'AQOTlgdzLdlLsf7D_M8I22fg9aczgIPKTC-bTn03Q36RRNen8_ropkD8ZqgpYioKCblltLGHKuE4pClABNYAD6A8a_gTHduN5pVhtbOLbmdUhw.mp4',
  'AQOW92XKk5JMVAdPVKPKM1k1czP2lEh-wLL6tWzNUoAKfBBgcUwS9WjzJh1VV2cmqM0lj_YSSgegmIx-JDG6Ct2JmmLGn6aGF2K0xm50SA.mp4',
  'AQOZctay-EOv_WlVyQ_RSEX6lLDGWGif012rmbOapnP9w_UnLA91_oPWYGma8vsb-jXx-Fo-1TdTBRO6C35lDgUAeTsdW_s9d9EtvXWyZA66Pw.mp4',
  'AQOl8AAxfvKNKdltldCjbA05ZOe9OXvFg-ZqpnEMZ1pqT_REvNVJY1KIC2OOELA_1P1s-G13CZmwx7wnwHwt-sXI6z0YBB4Lk7hPqqV6EWJdhw.mp4',
  'AQOmGU3aFcgv0lJVDJrUYPSoNY_Qww9l1HzTheSUA6vpqfL7qfKM5I0x33Owb-HWp-UUe_J838eFIUTDEKCaVeTAbALIMRnZ2ME6g6XkYTyAzA.mp4',
  'AQOyTzgox5Dzt--hBMl17UGyyN2hFGWWcwH2FER5bem3nsqRhLDt1Rip7GdK2S9uMzAXuzMAMoM4SbRv9BMzXyjeAp6z9fTRFzIiOrefus9VrQ.mp4',
  'AQP3rFjuA93lqFefJtLf-S1RFfw-3e7W_kwy9EZS4BDAPKjoV5maog4hqA6JiY4G1Jm3OrQnzZInZrN0u2m2vWYS6bF4_0xjHOktqTpzreHK4Q.mp4',
  'AQP7MKuFcN_CFE-kG9LTA4EiXN2_nArxfLwnvlcPegz6Is_kVR15qLFRTt5ND7IxeDZFPsZ7jcHbPdK5Yy7nVL3_uk1Px3TjJZ5QCCLHyId5vw.mp4',
  'AQPCak-LY2ki4c5gI2FDluLgZTbhatGT-hJwVBcwGWWxouMAZY7OlQNRe0vBdIJhpQIFEl5rb9uX5YK7su6HznjtzGpc0dIN6fhkkHq1oA.mp4',
  'AQPNVFCBV1_3vf-pwo-lJ1fIrxnKHFuz3W-4KsoxJgeDLnO3WKnOcX4WWhs8ZYzW312eePBXEPB3mCMWt6zJzaVD5U59fuRow4puTRXRuMDTOQ.mp4',
  'AQPWGiXd0c1RFKGLC6DoDbnX0b7IpFxWZToymKl_2X0oSMj3O6KCcA96lhBicDgn_NsW4hXRtiPwrHgwN1GH8Oxtd7M2hmxt3RIY9M6NT5KqQw.mp4',
  'AQPrMXCnp9IQpK0gBwYKvXRuMo2ywHU27SD7q9vgX0HlCeg3gHfuCTwAeZqefWab-q3d7T875AB6K0fTQEwqkyem-FxD3S3bZLfoC21VmrxrRw.mp4',
  'AQPwnffGz_FaNyhFKn9YgS8MqOu0n3RdTeDhCQss7-00pf-CyuR9RDqqANr3ytv281iNfpBFeAVwde4PjeNEVMHHDbmxJYDwRENYL_H8hGdcwQ.mp4',
];

function VideoThumbnail({ src, index }: { src: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.08 }}
      className="relative aspect-[9/16] bg-black overflow-hidden group cursor-pointer border border-white/5 hover:border-gold/40 transition-colors"
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src={`/${src}`}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        loop
        muted
        playsInline
        preload="metadata"
        onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
        onMouseLeave={e => {
          const v = e.currentTarget as HTMLVideoElement;
          v.pause();
          v.currentTime = 0;
        }}
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-black/60 border border-gold/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="text-gold ml-1" size={20} />
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
    </motion.div>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/663965151_26422139604138847_1385681584204281991_n.jpg"
            alt="Uforza Elite Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black" />
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
                src="/664862598_26408827625470045_6535233733846746554_n.jpeg"
                alt="Uforza Performance"
                className="relative z-10 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
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
                src="/667716833_26464427233243417_4903268438230472384_n.jpg"
                alt="Gym Performance"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
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
                src="/667444925_26423588580660616_5037744757644109875_n.jpg"
                alt="Bedroom Vitality"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
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
